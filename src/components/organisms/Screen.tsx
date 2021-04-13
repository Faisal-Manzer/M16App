import React from "react";
import { SafeAreaView, View } from "react-native";
import { c } from "helpers";


interface Props {
  className?: string
}

const styles = {
  container: c('h-full', 'bg-white'),
};

const Screen: React.FC<Props> = ({ children, className = '' }) => {

  return (
    <SafeAreaView>
      <View style={{ ...styles.container, ...c(className) }}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Screen;
