import { Colors } from "@/constants/colors";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import TaskCard from "./TaskCard";
interface note {
    id: number,
    title: string,
    content: string,
    date: string
}

interface TasksContainerProps {
    dataArray: note[];
    isLoading: boolean;
}

const styles = StyleSheet.create({
    notfound:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    error:{
        fontSize: 18,
        color:'#999'
    }
})
export default function TasksContainer({dataArray, isLoading}:TasksContainerProps){
    const theme = useContext(ThemeContext);
    return (
        <>
            {
                dataArray.length !== 0 ?  
                (isLoading ? <ActivityIndicator color={Colors.black} size={24}/> :
                    <FlatList
                        data={dataArray}
                        renderItem={({item})=> <TaskCard title={item.title} id={item.id} date={item.date} />}
                        keyExtractor={item => item.id.toString()}
                        style={{backgroundColor: (theme.theme === 'sombre' ? Colors.dark : Colors.blank)}}
                        
                    />) : 
                    <View style={styles.notfound}>
                        <Text style={[styles.error, {fontFamily: 'Poppins-Regular'}]}>Aucune note trouvée...</Text>
                    </View>
            }
        </>
    );
}