import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
const WrapperContainer = ({
  children,
  bgColor = "#ffff",
  statusBarColor = "#87CEEB",
  barStyle = "dark-content",
}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: statusBarColor,
      }}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <View 
      style={{
        backgroundColor: bgColor, 
        flex: 1}}>{children}</View>
    </SafeAreaView>
  );
};

export default React.memo(WrapperContainer);
