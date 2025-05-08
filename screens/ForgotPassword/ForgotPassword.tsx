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

import styles from './ForgotPassword.styles';
import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const handleEnviarLink = () => {
    Alert.alert('Recuperação de Senha', 'Enviamos um link para seu e-mail.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={[styles.container, { paddingHorizontal: isLandscape ? width * 0.15 : width * 0.06 }]}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          <Text
            style={[
              styles.title,
              { fontSize: isLandscape ? 28 : 24, marginBottom: isLandscape ? 40 : 24 },
            ]}
          >
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
