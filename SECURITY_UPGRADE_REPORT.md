# Segurança — Relatório da migração Expo SDK 53 → 57

Resumo
- Branch: `chore/security-dependencies` (local)
- Objetivo: migrar Expo 53 → 54 → 55 → 56 → 57, atualizar dependências e mitigar vulnerabilidades.
- Ações realizadas: atualização incremental, instalação limpa, `npm dedupe`, `npm audit fix` (sem `--force`), validações (`expo-doctor`, `tsc --noEmit`, `expo export`).

Estado atual (resumo)
- `npm audit`: 22 vulnerabilidades (15 high, 7 moderate). Nenhuma critical remanescente.
- `npx expo-doctor@latest`: 20/21 checks passed; 1 schema warning foi ajustado (campo `splash` reorganizado). `react-native-worklets` instalado.
- `npx tsc --noEmit`: sem erros.
- `npx expo export --platform all`: export concluído com bundles Android/iOS gerados.

Arquivos alterados (principais)
- `package.json` — atualizei `expo`, `react`, `react-native`, libs compatíveis e `devDependencies` (TypeScript, @types/react, @babel/core).
- `package-lock.json` — regenerado via instalação limpa.
- `app.json` — removi `sdkVersion`, remodelei `splash` para evitar schema problems.
- `.github/dependabot.yml` — adicionei configuração weekly com grupos Expo/React Native e dev-tools.
- `.github/workflows/security.yml` — CI que executa `npm ci`, `expo-doctor`, `tsc --noEmit`, `npm audit --audit-level=high`.

Vulnerabilidades remanescentes (alto impacto)
As seguintes categorias concentram os riscos restantes — a maior parte são dependências transientes do ecossistema Metro/Expo/React Native:

- `image-size` (DoS via parsers ICNS/JXL/HEIF) — afeta `metro`/@expo/metro-config. Patch upstream está ligado a versões de `expo`/`metro`.
- `metro`, `metro-config`, `metro-transform-worker` — várias issues relacionadas a parsing e path traversal; correções dependem de versões do Metro ou do pacote Expo que o engloba.
- `postcss`, `js-yaml`, `yaml` — problemas de DoS/CPU; alguns já mitigados em versões recentes, mas dependem de que consumidores (expo/metro) atualizem suas ranges.
- `tar` — path traversal / hardlink issues em versões antigas.
- `shell-quote`, `fast-xml-parser`, `uuid`, `picomatch`, `minimatch` — dependências transitivas que ainda aparecem em cadeia de dependências.

Por que ainda restam vulnerabilidades
- Muitas correções para estas bibliotecas são alcançadas quando os mantenedores de `expo`, `metro` e `react-native` atualizam suas dependências internas. Já atualizamos para `expo@57.0.13`, `react-native@0.86.2` e dependências recomendadas — isso eliminou muitos CVEs. Restam itens que só são completamente corrigidos por mudanças upstream ou por forçar versões transitivas (`overrides`).

Opções seguras e recomendadas
1. Aplicar `overrides` seletivos no `package.json` para forçar versões corrigidas de pacotes transitivos (ex.: `image-size`, `postcss`, `tar`, `js-yaml`) e validar com uma instalação limpa + export. Eu posso aplicar isto automaticamente, mas é uma alteração invasiva na árvore de dependências transitivas e requer validação cuidadosa (testes + export). Vou documentar cada override com motivo e validação.

2. Alternativa conservadora: abrir PR com as mudanças já realizadas (upgrade para SDK57, dependências compatíveis, CI/Dependabot) e abrir um follow-up para overrides/patches transientes, com tickets para acompanhar correções upstream. Dependabot já foi habilitado para acompanhar atualizações automáticas.

Minha recomendação
- Aplicar overrides seletivos e validar localmente (eu faço) — isso tende a reduzir as vulnerabilidades `high` imediatamente. Em paralelo, manter Dependabot/CI para capturar regressões futuras. Só aplicarei overrides que tenham versões corrigidas publicadas e que passem `expo export` e `tsc` localmente.

Próximas ações que posso executar agora (escolha automática se você permitir)
- A: Aplicar overrides para as seguintes bibliotecas, uma a uma, instalar e validar:
    - `image-size` → última versão (>=2.0.3)
    - `postcss` → última versão segura (>=8.5.23/8.6.x)
    - `tar` → >=7.5.19
    - `js-yaml`/`yaml` → versões que contenham fixes
  Eu documentarei cada override e revertê-lo-ei se quebrar a build.

- B: Se preferir não usar overrides, eu finalizo o relatório e preparo o diff/PR (não dou push). PR incluirá instruções para reviewers e o relatório de vulnerabilidades.

Registro de auditoria completo
- O relatório `npm audit --json` foi salvo localmente durante o trabalho e pode ser anexado ao PR se desejar evidência completa.

Decida qual opção prefere (A = aplicar overrides & validar; B = abrir PR com o estado atual). Se autorizar A, eu aplico os overrides cuidadosos, executo `npm install`, `npm dedupe`, `npm audit`, `npx tsc --noEmit`, `npx expo export --platform all` e documentarei o resultado e os diffs.

---
Relatório gerado automaticamente pelo processo de migração na branch `chore/security-dependencies`.
