import { Screen } from 'components/organisms';
import React from 'react';

import { View } from 'components/atoms';
import { Text } from 'components/atoms/typography';
import { PatientImage } from 'screens/PatientInfo/PatientImage';
import Counter from 'components/organisms/Counter';

const PatientInfo: React.FC = () => (
  <Screen>
    <View className='bg-gray-100 flex-1'>
      <View className='px-4 flex-row bg-white border-b-2 border-gray-200'>
        <PatientImage name='Faisal Manzer' image='https://picsum.photos/200/200' active />
        <PatientImage name='Farzan Manzer' image='https://picsum.photos/200/200' />
      </View>
      <View className='flex-1 p-4'>
        <View className='my-4'>
          <Counter />
        </View>
        <View className='bg-white rounded-lg p-4 border border-gray-200'>
          <View className='flex-row'>
            <View>
              <Text className='border-gray-700 text-xl font-bold'>Faisal Manzer</Text>
              <Text className='text-gray-500 text-lg'>909771885</Text>
            </View>
            <View className='bg-gray-200 w-0.5 mx-4' />
            <View>
              <Text className='text-gray-500'>24 years old</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  </Screen>
);

export default PatientInfo;
