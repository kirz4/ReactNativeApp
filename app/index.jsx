import { Image, ScrollView, View, Text } from "react-native";
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
import  CustomButton  from "../components/CustomButton"
import { Redirect, router} from 'expo-router'
import Test from "../components/test"

import { images } from "../constants";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const {isLoading, isLoggedIn } = useGlobalContext
  if(!isLoading && isLoggedIn ) return <Redirect href="/home"/>
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
        <View className="w-full items-center h-2 px-4"
        style={{ flex: 1, justifyContent: "center", marginTop:-60}}
>
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[160px]"
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
          <Text className="text-sm mt-10 text-center "
            style={{
              // marginTop: 32,  Corresponde a mt-8
              color: "#CDCDE0",}}>
                Where creativity meets innovation: embark on journey of limitless exploration with Aora
          </Text>
          <CustomButton
          title="Continue with Email"
          handlePress={() => router.push('/sign-in')}
          containerStyles="w-full mt-8"
          />

        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}
