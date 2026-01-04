import { useAuth } from "@/hooks/useAuth";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Redirect href="/signIn" />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
}
