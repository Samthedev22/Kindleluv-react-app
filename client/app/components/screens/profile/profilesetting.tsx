import React, { useState } from "react";
// import { Ionicons } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";
import Colors from "@/app/styles/globals";
import Slider from "@react-native-community/slider";
import userDetails from "@/app/data/userdetails";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ProfileSetting() {
//    const userHobbies = ["music", "nature", "Food", "Dancing", "movies", "Swimming", "Cycling"];
    const [hobby, setHobbies] = useState(userDetails); 
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={["#FFEFF1", "#FFD6DB"]}
          style={styles.background}
        />
        <ScrollView
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
        <View className="px-4 p-3">
          {/* Header */}
          <View style={styles.header}>
            <Pressable>
              <Ionicons
                name="chevron-back"
                size={24}
                onPress={() => router.push("/")}
              />
            </Pressable>
            <Text className="text-xl font-medium text-center">Settings</Text>
            <TouchableOpacity className="bg-red-500 rounded-xl ">
              <Text className=" text-white p-2 px-6">Save</Text>
            </TouchableOpacity>
          </View>

          {/* Profile Image */}
          <View className="flex items-center mt-5 mb-2">
            <Image
              source={require("../../../assets/img/guy4.png")}
              style={{width: 100, height: 100, borderRadius: 100, marginBottom: 4}}
            />
            <Text className="font-normal text-lg">James, 26</Text>
            <Text className="font-normal text-lg">Edit</Text>
          </View>

          <View className="w-[395px] h-[0.1px] bg-gray-400 self-center"/>
          {/* Peferences */}
          <View className="space-y-1">
          <Text className="font-medium text-lg self-start mb-2">Dating Pefrence</Text>
          <View>
             <Text className="font-medium self-start mb-1">Interested in</Text>  
            <View className="flex flex-row items-center bg-white justify-between p-5 rounded-2xl">
              <Text className="hover:bg-red-500">Male</Text>
              <Text>Female</Text>
              <Text>Everone</Text>
            </View>          
          </View>
          </View>
          {/* Match Distance */}
          <View>
            <Text>Match Distance</Text>
            <Slider 
            style={{width: 340, height: 40, padding: 10, borderColor: "gray", alignSelf: "center"}}
            minimumTrackTintColor="#EF4747"
            maximumTrackTintColor="white"
            step={10}
            minimumValue={50}
            maximumValue={200}
            thumbTintColor="#EF4747"
            onValueChange={() => {

            } }
            />
          </View>
          {/* Hobbies */}
          <View>
            <Text className="font-medium">Hobbies</Text>
            <View className="flex-wrap flex-row gap-2 mt-2">
                {hobby[2].hobbies.map((hobbyItem: string, index: number) => (
                    <Text
                    key={index}
                    className="bg-white gap-2 rounded-lg p-2 px-3"
                    >{hobbyItem}</Text>
                ))}
            </View>
          </View>
          <View className="w-[395px] h-[0.1px] bg-gray-400 self-center mt-3"/>

          {/* Geight age religion */}
          <View className="flex flex-row items-center justify-between mt-3">            
             <View className="flex flex-col">
                <Text className="font-medium mb-2 text-center">Height</Text>
                <Text className="bg-gray-50 p-3 rounded-xl px-6">5 : 5</Text>
             </View>
             <View className="flex flex-col text-center">
                <Text className="font-medium mb-2 text-center">Age</Text>
                <Text className="bg-gray-50 p-3 rounded-xl px-6">26</Text>

             </View>
             <View className="flex flex-col text-center self-center">
                <Text className="font-medium mb-2 text-center">Religion</Text>
                <Text className="bg-gray-50 p-3 rounded-xl px-3">christain</Text>
             </View>
          </View>
          {/* Interesting Fact */}
          <View>
            <Text className="font-medium mt-3 mb-2">Most Interesting Fact</Text>
            <View className="flex flex-row gap-2">
                <Text>I like sku-dving , and when I am off workinf I like coding. </Text>
                <Link href={"/"} className="text-red-400">Edit</Link>
            </View>
          </View>
          {/* notification toggle */}
          <View className="flex flex-row justify-between mt-3 text-center">
            <View className="flex flex-row gap-1">
                <Text className="font-medium text-lg" style={{color: Colors.red}}>Notification</Text>
                <Ionicons name="notifications-off-outline" size={24} color="black" />
            </View>
            <View>
                <MaterialIcons name="toggle-off" size={34} color="black" />
                <MaterialIcons name="toggle-on" size={34} style={{color: Colors.red}} />
            </View>
          </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  }
});
