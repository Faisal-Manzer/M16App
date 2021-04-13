import React from "react";
import "react-native-gesture-handler";

import Analytics from "appcenter-analytics";
import AppCenter from "appcenter";
import codePush from "react-native-code-push";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";

import RNBootSplash from "react-native-bootsplash";

import { HomeScreen } from "./src/screens";
import store from "./src/store";

const Stack = createStackNavigator();

const App = () => {
  React.useEffect(() => {
    RNBootSplash.hide({ fade: true });
    Analytics.trackEvent("App Opened");
    AppCenter.isEnabled().then((enabled) => console.log(`App center enabled: ${enabled}`));
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">{(props) => <HomeScreen {...props} />}</Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default codePush()(App);
