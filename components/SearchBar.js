import { StyleSheet, TextInput, View } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

function SearchBar(){
    return(
        <View style={styles.container}>
            <TextInput 
            placeholder="Search for 'Pizza'"
            placeholderTextColor={'#878787'}
            cursorColor={"#FE8C00"}
                style={styles.input}
            />
            <Fontisto name="search" size={20} color="#878787" />
            <View style={styles.line} />
            <FontAwesome5 name="microphone" size={20} color="#FE8C00" />
        </View>
    )
}
export default SearchBar;

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:50,
        flexDirection: 'row',
        alignItems:'center',
        borderWidth:1,
        borderRadius:8,
        borderColor: 'lightgrey',
        backgroundColor: '#ffff',
        paddingHorizontal:15

    },
    input:{
        width:"70%",
        marginRight:30
    },
    line:{
        borderRightWidth:1,
        height:20,
        borderColor: 'lightgrey',
        marginHorizontal:10
    }
})