import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  logoContainer: {
    position: 'absolute',
    top: 32,
    right: 16,
    zIndex: 10,
  },
});
