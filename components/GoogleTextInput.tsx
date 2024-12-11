import { GoogleInputProps } from "@/types/type";
import { Text, View } from "react-native";

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => (
  <View className={`flex flex-row items-center justify-center relative z-50 mb-5 rounded-xl ${containerStyle}`}>
    <Text>Search</Text>
  </View>
);

export default GoogleTextInput;
