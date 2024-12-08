import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding = () => {
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity>
        <Text className="text-primary-500 font-JakartaBold">
          Skip
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding;
