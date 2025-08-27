import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LIKE, { likeType } from "../data/userlikes";
import { Link } from "expo-router";

type ItemProps = {
  item: likeType;
};

const Like = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer}>
        <LinearGradient
          colors={["#FFEFF1", "#FFD6DB"]}
          style={styles.background}
        />
        <View className="pt-10 ">
          <FlatList
            data={LIKE}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.likerid}
          />
          <View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                marginTop: 40,
                color: "red",
              }}
            >
              That's all your likes!
            </Text>
            <Pressable onPress={() => router.push("/onboarding/step1-profile")}>
              <Text>Onboarding</Text>
            </Pressable>
            <Pressable onPress={() => router.push("/othermatch/machine")}>
              <Link href={"/components/screens/match/matchfilter"}></Link>
              <Link href={"/othermatch/machine"}></Link>
              <Text>Auth</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const Item = ({ item }: ItemProps) => (
  <View style={{ paddingTop: 10 }}>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 5,
        padding: 15,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
      }}
    >
      <Image
        source={item.likedUserPhoto}
        style={{ width: 50, height: 50, borderRadius: 100 }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          alignSelf: "center",
        }}
      >
        <TouchableOpacity>
          <Text className="">{item.likedname}</Text>
        </TouchableOpacity>
        <Text>{item.timeStamp}</Text>
      </View>
      {/* <Text>That's all your likes!</Text> */}
    </View>
  </View>
);

const styles = StyleSheet.create({
  safeContainer: {
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
});

export default Like;
