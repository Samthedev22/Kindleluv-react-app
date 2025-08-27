import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function DistancePreference() {
  const [distance, setDistance] = useState(20);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <LinearGradient
        colors={["#FFEFF1", "#FFD6DB"]}
        style={styles.background}
      />
      <View style={styles.container}>
        <Ionicons
          name="chevron-back"
          size={24}
          color="black"
          style={styles.backIcon}
          onPress={() => router.push("/onboarding/step4-questions")}
        />
        <Text style={styles.title}>Choose your distance preference</Text>
        <Text style={{ padding: 10, marginBottom: 20 }}>
          Choose a maximum location to find your soulmate with the slider below
        </Text>

        {/*Distance bar */}
        <Text style={{ marginBottom: 10 }}>
          Maximum distance: {distance} km
        </Text>

        <Slider
          minimumValue={1}
          maximumValue={100}
          thumbTintColor="white"
          minimumTrackTintColor="red"
          maximumTrackTintColor="gray"
          step={1}
          value={distance}
          onValueChange={setDistance}
          style={{ height: 50, marginBottom: 30 }}
        />

        <TouchableOpacity
          onPress={() => router.push("/onboarding/step4-questions" as any)}
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
    padding: 20,
    justifyContent: "flex-start",
    marginTop: 60,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
  },
  backIcon: {
    transform: [{ translateY: -80 }, { translateX: -5 }],
    fontSize: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  nextBtn: {
    backgroundColor: "white",
    textAlign: "center",
    color: "black",
    fontSize: 16,
    fontWeight: "500",
    borderRadius: 20,
    padding: 15,
    transform: [{ translateY: 100 }],

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    //shadow for Andriod
    elevation: 3,
  },
});
