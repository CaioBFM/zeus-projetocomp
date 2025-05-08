import { useState } from 'react'; // Importa o hook useState para gerenciar estados locais (email e senha)
import { View, Text, Alert, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView, SafeAreaView } from 'react-native';
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

  // Função chamada ao pressionar o botão de login
  const handleLogin = () => {

    if (email == 'Caio@zeus.com' && senha === 'Cedos') {

      navigation.navigate('Dashboard');
    } else {

      Alert.alert('Erro', 'Login inválido, tente novamente');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">

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

          <View style={styles.linkContainer}>
            <Text style={styles.link} onPress={() => navigation.navigate('ForgotPassword')}>
              Esqueci minha senha
            </Text>
          </View>

          <PrimaryButton title="Entrar" onPress={handleLogin} />

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}