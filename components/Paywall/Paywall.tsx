import { AntDesign } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, View, Pressable, Animated, Dimensions, ScrollView } from 'react-native';

export interface PaywallProps {
  children?: React.ReactElement;
  onClose?: () => void;
  wallStyle?: any;
}

export const Paywall: React.FC<PaywallProps> = ({ children, onClose, wallStyle = styles.wall }) => {
  const windowHeight = Dimensions.get('window').height;
  const slideAnim = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: false,
    }).start();
  }, [slideAnim]);
  return (
    <>
      <View style={styles.backdrop} />
      <Animated.View
        style={StyleSheet.flatten([
          wallStyle,
          {
            bottom: slideAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-(windowHeight / 2), 0],
            }),
          },
        ])}>
        <View style={{ width: '100%', alignItems: 'flex-end', marginTop: -5 }}>
          {onClose && (
            <Pressable onPress={onClose}>
              <AntDesign name="closecircle" size={24} color="black" />
            </Pressable>
          )}
        </View>
        {children}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    zIndex: 1000,
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.6,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
  wall: {
    width: '100%',
    zIndex: 1001,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
});
