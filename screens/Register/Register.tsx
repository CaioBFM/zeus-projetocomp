import { View, Text, Alert, KeyboardAvoidingView, Platform, ScrollView, SafeAreaView, useWindowDimensions } from 'react-native';
import { useState } from 'react'; 
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation'; 

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Register'>; 

import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './Register.styles';
import Header from '../../components/Header';

export default function Register() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

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
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    Alert.alert('Sucesso', 'Conta criada com sucesso!');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          <View style={[styles.content, { paddingHorizontal: isLandscape ? width * 0.15 : width * 0.06 }]}>
            <Text
              style={[
                styles.title,
                { fontSize: isLandscape ? 28 : 24, marginBottom: isLandscape ? 40 : 24 },
              ]}
            >
              Criar Conta
            </Text>

            <Input placeholder="Nome completo" value={nome} onChangeText={setNome} />
            <Input placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <Input placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
            <Input placeholder="Confirmar Senha" value={confirmarSenha} onChangeText={setConfirmarSenha} secureTextEntry />

            <PrimaryButton title="Registrar" onPress={handleRegister} />
            <View style={{ height: 80 }} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}