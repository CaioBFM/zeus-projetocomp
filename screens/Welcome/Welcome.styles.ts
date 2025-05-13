import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: width * 0.06,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16, // funciona com React Native 0.71+ ou use marginRight
    marginTop: 24,
  },
  button: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // escurece o fundo com transparência
  },
  logoContainer: {
    position: 'absolute',
    top: height * 0.08, // 8% da altura da tela
    right: width * 0.04, // 4% da largura da tela
    zIndex: 10,
  },
  centralContent: {
    width: '100%',
    alignItems: 'center',
    marginTop: height * 0.08, // 8% da altura da tela
  },
});
