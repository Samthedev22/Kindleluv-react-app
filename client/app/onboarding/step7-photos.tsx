import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function UploadPhotos() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer}>

        <LinearGradient colors={['#FFEFF1', '#FFD6DB']} style={styles.background} />
        <Ionicons name='chevron-back' size={24} color="black" onPress={()=> router.push('/onboarding/step6-details' as any)} />

    <View style={styles.container }>
      <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginTop: 60 }}>
        Upload your best pictures
      </Text>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', marginTop: 20 }}>
        {[0, 1, 2, 3].map((index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: 140,
              height: 140,
              borderWidth: 1,
              borderColor: '#ccc',
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {index === 0 ? (
              <Image source={require('../assets/img/guy.png')} style={{ width: '100%', height: '100%' }} />
            ) : (
              <Text style={{ fontSize: 36, color: 'red' }}>+</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ alignItems: 'center', marginBottom: 40 }}>
        <Text style={{ fontSize: 12, color: '#444', marginBottom: 10 }}>
          You can change this preference under settings
        </Text>

        <TouchableOpacity style={styles.nextBtn} >
          <Text style={styles.nextText} onPress={()=> router.push('/onboarding/step8-faceid' as any)}>Next</Text>
        </TouchableOpacity>

      </View>
    </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create ({
  safeContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between'
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right:0,
    zIndex: 0,
    opacity: 0.7,
  },
  nextBtn: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
    width: '100%',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nextText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})