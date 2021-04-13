import React, { useMemo } from "react";
import { View as RNView, KeyboardAvoidingView, Platform } from "react-native";

import { c } from "helpers";
import { ClassName } from "interfaces/application";

interface Props {
  onPress?: () => void;
  className?: ClassName;
  keyboard?: boolean;
}

const styles = {
  container: c()
};

const View: React.FC<Props> = ({ children, onPress, className = "", keyboard = false }) => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
  const { MainView, extraProps } = useMemo(() => ({
    MainView: keyboard ? KeyboardAvoidingView : RNView,
    extraProps: keyboard ? { behaviour: "position", keyboardVerticalOffset: keyboardVerticalOffset } : {}
  }), [keyboard]);

  return (
    <MainView style={{ ...styles.container, ...c(className) }} {...extraProps}>
      {children}
    </MainView>
  );
};

export default View;
