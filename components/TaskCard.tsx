import { DataContext } from "@/context/DataContext";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";
import { useContext } from "react";
import { Alert, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import Storage from "react-native-storage";


interface TaskCardProps{
    id: number;
    title: string;
    date: string;
}

interface note {
    id: number,
    title: string,
    content: string,
    date: string
}
const styles = StyleSheet.create({
    card:{
        display: 'flex',
        width: '95%',
        borderRadius: 5,
        marginVertical: 5,
        backgroundColor: '#f5f5f5',
        marginHorizontal: 'auto',
        position: 'relative',
        paddingLeft: 70,
        overflow: 'hidden',
        padding: 20
    },
    title:{
        fontSize: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        paddingLeft: 0,
    },
    date:{
        fontSize: 15,
        color: '#999',
    },
    icons:{
        // backgroundColor:'transparent',
        width: 70,
        height: 70,
        position: 'absolute',
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dotsBtn:{
        backgroundColor: 'transparent',
        height: 40,
        width: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        position: 'absolute',
        right: 5,
        top: 5
    }
});

export default function TaskCard({id, title, date}:TaskCardProps){
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
                    onPress: () => {}
                },
                {
                    text: "Ok",
                    onPress: () => {
                        if(context !== null){
                            const d:note[] = context.datas.filter((el)=>{
                                if(el.id !== id)
                                    return el
                            })
                            storage.save({
                                key: 'notes',
                                data: d
                            })
                            .then(()=>{
                                ToastAndroid.show('Suppression réussi !', ToastAndroid.SHORT);
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
    return(
        <Link href={{
            pathname: '/(tabs)/[id]',
            params:{
                id: id
            }
        }} asChild>
            <View style={styles.card}>
                <View 
                    style={styles.icons} 
                    onTouchEnd={()=>{
                        router.navigate(`/(tabs)/${id}`)
                }}>
                    <Ionicons 
                        name="document-text-outline"
                        size={30}
                    />
                </View>
                <Text 
                    style={[styles.title, {fontFamily: 'Poppins-Regular'}]}
                    onPress={()=>{
                        router.navigate(`/(tabs)/${id}`)
                    }}
                    >
                        {title}
                </Text>
                <Text 
                    style={[styles.date, {fontFamily: 'Poppins-Regular'}]}
                    onPress={()=>{
                        router.navigate(`/(tabs)/${id}`)
                    }}                   
                    >
                        {date}
                </Text>
                <TouchableOpacity
                    style={styles.dotsBtn}
                    onPress={handleDelete}
                >
                    <Ionicons 
                        name="trash-outline"
                        size={20}
                    />
                </TouchableOpacity>
            </View>
        </Link>
    );
}
