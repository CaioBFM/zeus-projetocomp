import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  topContainer: {
    marginTop: 0,
    alignItems: 'flex-start',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  link: {
    color: 'gray',
    marginTop: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});