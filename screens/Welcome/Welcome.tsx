// Welcome screen component
// Provides navigation options for users to log in or register
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

  // Navigate to a specific screen
  const navigateTo = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <ImageBackground
      source={require('../../assets/images/WelcomeImagem.jpeg')}
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
              {/* Logo posicionada no topo direito, mas um pouco mais para baixo */}
              <View style={styles.logoContainer}>
                <AppLogo />
              </View>
              {/* Conteúdo centralizado permanece centralizado */}
              <View style={styles.centralContent}>
                <Text style={styles.title}>Bem-vindo ao ZEUS</Text>

                {/* Buttons for navigation */}
                <View style={styles.buttonRow}>
                  <PrimaryButton
                    title="Entrar"
                    onPress={() => navigateTo('Login')}
                    style={styles.button}
                  />
                  <PrimaryButton
                    title="Criar Conta"
                    onPress={() => navigateTo('Register')}
                    style={styles.button}
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