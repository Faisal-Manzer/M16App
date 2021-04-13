import React from "react";
import { TouchableOpacity } from "react-native";

import { c } from "helpers";

interface Props {
  onPress?: () => void;
}

const styles = {
  container: c('bg-blue-200', 'px-3', 'py-1', 'rounded-full'),
}

const Button: React.FC<Props> = ({ children, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.95} onPress={onPress} style={styles.container}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
