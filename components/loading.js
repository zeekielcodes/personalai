import { View, Text, Image } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";

export default function Loading() {
  return (
    <View className="flex-1 bg-black justify-center items-center">
      {/* <Image
        source={require("../assets/images/bluelogo.png")}
        className="h-[120px] w-[120px] animate-pulse
        "
      /> */}
      <Progress.Circle
        className=""
        indeterminate={true}
        size={100}
        color={"#FFFFFF"}
      />
    </View>
  );
}
