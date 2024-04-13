import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

function FoodOfferCard({title,img,offer,color,style,textColor}){
 return(
        <LinearGradient
            colors={[color, color,"#fff", '#fff']}
            style={styles.container}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y:0 }}
        >
            <ImageBackground source={img} style={styles.bgImg} resizeMode="contain">
            <Text style={[styles.title,{color:textColor}]}>{title}</Text>
            <Text style={[styles.offer,{color:textColor}]}>{offer}</Text>
            </ImageBackground>
        </LinearGradient>
 )
}
export default FoodOfferCard;


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        overflow:'hidden',
        borderRadius:15,
        width:"48%",
        backgroundColor:'#FFFF',
    },
    bgImg:{
        width:'100%',
        height:75,        
    },
    title:{
        fontSize:15,
        fontWeight: '800',
        color:"#878787",
        paddingHorizontal:15,
        marginTop:15,
        textAlign:'right'
    },
    offer:{
        fontSize:10,
        color:"#878787",
        paddingHorizontal:15,
        marginTop:0,
        textAlign:'right'
    }
    
})