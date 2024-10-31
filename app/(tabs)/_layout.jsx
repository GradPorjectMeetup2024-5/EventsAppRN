import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name }) => (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image source={icon} resizeMode="contain" style={{ width: 24, height: 24, tintColor: color }} />
        <Text style={{ color, fontSize: 12 }}>{name}</Text>
    </View>
);

export default function TabsLayout() {
    return (
        <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#DC143C', // Crimson Red: BADAL #FFA001
                    //tabBarInactiveTintColor: '#CDCDE0',
                    tabBarInactiveTintColor: '#19191B',
                    tabBarStyle: {
                        backgroundColor: '#D0D0D0',//warm white
                        borderTopWidth: 1,
                        borderTopColor: '#F5F5F5',//Whisper White
                        height: hp('8%'), // 12% of Any screen height
                        paddingBottom: -10,
                    }
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.search}
                                color={color}
                                name="Explore"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="bookmark"
                    options={{
                        title: 'Bookmark',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.bookmark}
                                color={color}
                                name="Trips"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="create"
                    options={{
                        title: 'Create',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.plus}
                                color={color}
                                name="Create"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs>
    );
}
