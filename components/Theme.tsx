import { Colors } from "@/constants/colors";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";

const styles = StyleSheet.create({
    optionContainer:{
        backgroundColor: 'transparent',
        width: '90%',
        margin: 'auto',
        borderRadius: 5,
        marginVertical: 5,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: Colors.dark,
        boxShadow: '-1px 0px 16px 8px rgba(0,0,0,0.09)'
    },
    title:{
        fontSize: 25,
        width: '90%',
        marginVertical: 20,
        marginHorizontal: 'auto'
    },
    label:{
        flex: 1,
        fontSize: 17,
        backgroundColor: 'transparent'
    }
})
export default function Theme(){
    const theme = useContext(ThemeContext);
    const [isOn, setIsOn] = useState(theme.theme === 'clair');
    return (
        <ScrollView style={{backgroundColor: (theme.theme === 'sombre' ? Colors.dark : Colors.blank)}}>
            <Text style={[styles.title, {fontFamily: 'Poppins-Regular',color: (theme.theme === 'sombre' ? Colors.blank : Colors.dark)}]}>Thème</Text>
            <View style={styles.optionContainer}>
                <Text style={[styles.label, {fontFamily: 'Poppins-Regular',color: (theme.theme === 'sombre' ? Colors.blank : Colors.dark)}]}>{theme.theme === 'clair' ? 'Clair' : 'Sombre'}</Text>
                <Switch 
                    value={theme.theme === 'clair'} 
                    onValueChange={
                        ()=> {
                            setIsOn(theme.theme !== 'clair');
                            theme.toggleTheme();
                        }
                    } 
                    thumbColor={isOn ? Colors.primary : '#999'}/>
            </View>
        </ScrollView>
    );
}