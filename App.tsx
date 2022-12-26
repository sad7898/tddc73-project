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
  const [page, setPage] = useState(0);
  const [isPaid, setIsPaid] = useState(false);
  useEffect(() => {
    setIsPaid(false);
  }, []);
  const MAX_PAGE = 5;
  return (
    <PaywallContext.Provider value={{ isPaid }}>
      <View style={styles.container}>
        <Article>
          <Text>Hello world hello</Text>
        </Article>

        {/* <Walkthrough
        page={page}
        onPageChange={() =>
          setPage((prev) => {
            if (prev >= MAX_PAGE) return prev;
            return prev + 1;
          })
        }>
        <View>
          <Text>
            step 1fjddkf;dfndffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          </Text>
        </View>
        <View>
          <Text>step 2ffffffffffffffffffffffffffffff</Text>
        </View>
        <View>
          <Text>step 3</Text>
        </View>
        <View>
          <Text>step 3</Text>
        </View>
        <View>
          <Text>step 3</Text>
        </View>
      </Walkthrough>
      <View>
        <StepsLeft size={32} orientation="vertical">
          {[...Array(MAX_PAGE)].map((_, i) => (
            <Step
              onPress={() => setPage(i)}
              isCompleted={page >= i}
              key={`stepstep ${i}`}
              text="hellopisjgiaerjgpirjgi0wejrg0jwer0gj0ejrgpajfspajsdfajdf"
            />
          ))}
        </StepsLeft>
      </View> */}
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
