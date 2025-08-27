import { AntDesign, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function MatchSuccess() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <LinearGradient
        colors={['#FFEFF1', '#FFD6DB']}
        style={styles.background}
      />

      {/* Cancel Button */}
      <TouchableOpacity style={styles.cancelBtn}>
        <Ionicons name="close" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.container}>
        {/* Match Images */}
        <View style={styles.imageRow}>
          <View style={[styles.imageShadow, styles.leftTilt]}>
            <Image
              source={require('../../../assets/img/lady2.png')}
              style={styles.image}
            />
          </View>

          <View style={[styles.imageShadow, styles.rightTilt]}>
            <Image
              source={require('../../../assets/img/guy.png')}
              style={styles.image}
            />
          </View>

          {/* Heart icon overlay */}
          <View style={styles.heartOverlay}>
            <AntDesign name="heart" size={32} color="#fff" />
          </View>
        </View>

        {/* Match Text */}
        <Text style={styles.matchTitle}>It's a match!</Text>
        <Text style={styles.matchSubText}>
          Congrats! You and Julia matched. Be the first to make the first move.
        </Text>

        {/* Chat Button */}
        <TouchableOpacity
          style={styles.chatButton}
          onPress={() => router.push('/chat' as any)}
        >
          <Ionicons name="chatbubble-ellipses-outline" size={50} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  cancelBtn: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 2,
    backgroundColor: '#ffffffaa',
    borderRadius: 20,
    padding: 8,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 30,
  },
  imageShadow: {
    width: width * 0.40,
    height: width * 0.49,
    borderRadius: 16,
    overflow: 'hidden',
    marginHorizontal: 10,

    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    // Android Shadow
    elevation: 6,
  },
  leftTilt: {
    transform: [{ translateY: 50 }, { translateX: 20 }],
  },
  rightTilt: {
    transform: [{ translateY: -50 }, { translateX: -20 }],
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  heartOverlay: {
    position: 'absolute',
    top: '38%',
    left: '43%',
    backgroundColor: '#f43f5e',
    padding: 10,
    borderRadius: 50,
    zIndex: 1,

    // Shadow for heart icon
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  matchTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 50,
    marginBottom: 10,
  },
  matchSubText: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    maxWidth: 300,
    marginBottom: 40,
  },
  chatButton: {
    backgroundColor: '#f43f5e',
    padding: 18,
    borderRadius: 50,
    elevation: 3,

    // shadow for chat button
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
