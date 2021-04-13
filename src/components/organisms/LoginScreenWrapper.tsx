import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ImageBackground, StyleSheet } from 'react-native';

import { RootStackParamList } from 'interfaces/application';
import { Screen } from 'components/organisms';
import { View, RoundedButton } from 'components/atoms';
import { ScreenTitle, Subtitle } from 'components/atoms/typography';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  title: string;
  subtitle: string;
  action: () => void;
  helpertext?: any;
};

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: 200,
    overflow: 'hidden',
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
    height: 200,
    top: undefined,
  },
});

const LoginScreenBG = require('assets/LoginScreenBG.png');

const LoginScreen: React.FC<Props> = ({ children, title, subtitle, helpertext, action }) => (
  <Screen>
    <View className='flex-1' keyboard>
      <ImageBackground source={LoginScreenBG} style={styles.bgImage} imageStyle={styles.image}>
        <View className='px-4 py-12 flex-1'>
          <ScreenTitle>{title}</ScreenTitle>
          <Subtitle>{subtitle}</Subtitle>
          <View className='flex-row'>{children}</View>
          <View className='m-4 mt-8 flex-row items-center'>
            <View className='flex-1'>{helpertext}</View>
            <RoundedButton icon='arrow-forward-sharp' onPress={action} />
          </View>
        </View>
      </ImageBackground>
    </View>
  </Screen>
);

export default LoginScreen;
