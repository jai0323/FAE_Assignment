import { StyleSheet, Text, View } from "react-native";

function PolicyText(){
    return (
        <View style={styles.container}>
            <Text style={styles.normaltxt}>By clicking, I accept the </Text>
            <Text style={styles.boldtext}>Terms & Condition </Text>
            <Text style={styles.normaltxt}>& </Text>
            <Text style={styles.boldtext}>Privacy Policy</Text>
            
        </View>
    )
}
export default PolicyText;

const styles = StyleSheet.create({
    container:{
        marginVertical:8,
        flexDirection: 'row',
        paddingLeft:5
    },
    normaltxt:{
        color: '#878787',
        fontSize: 11,
    },
    boldtext:{
        fontSize:12,
        fontWeight: 'bold'
    },
    
})