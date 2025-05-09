import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width > 600;

export const getResponsiveContainer = (isLandscape: boolean, width: number) => ({
  paddingHorizontal: isLandscape || isTablet ? width * 0.15 : width * 0.06,
});

export const getResponsiveTitle = (isLandscape: boolean) => ({
  fontSize: isLandscape ? 28 : 24,
  marginBottom: isLandscape ? 40 : 24,
});

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
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
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
});
