import Header from "@/components/Header";
import TaskContent from "@/components/TaskContent";
import TaskTitle from "@/components/TaskTitle";
import ToolsMenu from "@/components/ToolsMenu";
import UpdateButton from "@/components/UpdateBtn";
import { DataContext } from "@/context/DataContext";
import { ThemeContext } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Alert, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../constants/Colors";

export default function NoteList(){
    const {id} = useLocalSearchParams();
    const [visible, setIsVisible] = useState<boolean>(false);
    const [note, setNote] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const context = useContext(DataContext);
    const noteId: number = parseInt(Array.isArray(id) ? id[0] : id);
    const theme = useContext(ThemeContext);
    const [uid, setUid] = useState<number>(0)
    useEffect(()=>{
        try{
            if(context !== null){
                let i:number = 0;
                let found:boolean = false;
                while(i < context.datas.length && !found){
                    if(parseInt(context.datas[i].id) === noteId){
                        setNote(context.datas[i].content)
                        setTitle(context.datas[i].title);
                        setUid(i);
                        found = true
                    }

                    i ++;
                }
            }
        }
        catch(e){
            Alert.alert('Une erreur est survenue.', 'Impossible de récupérer les données de la note.');
            console.log(e)
        }
    },[])
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={{flex: 1}}>
            <View style={[styles.container, {backgroundColor: (theme.theme === 'sombre' ? Colors.dark : Colors.blank)}]}>
                <ToolsMenu id={noteId} visible={visible} setIsVisible={setIsVisible}/>
                <Text style={[styles.title, {fontFamily: 'Poppins-Regular', color: (theme.theme === 'sombre' ? Colors.blank : Colors.dark)}]}>{context !== null && context.datas[uid].title}</Text>
                <Text style={[styles.header, {fontFamily: 'Poppins-Regular', backgroundColor: (theme.theme === 'sombre' ? Colors.dark : Colors.blank)}]}>Créer le {context !== null && context.datas[uid].date}</Text>
                <Text style={[styles.content, {fontFamily: 'Poppins-Regular', color: (theme.theme === 'sombre' ? Colors.blank : Colors.dark)}]}>{context !== null && context.datas[uid].content}</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>{
                        setIsVisible(true);
                    }}>
                    <Ionicons 
                        name='pencil'
                        size={25}
                        color={Colors.blank}
                    />
                </TouchableOpacity>
                <Modal
                    visible={visible}
                    animationType="slide"
                    onRequestClose={()=>{
                        setIsVisible(false)
                    }}
                >
                    <View style={[styles.backgroundC, {backgroundColor: (theme.theme === 'sombre' ? Colors.dark : Colors.blank)}]}>
                        <TouchableOpacity
                            style={styles.buttonTop}
                            onPress={()=>{
                                setIsVisible(false)
                            }}
                        >
                            <Ionicons 
                                name="close"
                                size={30}
                                color={theme.theme === 'sombre' ? Colors.blank : Colors.dark}
                            />
                        </TouchableOpacity>
                        <Header title="Modifier la note"/>
                        {/* <UpdateToolMenu title={title} setTitle={setTitle} /> */}
                        <TaskTitle title={context !== null ? context.datas[uid].title : ''} setTitle={setTitle} />
                        <TaskContent note={context !== null ? context.datas[uid].content : ''} setNote={setNote} />
                        <UpdateButton visible={visible} setIsVisible={setIsVisible} id={context !== null ? context.datas[uid].id : 0} title={title !== undefined ? title : ''} content={note !== undefined ? note : ''}/>                        
                    </View>
                </Modal>                    
            </View>
        </ScrollView>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.blank,
        paddingTop: 30,
        minHeight: '100%'
    },
    sectionTitle:{
        marginVertical: 30,
        marginHorizontal: 20,
        fontSize: 20
    },
    header:{
        padding: 20,
        paddingTop: 0,
        fontSize: 16,
        textAlign: 'right',
        color: '#999',
    },
    title:{
        fontSize: 35,
        marginVertical: 15,
        width:'88%',
        marginHorizontal: 'auto'
    },
    content:{
        fontSize: 16,
        width:'88%',
        marginHorizontal: 'auto'
    },
    button:{
        backgroundColor: Colors.primary,
        height: 50,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        boxShadow: '0px 0px 8px 8px rgba(0,0,0,0.03)',
        position:'absolute',
        right: 20,
        bottom: 20
    },
    buttonTop:{
        height: 40,
        width: 40,
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: 'rgba(0,0,0,0.03)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderRadius: '50%',
        position: 'absolute',
        zIndex: 20
    },
    backgroundC:{
        flex: 1
    }
});