import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { StepsLeft } from './components/StepsLeft';

export default function App() {
  return (
    <View style={styles.container}>
      <StepsLeft steps={['he', 'llo', 'worldasdasdasdas', 'okok']} size={32} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
