import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.GREY_800,
    padding: 32
  },
  message: {
    alignItems: 'center',
    marginBottom: 80,
  },
  title: {
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 24,
    marginTop: 41
  },
  subtitle: {
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 16,
    marginTop: 8
  },
});