import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  track: {
    height: 8,
    width: '100%',
    borderRadius: 8,
    backgroundColor: THEME.COLORS.GREY_500
  },
  progress: {
    height: 8,
    backgroundColor: THEME.COLORS.BRAND_LIGHT,
    borderRadius: 8,
  }
});