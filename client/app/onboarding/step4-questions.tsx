import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function Interest() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.wrapcontainer}>
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
          onPress={() => router.push("/onboarding/step1-profile" as any)}
        />

        <Text style={styles.title}>Answer one of these questions</Text>

        {[
          "what do you hope to experience on a first date?",
          "what are your pet peeve",
        ].map((questions, index) => (
          <View key={index} style={styles.option}>
            <Text style={styles.optionText}>{questions}</Text>
            <TextInput
              placeholder={"Answer"}
              placeholderTextColor="#888"
              style={styles.answerInput}
            />
          </View>
        ))}

        <TouchableOpacity
          onPress={() => router.push("/onboarding/step5-purpose" as any)}
        >
          <Text style={styles.nextBtn}>Next</Text>
        </TouchableOpacity>

        <Text
          style={{
            backgroundColor: "transparent",
            textAlign: "center",
            transform: [{ translateY: 120 }],
          }}
        >
          You can later change this preference under settings{" "}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 30,
    justifyContent: "flex-start",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
  },
  wrapcontainer: {
    flex: 1,
  },
  backIcon: {
    transform: [{ translateY: -30 }, { translateX: -5 }],
    fontSize: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 40,
    marginTop: 20,
    textAlign: "center",
  },
  option: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 20,
    marginVertical: 10,

    //shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    //shadow for Andriod
    elevation: 3,
  },
  optionText: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "500",
    paddingLeft: 20,
  },
  answerInput: {
    backgroundColor: "#E5E5E5",
    height: 10,
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
    color: "black",
  },
  nextBtn: {
    backgroundColor: "white",
    textAlign: "center",
    color: "black",
    fontSize: 16,
    fontWeight: "500",
    borderRadius: 20,
    padding: 15,
    marginTop: 40,
    transform: [{ translateY: 10 }],

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    //shadow for Andriod
    elevation: 3,
  },
});
