import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaView, Text } from "react-native";
import { RootStackParamList, RootState } from "interfaces/application";

import { increment } from "store/counter";
import { Button } from "components/atoms";

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Counter: React.FC<Props> = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <Text>Count: {count}</Text>
      <Button onPress={() => dispatch(increment())}>
        <Text>
          Increment
        </Text>
      </Button>
    </SafeAreaView>
  );
};

export default Counter;
