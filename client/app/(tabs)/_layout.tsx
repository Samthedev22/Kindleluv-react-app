import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../styles/global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: "#F44455",

            tabBarLabelStyle: {
              fontWeight: "bold",
              color: "gray",
            },
            tabBarStyle: {
              backgroundColor: "white",
              shadowColor: "none",
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <Entypo name="home" size={24} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="match"
            options={{
              title: "Match",
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <FontAwesome size={24} name="heart" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="chat"
            options={{
              title: "Chat",
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons size={24} name="chat" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="likes"
            options={{
              title: "Likes",
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <View>
                  <FontAwesome name="star" size={24} color={color} />
                </View>
              ),
            }}
          />

          <Tabs.Screen
            name="profile"
            options={{
              title: "Profile",
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <FontAwesome size={24} name="user" color={color} />
              ),
            }}
          />
        </Tabs>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
  },
});
