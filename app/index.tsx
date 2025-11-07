// Home screen
import { Text, View } from 'react-native';
import styles from './styles';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Hello,
      </Text>
      <Text style={styles.text}> Welcome back! </Text>
      <Text style={styles.text}> Email/Username </Text>
    </View>
  );
}
