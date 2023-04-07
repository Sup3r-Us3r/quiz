import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: THEME.COLORS.GREY_600,
    paddingHorizontal: 32,
    paddingTop: 58,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.BOLD,
  },
  subtitle: {
    fontSize: 14,
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.REGULAR,
  },
  history: {
    width: 44,
    height: 44,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.GREY_800
  }
});