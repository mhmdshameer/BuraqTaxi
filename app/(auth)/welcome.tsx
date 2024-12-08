import { onboarding } from "@/constants";
import { router } from "expo-router";
import { useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-base font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full " />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full " />
        }
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex justify-center items-center">
            <Image source={item.image} className="w-full h-[300px]" resizeMode="contain" />
            <Text>{item.title}</Text>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default Onboarding;
