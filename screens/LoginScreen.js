import { Image, Modal, StyleSheet, Text,View } from "react-native";
import Heading from "../components/Heading";
import CustomButton from "../components/CustomButton";
import PolicyText from "../components/PolicyText";
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useState, version } from "react";
import MyModal from "../components/MyModal";
import MyHeader from "../components/MyHeader";

function LoginScreen(){

    const [showModal,setShowModal] = useState(false);

    function onLoginPress(){
        setShowModal(!showModal);
    }
    function setVisible(){
        setShowModal(false);
    }

    return(
        <>
        <View>
            <View style={{backgroundColor:'#FFF'}}>
                <MyHeader />
            </View>
            <Image source={require('../assets/welcome1.png')} style={styles.img} />
            <View style={styles.container}>
                <Heading heading={'ACCOUNT'} txt={'Login/Create Account to manage orders'}/>
                <CustomButton label={'LOGIN'} onPress={onLoginPress} value={true}/>
                <PolicyText />
                <View style={styles.line} />
                <View>
                    <View style={styles.label} >
                        <Image source={require('../assets/offericon.png')} style={styles.imgicon} color="black" />
                        <Text style={styles.labletTxt}>Offers</Text>
                        <Ionicons name="chevron-forward" size={14} color="#878787" />
                    </View>
                    <View style={styles.dottedline}/>
                    <View style={styles.label}>
                        <Octicons name="mail" size={18} color="black" />
                        <Text style={styles.labletTxt}>Send Feedback</Text>
                        <Ionicons name="chevron-forward" size={14} color="#878787" />
                    </View>
                </View>
            </View>
            <Text style={styles.version}>App version 5.0.4 (7)</Text>
            
        </View>
        { showModal && 
              <View
                style={styles.absolute}
              />
            }
        <MyModal visible={showModal} setVisible={setVisible}/>
        </>
    )
}
export default LoginScreen;

const styles = StyleSheet.create({
    img:{
        width:'100%',
        height:220,
    },
    container:{
        backgroundColor: '#FFF',
        paddingHorizontal: 15
    },
    line:{
        borderTopWidth:2,
        borderRadius:2,
        width:"100%",
        borderBlockColor: '#878787',
        opacity:0.3,
        marginTop:20
    },
    imgicon:{
        width:20,
        height:20
    },
    label:{
        flexDirection: 'row',
        paddingVertical:25,
        justifyContent:'center',
        alignItems: 'center'
    },
    labletTxt:{
        fontSize:16,
        fontWeight: '500',
        color:"#0D0D0D",
        width:"80%",
        marginLeft:20
    },
    dottedline:{
        borderTopWidth:2,
        borderStyle:"dotted",
        width:"100%",
        borderBlockColor: '#878787',
        opacity:0.3,
        
    },
    version:{
        color: '#878787',
        textAlign:'center',
        marginTop:10

    },
    absolute: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'grey',
        flex:1,
        opacity:0.4
    },
    
})