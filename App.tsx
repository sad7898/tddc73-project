import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Article from './components/Article';
import { PaywallContext } from './components/Paywall/withPaywall';

export default function App() {
  const [page, setPage] = useState(0);
  const steps = ['Subscription', 'Style', 'Payment'];
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
