import Header from "@/components/Header";
import Theme from "@/components/Theme";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Settings(){
    const theme = useContext(ThemeContext);
    return (
        <View style={{flex: 1, backgroundColor: (theme.theme === 'sombre' ? Colors.dark : Colors.blank)}}>
            <Header title="Apparence"/> 
            <Theme />
        </View>     
    );
}