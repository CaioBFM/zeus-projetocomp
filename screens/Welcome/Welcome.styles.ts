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
    gap: 16,
    marginTop: 24,
  },
  button: {
    flex: 1,
    paddingVertical: width > 600 ? 18 : 12,
    paddingHorizontal: width > 600 ? 32 : 16,
    borderRadius: width > 600 ? 14 : 8,
    alignItems: 'center',
    minWidth: width > 600 ? 180 : 0,
  },
  buttonWhite: {
    backgroundColor: '#fff',
  },
  buttonTextBlack: {
    color: '#111',
    fontWeight: 'bold',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  logoContainer: {
    position: 'absolute',
    top: height * 0.08,
    right: width * 0.04,
    zIndex: 10,
  },
  centralContent: {
    width: '100%',
    alignItems: 'center',
    marginTop: height * 0.08,
  },
});
