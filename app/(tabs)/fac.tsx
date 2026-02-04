import dados from "@/assets/constants/mockFac";
import { ItemFac } from "@/components/item";
import { router } from "expo-router";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Fac() {
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
              <ItemFac
                name3={item.nome}
                image3={item.imagem}
                functio3={item.funcao}
              />
            )}
          ></FlatList>
        </View>
      </ScrollView>
    </>
  );
}

const s = StyleSheet.create({
  title: {
    fontSize: 30,
  },

  backBtn: {
    fontSize: 30,
    padding: 10,
  },
  wrap: {
    marginBottom: 70,
  },
  touch: {
    borderBottomWidth: 2,
  },
});
