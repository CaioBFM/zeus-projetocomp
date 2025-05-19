# ZEUS-APP

Aplicativo de Gestão de Membros e Orçamentos — Comp Júnior

---

## 📋 Descrição

O **ZEUS-APP** é um aplicativo mobile desenvolvido em React Native e TypeScript, com Expo, para facilitar a gestão de membros e orçamentos da Comp Júnior. O app oferece uma interface moderna, responsiva e acessível, permitindo o controle eficiente de usuários e processos financeiros.

## 🚀 Tecnologias Utilizadas

- **React Native**
- **Expo**
- **TypeScript**

## 📱 Funcionalidades Principais

- Autenticação de usuários (login, cadastro, recuperação de senha)
- Gerenciamento de membros (adição, edição, remoção)
- Gerenciamento de orçamentos (adição, edição, remoção, aprovação/reprovação)
- Interface responsiva para celulares e tablets
- Acessibilidade aprimorada para leitores de tela

## ♿️ Acessibilidade

Todos os botões e elementos interativos possuem rótulos descritivos (`accessibilityLabel`) para garantir navegação eficiente por leitores de tela, seguindo as melhores práticas de acessibilidade mobile.

## 🛠️ Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão recomendada: 20.12.2 ou superior)
- [Git](https://git-scm.com)
- [Expo CLI](https://expo.dev/) (`npm install -g expo-cli`)

> **Atenção:** Certifique-se de estar usando uma versão do Node.js compatível (preferencialmente 20.12.2 ou superior) para evitar problemas de dependências.

### Instalação e Execução

1. **Clone este repositório:**
   ```bash
   git clone <url-do-seu-repositorio>
   cd <nome-da-pasta-do-projeto>
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
   > Isso irá baixar todos os pacotes necessários listados no `package.json`.
3. **Inicie o projeto com o Expo:**
   ```bash
   npx expo start
   ```
4. **Abrindo o app no seu dispositivo ou emulador:**
   - **No Android:** Escaneie o QR Code exibido no terminal do Expo usando o aplicativo Expo Go.
   - **No iOS:** Escaneie o QR Code usando o app de câmera nativo do iPhone (ou o Expo Go, se preferir).
   - **No emulador Android:** Com o terminal do Expo aberto, pressione a tecla **`a`** para abrir o app automaticamente no emulador Android configurado na sua máquina.
   - **Para finalizar a execução do Expo:** Pressione **Ctrl + C** no terminal.

## 📁 Estrutura do Projeto

```
<zeus-app>
├── assets
├── components
├── navigation
├── screens
├── types
├── .gitignore
├── app.json
├── App.tsx
├── index.ts
├── package-lock.json
├── package.json
└── tsconfig.json
```

- **assets/**: Imagens e recursos visuais
- **components/**: Componentes reutilizáveis (botões, inputs, cards, etc.)
- **navigation/**: Configuração de rotas e navegação
- **screens/**: Telas principais do app
- **types/**: Tipagens e definições globais

## 📸 Telas do Aplicativo

<!-- Exemplo de tela: Welcome -->
<p align="center">
  <img src="./assets/screenshots/welcomeTELA.jpeg" alt="Tela Welcome" width="300" />
</p>

**Descrição:**

_Adicione aqui uma explicação sobre a tela de boas-vindas, funcionalidades e fluxo de navegação._

<!-- Exemplo de tela: Login -->
<p align="center">
  <img src="./assets/screenshots/LoginTELA.jpeg" alt="Tela Login" width="300" />
</p>

**Descrição:**

_Adicione aqui uma explicação sobre a tela de boas-vindas, funcionalidades e fluxo de navegação._

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.
