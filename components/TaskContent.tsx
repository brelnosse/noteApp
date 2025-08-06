import { StyleSheet, TextInput } from "react-native";

interface TaskContentProps{
    note: string,
    setNote: (note: string) => void
}
export default function TaskContent({note, setNote}:TaskContentProps){

    return (
        <TextInput
            placeholder="Note"
            onChangeText={val => setNote(val)}
            multiline = {true}
            defaultValue={note}
            textAlignVertical="top"
            style={[styles.content, {fontFamily: 'Poppins-Regular'}]}
            placeholderTextColor={"#999"}
        />
    );
}
const styles = StyleSheet.create({
    content:{
        backgroundColor: '#eeeeee',
        marginHorizontal: 'auto',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 250,
        borderRadius: 5,
        overflow: 'hidden',
        padding: 20,
        fontSize: 16,
        marginTop: 20,
        color: 'black'
    }
});
