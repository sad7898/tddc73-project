import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
export enum Reaction {
  LIKE = 'like2',
  SAD = 'sad-cry',
  ANGRY = 'angry',
  FUNNY = 'laugh',
  SURPRISED = 'surprise',
}
export interface LikeButtonProps {
  onReact?: (disliked: boolean, reaction: Reaction) => void;
  initialReaction?: Reaction;
  showbar: boolean;
  setShowbar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LikeButton: React.FC<LikeButtonProps> = ({
  onReact,
  initialReaction,
  showbar,
  setShowbar,
}) => {
  const [reaction, setReaction] = useState(initialReaction);
  const onReactCallback = (r: Reaction) => {
    return () => {
      if (onReact) {
        onReact(!(r === reaction), r);
      }
      setReaction((prev) => {
        if (prev === r) return undefined;
        return r;
      });
      setShowbar(false);
    };
  };
  return (
    <View>
      {showbar && (
        <View style={styles.reactionBar}>
          <FontAwesome5
            onPress={onReactCallback(Reaction.SAD)}
            name="sad-cry"
            size={24}
            color="black"
          />
          <FontAwesome5
            onPress={onReactCallback(Reaction.ANGRY)}
            name="angry"
            size={24}
            color="black"
          />
          <FontAwesome5
            onPress={onReactCallback(Reaction.FUNNY)}
            name="laugh"
            size={24}
            color="black"
          />
          <FontAwesome5
            onPress={onReactCallback(Reaction.SURPRISED)}
            name="surprise"
            size={24}
            color="black"
          />
        </View>
      )}
      <TouchableOpacity
        onLongPress={() => setShowbar((prev) => !prev)}
        onPress={onReactCallback(Reaction.LIKE)}
        style={styles.button}>
        {reaction ? (
          reaction === Reaction.LIKE ? (
            <AntDesign name={reaction} size={24} color="black" />
          ) : (
            <FontAwesome5 name={reaction} size={24} color="black" />
          )
        ) : (
          <AntDesign name="like1" size={24} color="black" />
        )}
        <View style={{ width: 5 }} />
        <Text>Like</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  reactionBar: {
    position: 'absolute',
    bottom: 30,
    minWidth: 200,
    padding: 5,
    borderRadius: 5,
    zIndex: 99,
    justifyContent: 'space-evenly',
    borderColor: 'black',
    borderWidth: 2,
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    fontSize: 20,
  },
});
