// Tela de boas-vindas
// Usuário pode efetuar login ou registrar um nova conta
import { View, Text, ImageBackground, ScrollView, SafeAreaView, Platform, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

import PrimaryButton from '../../components/PrimaryButton';
import styles from './Welcome.styles';
import AppLogo from '../../components/Logo';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

export default function Welcome() {
  const navigation = useNavigation<NavigationProps>();

  const navigateTo = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <ImageBackground
      source={require('../../assets/images/WelcomeComZeus.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.container}
          >
            <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
              <View style={styles.logoContainer}>
                <AppLogo variant='branca'/>
              </View>
              <View style={styles.centralContent}>
                <Text style={styles.title}>Bem-vindo ao ZEUS</Text>
                <View style={styles.buttonRow}>
                  <PrimaryButton
                    title="Entrar"
                    onPress={() => navigateTo('Login')}
                    style={[styles.button, styles.buttonWhite]}
                    textStyle={styles.buttonTextBlack}
                    accessibilityLabel="Ir para tela de login"
                  />
                  <PrimaryButton
                    title="Criar Conta"
                    onPress={() => navigateTo('Register')}
                    style={[styles.button, styles.buttonWhite]}
                    textStyle={styles.buttonTextBlack}
                    accessibilityLabel="Ir para tela de cadastro"
                  />
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}