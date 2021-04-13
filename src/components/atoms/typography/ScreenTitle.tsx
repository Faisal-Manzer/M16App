import React from "react";
import { Text } from "react-native";

import { c } from "helpers";
import { ClassName } from "interfaces/application";

interface Props {
  onPress?: () => void;
  className?: ClassName;
}

const styles = {
  container: c( "text-app", "text-4xl"),
};

const ScreenTitle: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <Text style={{ ...styles.container, ...c(className) }}>
      {children}
    </Text>
  );
};

export default ScreenTitle;
