import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from 'interfaces/application';
import { View } from 'components/atoms';
import { TextInput } from 'components/atoms/form';
import { Text } from 'components/atoms/typography';
import LoginScreenWrapper from 'components/organisms/LoginScreenWrapper';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [otpSent, setOtpSend] = useState(false);

  const toggle = () => setOtpSend(!otpSent);

  return (
    <LoginScreenWrapper
      title={otpSent ? 'Got your number' : 'Hello!'}
      subtitle={
        otpSent ? 'Enter your OTP sent to you at 9097718815' : 'Please enter your Phone no.'
      }
      helpertext={otpSent ? <Text className='text-gray-400'>Resend code in 4 secs</Text> : null}
      navigation={navigation}
      action={toggle}
    >
      <View className='flex-row flex-1'>
        <TextInput className='w-12 mx-2' placeholder='+ 91' disabled />
        <TextInput className='flex-1' placeholder='Phone no.' />
      </View>
    </LoginScreenWrapper>
  );
};

export default LoginScreen;
