import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 84,
    height: 35,
    borderRadius: 4,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 12,
    fontFamily: THEME.FONTS.REGULAR,
    color: 'white'
  }
});