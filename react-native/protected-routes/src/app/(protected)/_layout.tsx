import { Redirect, Stack } from "expo-router";

const isLoggedIn = false;

export default function ProtectedLayout() {
  if (!isLoggedIn) {
    return <Redirect href="/signin" />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
}
