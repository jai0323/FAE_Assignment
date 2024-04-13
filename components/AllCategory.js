import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import instamartdata from "../data/instamart-data";
import CategoryCard from "./CategoryCard";

function AllCategory(){
return(
    <View style={styles.container}>
        <FlatList 
            data={instamartdata}
            numColumns={3}
            renderItem={(itemdata)=><CategoryCard item={itemdata.item}/>}
        />
    </View>
)
}
export default AllCategory;

const styles = StyleSheet.create({
   container:{
    marginTop:20
   }
})