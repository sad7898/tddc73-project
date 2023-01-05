import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { Paywall } from './Paywall/Paywall';
import { Step } from './StepsLeft/Step';
import { StepsLeft } from './StepsLeft/StepsLeft';
import { Walkthrough } from './Walkthrough/Walkthrough';

export const ExamplePaywall = () => {
  const [page, setPage] = useState(0);
  const steps = ['Subscription', 'Style', 'Payment'];
  return (
    <Paywall onClose={() => {}}>
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
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </View>
          <View style={styles.exampleStep}>
            <Text>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </Text>
          </View>
          <View style={styles.exampleStep}>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </View>
        </Walkthrough>
      </View>
    </Paywall>
  );
};

const styles = StyleSheet.create({
  exampleStep: {},
});
