import { colors } from "@/styles/colors";
import { Stack } from "expo-router";

const layout = () => {
  const backgroundColor = colors.gray[950];
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor },
      }}
    />
  );
};

export default layout;
