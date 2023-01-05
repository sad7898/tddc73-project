import * as React from 'react';
import { useContext } from 'react';
export interface PaywallContextStruct {
  isPaid: boolean;
}

export const PaywallContext = React.createContext({} as PaywallContextStruct);

export const usePaywallContext = () => useContext(PaywallContext);

export const withPaywall = <T,>(
  Component: React.ComponentType<T>,
  Paywall: React.ComponentType,
  Preview?: React.ComponentType<any>
): React.FC<T> => {
  return function WithPaywall(props: T) {
    const { isPaid } = usePaywallContext();
    if (isPaid) {
      return <Component {...(props as T & JSX.IntrinsicAttributes)} />;
    } else
      return Preview ? (
        <>
          <Paywall />
          <Preview />
        </>
      ) : (
        <>
          <Paywall />
          <Component {...(props as T & JSX.IntrinsicAttributes)} />
        </>
      );
  };
};
