import userDetails from "@/app/data/userdetails";
import { AntDesign, Entypo, EvilIcons, Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import CardInfo from "./cardinfo";

const windowHeight = Dimensions.get("window").width;

const Cardswipes = () => {
  const [status, setStatus] = useState("");
  return (
    <View style={styles.container}>
      {/* Card Container */}

      <View style={{ height: windowHeight * 1.9 }}>
        <Swiper
          cards={userDetails}
          renderCard={(card) => {
            return (
              <View className=" rounded-3xl justify-center shadow-xl">
                <Image
                  source={card.image[0]}
                  style={{
                    height: 600,
                    width: "auto",
                    borderRadius: 20,
                  }}
                />
                <LinearGradient
                  colors={["transparent", "rgba(0,0,0,0.5)"]}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: "20%",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                />
                {/* Location and map */}
                <View
                  style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "row",
                    top: 12,
                    left: 12,
                    backgroundColor: "white",
                    borderRadius: 10,
                    padding: 2,
                    paddingLeft: 10,
                  }}
                >
                  <Text className="">{card.location}</Text>
                  <EvilIcons
                    name="location"
                    size={24}
                    color="black"
                    className="text-3x"
                  />
                </View>
                {/* card user info */}
                <View className="absolute bottom-0 px-5 py-5">
                  <View className="flex flex-row items-center gap-1 pt-2">
                    <Text className="font-bold text-2xl text-white">
                      {card.name}
                    </Text>
                    <Text className="font-bold text-2xl text-white ">
                      {card.age},
                    </Text>

                    <MaterialIcons
                      name="verified"
                      size={30}
                      className="text-blue-600 z-10 "
                    />
                  </View>
                  <Text className="text-base text-white">
                    {card.profession}
                  </Text>
                </View>
              </View>
            );
          }}
          onSwipedBottom={() => null}
          stackSize={2}
          stackSeparation={15}
          disableTopSwipe={true}
          disableBottomSwipe={true}
          onSwipedRight={() => {
            setStatus("Heart");
            setTimeout(() => setStatus(""), 1500);
          }}
          onSwipedLeft={() => {
            setStatus("Opps!");
            setTimeout(() => setStatus(""), 1500);
          }}
          infinite={true}
        />
        <View style={styles.swipeButton}>
          <Entypo
            name="cross"
            size={34}
            color="black"
            style={{
              backgroundColor: "white",
              padding: 5,
              borderRadius: 100,
              width: 50,
              textAlign: "center",
            }}
          />
          <AntDesign
            name="star"
            size={24}
            color="yellow"
            style={{
              backgroundColor: "gray",
              padding: 12,
              borderRadius: 100,
              width: 50,
              textAlign: "center",
              zIndex: 20,
            }}
            onPress={() => {
              setStatus("");
            }}
          />
          <Ionicons
            name="heart"
            size={24}
            color="white"
            style={{
              backgroundColor: "red",
              padding: 12,
              borderRadius: 100,
              width: 50,
              textAlign: "center",
            }}
          />
        </View>
      </View>
      <View className="">
        <CardInfo />
      </View>
    </View>
  );
};

export default Cardswipes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "auto",
  },
  swipeButton: {
    position: "absolute",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    bottom: 0,
    gap: 10,
    zIndex: 50,
  },
});
