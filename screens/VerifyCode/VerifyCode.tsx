// Tela de verificação de código
// Verifica o código enviado por email para o usuário
import React , { useState } from 'react';
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
            <View style={styles.logoContainer}>
              <AppLogo variant="branca" />
            </View>
            <View style={styles.card}>
              <View style={styles.content}>
                <Text style={[styles.title, getResponsiveTitle(isLandscape)]}>Verificação de e-mail</Text>
                <Text style={styles.subtitle}>Digite o código de 6 dígitos que foi enviado para seu e-mail.</Text>
    
                <Input
                  placeholder="Código"
                  keyboardType="numeric"
                  value={codigo}
                  onChangeText={setCodigo}
                  maxLength={6}
                />
    
                <PrimaryButton title="Confirmar" onPress={handleVerificarCodigo} accessibilityLabel="Confirmar código de verificação" />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
