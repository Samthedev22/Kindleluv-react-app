import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Image, View } from "react-native";

export default function TopBar() {
  return (
    <View
      style={{
        position: "fixed",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <MaterialCommunityIcons
        name="tune-variant"
        size={24}
        color="black"
        style={{
          borderRadius: 100,
          borderWidth: 1,
          borderColor: "gray",
          padding: 4,
          alignSelf: "center",
        }}
      />
      <Image
        source={require("../../../assets/img/guy.png")}
        style={{
          height: 40,
          width: 40,
          borderRadius: 100,
          objectFit: "cover",
          shadowColor: "black",
          shadowOffset: { height: 1, width: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
        }}
      />
    </View>
  );
}
