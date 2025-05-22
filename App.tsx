// Ponto de entrada 'main' do aplicativo
// AppNavigator gerencia a navegação entre as telas
import AppNavigator from './navigation';
import { MembersProvider } from './components/MembersContext';
import { BudgetProvider } from './components/BudgetContext';

export default function App() {
  return (
    // Garantir que o contexto de membros e orçamentos seja válido para todo o app
    <MembersProvider> 
      <BudgetProvider>
        <AppNavigator />
      </BudgetProvider>
    </MembersProvider>
  );
}
