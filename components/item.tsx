//import { Image } from "expo-image";

import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

export const ItemCar = ({
  name,
  functio,
  image,
}: {
  name: string;
  functio: string;
  image: ImageSourcePropType;
}) => {
  return (
    <View style={s.itemList}>
      <Image style={s.imageStyle} source={image} />
      <Text style={s.txt1}>{name}</Text>
      <Text style={s.txt2}>{functio}</Text>
    </View>
  );
};

export const ItemCel = ({
  name2,
  functio2,
  image2,
}: {
  name2: string;
  functio2: string;
  image2: ImageSourcePropType;
}) => {
  return (
    <View style={s.itemList}>
      <Image style={s.imageStyle} source={image2} />
      <Text style={s.txt1}>{name2}</Text>
      <Text style={s.txt2}>{functio2}</Text>
    </View>
  );
};

export const ItemFac = ({
  name3,
  functio3,
  image3,
}: {
  name3: string;
  functio3: string;
  image3: ImageSourcePropType;
}) => {
  return (
    <View style={s.itemList}>
      <Image style={s.imageStyle} source={image3} />
      <Text style={s.txt1}>{name3}</Text>
      <Text style={s.txt2}>{functio3}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  itemList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 1.2313,
    backgroundColor: "#87fbff79",
    margin: 10,
    padding: 10,
    borderColor: "#363c69",
    borderWidth: 2,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#363c69",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4.65,

    elevation: 8,
  },
  txt1: {
    fontWeight: 700,
    fontSize: 22,
  },
  txt2: {
    fontWeight: 500,
    fontSize: 18,
    textAlign: "center",
  },
});
