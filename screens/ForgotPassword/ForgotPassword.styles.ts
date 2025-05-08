import { StyleSheet } from 'react-native';

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
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
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
});
