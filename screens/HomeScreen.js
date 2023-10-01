import { View, Image, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import Checkbox from "expo-checkbox";
import FontAwesome5Brands from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function HomeScreen({ navigation }) {
  const [messenger, setMessenger] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [whatsapp, setwhatsApp] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [message, setMessage] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Permission",
    });
  }, []);
  return (
    <View className="flex-1 p-6 items-center">
      <Image
        source={require("../assets/images/bluelogo.png")}
        className="h-12 w-12 mb-6"
      />
      <Text className="font-SFLight text-base text-center">
        To use Personal Assistant's automated response features, the app
        requires permission to these apps to understand your chat patterns.
      </Text>
      <View className="flex items-center flex-1 space-y-3 my-6">
        <View className="flex gap-2 flex-row items-center">
          <Checkbox
            value={messenger}
            className="h-6 w-6"
            onValueChange={setMessenger}
          />
          <Text className="font-SFMedium text-base">
            Allow access to Messenger
          </Text>
          <FontAwesome5Brands
            name="facebook-messenger"
            size={20}
            color="#00B2FF"
          />
        </View>
        <View className="flex gap-2 flex-row items-center">
          <Checkbox
            value={twitter}
            className="h-6 w-6"
            onValueChange={setTwitter}
          />
          <Text className="font-SFMedium text-base">
            Allow access to Twitter/X
          </Text>
          <FontAwesome5Brands name="twitter" size={20} color="#00ACEE" />
        </View>
        <View className="flex gap-2 flex-row items-center">
          <Checkbox
            value={whatsapp}
            className="h-6 w-6"
            onValueChange={setwhatsApp}
          />
          <Text className="font-SFMedium text-base">
            Allow access to WhatsApp
          </Text>
          <FontAwesome5Brands name="whatsapp" size={20} color="#075e54" />
        </View>
        <View className="flex gap-2 flex-row items-center">
          <Checkbox
            value={instagram}
            className="h-6 w-6"
            onValueChange={setInstagram}
          />
          <Text className="font-SFMedium text-base">
            Allow access to Instagram
          </Text>
          <FontAwesome5Brands name="instagram" size={20} color="#bc2a8d" />
        </View>
        <View className="flex gap-2 flex-row items-center">
          <Checkbox
            value={message}
            className="h-6 w-6"
            onValueChange={setMessage}
          />
          <Text className="font-SFMedium text-base">
            Allow access to Messages
          </Text>
          <AntDesign name="message1" size={20} color="black" />
        </View>
      </View>
      <TouchableOpacity>
        <Text className="bg-main text-white px-6 py-2 rounded text-lg">
          Proceed
        </Text>
      </TouchableOpacity>
    </View>
  );
}
