import { Category } from "@/components/category";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const Index = () => {
  return (
    <View style={styles.constainer}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Category name="Projects" icon="code" isSelected />
      <Category name="Site" icon="language" isSelected={false} />
      <Category name="Video" icon="movie" isSelected={false} />
    </View>
  );
};

export default Index;
