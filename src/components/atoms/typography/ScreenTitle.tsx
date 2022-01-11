import React from 'react';

import { Text, TextProps } from 'react-native';

// import Text from 'components/atoms/typography/Text';
import WithClassName from 'hocs/WithClassName';

// interface Props {
//   onPress?: () => void;
//   className?: ClassName;
// }

// const ScreenTitle: React.FC<Props> = ({ children, className = '' }) => (
//   <Text className={c('text-app', 'text-4xl', className)}>{children}</Text>
// );

const ScreenTitle = WithClassName<TextProps>(Text, {
  className: ['text-app', 'text-4xl'],
});

export default ScreenTitle;
