import { TouchableOpacity, TouchableOpacityProps, Text, View } from 'react-native';

import { styles } from './styles';
import { THEME } from '../../styles/theme';

import { LevelBars } from '../LevelBars';
import { QUIZZES } from '../../data/quizzes';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';

type Props = TouchableOpacityProps & {
  index: number;
  data: typeof QUIZZES[0];
}

const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export function QuizCard({ index, data, ...rest }: Props) {
  const Icon = data.svg;

  return (
    <TouchableOpacityAnimated
      entering={FadeInUp.delay(index * 100)}
      exiting={FadeOutUp}
      style={styles.container}
      {...rest}
    >
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          {Icon && <Icon size={24} color={THEME.COLORS.GREY_100} />}
        </View>

        <LevelBars level={data.level} />
      </View>

      <Text style={styles.title}>
        {data.title}
      </Text>
    </TouchableOpacityAnimated>
  );
}