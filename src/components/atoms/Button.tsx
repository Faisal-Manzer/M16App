import React from 'react';
import { TouchableOpacity } from 'react-native';

import { t } from 'helpers';
import { ClassName } from 'interfaces/application';

export interface Props {
  onPress?: () => void;
  className?: ClassName;
}

const styles = {
  container: t('bg-app-light', 'px-3', 'py-1', 'rounded-full'),
};

const Button: React.FC<Props> = ({ children, onPress, className = '' }) => (
  <TouchableOpacity
    activeOpacity={0.95}
    onPress={onPress}
    style={{ ...styles.container, ...t(className) }}
  >
    {children}
  </TouchableOpacity>
);

export default Button;
