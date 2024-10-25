import { View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const AuthLayout = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false, animation: 'none', gestureEnabled: false }}>      
                <Slot />
            </Stack>
        </View>
    )
}

export default AuthLayout
