import React, { useMemo } from 'react';
import { View as RNView, KeyboardAvoidingView, Platform } from 'react-native';

import { c } from 'helpers';
import { ClassName } from 'interfaces/application';

interface Props {
  className?: ClassName;
  keyboard?: boolean;
}

const styles = {
  container: c(),
};

const View: React.FC<Props> = ({ children, className = '', keyboard = false }) => {
  const { MainView, extraProps } = useMemo(
    () => ({
      MainView: keyboard ? KeyboardAvoidingView : RNView,
      extraProps: keyboard
        ? { behaviour: 'padding', keyboardVerticalOffset: Platform.OS === 'ios' ? 40 : 0 }
        : {},
    }),
    [keyboard],
  );

  return (
    <MainView style={{ ...styles.container, ...c(className) }} {...extraProps}>
      {children}
    </MainView>
  );
};

export default View;
