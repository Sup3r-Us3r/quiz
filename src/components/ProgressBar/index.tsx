import { View } from 'react-native';

import { styles } from './styles';

interface Props {
  total: number;
  current: number;
}

export function ProgressBar({ total, current }: Props) {
  const percentage = Math.round((current / total) * 100);

  return (
    <View style={styles.track}>
      <View style={[styles.progress, { width: `${percentage}%` }]} />
    </View>
  );
}