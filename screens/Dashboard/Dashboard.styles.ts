import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const isTablet = width > 600;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06213D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: isTablet ? 28 : 22,
    fontWeight: 'bold',
    marginBottom: 0,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  content: {
    flex: 1,
    paddingHorizontal: isTablet ? width * 0.08 : width * 0.04,
    paddingVertical: isTablet ? height * 0.04 : height * 0.03,
    paddingTop: isTablet ? height * 0.11 : height * 0.15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    maxWidth: 700,
    alignSelf: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: isTablet ? height * 0.03 : height * 0.04,
    right: isTablet ? width * 0.06 : width * 0.04,
    zIndex: 10,
  },
  cardsContainer: {
    alignItems: 'center',
    paddingVertical: isTablet ? 48 : 24,
    gap: isTablet ? 24 : 12,
    flexGrow: 1,
    justifyContent: 'flex-start',
    width: '100%',
  },
  headerRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: isTablet ? 32 : 16,
    paddingRight: isTablet ? 8 : 0,
    paddingLeft: 2,
  },
  headerButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'transparent',
    marginTop: -5,
    alignSelf: 'flex-start',
  },
  linha: {
    width: '100%',
    height: isTablet ? 3 : 2,
    backgroundColor: '#fff',
    opacity: 0.7,
    marginBottom: isTablet ? 18 : 10,
    borderRadius: 2,
  },
});
