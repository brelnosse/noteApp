import { DataContextProvider } from "@/context/DataContext";
import { ThemeContextProvider } from "@/context/ThemeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import Storage from "react-native-storage";

export default function Layout(){
    const [loaded, error] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    });  
    if (!loaded && !error) {
        return null;
    }
    const storage = new Storage({
        size: 1000,
        storageBackend: AsyncStorage
    })
    storage.load({key: 'notes'})
    .then(datas=>{
    })
    .catch(err => {
        storage.save({
            key: "notes",
            data: []
        })  
    }) 
    return (
    <ThemeContextProvider>
        <DataContextProvider>
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="(tabs)"/>
            </Stack>
        </DataContextProvider>
    </ThemeContextProvider>
    );
}