import { View, Text, Alert } from 'react-native';
import styles from './ForgotPassword.styles';

import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';

export default function ForgotPassword() {
  const handleEnviarLink = () => {
    Alert.alert('Recuperação de Senha', 'Enviamos um link para seu e-mail.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar senha</Text>

      <Input placeholder="Digite seu e-mail" keyboardType="email-address" />

      <PrimaryButton title="Enviar link de recuperação" onPress={handleEnviarLink} />
    </View>
  );
}
