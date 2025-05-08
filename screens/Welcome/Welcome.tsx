import { View, Text, ImageBackground, ScrollView, SafeAreaView, Platform, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

import PrimaryButton from '../../components/PrimaryButton';
import styles from './Welcome.styles';

export default function Welcome() {
  const navigation = useNavigation<NavigationProps>();

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

              <Text style={styles.title}>Bem-vindo ao ZEUS</Text>

              <View style={styles.buttonRow}>
                <PrimaryButton
                  title="Entrar"
                  onPress={() => navigation.navigate('Login')}
                  style={styles.button}
                />
                <PrimaryButton
                  title="Criar Conta"
                  onPress={() => navigation.navigate('Register')}
                  style={styles.button}
                />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}