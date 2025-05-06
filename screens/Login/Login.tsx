import { useState } from 'react'; // Importa o hook useState para gerenciar estados locais (email e senha)
import { View, Text, Alert, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation'; // Importa o tipo RootStackParamList para tipar a navegação

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>; // Define o tipo de navegação para a tela de Login

import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './Login.styles';

// Componente principal da tela de Login
export default function Login() {

  const navigation = useNavigation<NavigationProps>();

  // Estados para armazenar o email e a senha digitados pelo usuário
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  // Função chamada ao pressionar o botão de login
  const handleLogin = () => {

    if (email == 'caio@zeus.com' && senha === 'cedos') {

      navigation.navigate('Dashboard');
    } else {

      Alert.alert('Erro', 'Login inválido, tente novamente');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <View style={styles.inner}>
        <Image
          source={require('../../assets/images/compLogo.png')}
          style={styles.logo}
        />
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
    </KeyboardAvoidingView>

  );
}
