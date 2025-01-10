import { Image, ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

import { images } from "../constants";

export default function Index() {
  const logoStyle = {
    width: 130,
    height: 200,
    marginTop: -20,
    marginBottom: -40, // Reduz a distância abaixo da logo
  };
  const cardsStyle = {
    maxWidth: 380, // Corresponde a max-w-[380px]
    width: "100%", // Corresponde a w-full
    height: 300,   // Corresponde a h-[300px]
  };
  const pathStyle = {
    width: 136,
    height: 15,
    position: "absolute", // Adiciona posicionamento absoluto
    bottom: -10, // Equivalente a -bottom-2
    right: -36, // Equivalente a -right-8
  };
  


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center h-full px-4">
          <Image
            source={images.logo}
            style={logoStyle} // Estilos aplicados diretamente
            resizeMode="contain"
          />
          <Image
          source={images.cards}
          style={cardsStyle}
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless {"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image 
            source={images.path}
            style={pathStyle}
            resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
