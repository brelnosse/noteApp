import { StyleSheet, TextInput } from "react-native";

interface TaskTitleProps{
    title: string,
    setTitle: (title: string) => void,
}
export default function TaskTitle({title, setTitle}:TaskTitleProps){
    return (
        <TextInput
            placeholder="Titre"
            defaultValue={title}
            onChangeText={(val) => {
                setTitle(val)
            }}
            style={[styles.titlebar, {fontFamily: 'Poppins-Regular'}]}
            placeholderTextColor={"#999"}
        />
    );
}
const styles = StyleSheet.create({
    titlebar:{
        backgroundColor: '#eeeeee',
        marginHorizontal: 'auto',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        color: '#000',
        borderRadius: 5,
        overflow: 'hidden',
        paddingLeft: 20,
        fontSize: 16
    }
});
