import React, { useEffect } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

const SplashScreenComponent = () => {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync().catch(console.warn);
    return () => {
      SplashScreen.hideAsync().catch(console.warn);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/splashImg.jpg')}
        style={styles.image}
        onLoadEnd={() => SplashScreen.hideAsync().catch(console.warn)}
      />
      <View style={styles.loadingContainer}>
        <Text 
        style={styles.headingText}
        >Country Explorer!</Text>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headingText:{
    fontSize:30, 
    fontWeight:'bold',
    
  }
});

export default SplashScreenComponent;
