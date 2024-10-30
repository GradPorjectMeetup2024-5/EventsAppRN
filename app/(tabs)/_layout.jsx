import { Tabs} from "expo-router";
import { Image, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { icons } from "../../constants";
import { Ionicons } from '@expo/vector-icons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text
                // className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
                className={`text-xs`}
                style={{ color: color }}
            >
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#D0D0D0'}}>
            <View style={{ height: 50, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', backgroundColor: '#D0D0D0', paddingHorizontal: 15}}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Placeholder</Text>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons name="menu" size={34} color="black" /> 
                </TouchableOpacity>
            </View>
            

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
    </SafeAreaView>
    )
}

export default TabsLayout;
