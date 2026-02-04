import dados from "@/assets/constants/mockCar";
import { ItemCar } from "@/components/item";
import { router } from "expo-router";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const voltar = () => {
    router.push("/");
  };

  return (
    <>
      <TouchableOpacity style={s.touch} onPress={voltar}>
        <Text style={s.backbtn}>❌</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={s.wrap}>
          <FlatList
            data={dados}
            renderItem={({ item }) => (
              <ItemCar
                name={item.nome}
                image={item.imagem}
                functio={item.funcao}
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
  backbtn: {
    fontSize: 30,
    padding: 10,
  },
});
