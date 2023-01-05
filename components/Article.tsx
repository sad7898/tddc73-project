import * as React from 'react';
import { View } from 'react-native';

import { ExamplePaywall } from './Example';
import { withPaywall } from './Paywall/withPaywall';

export interface ArticleProps {
  children?: React.ReactElement;
}

const Article: React.FC<ArticleProps> = ({ children }) => {
  return (
    <View style={{ width: 100, height: 100, backgroundColor: 'red', padding: 20 }}>{children}</View>
  );
};

export default withPaywall(Article, ExamplePaywall);
