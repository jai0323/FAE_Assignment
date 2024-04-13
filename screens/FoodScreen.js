import { FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
import MainHeader from "../components/MainHeader";
import SearchBar from "../components/SearchBar";
import MyCarousel from "../components/MyCarousel";
import MainCategoryCard from "../components/MainCategoryCard";
import FoodCategory from "../components/FoodCategory";
import SectionSeperator from "../components/SectionSeperator";
import FoodOfferCard from "../components/FoodOfferCard";
import RestaurantsCard from "../components/RestaurantsCard";
import data from "../data/dummy-data";


function FoodScreen(){
    return(
        <View style={styles.conatiner}>
            <View style={styles.header}>
                <MainHeader name={'Salarpuria Satta Carni'} address={'Kudlu Main Rd Muneshwara Nagar, Hosapala'} />
            </View>
            <ScrollView>
                <View style={styles.search}>
                <SearchBar />
                </View>
                <Image source={require('../assets/21.png')} style={styles.poster} resizeMode="cover"/>
                <MyCarousel />
                <View style={{paddingHorizontal:15}}>
                    <View style={styles.section1}>
                            <FoodCategory title={'GUILTFREE OPTIONS'} img={require('../assets/23.png')}  />
                            <FoodCategory title={'GOURMET DELIGHT'} img={require('../assets/24.png')}  />
                    </View>
                    <SectionSeperator title={'OFFERS FOR YOU'} />
                    <View style={styles.section1}>
                            <FoodOfferCard title={'Pocket Hero'} offer={'Up to 60% off'} img={require('../assets/25.png')} color={'#ECE7FF'}  textColor={'#5134B6'} />
                            <FoodOfferCard title={'More Offers'} offer={'Buy1 Get1 & more'} img={require('../assets/26.png')}  color={'#ECF7F3'} textColor={'#1BA672'} />
                    </View>
                    <SectionSeperator title={'YOUR TRUSTED PICKS'} />
                     {
                        data.map((item,idx)=><RestaurantsCard item={item} key={idx}/>)
                     }
                        
                
                </View>
            </ScrollView>
            
        </View>
    )
}
export default FoodScreen;


const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:'#fff'
    },
    header:{
        paddingHorizontal:15,
        backgroundColor:'#FFEDE1',
    },
    search:{
        paddingHorizontal:15,
        backgroundColor:'#FFEDE1',
        paddingBottom:20
    },
    poster:{
        width:'100%',
        height:100,        
    },
    section1:{
        flexDirection: 'row',
        justifyContent:"space-between",
        width:'100%',
        marginTop:20,
        marginBottom:30,
    },
   
})