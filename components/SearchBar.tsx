import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';

const styles = StyleSheet.create({
    searchbar:{
        backgroundColor: '#e2e2e2',
        marginHorizontal: 'auto',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderRadius: 5,
        overflow: 'hidden'
    },
    button:{
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '15%'
    },
    input:{
        paddingLeft: 25,
        height: '100%',
        fontSize: 16,
        width: '85%'
    }
});
interface note {
    id: number,
    title: string,
    content: string,
    date: string
}

interface SearchBarProps{
    showedDatas: note[],
    setShowedDatas: (data: note[]) => void,
    dRef: note[]
}
export default function SearchBar({showedDatas, setShowedDatas, dRef}:SearchBarProps){
    const [search, setSearch] = useState<string>('');

    const handleSearch = (text: string) =>{
        let newDatas = showedDatas.filter((el)=>{
            if(el.title.toLowerCase().trim().startsWith(text.toLowerCase().trim())){
                return el;
            }
        })
        if(newDatas.length > 0 && text.trim() !== ''){
            setShowedDatas(newDatas);
        }else{
            if(text.trim() !== ''){
                ToastAndroid.show("Aucune note trouvée.", ToastAndroid.SHORT);
            }
            setShowedDatas(dRef);
        }
    }
    return (
        <View style={styles.searchbar}>
            <TextInput
                placeholder='Rechercher des notes'
                style={[styles.input, {fontFamily: 'Poppins-Regular'}]}
                onChangeText={
                    (val: string) => {
                        setSearch(val)
                        handleSearch(val)
                    }
                }
                value={search}
                placeholderTextColor={"#999"}

            />
            <TouchableOpacity style={styles.button}>
                <Ionicons 
                    name='search'
                    color={Colors.dark}
                    size={19}
                />
            </TouchableOpacity>
        </View>
    );
}
