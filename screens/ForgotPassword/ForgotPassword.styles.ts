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
