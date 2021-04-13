import React from 'react';
import { Text as RNText } from 'react-native';

import { t } from 'helpers';
import { ClassName } from 'interfaces/application';

interface Props {
  onPress?: () => void;
  className?: ClassName;
}

const styles = {
  container: t(),
};

const Text: React.FC<Props> = ({ children, className = '' }) => (
  <RNText style={{ ...styles.container, ...t(className) }}>{children}</RNText>
);

export default Text;
