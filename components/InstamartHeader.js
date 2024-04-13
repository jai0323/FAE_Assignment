import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function InstamartHeader({name, address}){
    return(
        <View style={styles.MainContainer}>
            
                <View style={styles.box}> 
                    <Text style={styles.digit}>9</Text>
                    <Text style={styles.min}>MINS</Text>
                </View>
                <View style={styles.box1}>
                    <View style={styles.city}>
                        <Text style={styles.cityName}>{name.length>20? name.slice(0,20)+"...  " : name}</Text>
                        <FontAwesome name="chevron-down" size={12} color="#878787" />
                    </View>
                    <Text style={styles.location}>{address.length>28 ? address.slice(0,28)+"..." : address}</Text>
                </View>

                <Pressable>
                    <Ionicons name="person-circle" size={46} color="#4F4F4F" />
                </Pressable>
          
            
        </View>
    )
}
export default InstamartHeader;

const styles = StyleSheet.create({
    MainContainer:{
        paddingTop:50,
        marginBottom:0,
        flexDirection: 'row'
    },
    box:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FE8C00',
        paddingHorizontal:10,
        borderRadius:10
    },
    box1:{
        flexDirection: 'column',
        width:"70%",
        paddingHorizontal:10
    },
    city:{
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    cityName:{
        fontSize:18,
        fontWeight: '900',
        
    },
    location:{
        color: '#878787',
        fontSize:12
    },
    onebtnbox:{
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:"orange",
        borderRadius:20,
        paddingHorizontal:8
    },
    onebtn:{
        width:60,
        height:30,
    },
    digit:{
        color:'#fff',
        fontWeight: '900',
        fontSize:20

    },
    min:{
        fontSize:11,
        color:"#fff"
    }

})