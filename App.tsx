import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Step } from './components/Step';
import { StepsLeft } from './components/StepsLeft';
import { Walkthrough } from './components/Walkthrough/Walkthrough';

export default function App() {
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(5);
  return (
    <View style={styles.container}>
      <Walkthrough
        page={page}
        onPageChange={() =>
          setPage((prev) => {
            if (prev >= maxPage) return prev;
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
      <StepsLeft size={32}>
        {[...Array(maxPage)].map((_, i) => (
          <Step
            onPress={() => setPage(i)}
            isCompleted={page >= i}
            key={`stepstep ${i}`}
            text="hello"
          />
        ))}
      </StepsLeft>
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
