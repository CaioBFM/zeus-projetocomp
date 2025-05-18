// The main entry point of the application
// AppNavigator handles the navigation between screens
import AppNavigator from './navigation';
import { MembersProvider } from './components/MembersContext';

export default function App() {
  return (
    <MembersProvider>
      <AppNavigator />
    </MembersProvider>
  );
}
