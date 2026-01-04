import { useAuth } from "@/hooks/useAuth";
import { Button, View } from "react-native";

export default function Signin() {
  const { signIn } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Entrar" onPress={signIn} />
    </View>
  );
}
