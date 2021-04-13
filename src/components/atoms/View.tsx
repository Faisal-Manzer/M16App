import React, { useMemo } from 'react';
import { View as RNView, KeyboardAvoidingView, Platform } from 'react-native';

import { t } from 'helpers';
import { ClassName } from 'interfaces/application';

interface Props {
  className?: ClassName;
  keyboard?: boolean;
}

const styles = {
  container: t(),
};

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

const View: React.FC<Props> = ({ children, className = '', keyboard = false }) => {
  const { MainView, extraProps } = useMemo(
    () => ({
      MainView: keyboard ? KeyboardAvoidingView : RNView,
      extraProps: keyboard ? { behaviour: 'padding', keyboardVerticalOffset } : {},
    }),
    [keyboard],
  );

  return (
    <MainView style={{ ...styles.container, ...t(className) }} {...extraProps}>
      {children}
    </MainView>
  );
};

export default View;
