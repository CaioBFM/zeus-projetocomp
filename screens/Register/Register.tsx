import { useState } from 'react'; 
import { View, Text, Alert, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation'; 

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Register'>; 

import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './Register.styles';

export default function Register() {
  const navigation = useNavigation<NavigationProps>();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleRegister = () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'Senhas não coincidem.');
      return;
    }

    // seria a chamada para api ou banco de dados etc... implementar se der tempo
    Alert.alert('Sucesso', 'Conta criada com sucesso.');
    navigation.navigate

  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <View style={styles.topContainer}>
        <Image
          source={require('../../assets/images/Logo.png')}
          style={styles.logo}
        />
      </View>
      
      <Text style={styles.title}> Criar conta</Text>

      <Input placeholder="Nome completo" value={nome} onChangeText={setNome} />
      <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
      <Input placeholder="Senha" value={senha} onChangeText={setSenha} />
      <Input placeholder="Confirmar senha" value={confirmarSenha} onChangeText={setConfirmarSenha} />

      <PrimaryButton title="Registrar" onPress={handleRegister} />

    </KeyboardAvoidingView>
  );
}