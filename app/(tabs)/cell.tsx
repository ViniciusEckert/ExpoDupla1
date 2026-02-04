import dados from "@/assets/constants/mockCel";
import { ItemCel } from "@/components/item";
import { router } from "expo-router";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
export default function TabTwoScreen() {
  const voltar = () => {
    router.push("/");
  };
  return (
    <>
      <TouchableOpacity style={s.touch} onPress={voltar}>
        <Text style={s.backBtn}>❌</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={s.wrap}>
          <FlatList
            data={dados}
            renderItem={({ item }) => (
              <ItemCel
                name2={item.nome}
                functio2={item.funcao}
                image2={item.imagem}
              />
            )}
          ></FlatList>
        </View>
      </ScrollView>
    </>
  );
}

const s = StyleSheet.create({
  wrap: {
    marginBottom: 70,
  },

  touch: {
    borderBottomWidth: 2,
  },

  title: {
    fontSize: 30,
  },

  backBtn: {
    fontSize: 30,
    padding: 10,
  },
});
