import { Colors } from "@/constants/colors";
import { DataContext } from "@/context/DataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { StyleSheet, Text, ToastAndroid, TouchableOpacity } from "react-native";
import Storage from "react-native-storage";

interface note {
    id: number,
    title: string,
    content: string,
    date: string,
}
interface SaveButtonProps{
    title: string;
    content: string;
    datas: note[];
    setDatas: (datas: note[]) => void,
    setTitle: (datas: string) => void,
    setNote: (datas: string) => void,

}
const styles = StyleSheet.create({
    button:{
        height: 50,
        width: '90%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: Colors.primary,
        marginHorizontal: 'auto',
        borderRadius: 5,
        marginVertical: 60
    },
    text:{
        fontSize: 16,
        color: Colors.blank
    }
});
export default function SaveButton({title, content, datas, setDatas, setTitle, setNote}:SaveButtonProps){
    const context = useContext(DataContext);
    const router = useRouter();
    const storage = new Storage({
        size: 1000000,
        storageBackend: AsyncStorage
    })
    const saveData = (title:string, content: string) =>{
        const date = new Date();
        const month = (date.getMonth()+1)%10 === (date.getMonth()+1) ? '0'+(date.getMonth()+1) : (date.getMonth()+1)
        const data = {
            id: (datas.length + 1)+''+date.getTime(),
            title: title,
            content: content,
            date: `${date.getDate()+'-'+month+'-'+date.getFullYear()}`
        }
        if(context !== null){
            storage.save({
                key: "notes",
                data: [...context.datas, data]
            }).then(()=>{
                router.navigate('/(tabs)/');
                ToastAndroid.show("Note enregistrée avec succès.", ToastAndroid.LONG)
            }).catch(err => {
                ToastAndroid.show("Une erreur est survenue lors de l'enregistrement des données.", ToastAndroid.LONG);
            })
            setDatas([...datas, data]);
        }
    }
    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={(e)=> {
                saveData(title, content)
                setTitle('');
                setNote('');
            }}
            >
            <Text style={styles.text}>Enregistrer</Text>
        </TouchableOpacity>
    );
}