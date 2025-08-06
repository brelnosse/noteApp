import { DataContext } from "@/context/DataContext";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { Alert, StyleSheet, ToastAndroid, TouchableOpacity, View } from "react-native";
import Storage from "react-native-storage";

interface ToolsMenuProps{
    id:number;
    visible: boolean;
    setIsVisible: (f: boolean) => void
}
interface note {
    id: number,
    title: string,
    content: string,
    date: string
}
export default function ToolsMenu({id, visible, setIsVisible}:ToolsMenuProps){
    const context = useContext(DataContext);
    const router = useRouter();
    const storage = new Storage({
        size: 10000,
        storageBackend: AsyncStorage
    })
    const handleDelete = ()=>{
            Alert.alert('Êtes-vous sûr de vouloir supprimer la note ?', 'La note sera supprimée définitivement', [
                {
                    text: 'Annuler',
                    onPress: () => {
                    }
                },
                {
                    text: "Ok",
                    onPress: () => {
                        if(context !== null){
                            const d:note[] = context.datas.filter((el)=>{
                                if(parseInt(el.id) !== id)
                                    return el
                                
                            })
                            storage.save({
                                key: 'notes',
                                data: d
                            })
                            .then(()=>{
                                ToastAndroid.show('Suppression réussi !', ToastAndroid.SHORT);
                                router.navigate('..')
                                context.setDatas(d)
                            })
                            .catch(err =>{
                                Alert.alert('Une erreur est survenue', 'Erreur lors de la suppression des données.')
                            })
                        }
                    }
                }
            ])
        }
    return (
        <View style={styles.menu}>
            <TouchableOpacity 
                style={[styles.menuItem, {marginRight: 'auto'}]}
                onPress={()=>{
                    router.navigate('..');
                }}>
                <Ionicons 
                    name="arrow-back"
                    size={24}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.menuItem}
                onPress={()=>{
                    setIsVisible(true)
                }}>
                <Ionicons 
                    name="pencil"
                    size={24}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.menuItem}
                onPress={handleDelete}>
                <Ionicons 
                    name="trash-outline"
                    size={24}
                />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    menu:{
        height: 50,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 10
    },
    menuItem:{
        backgroundColor: '#f5f5f5',
        height: 50,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
    }
})