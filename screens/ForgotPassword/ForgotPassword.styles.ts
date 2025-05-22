import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const isTablet = width > 600;
const isLandscape = width > height;

export const getResponsiveTitle = (isLandscape: boolean) => ({
  fontSize: isLandscape ? 28 : 24,
  marginBottom: isLandscape ? 40 : 24,
})

export const getResponsiveContainer = (isLandscape: boolean, width: number) => ({
  paddingHorizontal: isLandscape ? width * 0.15 : width * 0.06,
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
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e1e1e',
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
    paddingVertical: isTablet || isLandscape ? 48 : 32,
    paddingHorizontal: isTablet || isLandscape ? 40 : 24,
    marginHorizontal: isTablet || isLandscape ? 32 : 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
    alignSelf: 'center',
    width: '100%',
    maxWidth: isTablet ? 500 : 400,
  },
  input: {
    fontSize: isTablet ? 18 : 15,
    marginBottom: isTablet ? 6 : 4,
    paddingVertical: isTablet ? 14 : 10,
    paddingHorizontal: isTablet ? 16 : 10,
  },
});
