import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
    alignItems: 'center'
  },
  levels: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32
  },
  cards: {
    paddingTop: 32,
  }
});