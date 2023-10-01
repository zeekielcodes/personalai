import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import PreLoader from "./components/PreLoader";
// import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import Loading from "./components/loading";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./components/ScreenNavigator";
import { useState } from "react";

export default function App() {
  const [preloader, setPreloader] = useState(true);
  const [fontsLoaded] = useFonts({
    Figtree: require("./assets/fonts/Figtree-VariableFont_wght.ttf"),
    SFBlack: require("./assets/fonts/SF-Pro-Text-Black.otf"),
    SFMedium: require("./assets/fonts/SF-Pro-Text-Medium.otf"),
    SFLight: require("./assets/fonts/SF-Pro-Text-Light.otf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      <View className="flex-1">
        {/* <Text className="text-red-600">
        Open up App.js to start working on your app!
      </Text> */}
        {preloader ? <PreLoader setPreloader={setPreloader} /> : <StackNav />}
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
