import React, { useMemo, useState } from "react";
import { TextInput as RNTextInput, TextInputProps } from "react-native";

import { c } from "helpers";
import { getColor } from "helpers/tailwind";
import { ClassName } from "interfaces/application";

interface Props extends TextInputProps {
  className?: ClassName;
  onFocus?: () => void;
  onBlur?: () => void;
  disabled?: boolean;
}

const styles = {
  input: (focused: boolean, disabled: boolean) => c("text-xl", "py-2", "border-b-2", {
    "border-app-light": focused && !disabled,
    "border-gray-300": !focused && !disabled,
    "border-gray-200": disabled,
    "text-gray-500": disabled
  })
};

const TextInput: React.FC<Props> = ({ className = "", onFocus, onBlur, disabled = false, ...extra }) => {
  const [focused, setFocused] = useState(false);
  const disabledProps = useMemo(() => (disabled ? { editable: false, selectTextOnFocus: false } : {}), [disabled]);

  const onFocusHandler = () => {
    setFocused(true);
    if (onFocus) onFocus();
  };
  const onBlurHandler = () => {
    setFocused(false);
    if (onBlur) onBlur();
  };

  return (
    <RNTextInput
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      style={{ ...styles.input(focused, disabled), ...c(className) }}
      placeholderTextColor={getColor('gray-400')}
      {...disabledProps}
      {...extra}
    />
  );
};

export default TextInput;
