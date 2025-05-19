import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const isTablet = width > 600;

export const getResponsivePadding = (isLandscape: boolean, width: number) => ({
  paddingHorizontal: isLandscape ? width * 0.15 : width * 0.06,
});

export const getResponsiveTitle = (isLandscape: boolean) => ({
  fontSize: isLandscape ? 28 : 24,
  marginBottom: isLandscape ? 40 : 24,
});

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#06213D', 
  },
  container: {
    flex: 1,
    backgroundColor: '#06213D', 
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e1e1e',
    fontSize: isTablet ? 28 : 22,
    marginBottom: isTablet ? 32 : 18,
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
    paddingVertical: isTablet ? 40 : 20,
    paddingHorizontal: isTablet ? 36 : 16,
    marginHorizontal: isTablet ? 24 : 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
    alignSelf: 'center',
    width: '100%',
    maxWidth: isTablet ? 500 : 320,
  },
  input: {
    fontSize: isTablet ? 18 : 15,
    paddingVertical: isTablet ? 14 : 10,
    paddingHorizontal: isTablet ? 16 : 10,
    marginBottom: isTablet ? 18 : 12,
  },
});
