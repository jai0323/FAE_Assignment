import { Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import bestpriceItem from "../data/bestpriceItem";



function BestPriceList(){
return(
    <>
    <View style={styles.container}>
    <LinearGradient
            colors={['#D30996',"#fff", '#fff']}
            style={styles.line}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y:0 }}
    />
    <Octicons name="north-star" size={10} color="#D30996" />
    <Text style={styles.heading}>BEST PRICE, ALWAYS!</Text>
    <Octicons name="north-star" size={10} color="#D30996" />
     <LinearGradient
            colors={['#D30996',"#fff", '#fff']}
            style={styles.line}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y:1 }}
    />
    </View>

    <View>
        <FlatList 
            horizontal={true}
            data={bestpriceItem}
            renderItem={(itemdata)=>{
                let item= itemdata.item;
                return(
                    <View  style={styles.card}> 
                        <Text  style={styles.off}>{item.off} </Text>
                        <Text  style={styles.save}>{item.save}</Text>
                        <Image source={item.image} style={styles.img} resizeMode="contain"/>
                    </View>
                )
            }}
        />
    </View>


    </>
)
}
export default BestPriceList;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:15
    },
    card:{
        width:140,
        height:155,
        backgroundColor:'#9B1E73',
        alignItems:'center',
        borderRadius:15,
        marginHorizontal:10,
        marginVertical:15
    },
    line:{
        width:100,
        height:1
    },
    heading:{
        color:"#D30996",
        fontSize:18,
        fontWeight:'900',
        paddingHorizontal:10
    },
    off:{
        color:"#FFF",
        fontSize:12,
        fontWeight:'500',
        marginTop:10

    },
    save:{
        color:"#FFF",
        fontSize:18,
        fontWeight:'900',
        marginBottom:5
    },
    img:{
        width:90,
        height:90
    }

})