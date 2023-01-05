import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Paywall } from './Paywall/Paywall';
import { Step } from './StepsLeft/Step';
import { StepsLeft } from './StepsLeft/StepsLeft';
import { Walkthrough } from './Walkthrough/Walkthrough';

export const ExamplePaywall = () => {
  const [page, setPage] = useState(0);
  const steps = ['Subscription', 'Style', 'Payment'];
  return (
    <Paywall>
      <View>
        <StepsLeft orientation="horizontal">
          {steps.map((step, indx) => {
            return <Step text={step} isCompleted={page >= indx} onPress={() => setPage(indx)} />;
          })}
        </StepsLeft>
        <Walkthrough
          page={page}
          onPageChange={() =>
            setPage((prev) => {
              if (prev >= 3) return prev;
              return prev + 1;
            })
          }>
          <View style={styles.exampleStep}>
            <Text>Customize your subscription</Text>
          </View>
          <View style={styles.exampleStep}>
            <Text>Choose your style</Text>
          </View>
          <View style={styles.exampleStep}>
            <Text>Choose payment method</Text>
          </View>
        </Walkthrough>
      </View>
    </Paywall>
  );
};

const styles = StyleSheet.create({
  exampleStep: {
    height: '80%',
  },
});
