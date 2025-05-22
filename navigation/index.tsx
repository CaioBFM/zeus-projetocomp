// Usa o Stack Navigator para garantir a navegação entre telas (em pilha)
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

import Login from '../screens/Login/Login';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import Dashboard from '../screens/Dashboard/Dashboard';
import Welcome from '../screens/Welcome/Welcome';
import Register from '../screens/Register/Register';
import VerifyCode from '../screens/VerifyCode/VerifyCode'
import NewPassword from '../screens/NewPassword/NewPassword'
import Members from '../screens/Members/Members';
import Budget from '../screens/Budget/Budget';
import AddMember from '../screens/AddMember/AddMember';
import AddBudget from '../screens/AddBudget/AddBudget';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        id={undefined}
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Definição das telas individualmente */}
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: true }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: true }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: true }} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} options={{ headerShown: true }} />
        <Stack.Screen name="NewPassword" component={NewPassword} options={{ headerShown: true }} />
        <Stack.Screen name="Members" component={Members} options={{ headerShown: true }} />
        <Stack.Screen name="Budget" component={Budget} options={{ headerShown: true }} />
        <Stack.Screen name="AddMember" component={AddMember} options={{ headerShown: true }} />
        <Stack.Screen name="AddBudget" component={AddBudget} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

