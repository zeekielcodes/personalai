import { View, Text, Image, useWindowDimensions } from "react-native";
import React from "react";

export default function SingleSlide({ item }) {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{ width }}
      className="flex-1 justify-center items-center space-y-6"
    >
      <Image source={item.image} className="h-[300px] w-full" />
      <View className="px-6 py-2">
        <Text className="text-3xl text-center mb-4 text-main font-Fig">
          {item.title}
        </Text>
        <Text className="text-base text-center text-gray-500 font-SFMedium">
          {item.description}
        </Text>
      </View>
    </View>
  );
}
