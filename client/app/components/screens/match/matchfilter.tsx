import Slider from "@react-native-community/slider";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function MatchFilter() {
  const translateX = useSharedValue(-width);
  const router = useRouter();

  React.useEffect(() => {
    translateX.value = withTiming(0, { duration: 300 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const handleBack = () => {
    translateX.value = withTiming(-width, { duration: 300 });
    setTimeout(() => {
      router.push("/");
    }, 300);
  };

  return (
    <Animated.View style={[styles.overlay, animatedStyle]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.closeBtn}>⬅</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Filters</Text>
        <Image source={require("../../../assets/img/image1.png")} style={{}} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Customize your interest</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.activeBtn}>
            <Text style={styles.btnText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveBtn}>
            <Text style={styles.inactiveText}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveBtn}>
            <Text style={styles.inactiveText}>Everyone</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
        <TouchableOpacity style={styles.locationBox}>
          <Text>Ottawa, Ontario</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Distance</Text>
        <Slider
          minimumValue={0}
          maximumValue={100}
          value={40}
          minimumTrackTintColor="#f43f5e"
        />
        <Text style={styles.sliderValue}>40 km</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Age</Text>
        <Slider
          minimumValue={18}
          maximumValue={60}
          value={28}
          minimumTrackTintColor="#f43f5e"
        />
        <Text style={styles.sliderValue}>20 - 28</Text>
      </View>

      <TouchableOpacity
        style={styles.continueBtn}
        onPress={() => router.push("/")}
      >
        <Text style={styles.continueText}>Save Settings</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    zIndex: 99,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeBtn: {
    fontSize: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  clearText: {
    color: "#f43f5e",
    fontWeight: "600",
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 10,
  },
  activeBtn: {
    backgroundColor: "#f43f5e",
    padding: 10,
    borderRadius: 10,
  },
  inactiveBtn: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  inactiveText: {
    color: "#000",
  },
  locationBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 10,
  },
  sliderValue: {
    textAlign: "right",
    fontSize: 12,
    marginTop: 4,
  },
  continueBtn: {
    backgroundColor: "#f43f5e",
    padding: 16,
    borderRadius: 20,
    marginTop: 40,
    alignItems: "center",
  },
  continueText: {
    color: "white",
    fontWeight: "bold",
  },
});
