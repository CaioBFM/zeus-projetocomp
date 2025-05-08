// Header component
// Displays a logo with safe area padding
import { Image, StyleSheet, SafeAreaView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Header() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.inner}>
        <Image
          source={require('../assets/images/Logo.png')}
          style={styles.logo}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  inner: {
    paddingHorizontal: 24,
    paddingBottom: 8,
    alignItems: 'flex-start',
  },
  logo: {
    width: 140,
    height: 50,
    resizeMode: 'contain',
  },
});
