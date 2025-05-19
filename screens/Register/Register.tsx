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
  const isTablet = width > 600;
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
            <AppLogo variant="branca" />
          </View>
          {/* Card branco centralizado */}
          <View style={styles.card}>
            <Text style={[styles.title, getResponsiveTitle(isLandscape)]}>
              Criar Conta
            </Text>

            {/* Input fields for user details */}
            <Input placeholder="Nome completo" value={nome} onChangeText={setNome} style={styles.input} />
            <Input placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" style={styles.input} />
            <Input placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry style={styles.input} />
            <Input placeholder="Confirmar Senha" value={confirmarSenha} onChangeText={setConfirmarSenha} secureTextEntry style={styles.input} />

            {/* Register button */}
            <PrimaryButton title="Registrar" onPress={handleRegister} accessibilityLabel="Registrar nova conta" />
            <View style={{ height: isTablet ? 48 : 30 }} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}