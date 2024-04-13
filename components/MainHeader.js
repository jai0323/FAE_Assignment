import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function MainHeader({name, address}){
    return(
        <View style={styles.MainContainer}>
            <View style={styles.header}>

                <View style={styles.box1}>

                    <View style={styles.city}>
                        <MaterialCommunityIcons name="navigation-variant" size={24} color="#FE8C00" />
                        <Text style={styles.cityName}>{name.length>15? name.slice(0,15)+"... " : name}</Text>
                        <FontAwesome name="chevron-down" size={12} color="#878787" />
                    </View>
                    <Text style={styles.location}>{address.length>28 ? address.slice(0,28)+"..." : address}</Text>
                </View>

                <View style={styles.box2}>
                        <Pressable style={styles.onebtnbox}> 
                            <Image source={require('../assets/12.png')} style={styles.onebtn} resizeMode="contain"/>
                        </Pressable>
                        <Pressable>
                            <Ionicons name="person-circle" size={46} color="#4F4F4F" />
                        </Pressable>
                </View>
            </View>
        </View>
    )
}
export default MainHeader;

const styles = StyleSheet.create({
    MainContainer:{
        paddingTop:50,
        marginBottom:10
    },
    header:{
        
        flexDirection: 'row'
    },
    box1:{
        flexDirection: 'column',
        width:"60%",
    },
    box2:{
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        width:"40%",
        
    },
    city:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    cityName:{
        fontSize:18,
        fontWeight: '900',
        paddingHorizontal:5
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
    }

})