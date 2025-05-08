// Handles the navigation structure of the app
// Uses a stack navigator to manage screen transitions
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

import Login from '../screens/Login/Login';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import Dashboard from '../screens/Dashboard/Dashboard';
import Welcome from '../screens/Welcome/Welcome';
import Register from '../screens/Register/Register';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      {/* Define the navigation stack and initial screen */}
      <Stack.Navigator
        initialRouteName="Welcome"
        id={undefined}
        screenOptions={{
          headerShown: false, // Hide headers by default
        }}
      >
        {/* Define individual screens */}
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: true }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: true }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

