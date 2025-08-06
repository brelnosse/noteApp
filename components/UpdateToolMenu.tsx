import { StyleSheet, View } from "react-native";

interface ToolsMenuProps{
    history: string[],
    title: string,
    setTitle: (v: string) => void
}

export default function UpdateToolMenu({history, title, setTitle}:ToolsMenuProps){
    // const [currentIndex, setCurrendIndex] = useState<number>(0);
    // useEffect(()=>{
    //     setCurrendIndex(history.length-1);
    // }, [history.length])
    return (
        <View style={styles.menu}>
            {/* <TouchableOpacity 
                style={[styles.menuItem]}
                disabled = {history.length <= 0 }
                onPress={()=>{
                    setCurrendIndex(currentIndex => {
                        setTitle(history[currentIndex-1 >= 0 ? currentIndex-1 : currentIndex])
                        return currentIndex-1 >= 0 ? currentIndex-1 : currentIndex
                    });
                }}>
                <Ionicons 
                    name="arrow-undo-outline"
                    size={24}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.menuItem}
                onPress={()=>{
                    console.log('redo')
                }}
                >
                <Ionicons 
                    name="arrow-redo-outline"
                    size={24}
                />
            </TouchableOpacity> */}
        </View>
    );
}
const styles = StyleSheet.create({
    menu:{
        // height: 50,
        width: '98%',
        display: 'flex',
        flexDirection: 'row',
        // paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 10,
        // marginVertical: 20,
        marginTop: 0
    },
    menuItem:{
        // backgroundColor: '#f5f5f5',
        // height: 50,
        // width: 50,
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        // borderRadius: '50%',
    }
})