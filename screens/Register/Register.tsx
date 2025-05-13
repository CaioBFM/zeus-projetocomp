// Register screen component
// Handles user registration and navigation to the Login screen
import { View, Text, Alert, KeyboardAvoidingView, Platform, ScrollView, SafeAreaView, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import AppLogo from '../../components/Logo';
import styles, { getResponsivePadding, getResponsiveTitle } from './Register.styles';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Register'>;

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const navigation = useNavigation<NavigationProps>();

  const validateInputs = () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Erro', 'E-mail inválido.');
      return;
    }
    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return false;
    }

    return true;
  };

  // Handle user registration logic
  const handleRegister = () => {
    if (!validateInputs()) return;

    Alert.alert('Sucesso', 'Conta criada com sucesso!');
    navigation.navigate('Login');
  };

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          {/* Logo azul no topo direito */}
          <View style={styles.logoContainer}>
            <AppLogo variant="azul" />
          </View>
          <View style={[styles.content, getResponsivePadding(isLandscape, width)]}>
            <Text style={[styles.title, getResponsiveTitle(isLandscape)]}>
              Criar Conta
            </Text>

            {/* Input fields for user details */}
            <Input placeholder="Nome completo" value={nome} onChangeText={setNome} />
            <Input placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <Input placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
            <Input placeholder="Confirmar Senha" value={confirmarSenha} onChangeText={setConfirmarSenha} secureTextEntry />

            {/* Register button */}
            <PrimaryButton title="Registrar" onPress={handleRegister} />
            <View style={{ height: 80 }}></View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}