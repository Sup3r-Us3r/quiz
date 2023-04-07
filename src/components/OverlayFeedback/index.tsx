import { useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';
import { Blur, Canvas, Rect } from '@shopify/react-native-skia';

import { THEME } from '../../styles/theme';

const STATUS = ['transparent', THEME.COLORS.BRAND_LIGHT, THEME.COLORS.DANGER_LIGHT];

type Props = {
  status: number;
}

export function OverlayFeedback({ status }: Props) {
  const opacity = useSharedValue(0);

  const color = STATUS[status];

  const { width, height } = useWindowDimensions();

  const styleAnimated = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  useEffect(() => {
    opacity.value = withSequence(
      withTiming(1, { duration: 400, easing: Easing.bounce }),
      withTiming(0),
    )
  }, [status]);

  return (
    <Animated.View style={[{ width, height, position: 'absolute' }, styleAnimated]}>
      <Canvas style={{ flex: 1 }}>
        <Rect
          x={0}
          y={0}
          width={width}
          height={height}
          color={color}
        >
          <Blur blur={50} />
        </Rect>
      </Canvas>
    </Animated.View>
  );
}
