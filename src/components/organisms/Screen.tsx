import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { t } from 'helpers';

interface Props {
  className?: string;
}

const styles = {
  container: t('h-full', 'bg-white'),
};

const Screen: React.FC<Props> = ({ children, className = '' }) => (
  <SafeAreaView>
    <View style={{ ...styles.container, ...t(className) }}>{children}</View>
  </SafeAreaView>
);

export default Screen;
