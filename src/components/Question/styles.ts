import { Dimensions, StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

const { width } = Dimensions.get('window');

const MARGIN_HORIZONTAL = 24 * 2;

export const styles = StyleSheet.create({
  container: {
    width: width - MARGIN_HORIZONTAL,
    backgroundColor: THEME.COLORS.GREY_700,
    borderRadius: 12,
    padding: 22,
  },
  title: {
    fontFamily: 'Roboto_700Bold',
    color: THEME.COLORS.WHITE,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 18
  },
});