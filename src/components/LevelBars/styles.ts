import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  bars: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  level: {
    width: 4,
    backgroundColor: THEME.COLORS.GREY_500,
    borderRadius: 6,
    marginLeft: 4
  },
  level1: {
    height: 6,
  },
  level2: {
    height: 12,
  },
  level3: {
    height: 20,
  },
});