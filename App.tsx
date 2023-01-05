import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Article from './components/Article';
import { Paywall } from './components/Paywall/Paywall';
import { PaywallContext } from './components/Paywall/withPaywall';
import { Step } from './components/StepsLeft/Step';
import { StepsLeft } from './components/StepsLeft/StepsLeft';
import { Walkthrough } from './components/Walkthrough/Walkthrough';

export default function App() {
  const [isPaid, setIsPaid] = useState(false);
  return (
    <PaywallContext.Provider value={{ isPaid }}>
      <View style={styles.container}>
        <Article>
          <Text>Hello world hello</Text>
        </Article>
      </View>
    </PaywallContext.Provider>
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
