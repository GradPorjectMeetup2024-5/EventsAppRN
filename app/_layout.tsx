import React, { useEffect, useState } from 'react';
import { SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { Drawer } from "expo-router/drawer";
import { useRouter } from 'expo-router';
import { Slot } from 'expo-router'; // Import Slot

SplashScreen.preventAutoHideAsync();

const useAuth = () => {
  // Replace with actual authentication check logic
  return { isLoggedIn: false }; // Adjust based on your authentication state
};

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });
  
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  useEffect(() => {
    // Navigate based on the login state
    if (!fontsLoaded || error) return; // Ensure fonts are loaded and no error

    if (!isLoggedIn) {
      router.replace('/(auth)/log-in'); // Redirect to login if not authenticated
    }
  }, [isLoggedIn, fontsLoaded, error, router]);

  if (!fontsLoaded) return null; // Prevent rendering before fonts are loaded

  // Always render the Slot, allowing Expo Router to handle navigation
  return (
    <Drawer>
      <Slot /> {/* This Slot will render the screens */}
    </Drawer>
  );
};

export default RootLayout;
