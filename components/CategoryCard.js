import { Image, StyleSheet, Text, View } from "react-native";
function CategoryCard({item}){
    return(
        <View  style={styles.container}>
            <View style={[styles.box,{ backgroundColor:item.color,}]}>
                <Image source={item.image} style={styles.img} resizeMode="contain"/>
            </View>
            <Text  style={styles.text}>{item.name}</Text>
        </View>
    )
}
export default CategoryCard;


const styles = StyleSheet.create({
    container:{
        width:110,
        height:165,
        marginTop:5,
        alignItems:'center',
    },
    box:{
        alignItems:'center',
        justifyContent:'flex-end',
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
        marginHorizontal:10,
        textAlign:'center',
        paddingTop:10
    }
})