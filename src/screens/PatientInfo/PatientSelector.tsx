import React from 'react';
import { Image } from 'react-native';

import { View } from 'components/atoms';
import { Text } from 'components/atoms/typography';
import { t } from 'helpers';

interface Props {
  active?: boolean;
  name: string;
  image: string;
}

export const PatientSelector: React.FC<Props> = ({ active = false, name, image }) => (
  <View className={['p-2 mx-2 border-app-light items-center', { 'border-b-4': active }]}>
    <View
      className={[
        'w-16 h-16 rounded-full bg-gray-200 border-app-light',
        { 'border-4': active, 'p-1': !active },
      ]}
    >
      <Image style={t('rounded-full')} source={{ uri: image }} width={56} height={56} />
    </View>
    <Text
      className={[
        'mt-2 text-gray-500',
        { 'text-gray-500': !active, 'text-app-light font-bold': active },
      ]}
    >
      {name}
    </Text>
  </View>
);
