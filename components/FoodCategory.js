import { ImageBackground, StyleSheet, Text, View } from "react-native";

function FoodCategory({title,img}){
    return(
        <View style={styles.container}>
            <ImageBackground source={img} style={styles.bgImg} resizeMode="cover">
                <Text style={styles.title}>{title}</Text>
            </ImageBackground>
        </View>
    )
}
export default FoodCategory;

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        overflow:'hidden',
        borderRadius:15,
        width:"48%",
        borderWidth:1,
        borderColor:'lightgrey',
        backgroundColor:'#FFFF',
        elevation:7
    },
    bgImg:{
        width:'100%',
        height:75,        
    },
    title:{
        fontSize:14,
        fontWeight: '800',
        color:"#878787",
        paddingHorizontal:15,
        marginTop:15
    }
    
})