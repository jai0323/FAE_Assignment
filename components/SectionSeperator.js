import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

function SectionSeperator({title}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <LinearGradient
                colors={['lightgrey', '#ffff', '#fff']}
                style={styles.line}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y:1 }}
            />
        </View>
    )
}
export default SectionSeperator;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    title:{
        fontSize:14,
        fontWeight: '500',
        color:'#101010',
    },
    line:{
        width:"100%",
        marginHorizontal:10,
        height:1,
        backgroundColor:'pink'
    }
})