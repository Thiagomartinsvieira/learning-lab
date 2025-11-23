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

      <Category name="Projects" icon="code" />
      <Category name="Site" icon="language" />
      <Category name="Video" icon="movie" />
    </View>
  );
};

export default Index;
