// Tela de Login
// Permite usuário logar com as credenciais corretas ou ir para a tela esqueci senha (caso tenha esquecido senha)
import { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './Login.styles';
import AppLogo from '../../components/Logo';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<NavigationProps>();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const validateInputs = () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Erro', 'E-mail inválido.');
      return false;
    }

    if (senha.length < 6) {
      Alert.alert('Erro', 'A senha deve ter no mínimo 6 caracteres.');
      return false;
    }

    return true;
  };

  const handleLogin = () => {
    if (!validateInputs()) return;

    if (email === 'Teste@zeus.com' && senha === 'Testes') {
      // Reseta a pilha quando em login bem sucedido
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      });
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
          <View style={styles.logoContainer}>
            <AppLogo variant="branca" />
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>Login</Text>

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

            <PrimaryButton title="Entrar" onPress={handleLogin} accessibilityLabel="Entrar no aplicativo" />

            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} accessibilityLabel="Ir para tela de recuperação de senha">
              <Text style={styles.link}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
