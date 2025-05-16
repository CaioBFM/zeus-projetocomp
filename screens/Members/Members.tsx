// Members screen component
// Displays a welcome message and a header
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './Members.styles';
import AppLogo from '../../components/Logo';
import Sidebar from '../../components/Sidebar';
import { RootStackParamList } from '../../types/navigation';

export default function Budget() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Sidebar navigation={navigation} />
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <AppLogo variant="branca" />
        </View>
        <Text style={styles.text}>Bem-vindo ao Members!</Text>
      </View>
    </View>
  );
}
