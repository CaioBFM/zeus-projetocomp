import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: width * 0.06, // ~24px em celulares, aumenta suavemente em tablets
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 24,
  },
  link: {
    textAlign: 'center',
    marginTop: 16,
    color: '#3b82f6',
    textDecorationLine: 'underline',
  },
  linkContainer: {
    alignItems: 'flex-end',
    marginTop: -20,
    marginBottom: 26, 
  },
});
