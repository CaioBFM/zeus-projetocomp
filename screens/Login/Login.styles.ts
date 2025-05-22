import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width > 600;

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#06213D',
  },
  container: {
    flex: 1,
    paddingHorizontal: width * 0.06,
    backgroundColor: '#06213D',
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: isTablet ? 32 : 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: isTablet ? 32 : 24,
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
    top: 32,
    right: 16,
    zIndex: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingVertical: isTablet ? 48 : 32,
    paddingHorizontal: isTablet ? 40 : 24,
    marginHorizontal: isTablet ? 32 : 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
    alignSelf: 'center',
    width: '100%',
    maxWidth: isTablet ? 500 : 400,
  },
});
