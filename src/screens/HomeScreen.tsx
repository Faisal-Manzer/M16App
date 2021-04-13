import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux'
import { SafeAreaView, Text, Button } from 'react-native';
import { RootStackParamList, RootState } from 'interfaces/application';
import {  increment } from 'store/counter';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <Text>Hello World{' '} Count: {count}</Text>
      <Button title='Increment More' onPress={() => dispatch(increment())} />
    </SafeAreaView>
  );
}

export default HomeScreen;
