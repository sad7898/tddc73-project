import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
export interface StepProps {
  style?: any;
  completedStepStyle?: any;
  isCompleted: boolean;
  text: string;
  onPress: () => void;
}

export const Step: React.FC<StepProps> = ({
  completedStepStyle = circleStyle.complete,
  isCompleted = false,
  text,
  style = circleStyle.circle,
  onPress,
}) => {
  return <TouchableOpacity style={isCompleted ? completedStepStyle : style} onPress={onPress} />;
};

const circleStyle = StyleSheet.create({
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    overflow: 'hidden',

    borderColor: '#6495ed',
  },
  complete: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    overflow: 'hidden',

    borderColor: '#6495ed',
    backgroundColor: '#6495ed',
  },
});
