import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function FaceVerification() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer}>
        <LinearGradient
          colors={["#FFEFF1", "#FFD6DB"]}
          style={styles.background}
        />
        <Ionicons
          name="chevron-back"
          size={24}
          color="black"
          onPress={() => router.push("/onboarding/step6-details" as any)}
        />

        <View style={styles.container}>
          <MaterialCommunityIcons
            name="face-recognition"
            size={80}
            color="black"
          />

          <Text style={styles.headerText}>Let's Confirm Your Identity!</Text>
          <Text style={styles.subText}>
            Scan Your Face to verify you are human
          </Text>

          <TouchableOpacity style={styles.verifyBtn}>
            <Text style={styles.verifyText}>Verify My Identity</Text>
          </TouchableOpacity>

          <Pressable onPress={() => router.push("/")}>
            <Text className="text-xl mt-5">Home</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
    opacity: 0.7,
  },
  headerText: {
    fontWeight: "600",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  subText: {
    textAlign: "center",
  },
  verifyBtn: {
    top: 0,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginTop: 50,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,

    elevation: 3,
  },
  verifyText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});
