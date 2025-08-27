import UserMatch, { typeUserMatch } from "@/app/data/matchdetails";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList, Pressable } from "react-native-gesture-handler";

type ItemProps = {
  item: typeUserMatch;
};

const Item = ({ item }: ItemProps) => {
  return (
    <View style={styles.viewcontainer}>
      <View style={styles.parentview}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image source={item.image} style={{ height: 60, width: 60 }} />
          <Text className="text-xl text-center self-center">{item.name}</Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text>{item.date}</Text>
          <Text>{item.time}</Text>
        </View>
      </View>
    </View>
  );
};

export default function MatchInfo() {
  const [isMatch, setIsMatch] = useState<typeUserMatch[]>([]);

  const hasMatches = isMatch && setIsMatch.length > 0;

  return (
    <View>
      {hasMatches ? (
        <View>
          <Text className="text-2xl text-center font-semibold mt-6">
            Your Recent Matches
          </Text>
          <View>
            <FlatList
              data={UserMatch}
              renderItem={({ item }: { item: typeUserMatch }) => (
                <Item item={item} />
              )}
              keyExtractor={(item: typeUserMatch) => item.id}
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View className=" ">
              <Text className="font-semibold text-3xl text-center">Oops!</Text>
              <Text className="text-lg text-center">
                You currently have no match
              </Text>
            </View>
            <Image
              source={require("../../../assets/img/guy2.png")}
              style={{ height: 100, width: 100, borderRadius: 100 }}
            />
            <Pressable
              onPress={() => router.push("/")}
              style={{
                backgroundColor: "#E94057",
                padding: 10,
                marginTop: 10,
                borderRadius: 10,
              }}
            >
              <Text className="text-white text-lg">Optimize your account</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  viewcontainer: {
    flex: 1,
    padding: 5,
  },
  parentview: {
    width: "auto",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
