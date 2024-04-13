import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function MyHeader({onPress}){
     return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                <Ionicons
                name="arrow-back"
                size={24}
                color="#878787"
                style={{ marginRight: 20 }}
                />
            </Pressable>
        </View>
     )
}
export default MyHeader;

const styles = StyleSheet.create({
    container:{
        width:"100%",
        paddingHorizontal:15,
        paddingTop:50,
        paddingBottom:10,
        //backgroundColor: '#ffff'
        
    }
})