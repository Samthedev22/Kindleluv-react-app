import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateProfile() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <LinearGradient
        colors={["#FFEFF1", "#FFD6DB"]}
        style={styles.background}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Create Your Profile</Text>

        <MaterialCommunityIcons
          style={styles.actProfile}
          name="account-circle"
          size={140}
          color="black"
        />

        <Text style={styles.titleName}>Preferred Name</Text>
        <TextInput placeholder="Full Name" style={styles.input} />

        <Text style={styles.titleName}>Age</Text>
        <TextInput
          placeholder="Age"
          keyboardType="numeric"
          style={styles.input}
        />

        <Text style={styles.titleName}>Gender</Text>
        <TextInput placeholder="Gender" style={styles.input} />

        <TouchableOpacity
          onPress={() => router.push("/onboarding/step2-pref" as any)}
        >
          <Text style={styles.nextBtn}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "arial",
  },
  actProfile: {
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 20,
  },
  titleName: {
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,

    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 3,
  },
  nextBtn: {
    backgroundColor: "white",
    textAlign: "center",
    color: "black",
    fontSize: 16,
    fontWeight: "500",
    borderRadius: 10,
    padding: 15,
    transform: [{ translateY: 30 }],

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    //shadow for Andriod
    elevation: 3,
  },
});
