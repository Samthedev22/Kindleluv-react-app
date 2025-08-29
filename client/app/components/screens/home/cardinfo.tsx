import userDetails, { MatchTypes } from "@/app/data/userdetails";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

type ItemProps = {
  item: MatchTypes;
};

const Item = ({ item }: ItemProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* <View className="flex flex-row justify-around"> */}
        <View>
          <Text className="font-bold">Location</Text>
          <Text>{item.location}</Text>
        </View>
        <View className="items-center">
          <Entypo name="location-pin" size={24} color="black" />
          <Text>{item.distance}</Text>
        </View>
      </View>
      <View className="mt-5 ">
        <MaterialCommunityIcons
          name="message-processing-outline"
          size={24}
          color="black"
        />
        <Text>{item.about}</Text>
      </View>
      <View className="mt-5">
        <Text className="font-medium">Looking For</Text>
        <Text>{item.lookingFor}</Text>
      </View>

      <Image
        source={item.image[1]}
        style={{
          height: 500,
          width: 400,
          alignSelf: "center",
          paddingLeft: 20,
          objectFit: "contain",
          marginTop: 10,
        }}
      />

      {/* mapping interest */}
      <Text className="text-lg font-medium">Interest</Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          paddingBottom: 20,
        }}
      >
        {item.hobbies.map((interest: any, index: number) => (
          // <Text key={index} className="w-5 border p-2 gap-5">
          <Text
            key={index}
            style={{
              borderWidth: 1,
              padding: 6,
              paddingLeft: 10,
              paddingRight: 20,
              fontWeight: 400,
              fontSize: 16,
              borderRadius: 5,
            }}
          >
            {interest}
          </Text>
        ))}
      </View>
      <Image
        source={item.image[2]}
        style={{ height: 500, width: 400, marginTop: 10 }}
      />
      <Image
        source={item.image[3]}
        style={{ height: 500, width: 400, marginTop: 10 }}
      />
    </View>
  );
};

export default function CardInfo() {
  return (
    <View style={styles.background}>
      <FlatList
        data={userDetails}
        renderItem={({ item }: { item: MatchTypes }) => <Item item={item} />}
        keyExtractor={(item: MatchTypes) => item.id}
        // scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: "relative",
    flex: 1,
    backgroundColor: "#F3F3F3",
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    gap: 4,
  },
  background: {
    // flex: 1,
    // position: "absolute",
  },
});
