import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#0183FF",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            className: "font-Fig",
          },
        }}
      />
      {/* <Stack.Screen name="Movie" component={EachMovie} /> */}
    </Stack.Navigator>
  );
};

export default StackNav;
