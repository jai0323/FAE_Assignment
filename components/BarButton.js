import { StyleSheet, Text, View } from "react-native";
import { AntDesign, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
function BarButton({icon,onPress,name,color}){
return(
    <View style={styles.container}>
        {icon=='arrow-back-circle-outline' && <Ionicons name={icon} size={24} color={color} onPress={onPress}/>}
        {icon=='basket-shopping' && <FontAwesome6 name={icon} size={20} color={color} />}
        {icon=="brightness-percent" && <MaterialCommunityIcons name={icon} size={24} color={color} />}
        {icon=="appstore-o"  && <AntDesign name={icon} size={24} color={color} />}
        <Text style={{color:color}}>{name}</Text>
    </View>
)
}
export default BarButton;

const styles = StyleSheet.create({
container:{
    alignItems:'center',
    justifyContent:'center',
    width:80,
},
text:{

}
})