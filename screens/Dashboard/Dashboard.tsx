import { View, Text } from 'react-native';
import styles from './Dashboard.styles';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao Dashboard!</Text>
    </View>
  );
}
