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
    backgroundColor: '#06213D', // ciano escuro sólido
  },
  container: {
    flex: 1,
    backgroundColor: '#06213D', // ciano escuro sólido
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
    fontSize: 22, // menor
    marginBottom: 18, // menor
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
    paddingVertical: isTablet ? 32 : 15,
    paddingHorizontal: isTablet ? 32 : 16,
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
    alignSelf: 'center',
    width: '100%',
    maxWidth: isTablet ? 400 : 320,
  },
  input: {
    fontSize: 15, // menor
    // ...adicione outros ajustes se necessário
  },
});
