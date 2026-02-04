import { router } from "expo-router";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const image = require("@/assets/bgIndex.png");

  return (
    <>
      <SafeAreaView style={s.wrap}>
        <View style={s.nav}>
          <Text style={s.title}>Anthony e Vinicius</Text>
        </View>
      </SafeAreaView>
      <View style={s.wrap2}>
        <ImageBackground style={s.bg} source={image} resizeMode="cover">
          <Image style={s.logo} source={require("@/assets/logo.png")} />
          <TouchableOpacity
            style={s.tabsBtn}
            onPress={() => router.push("/(tabs)/car")}
          >
            <Text>Ir para as Tabs</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </>
  );
}

const s = StyleSheet.create({
  wrap: {
    flex: 1,
    zIndex: 2,
  },

  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  wrap2: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },

  nav: {
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    backgroundColor: "rgb(165, 165, 165)",
  },

  title: {
    color: "#090909",
  },

  tabsBtn: {
    backgroundColor: "rgb(102, 179, 189)",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: -2,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,

    elevation: 8,

    fontWeight: 700,
    marginTop: 50,
    padding: 10,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 300,
    borderRadius: 999,
  },
});
