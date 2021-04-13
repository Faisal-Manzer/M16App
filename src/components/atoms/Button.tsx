import React from "react";
import { TouchableOpacity } from "react-native";

import { c } from "helpers";
import { ClassName } from "interfaces/application";

export interface Props {
  onPress?: () => void;
  className?: ClassName;
}

const styles = {
  container: c("bg-app-light", "px-3", "py-1", "rounded-full")
};

const Button: React.FC<Props> = ({ children, onPress, className = "" }) => {
  return (
    <TouchableOpacity activeOpacity={0.95} onPress={onPress} style={{ ...styles.container, ...c(className) }}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
