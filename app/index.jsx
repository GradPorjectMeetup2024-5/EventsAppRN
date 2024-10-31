import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { AuthProvider, useAuth } from './AuthContext';


// function  AppContent() {
//   const router = useRouter();
//   const [isReady, setIsReady] = useState(false); // Track readiness

//   useEffect(() => {
//     setIsReady(true); // Mark as ready immediately after mounting
//   }, []);

//   useEffect(() => {
//     if (isReady) {
//       const { isLoggedIn } = useAuth(); 

//       if (isLoggedIn) {
//         router.replace('/(tabs)/home');
//       } else {
//         router.replace('/(auth)/log-in');
//       }
//     }
//   }, [isReady, router]);

//   return <StatusBar />;
// }

function AppContent() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace('/(tabs)/home');
    } else {
      router.replace('/(auth)/log-in');
    }
  }, [isLoggedIn, router]);

  return <StatusBar />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}