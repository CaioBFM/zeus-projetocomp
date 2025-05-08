// Login screen component
// Handles user authentication and navigation to other screens
import { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './Login.styles';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<NavigationProps>();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Validate user inputs before login
  const validateInputs = () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Erro', 'E-mail inválido.');
      return false;
    }

    if (senha.length < 5) {
      Alert.alert('Erro', 'A senha deve ter no mínimo 5 caracteres.');
      return false;
    }

    return true;
  };

  // Handle login logic
  const handleLogin = () => {
    if (!validateInputs()) return;

    if (email === 'Caio@zeus.com' && senha === 'Cedos') {
      navigation.navigate('Dashboard');
    } else {
      Alert.alert('Erro', 'Login inválido, tente novamente.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Login</Text>

          {/* Input fields for email and password */}
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Input
            placeholder="Senha"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          {/* Login button */}
          <PrimaryButton title="Entrar" onPress={handleLogin} />

          {/* Link to forgot password screen */}
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.link}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
