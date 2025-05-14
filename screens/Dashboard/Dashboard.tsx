// Dashboard screen component
// Displays a welcome message and a header
import { View, Text } from 'react-native';
import styles from './Dashboard.styles';
import AppLogo from '../../components/Logo';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {/* Logo azul no topo direito */}
      <View style={styles.logoContainer}>
        <AppLogo variant="branca" />
      </View>
      <Text style={styles.text}>Bem-vindo ao Dashboard!</Text>
    </View>
  );
}
