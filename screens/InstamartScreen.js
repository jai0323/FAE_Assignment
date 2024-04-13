import { FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
import MainHeader from "../components/MainHeader";
import SearchBar from "../components/SearchBar";
import InstamartHeader from "../components/InstamartHeader";
import instamartdata from "../data/instamart-data";
import TopCategoryCard from "../components/TopCategoryCard";
import BestPriceList from "../components/BestPriceList";
import SectionSeperator from "../components/SectionSeperator";
import AllCategory from "../components/AllCategory";
import BarButton from "../components/BarButton";
import { LinearGradient } from "expo-linear-gradient";

function InstamartScreen({navigation}){
    return(
        <View style={styles.conatiner}>
            <View style={styles.header}>
                <InstamartHeader name={'Delivery to Salarpuria Sattva Carni'} address={'Kudlu Main Rd Muneshwara Nagar, Hosapala'} />
            </View>
            <ScrollView style={styles.conatiner}>
                <View style={styles.search}>
                <SearchBar />
                </View>
                <Image source={require('../assets/31.png')} style={styles.poster} resizeMode="cover"/>
                <View >
                    <FlatList  
                        horizontal={true}
                        data={instamartdata}
                        renderItem={(itemdata)=><TopCategoryCard item={itemdata.item}/>}
                    />
                </View>
                <Image source={require('../assets/61.png')} style={styles.freeImg} resizeMode="cover"/>
                <BestPriceList />
                <View style={styles.section}>
                    <SectionSeperator title={'Shop by category'} />
                    <AllCategory />
                </View>
            </ScrollView>
            <View style={styles.bottombar}>
                <LinearGradient 
                    colors={["#FEB98F","#FFF", '#fff',"#FFF", '#fff']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y:0 }}
                    style={styles.backBtn}
                >
                    <BarButton icon="arrow-back-circle-outline" name='Swiggy' color={'#FE8C00'} onPress={()=> navigation.goBack()}/>
                </LinearGradient>
                <View style={styles.line} />
                <BarButton icon="basket-shopping" name='Instamart' color={'#101010'} />
                <BarButton icon="appstore-o" name='Categories' color={'#878787'} />
                <BarButton icon="brightness-percent" name='Offers' color={'#878787'} />
            </View>
            
        </View>
    )
}
export default InstamartScreen;


const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:'#fff'
    },
    header:{
        paddingHorizontal:15,
        backgroundColor:'#FFDFEE',
        paddingBottom:10
    },
    search:{
        paddingHorizontal:15,
        backgroundColor:'#FFDFEE',
        paddingBottom:5
    },
    poster:{
        width:'100%',
        height:100,        
    },
    freeImg:{
        width:"100%",
        height:40,
        backgroundColor:'red',
        marginTop:5
    },
    section:{
        paddingHorizontal:15,
        marginTop:15
    },
    bottombar:{
        width:"100%",
        height:50,
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      
    },
    backBtn:{
        height:50,
    },
    line:{
        height:30,
        borderRightWidth:1,
        borderColor:"lightgrey"
    }
   
})