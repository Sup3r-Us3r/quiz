import { View, Text } from 'react-native';

import { ProgressBar } from '../ProgressBar';

import { styles } from './styles';

interface Props {
  title: string;
  totalOfQuestions: number;
  currentQuestion: number;
}

export function QuizHeader({ title, totalOfQuestions, currentQuestion }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>

      <View style={styles.header}>
        <Text style={styles.question}>
          Questão {currentQuestion}
        </Text>

        <Text style={styles.length}>
          {currentQuestion}/{totalOfQuestions}
        </Text>
      </View>

      <ProgressBar
        total={totalOfQuestions}
        current={currentQuestion}
      />
    </View>
  );
}