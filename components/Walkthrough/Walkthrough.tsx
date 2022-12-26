import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import { Step } from '../StepsLeft/Step';
import { StepsLeft } from '../StepsLeft/StepsLeft';

export interface WalkthroughProps {
  children: React.ReactElement[];
  buttonStyle?: any;
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
