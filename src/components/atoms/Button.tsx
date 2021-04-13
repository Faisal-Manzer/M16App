import React from 'react';
import { TouchableOpacity } from 'react-native';

import { t } from 'helpers';
import { ClassName } from 'interfaces/application';
import { Text } from 'components/atoms/typography';

export interface Props {
  onPress?: () => void;
  className?: ClassName;
  title?: string;
}

const styles = {
  container: t('bg-app-light', 'px-3', 'py-2', 'rounded'),
};

const Button: React.FC<Props> = ({ children, onPress, className = '', title }) => (
  <TouchableOpacity
    activeOpacity={0.75}
    onPress={onPress}
    style={{ ...styles.container, ...t(className) }}
  >
    {title && <Text className='text-white text-center text-lg font-bold'>{title}</Text>}
    {children}
  </TouchableOpacity>
);

export default Button;
