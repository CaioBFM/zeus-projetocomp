// Ponto de entrada do app
// Garante que o app esteja configurado corretamente para o Expo Go e builds nativos
import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent chama AppRegistry.registerComponent('main', () => App);
// Também garante que, ao carregar o app no Expo Go ou em uma build nativa,
// o ambiente esteja configurado apropriadamente
registerRootComponent(App);
