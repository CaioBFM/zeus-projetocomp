import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#06213D', // ciano escuro sólido
  },
  container: {
    flex: 1,
    paddingHorizontal: width * 0.06, // ~24px em celulares, aumenta suavemente em tablets
    backgroundColor: '#06213D', // ciano escuro sólido
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
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
  logoContainer: {
    position: 'absolute',
    top: 32, // valor menor para subir a logo
    right: 16,
    zIndex: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingVertical: 32,
    paddingHorizontal: 24,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 400,
  },
});
