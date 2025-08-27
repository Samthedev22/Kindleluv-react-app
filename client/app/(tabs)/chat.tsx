import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import chatMessage, { chatType } from "../data/chatdata";

type ItemProps = {
  item: chatType;
};

const Item = ({ item }: ItemProps) => (
  <View style={styles.container}>
    {/* <View className="flex flex-row gap-x-5"> */}
    <View style={{ display: "flex", flexDirection: "row", gap: 15 }}>
      <Image
        source={item.image}
        style={{ width: 50, height: 50, borderRadius: 100 }}
      />
      <View style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Text style={{ fontSize: 20, fontWeight: 500 }}>{item.name}</Text>
        <Text>{item.message}</Text>
      </View>
    </View>
  </View>
);

export default function Chat() {
  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={["#FFEFF1", "#FFD6DB"]}
        style={styles.background}
      />
      <SafeAreaView style={styles.safeContainer}>
        <Text className="text-2xl font-bold pl-3">Chat Messages</Text>
        <FlatList
          data={chatMessage}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 20,
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  },
  container: {
    padding: 20,
    width: "100%",
    height: "100%",
  },
});
