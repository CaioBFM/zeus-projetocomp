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
    backgroundColor: '#06213D',
    paddingHorizontal: isTablet ? width * 0.15 : width * 0.06,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingTop: isTablet ? 56 : 32,
    paddingBottom: isTablet ? 56 : 32,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: isTablet ? 48 : 32,
    marginTop: isTablet ? 32 : 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: isTablet ? 24 : 18,
    paddingVertical: isTablet ? 32 : 18,
    paddingHorizontal: isTablet ? 40 : 16,
    marginHorizontal: isTablet ? 32 : 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
    alignSelf: 'center',
    width: '100%',
    maxWidth: isTablet ? 500 : 340,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e1e1e',
    fontSize: isTablet ? 30 : 22,
    marginBottom: isTablet ? 32 : 18,
  },
  input: {
    fontSize: isTablet ? 18 : 15,
  },
  photoButton: {
    alignSelf: 'center',
    marginBottom: isTablet ? 24 : 16,
  },
  photo: {
    width: isTablet ? 140 : 100,
    height: isTablet ? 140 : 100,
    borderRadius: isTablet ? 70 : 50,
  },
  photoPlaceholder: {
    width: isTablet ? 140 : 100,
    height: isTablet ? 140 : 100,
    borderRadius: isTablet ? 70 : 50,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSpacing: {
    height: isTablet ? 48 : 30,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: isTablet ? 20 : 12,
    marginTop: isTablet ? 16 : 8,
  },
  addButton: {
    flex: 1,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'red',
  },
});
