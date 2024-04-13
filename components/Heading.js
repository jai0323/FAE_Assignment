import { StyleSheet, Text, View } from "react-native";

function Heading({heading, txt}){
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.txt}>{txt}</Text>
        </View>
    )
}
export default Heading;

const styles = StyleSheet.create({
    container:{
        marginTop:25,
        marginBottom:15
    },
    heading:{
        fontSize:18,
        fontWeight: 'bold',
        marginBottom:5
    },
    txt:{
        color:"#878787",
        fontSize:14
    }
})