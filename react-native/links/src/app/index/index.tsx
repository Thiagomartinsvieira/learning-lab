import { Text, View } from "react-native";
import { styles } from "./styles";

const Index = () => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.title}>React Native!</Text>
    </View>
  );
};

export default Index;
