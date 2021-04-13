import React from 'react';

import { ClassName } from 'interfaces/application';
import Text from 'components/atoms/typography/Text';
import { c } from 'helpers';

interface Props {
  onPress?: () => void;
  className?: ClassName;
}

const ScreenTitle: React.FC<Props> = ({ children, className = '' }) => (
  <Text className={c('text-app', 'text-4xl', className)}>{children}</Text>
);

export default ScreenTitle;
