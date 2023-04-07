import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { THEME } from '../../styles/theme';
import { IconProps } from 'phosphor-react-native';

type Props = {
  title: string;
  subtitle: string;
  onPress: () => void;
  icon: React.FC<IconProps>;
}

export function Header({ title, subtitle, icon: Icon, onPress }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.history}
        activeOpacity={0.7}
        onPress={onPress}
      >
        <Icon
          size={28}
          color={THEME.COLORS.GREY_100}
        />
      </TouchableOpacity>
    </View>
  );
}