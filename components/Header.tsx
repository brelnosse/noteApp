import { Colors } from "@/constants/colors";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
const styles = StyleSheet.create({
    header:{
        paddingTop: 50,
        width: '100%',
        height: 130,
        display: 'flex',
        alignItems: 'center'
    },
    title:{
        fontSize: 28,
    }
});

interface HeaderProps {
    title: string;
}

export default function Header({title}:HeaderProps){
    const theme = useContext(ThemeContext);
    return (
        <View style={[styles.header, {backgroundColor: (theme.theme === 'sombre' ? Colors.dark : Colors.blank)}]}>
            <Text style={[styles.title, {fontFamily: 'Poppins-Bold',color: (theme.theme === 'sombre' ? Colors.blank : Colors.dark)}]}>{title}</Text>
        </View>
    );
}