import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export interface StepsLeftProps {
  steps: string[];
  size: number;
}

export const StepsLeft: React.FC<StepsLeftProps> = ({ steps, size }) => {
  const circleStyle = StyleSheet.create({
    circle: {
      width: size,
      height: size,
      borderRadius: size / 2,
      borderWidth: 1,
      overflow: 'hidden',
    },
  });
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      {steps.map((step, indx) => {
        const hasLine = indx !== 0 && indx !== steps.length - 1;
        return (
          <View
            key={step}
            style={{
              flexDirection: 'column',
              flex: 1,
              alignItems: 'flex-start',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
              <View style={circleStyle.circle} />
              <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            </View>
            <Text
              style={{
                backgroundColor: 'red',
                position: 'absolute',
                top: size,
                textAlign: 'center',
                fontSize: Math.max(16, size / 2),
              }}>
              {step}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
