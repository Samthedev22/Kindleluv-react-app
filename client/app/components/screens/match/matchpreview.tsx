import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MatchPreview() {
  const interests = ['Movies', 'travelling', 'Music', 'Dancing', 'Modeling'];
  const galleryImages = [
    require('../../../assets/img/lady.png'),
    require('../../../assets/img/lady2.png'),
    require('../../../assets/img/lady3.png'),
    require('../../../assets/img/lady4.png'),
    require('../../../assets/img/lady2.png'),
  ];

  return (
    <SafeAreaView style={styles.safeContainer}>
    <ScrollView style={styles.container}>
      <Image
        source={require('../../../assets/img/lady.png')}
        style={styles.mainImage}
        resizeMode="cover"
      />

      <Ionicons 
      className='absolute mt-5 ml-2 p-2 bg-[#de5555]/20 rounded-2xl text-white' 
      name="chevron-back" 
      size={28} 
      color="black" 
      onPress={()=> router.push('/')}
      />

      <View style={styles.profileContainer}>
        <Text style={styles.name}>Sarah, 25</Text>
        <Text style={styles.subtitle}>Singer</Text>
                                                                                                                                                                                                                
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Location</Text>
          <View style={styles.locationRow}>
            <Text style={styles.locationText}>Chicago, IL United States</Text>
            <View style={styles.distanceBadge}>
              <Ionicons name="location-outline" size={14} color="#f43f5e" />
              <Text style={styles.distanceText}>1 km</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.aboutText}>
            Hello there, my name is Sarah I am a singer from canada.
          </Text>
          <TouchableOpacity>
            <Text style={styles.readMore}>Read more</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <View style={styles.interests}>
            {interests.map((interest, index) => (
              <View key={index} style={styles.interestTag}>
                <Text style={styles.interestText}>{interest}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.galleryHeader}>
            <Text style={styles.sectionTitle}>Gallery</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.gallery}>
            {galleryImages.map((img, index) => (
              <Image key={index} source={img} style={styles.galleryImage} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
  },
  mainImage: {
    position: 'relative',
    width: '100%',
    height: '100%',
    marginTop: -55
   
  },
  profileContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    padding: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationText: {
    color: '#333',
  },
  distanceBadge: {
    backgroundColor: '#ffe4e6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  distanceText: {
    color: '#f43f5e',
    fontSize: 12,
    fontWeight: '600',
  },
  aboutText: {
    color: '#444',
    lineHeight: 20,
  },
  readMore: {
    color: '#f43f5e',
    marginTop: 6,
    fontWeight: 'bold',
  },
  interests: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  interestTag: {
    backgroundColor: '#f1f1f1',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  interestText: {
    color: '#333',
    fontSize: 13,
  },
  galleryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAll: {
    color: '#f43f5e',
    fontWeight: '600',
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
  },
  galleryImage: {
    width: 100,
    height: 120,
    borderRadius: 12,
  },
});
