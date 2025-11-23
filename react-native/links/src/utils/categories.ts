import { MaterialIcons } from "@expo/vector-icons";

type Category = {
  id: string;
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const categories: Category[] = [
  { id: "1", name: "Curso", icon: "school" },
  { id: "2", name: "Exercícios", icon: "fitness-center" },
  { id: "3", name: "Avaliações", icon: "assessment" },
  { id: "4", name: "Projetos", icon: "build" },
  { id: "5", name: "Anotações", icon: "notes" },
  { id: "6", name: "Certificados", icon: "verified" },
];
