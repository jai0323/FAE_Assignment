import { Image, StyleSheet, Text, View } from "react-native";

function TopCategoryCard({item}){
return(
    <View  style={styles.container}>
        <View style={styles.box}>
            <Image source={item.image} style={styles.img} resizeMode="contain"/>
        </View>
        <Text  style={styles.text}>{item.name}</Text>
    </View>
)
}
export default TopCategoryCard;

const styles = StyleSheet.create({
    container:{
        width:120,
        height:165,
        //backgroundColor:'red',
        marginTop:20,
        alignItems:'center',
    },
    box:{
        alignItems:'center',
        justifyContent:'flex-end',
        backgroundColor:'#FFDFEE',
        width:100,
        height:100,
        borderRadius:10
    },
    img:{
        width:90,
        height:80
    },
    text:{
        fontSize:15,
        fontWeight:'500',
        marginHorizontal:20,
        textAlign:'center',
        paddingTop:10
    }
})