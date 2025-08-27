import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CardInfo from "../components/screens/home/cardinfo";
import Cardswipes from "../components/screens/home/cards";
import TopBar from "../components/screens/home/topbar";

export default function Home() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <LinearGradient
            colors={["#FFEFF1", "#FFD6DB"]}
            style={styles.background}
          />

          <View>
            <TopBar />
          </View>

          <View>
            <Cardswipes />
          </View>

          <View>
            <CardInfo />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    // backgroundColor: "#fff",
  },
  scrollContent: {
    flexGrow: 1,
    // paddingBottom: 40,
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
    opacity: 0.3,
  },
});
