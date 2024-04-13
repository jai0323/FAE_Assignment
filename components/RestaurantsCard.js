import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

function RestaurantsCard({item}){
    return(
        <View style={styles.container} >
            <ImageBackground source={{uri:item.image}} style={styles.bgImg} resizeMode="cover">
                
            </ImageBackground>
            <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <View  style={styles.info}>
                    <MaterialCommunityIcons name="star-circle" size={15} color="green" />
                    <Text style={styles.rating}>{item.rating}</Text>
                    <Text style={styles.rating}>{item.time}</Text>
                    <Text style={styles.rating}>{item.average_price}</Text>
                </View>
                <Text style={styles.offer}>{item.offer.length>25 ? item.offer.slice(0,25) : item.offer}</Text>
                <LinearGradient  
                    style={styles.delivery}
                    colors={["#FFE6DA","#FFE6DA", '#fff']}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y:0 }}
                >
                    <Text style={styles.delText}>Free Delivery</Text>
                    <Image  style={styles.logo} source={require('../assets/12.png')} resizeMode="contain" />
                </LinearGradient>
            </View>
        </View>
    )
}
export default RestaurantsCard;

const styles = StyleSheet.create({
    container:{
        marginTop:25,
        flexDirection:'row',
        justifyContent:"space-between",
        
    },
    bgImg:{
        width:90,
        height:110,
        backgroundColor:'red',
        borderRadius:10,
        overflow:'hidden'
    },
    details:{
        width:"70%",
        paddingHorizontal:10,
        paddingTop:5,
        //justifyContent:"space-evenly"
    },
    info:{
        flexDirection: 'row',
        alignItems:'center',
        marginVertical:5
    },
    name:{
        fontSize:18,
        fontWeight:'500'
    },
    offer:{
        fontSize:14,
        color:"#BF9071"
    },
    delivery:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:5,
        marginTop:10

    },
    delText:{
        fontSize:12,
        color:"#FE8C00"
        
    },
    rating:{
        fontSize:14,
        fontWeight:'400',
        paddingRight:10
    },
    logo:{
        width:50,
        height:20
    }
})