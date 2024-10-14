import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

import LogIn from './(auth)/log-in';
import SignUp from './(auth)/sign-up';
import Home from './(tabs)/home';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>MeJo!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: 'blue' }}>
        HOME
      </Link>
    </View>
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
