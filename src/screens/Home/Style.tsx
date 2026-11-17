import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    borderColor: '#262626',
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 40,
    paddingTop: 20,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: '#141414',
  },
  inputContainer: {
    width: '80%',
    maxWidth: 360,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default styles;