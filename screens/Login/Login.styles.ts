import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  logo: {
<<<<<<< HEAD
    width: 120,
    height: 120,
    resizeMode: 'contain',
    justifyContent: 'center',
=======
    width: 100,
    height: 100,
    resizeMode: 'contain',
    justifyContent: 'flex-start',
  },
  topContainer: {
    marginTop: 40,
    alignItems: 'flex-start',
>>>>>>> dev
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
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