import React from "react";

import { ClassName } from "interfaces/application";
import Icon from "react-native-vector-icons/Ionicons";

import { Button } from "components/atoms";
import { Props as ButtonProps } from "components/atoms/Button";

interface Props extends ButtonProps {
  className?: ClassName;
  icon?: string;
}

const RoundedButton: React.FC<Props> = ({ children, icon, className = '', ...extraProps }) => {
  return (
    <Button className={`rounded-full w-16 h-16 flex justify-center items-center ${className}`}>
      {icon && <Icon name={icon} size={30} color="#FFF" />}
      {children}
    </Button>
  );
};

export default RoundedButton;
