import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import TasksContainer from "@/components/TasksContainer";
import { DataContext } from "@/context/DataContext";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../constants/Colors";
interface note {
    id: number,
    title: string,
    content: string,
    date: string
}

interface note {
    id: number,
    title: string,
    content: string,
    date: string
}


export default function Index(){
    const context = useContext(DataContext);
    const [showedDatas, setShowedDatas] = useState<note[]>([]);
    const theme = useContext(ThemeContext);
    useEffect(()=>{
        setShowedDatas(context?.datas.reverse() ?? []);
    }, [context?.datas])

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.container, {backgroundColor: (theme.theme === 'sombre' ? Colors.dark : Colors.blank)}]}>
                <Header title="Notes"/> 
                <SearchBar showedDatas={showedDatas} setShowedDatas={setShowedDatas} dRef={context?.datas ?? []}/>
                <Text style={[styles.sectionTitle, {fontFamily: 'Poppins-Regular',color: (theme.theme === 'sombre' ? Colors.blank : Colors.dark)}]}>Toutes les notes</Text>
                <TasksContainer dataArray={showedDatas} isLoading={context !== null ? context.isLoading : false}/>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.blank
    },
    sectionTitle:{
        marginVertical: 30,
        marginHorizontal: 20,
        fontSize: 20
    }
});