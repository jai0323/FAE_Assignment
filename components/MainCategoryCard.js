import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { SimpleLineIcons } from '@expo/vector-icons';

function MainCategoryCard({image,title,offer,text,height,time,logo}){
    return(
        <ImageBackground source={image}  style={[styles.container,{height:height, borderRadius:15}]} resizeMode="contain">
            <View style={styles.box}>
            <Text style={styles.title}>{title}</Text>
            {
                logo &&
                <View style={{flexDirection:'row'}}>
                    <Image source={logo} style={{width:30,height:20}} resizeMode="contain"/>
                    <Text style={[styles.text,{paddingTop:2}]}>{text}</Text>
                </View>
            }
            { !logo && <Text style={styles.text}>{text}</Text>}
            
            { offer &&
                <LinearGradient
                colors={['#FFE5C3', '#ffff', '#fff']}
                style={styles.offer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y:1 }}
                >
                <Text style={styles.offer}>{offer}</Text>
                </LinearGradient>
            }

            {
                time
                &&
                <View style={styles.time}>
                    <SimpleLineIcons name="energy" size={12} color="#FE8C00" />
                    <Text style={styles.digit}>8</Text>
                    <Text style={styles.min}>MINS</Text>
                </View>
           }

            </View>
           
        </ImageBackground>

    )
}
export default MainCategoryCard;

const styles = StyleSheet.create({
    container:{

        width:"100%",
        height:200,
        backgroundColor:'#ffff',
        paddingTop:12,
        borderRadius:15,
        marginBottom:15,
        elevation:6
    },
    box:{
        paddingHorizontal:12
    },
    title:{
        fontSize:16,
        fontWeight: '900',
        marginBottom:0
    },
    text:{
        fontSize:12,
        color:'#878787',
        marginBottom:7

    },
    offer:{
        color:'#FE8C00',
        fontSize:11,
        fontWeight:'700',
        //backgroundColor:"#FFD39F",
        borderRadius:10,
        paddingHorizontal:5

    },
    img:{
        marginLeft:20,
        //marginTop:7,
        alignItems:'flex-end',
        width:120,
        height:120
    },
    time:{
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop:20,
        borderWidth:1,
        borderColor:"#FE8C00",
        width:70,
        borderRadius:10
    },
    digit:{
        color:'#878787',
        fontWeight: '900',

    },
    min:{
        fontSize:12,
        color:"lightgrey"
    }
})