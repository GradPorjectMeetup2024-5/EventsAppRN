import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
