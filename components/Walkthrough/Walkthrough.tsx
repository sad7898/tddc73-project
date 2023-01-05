import * as React from 'react';
import { View, Button } from 'react-native';

export interface WalkthroughProps {
  children: React.ReactElement[];
  page: number;
  onPageChange: () => void;
}
export const Walkthrough: React.FC<WalkthroughProps> = ({ children, page, onPageChange }) => {
  return (
    <View>
      {children && (children[page] || children[children.length - 1])}
      <Button title={page >= children.length - 1 ? 'Finish' : 'Continue'} onPress={onPageChange} />
    </View>
  );
};
