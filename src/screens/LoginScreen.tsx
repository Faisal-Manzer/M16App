import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { ImageBackground, StyleSheet, Text } from "react-native";

import { RootStackParamList } from "interfaces/application";
import { Screen } from "components/organisms";
import { View } from "components/atoms";
import { ScreenTitle, Subtitle } from "components/atoms/typography";
import { TextInput } from "components/atoms/form";

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const styles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: 200,
    overflow: "hidden",
    flex: 1
  },
  image: {
    resizeMode: "cover",
    height: 200,
    top: undefined
  }
});

const LoginScreenBG = require("assets/LoginScreenBG.png");

const LoginScreen: React.FC<Props> = () => {
  return (
    <Screen>
      <View className="flex-1" keyboard={true}>
        <ImageBackground source={LoginScreenBG} style={styles.bgImage} imageStyle={styles.image}>
          <View className="px-4 py-16 flex-1">
            <ScreenTitle>
              Hello!
            </ScreenTitle>
            <Subtitle>
              Please enter your Phone No.
            </Subtitle>
            <View className="flex-row mt-8">
              <TextInput className="w-12 mx-2" placeholder="+ 91" disabled={true} defaultValue="+ 91" />
              <TextInput className="flex-1" keyboardType="numeric" />
            </View>
          </View>
        </ImageBackground>
      </View>
    </Screen>
  );
};

export default LoginScreen;
