import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type OptionType = {
  emoji: string;
  label: string;
};

export default function Purpose() {
  const router = useRouter();

  const options : OptionType[] = [
    { emoji: '💝', label: 'Long-term partner' },
    { emoji: '😍', label: 'Short-term Relationship' },
    { emoji: '💗', label: 'Serious Relationship' },
    { emoji: '😊', label: 'Something Casual' },
    { emoji: '💍', label: 'Marriage' },
    { emoji: '🤔', label: 'Still Figuring it out ' },
  ];

  const handleSelect = (selectedOption: OptionType) => {
    // Optional: save selection to state or global store
    console.log('Selected:', selectedOption.label);

    // Navigate to next screen
    router.push('/onboarding/step6-details' as any);
  };

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.safeContainer}>
      <LinearGradient colors={['#FFEFF1', '#FFD6DB']} style={styles.background} />

      <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Ionicons
          name="chevron-back"
          size={24}
          color="black"
          onPress={() => router.back()}
        />
        <Text
          style={styles.skipText}
          onPress={() => router.push('/onboarding/step6-details' as any)}
        >
          Skip
        </Text>
      </View>

      <Text style={styles.title}>What brings you here?</Text>

      {/* Options */}
      <View style={styles.grid}>
        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionCard}
            onPress={() => handleSelect(item)}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.optionLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Info Text */}
      <Text style={styles.infoText}>
        You can change this preference under settings
      </Text>

      <TouchableOpacity style={styles.nextBody} onPress={() => router.push('/onboarding/step6-details' as any)}>
          <Text style={styles.nextBtn}>Next</Text>
      </TouchableOpacity>

      </View>

    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  background: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    zIndex: -1,
  },
  topBar: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skipText: {
    color: 'red',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  optionCard: {
    width: '40%',
    backgroundColor: '#fff',
    paddingVertical: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',

    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emoji: {
    fontSize: 24,
    marginBottom: 10,
  },
  optionLabel: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
    marginTop: 20,
  },
  nextBody: {
    padding: 20,
  },
  nextBtn: {
    textAlign: 'center',
    backgroundColor: 'white',
    marginTop: 20,
    padding: 15,
    fontSize: 16,
    fontWeight: 500,
    borderRadius: 10,

    //shadow
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,

    elevation: 3
  }
});
