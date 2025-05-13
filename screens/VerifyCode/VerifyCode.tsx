// VerifyCode screen component
// Handles verification of code sent to user email
import { useState } from 'react';
import { View, Text, Alert, KeyboardAvoidingView, ScrollView, Platform, SafeAreaView, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import AppLogo from '../../components/Logo';
import styles, { getResponsiveContainer, getResponsiveTitle } from '../VerifyCode/VerifyCode.styles';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'VerifyCode'>;

export default function VerifyCode() {
    const navigation = useNavigation<NavigationProps>();
    const [codigo, setCodigo] = useState('');
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;
  
    // Validate the verification code
    const validateCode = () => {
      if (!codigo) {
        Alert.alert('Erro', 'Digite o código.');
        return false;
      }
  
      if (codigo.length !== 6 || !/^[0-9]+$/.test(codigo)) {
        Alert.alert('Erro', 'Código inválido. Deve conter 6 números.');
        return false;
      }
  
      return true;
    };
  
    // Handle code verification logic
    const handleVerificarCodigo = () => {
      if (!validateCode()) return;
  
      if (codigo === '123456') {
        Alert.alert('Sucesso', 'Código verificado com sucesso!');
        navigation.navigate('NewPassword');
      } else {
        Alert.alert('Erro', 'Código incorreto.');
      }
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
              <AppLogo variant="azul" />
            </View>
            <View style={styles.content}>
              <Text style={[styles.title, getResponsiveTitle(isLandscape)]}>Verificação</Text>
              <Text style={styles.subtitle}>Digite o código que enviamos para seu e-mail</Text>
  
              {/* Input for verification code */}
              <Input
                placeholder="Código"
                keyboardType="numeric"
                value={codigo}
                onChangeText={setCodigo}
                maxLength={6}
              />
  
              {/* Confirm button */}
              <PrimaryButton title="Confirmar" onPress={handleVerificarCodigo} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
