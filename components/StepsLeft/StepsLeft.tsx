import * as React from 'react';
import { Text, View } from 'react-native';

import { StepProps } from './Step';
export interface StepsLeftProps {
  size?: number;
  lineColor?: string;
  textColor?: string;
  children?: React.ReactElement<StepProps>[];
}

export const StepsLeft: React.FC<StepsLeftProps> = ({
  size = 14,
  lineColor = '#6495ed',
  textColor = '#6495ed',
  children,
}) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      {children?.map((child, indx) => {
        const hasOneLine = indx !== 0 && indx !== children.length - 1;
        return (
          <View
            key={`${indx}-step`}
            style={{
              flexDirection: 'column',
              flex: hasOneLine ? 3 : 2,
              alignItems: 'flex-start',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  flex: 1,
                  height: 3,
                  backgroundColor: indx !== 0 ? lineColor : 'transparent',
                }}
              />
              {child}
              <View
                style={{
                  flex: 1,
                  height: 3,
                  backgroundColor: indx !== children.length - 1 ? lineColor : 'transparent',
                }}
              />
            </View>

            <Text
              style={{
                alignSelf: 'center',
                textAlign: 'center',
                color: '#6495ed',
                fontSize: Math.max(16, size / 2),
              }}>
              {child.props.text}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
