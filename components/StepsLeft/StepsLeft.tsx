import * as React from 'react';
import { Text, View } from 'react-native';

import { StepProps } from './Step';
export interface StepsLeftProps {
  fontSize?: number;
  lineColor?: string;
  textColor?: string;
  children?: React.ReactElement<StepProps>[];
  orientation: 'horizontal' | 'vertical';
}

export const StepsLeft: React.FC<StepsLeftProps> = ({
  fontSize = 14,
  lineColor = '#6495ed',
  textColor = '#6495ed',
  children,
  orientation = 'horizontal',
}) => {
  const mainFlexDirection = orientation === 'horizontal' ? 'row' : 'column';
  const stepTextFlexDirection = orientation === 'horizontal' ? 'column' : 'row';
  return (
    <View
      style={{
        flexDirection: mainFlexDirection,
        justifyContent: 'center',
        minHeight: orientation === 'horizontal' ? undefined : '100%',
      }}>
      {children?.map((child, indx) => {
        const hasOneLine = indx !== 0 && indx !== children.length - 1;
        return (
          <View
            key={`${indx}-step`}
            style={{
              flexDirection: stepTextFlexDirection,
              flex: hasOneLine ? 3 : 2,
              alignItems: 'flex-start',
            }}>
            <View style={{ flexDirection: mainFlexDirection, alignItems: 'center' }}>
              <View
                style={{
                  flex: 1,
                  height: 3,
                  width: orientation === 'horizontal' ? 0 : 3,
                  backgroundColor: indx !== 0 ? lineColor : 'transparent',
                }}
              />
              {child}
              <View
                style={{
                  flex: 1,
                  height: 3,
                  width: orientation === 'horizontal' ? 0 : 3,
                  backgroundColor: indx !== children.length - 1 ? lineColor : 'transparent',
                }}
              />
            </View>
            <Text
              style={{
                marginLeft: orientation === 'horizontal' ? 0 : 5,
                alignSelf: 'center',
                textAlign: 'center',
                color: '#6495ed',
                fontSize: fontSize,
              }}>
              {child.props.text}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
