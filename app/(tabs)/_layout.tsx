import { Ionicons } from "@expo/vector-icons";
import Entypo from '@expo/vector-icons/Entypo';
import { Tabs } from "expo-router";
import { Colors } from "../../constants/Colors";
export default function RootLayout(){
    return (
        <Tabs 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: Colors.primary,
                tabBarStyle:{
                    backgroundColor: Colors.blank,
                    paddingTop: 10,
                    height: 110
                }
            }}>
            {/* <Tabs.Screen 
                name="Home"
                options={{
                    href: null,
                    tabBarIcon: ({color})=> <Ionicons name="home" size={28} color={color}/>
                }}
            /> */}
            <Tabs.Screen 
                name="index"
                options={{
                    tabBarIcon: ({color})=> <Ionicons name="documents-outline" size={28} color={color}/>
                }}
            />
            <Tabs.Screen 
                name="notesList"
                options={{
                    tabBarIcon: ({color}) => <Entypo name="new-message" size={24} color={color} />
                }}    
            />
            <Tabs.Screen 
                name="settings"
                options={{
                    tabBarIcon: ({color})=> <Ionicons name="settings-outline" size={28} color={color}/>
                }}
            />
        </Tabs>
    );
}