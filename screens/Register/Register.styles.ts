import { StyleSheet } from "react-native";

export default StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#1e1e1e',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  topContainer: {
    position: 'absolute',
    top: 40,
    marginLeft: 10,
    zIndex: 10,
  },
});