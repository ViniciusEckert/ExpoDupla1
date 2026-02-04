import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import React from "react";
import { Image, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 70,
          paddingTop: 5,
          shadowColor: "#00000034",
          shadowRadius: 2,
          shadowOffset: {
            width: 0,
            height: -1,
          },
          elevation: 8,
          position: "absolute",
        },
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={30}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="cell"
        options={{
          headerShown: false,
          title: "Dispositivos",
          tabBarIcon: () => (
            <Image style={s.tabIcon} source={require("@/assets/cel.png")} />
          ),
        }}
      />
      <Tabs.Screen
        name="fac"
        options={{
          headerShown: false,
          title: "Industria",
          tabBarIcon: () => (
            <Image style={s.tabIcon} source={require("@/assets/fac.png")} />
          ),
        }}
      />
      <Tabs.Screen
        name="car"
        options={{
          headerShown: false,
          title: "Veículos",
          tabBarIcon: () => (
            <Image style={s.tabIcon} source={require("@/assets/car.png")} />
          ),
        }}
      />
    </Tabs>
  );
}

const s = StyleSheet.create({
  tabIcon: {
    height: 30,
    width: 30,
  },
});
