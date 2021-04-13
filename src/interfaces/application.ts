import store from 'store';

export type RootStackParamList = {
  Home: undefined;
};
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
