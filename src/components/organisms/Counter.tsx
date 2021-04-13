import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { RootState } from 'interfaces/application';

import { increment } from 'store/counter';
import { Button } from 'components/atoms';

type Props = {};

const Counter: React.FC<Props> = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <Button
        onPress={() => dispatch(increment())}
        title={`Touched ${count} time${count > 1 ? 's' : ''}`}
      />
    </SafeAreaView>
  );
};

export default Counter;
