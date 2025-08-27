import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Profile() {
 
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={["#FFEFF1", "#FFD6DB"]}
          style={styles.background}
        />
        <ScrollView
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <Pressable>
              <Ionicons
                name="chevron-back"
                size={24}
                onPress={() => router.push("/")}
              />
            </Pressable>
            <Text className="text-xl font-medium text-center">Settings</Text>
            <TouchableOpacity className="">
              <Text className="bg-red-500 rounded-xl text-white p-2 px-6">Save</Text>
            </TouchableOpacity>
          </View>

          {/* Profile Image */}
          <View className="flex items-center mt-5 mb-2">
            <Image
              source={require("../assets/img/lady3.png")}
              style={{width: 100, height: 100, borderRadius: 100, marginBottom: 4}}
            />
            <Text className="font-normal text-lg">James, 26</Text>
            <Text className="font-normal text-lg">Edit</Text>
          </View>

          <div className="w-[395px] h-[.1px] bg-gray-600 self-center"/>
          {/* Peferences */}
          <View className="p-3 px-5 space-y-1">
          <Text className="font-medium text-lg self-start">Dating Pefrence</Text>
          <View>
             <Text className="font-medium self-start mb-1">Interested in</Text>  
            <View className="flex flex-row items-center bg-white justify-between p-5 rounded-2xl">
              <Text className="hover:bg-red-500">Male</Text>
              <Text>Female</Text>
              <Text>Everone</Text>
            </View>          
          </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 10,
  }
});
