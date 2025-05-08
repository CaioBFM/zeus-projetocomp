import { View, Text } from 'react-native';
import styles from './Dashboard.styles';
import Header from '../../components/Header';

export default function Dashboard() {
  return (
    //<Header />
      <View style={styles.container}>
        <Text style={styles.text}>Bem-vindo ao Dashboard!</Text>
      </View>
  );
}
