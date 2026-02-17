import { DataContext } from "@/context/DataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { StyleSheet, Text, ToastAndroid, TouchableOpacity } from "react-native";
import Storage from "react-native-storage";
import { Colors } from "../constants/Colors";
interface note {
    id: number,
    title: string,
    content: string,
    date: string,
}

interface UpdateButtonProps{
    id: number;
    title: string;
    content: string;
    visible: boolean;
    setIsVisible: (v: boolean) => void
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
export default function UpdateButton({id, title, content, visible, setIsVisible}:UpdateButtonProps){
    const context = useContext(DataContext);
    const storage = new Storage({
        size: 1000000,
        storageBackend: AsyncStorage
    })
    const UpdateData = (id:number, title:string, content: string) =>{
        const date = new Date();
        const month = (date.getMonth()+1)%10 === (date.getMonth()+1) ? '0'+(date.getMonth()+1) : (date.getMonth()+1)

        if(context !== null){
            const newDatas = context.datas.map((el:note)=>{
                if(el.id === id){
                    el.title = title;
                    el.content = content;
                    el.date = `${date.getDate()+'-'+month+'-'+date.getFullYear()}`
                }
                return el
            })
            storage.save({
                key: "notes",
                data: newDatas
            }).then(()=>{
                context.setDatas(newDatas)
                setIsVisible(false);
                ToastAndroid.show("Note modifiée avec succès.", ToastAndroid.LONG)
            }).catch(err => {
                ToastAndroid.show("Une erreur est survenue lors de l'enregistrement des données.", ToastAndroid.LONG);
            })
        }
    }
    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={(e)=> {
                UpdateData(id, title, content)
            }}
            >
            <Text style={styles.text}>Modifier</Text>
        </TouchableOpacity>
    );
}