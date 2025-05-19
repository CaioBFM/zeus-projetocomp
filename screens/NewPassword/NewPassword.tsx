// NewPassword screen component
// Allows user to set a new password after verifying the code
import { useState } from 'react';
import { View, Text, Alert, KeyboardAvoidingView, ScrollView, Platform, SafeAreaView, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import AppLogo from '../../components/Logo';
import styles, { getResponsiveContainer, getResponsiveTitle } from '../NewPassword/NewPassword.styles';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'NewPassword'>;

export default function VerifyCode() {
  const navigation = useNavigation<NavigationProps>();
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  // Validate password fields
  const ValidatePasswords = () => {
    if (!senha || !confirmarSenha) {
        Alert.alert('Erro', 'Preencha todos os campos para prosseguir.');
        return false;
    }
    if (senha.length < 5) {
        Alert.alert('Erro', 'A senha deve ter no mínimo 5 caracteres.');
        return false;
    }
    if (senha !== confirmarSenha) {
        Alert.alert('Erro', 'As senhas devem ser iguais.');
        return false;
    }

    return true;
  };

  // Handle password reset
  const HandleDefinePassword = () => {
    if (!ValidatePasswords()) return;

    Alert.alert('Sucesso', 'Senha redefinida com sucesso!');
    navigation.navigate('Welcome');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={[styles.container, getResponsiveContainer(isLandscape, width)]}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo azul no topo direito */}
          <View style={styles.logoContainer}>
            <AppLogo variant="branca" />
          </View>
          {/* Card branco centralizado */}
          <View style={styles.card}>
            <View style={styles.content}>
              <Text style={[styles.title, getResponsiveTitle(isLandscape)]}>Nova Senha</Text>
              <Text style={styles.subtitle}>Crie sua nova senha para acessar o app</Text>

              <Input
                placeholder="Nova senha"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
              />

              <Input
                placeholder="Confirmar nova senha"
                secureTextEntry
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
              />

              <PrimaryButton title="Confirmar" onPress={HandleDefinePassword} accessibilityLabel="Confirmar nova senha" />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}