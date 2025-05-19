// Forgot Password screen component
// Allows users to request a password recovery link
import { View, Text, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, useWindowDimensions, Alert } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

import styles, { getResponsiveContainer, getResponsiveTitle } from './ForgotPassword.styles';
import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import AppLogo from '../../components/Logo';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function ForgotPassword() {
  const navigation = useNavigation<NavigationProps>();
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
    navigation.navigate('VerifyCode'); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={[styles.container, getResponsiveContainer(isLandscape, width)]}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          {/* Logo azul no topo direito */}
          <View style={styles.logoContainer}>
            <AppLogo variant="branca" />
          </View>
          {/* Card branco centralizado */}
          <View style={styles.card}>
            <Text style={[styles.title, getResponsiveTitle(isLandscape)]}>
              Recuperar Senha
            </Text>

            <Input
              placeholder="Digite seu e-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              style={styles.input}
            />

            <PrimaryButton title="Enviar código" onPress={handleEnviarLink} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
