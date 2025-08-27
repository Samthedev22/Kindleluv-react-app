import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Hobbies() {
  const [selectedHobby, setSelectedHobby] = useState<string[]>([]);
  const [selectedReligion, setSelectedReligion] = useState<string | null>(null);

  const hobbies = [
    'Reading 📖', 'Swimming 🏊', 'Dancing 💃', 'Music 🎵', 'Art 🎨',
    'Gym 🏋️‍♂️', 'Singing 🎤', 'Gaming 🎮', 'Nature 🌱',
    'Food 🍲', 'Cars 🚗', 'Movies 🎬', 'Traveling ✈️', 'Other',
  ];

  const religions = ['Christian', 'Muslim', 'Atheist', 'Other'];

  const toggleHobby = (hobby: string) => {
    if (selectedHobby.includes(hobby)) {
      setSelectedHobby(selectedHobby.filter(h => h !== hobby));
    } else {
      setSelectedHobby([...selectedHobby, hobby]);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer}>
        <LinearGradient colors={['#FFEFF1', '#FFD6DB']} style={styles.background} />

        <ScrollView contentContainerStyle={styles.container}>
          <Ionicons name='chevron-back' size={24} color="black" onPress={()=> router.push('/onboarding/step5-purpose' as any)} />
          <Text style={styles.title}>Complete your profile</Text>

          <Text style={styles.section}>Hobbies</Text>
          <View style={styles.tagContainer}>
            {hobbies.map((hobby, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.tag,
                  selectedHobby.includes(hobby) && styles.selectedTag,
                ]}
                onPress={() => toggleHobby(hobby)}
              >
                <Text style={styles.tagText}>{hobby}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.section}>Height</Text>
          <TextInput
            placeholder="4 : 11"
            style={styles.input}
            placeholderTextColor="#888"
          />

          <Text style={styles.section}>Religion</Text>
          <View style={styles.tagContainer}>
            {religions.map((religion, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.tag,
                  selectedReligion === religion && styles.selectedTag,
                ]}
                onPress={() => setSelectedReligion(religion)}
              >
                <Text style={styles.tagText}>{religion}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.infoText}>
            You can change this preference under settings
          </Text>

          <TouchableOpacity style={styles.nextBtn} onPress={()=> router.push('/onboarding/step7-photos' as any)}>
            <Text style={styles.nextText} >Next</Text>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
  },
  container: {
    padding: 20,
    paddingBottom: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  tag: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedTag: {
    backgroundColor: '#FFDDE3',
    borderColor: '#ff6b81',
  },
  tagText: {
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  infoText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 12,
    color: '#444',
  },
  nextBtn: {
    marginTop: 20,
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nextText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
});
