import store from 'store';
import { Argument } from 'classnames';

export type RootStackParamList = {
  Home: undefined;
};

// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type ClassName = Argument;
