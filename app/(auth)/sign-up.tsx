import { router } from "expo-router";
import { useRef, useState } from "react";
import {  Text, TouchableOpacity,  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { onboarding } from "@/constants";

const SignUp = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-base font-JakartaBold">Sign-up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;
