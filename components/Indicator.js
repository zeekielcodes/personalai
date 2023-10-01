import { View, Animated, useWindowDimensions, Text } from "react-native";
import React, { useState } from "react";

export default function Indicator({ data, scrollX }) {
  const { width } = useWindowDimensions();

  return (
    <View className="flex flex-row gap-4 p-4 justify-center items-center h-8 mb-6">
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[{ width: dotWidth, opacity: opacity }]}
            className="h-3 rounded-full bg-main"
            key={_.id}
          />
        );
      })}
    </View>
  );
}
