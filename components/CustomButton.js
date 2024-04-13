import { Pressable, StyleSheet, Text, View } from "react-native";

function CustomButton({label, onPress, value}){
    return(
        <Pressable onPress={onPress} style={[styles.container]} disabled={!value}>
            <View style={[styles.container, !value && {backgroundColor: '#fff', opacity:0.7}]}>
                <Text style={styles.label}>{label}</Text>
            </View>
        </Pressable>
    )
}
export default CustomButton;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FE8C00',
        height:50,
        justifyContent:'center',
        borderRadius:4,
        marginVertical:5

    },
    label:{
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center'
    }
})