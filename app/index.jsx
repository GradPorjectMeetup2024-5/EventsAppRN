import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';

// This is the main App component
export default function App() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false); // State to track if the app is ready

  useEffect(() => {
    // Set the app as ready after a short delay
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 0); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  useEffect(() => {
    if (isReady) {
      // Navigate to the login screen once the app is ready
      router.replace('/(auth)/log-in');
    }
  }, [isReady, router]);

  return (
    <>
      <StatusBar />
    </>
  );
}

// Styles for the App component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Note: The styles are defined but not currently used in the App component
// The StatusBar, Text, View, Link, and SignUp imports are also not currently used

// This file serves as the entry point for the application
// It's using expo-router for navigation (imported Link component)
// The auth-related components (LogIn and SignUp) are imported from the (auth) directory
