import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

export default function Navigate({
  data,
  slideRef,
  currentIndex,
  setPreloader,
}) {
  const navigation = useNavigation();
  const prevSlide = () => {
    if (currentIndex > 0) {
      slideRef.current.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  const nextSlide = () => {
    if (currentIndex < data.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const navigateSlide = () => {
    if (currentIndex < data.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      // navigation.navigate("HomeScreen");
      setPreloader(false);
    }
  };

  return (
    <View className="flex flex-row w-full flex-1 justify-center items-center">
      <TouchableOpacity
        onPress={navigateSlide}
        className="h-[100px] w-[100px] bg-main flex justify-center items-center rounded-full p-4"
      >
        <Feather
          name={currentIndex < data.length - 1 ? "corner-down-right" : "home"}
          size={40}
          color="white"
        />
      </TouchableOpacity>

      {/* <TouchableOpacity
        onPress={prevSlide}
        className="px-4"
        disabled={currentIndex < 1}
      >
        <Text
          className={`${currentIndex < 1 ? "text-gray-300" : "text-main"} `}
        >
          Back
        </Text>
      </TouchableOpacity>
      {currentIndex < data.length - 1 && (
        <TouchableOpacity className="px-4" onPress={nextSlide}>
          <Text className="text-main">Next</Text>
        </TouchableOpacity>
      )} */}
    </View>
  );
}
