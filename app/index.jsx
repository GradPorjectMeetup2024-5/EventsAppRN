import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

import LogIn from './(auth)/log-in';
import SignUp from './(auth)/sign-up';

// This is the main App component
export default function App() {
  // The App component currently renders the LogIn component
  return <LogIn />;
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
