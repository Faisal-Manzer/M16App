import store from 'store';
import { Argument } from "classnames";

export type RootStackParamList = {
  Home: undefined;
};

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type ClassName = Argument;
