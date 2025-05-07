import { View, Text, Image, ImageBackground } from 'react-native';
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
      resizeMode='cover'
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Bem vindo ao ZEUS!</Text>
        <View style={styles.container}>
          <PrimaryButton title="Registrar" onPress={() => navigation.navigate('Register')} />
        </View>
        <PrimaryButton title="Login" onPress={() => navigation.navigate('Login')} />


        
      </View>
    </ImageBackground>
  );
}