import Header from "@/components/Header";
import SaveButton from "@/components/SaveButton";
import TaskContent from '@/components/TaskContent';
import TaskTitle from "@/components/TaskTitle";
import { DataContext } from "@/context/DataContext";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Colors } from "../../constants/Colors";


export default function NoteList(){
    const [note, setNote] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const context = useContext(DataContext);
    const theme = useContext(ThemeContext);
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.container, {backgroundColor: (theme.theme === 'sombre' ? Colors.dark : Colors.blank)}]}>
                <Header title="Nouvelle note"/> 
                <TaskTitle title={title} setTitle={setTitle}/>
                <TaskContent note={note} setNote={setNote}/>
                {context && (
                    <SaveButton
                        datas={context.datas}
                        setDatas={context.setDatas}
                        title={title}
                        setTitle={setTitle}
                        setNote={setNote}
                        content={note}
                    />
                )}
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