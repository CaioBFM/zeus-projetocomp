// Dashboard screen component
// Displays a welcome message and a header
import { View, Text } from 'react-native';
import styles from './Dashboard.styles';
import Header from '../../components/Header';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.text}>Bem-vindo ao Dashboard!</Text>
    </View>
  );
}
