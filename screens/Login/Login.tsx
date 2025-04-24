import { useState } from 'react'; // "hook" pra guardar valores (email, senha)
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // navegar entre telas
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './Login.styles';

export default function Login() {
  const navigation = useNavigation<NavigationProps>();


  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (email == 'teste@zeus.com' && senha === '123456') {
      navigation.navigate('Dashboard'); // redireciona para a próxima tela 
    } else {
      Alert.alert('Erro', 'Login inválido, tente novamente');
    }
  };

  return (
    <View style={styles.container}>
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

      <PrimaryButton title="Entrar" onPress={handleLogin} />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}
