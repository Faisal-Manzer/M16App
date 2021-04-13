import React from 'react';

import { ClassName } from 'interfaces/application';
import Text from 'components/atoms/typography/Text';
import { c } from 'helpers';

interface Props {
  onPress?: () => void;
  className?: ClassName;
}

const Subtitle: React.FC<Props> = ({ children, className = '' }) => (
  <Text className={c('text-gray-700', 'text-lg', className)}>{children}</Text>
);

export default Subtitle;
