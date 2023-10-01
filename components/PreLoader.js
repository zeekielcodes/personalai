import { View, Text, FlatList, Animated } from "react-native";
import React, { useState, useRef } from "react";
import preload from "./preload";
import SingleSlide from "./SingleSlide";
import Indicator from "./Indicator";
import Navigate from "./Navigate";

export default function PreLoader({ setPreloader }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View className="flex-1 py-6">
      <FlatList
        data={preload}
        renderItem={({ item }) => <SingleSlide key={item.id} item={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        pagingEnabled
        bounces={false}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slideRef}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
      />
      <Indicator data={preload} scrollX={scrollX} />
      <Navigate
        data={preload}
        slideRef={slideRef}
        currentIndex={currentIndex}
        setPreloader={setPreloader}
      />
    </View>
  );
}
