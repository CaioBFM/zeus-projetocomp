// Forgot Password screen component
// Allows users to request a password recovery link
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
  Alert,
} from 'react-native';
import { useState } from 'react';

import styles, { getResponsiveContainer, getResponsiveTitle } from './ForgotPassword.styles';
import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const handleEnviarLink = () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, insira seu e-mail.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Erro', 'E-mail inválido.');
      return;
    }

    Alert.alert('Recuperação de Senha', 'Enviamos um link para seu e-mail.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={[styles.container, getResponsiveContainer(isLandscape, width)]}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          <Text style={[styles.title, getResponsiveTitle(isLandscape)]}>
            Recuperar Senha
          </Text>

          <Input
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <PrimaryButton title="Enviar código" onPress={handleEnviarLink} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
