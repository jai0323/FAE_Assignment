import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import MainHeader from "../components/MainHeader";
import SearchBar from "../components/SearchBar";
import MainCategoryCard from "../components/MainCategoryCard";

function HomeScreen(){
    return(
        <View style={styles.conatiner}>
            <View style={styles.header}>
                <MainHeader name={'Cadenza'} address={'1902, Calypso, Cadenza, Kudlu Main Rd'}/>
                <SearchBar />
            </View>
            <ImageBackground source={require('../assets/11.png')} style={styles.poster} resizeMode="contain">
                <Pressable style={styles.shopBtn}>
                    <Text style={styles.shoptxt}>Shop Now</Text>
                </Pressable>
            </ImageBackground>
            <View style={styles.container2}>
                <View style={styles.row1}>
                    <MainCategoryCard 
                        title={'FOOD DELIVERY'}     
                        image={require("../assets/13.png")} 
                        offer={'UP TO 60% OFF + FREE DEL'} 
                        text={'FOOD FIESTA'}
                        height={200}
                        logo={require('../assets/12.png')}
                    />
                    <MainCategoryCard 
                        title={'DINEOUT'}     
                        image={require("../assets/14.png")} 
                        offer={'FLAT 50% OFF'} 
                        text={'GIRF DINING FESTIVAL'}
                        height={155}
                    />
                </View>
               
                <View style={styles.row2}>
                <MainCategoryCard 
                        title={'INSTAMART'}     
                        image={require("../assets/15.png")} 
                        offer={'FREE DELIVERY'} 
                        text={'INSTANT GROCERY'}
                        height={140}
                        time={true}
                    />
                     <MainCategoryCard 
                        title={'GENIE'}     
                        image={require("../assets/16.png")} 
                        text={'PICK-UP & DROP'}
                        height={60}
                    />
                    <MainCategoryCard 
                        title={'MINIS'}     
                        image={require("../assets/17.png")} 
                        text={'UNIQUE FINDS'}
                        height={60}
                    />
                    <MainCategoryCard 
                        title={'INSANELYGOOD'}     
                        image={require("../assets/18.png")} 
                        text={'QUALITY GROCERY'}
                        height={60}
                    />
                </View>

            </View>
        </View>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:'#FAF5F9'
    },
    header:{
        paddingHorizontal:15,
        backgroundColor:'#ffffff',
        paddingBottom:20
    },
    poster:{
        width:'100%',
        height:120,
        
    },
    shopBtn:{
        backgroundColor:"red",
        width:80,
        height:25,
        justifyContent:'center',
        alignItems:'center',
        marginTop:85,
        marginLeft:15,
        borderRadius:7
    },
    shoptxt:{
        color:"#FFFF",
        fontSize:12,
        fontWeight: '700'
    },
    container2:{
        paddingHorizontal:15,
        flexDirection: 'row',
        width:"100%",
        paddingTop:10
    },
    row1:{
        width:'50%',
        paddingRight:7.55
        //backgroundColor:'red'
    },
    row2:{
        width:'50%',
        paddingLeft:7.5,
        //backgroundColor:'pink',
        alignItems:'flex-end'
    }
    
    
})