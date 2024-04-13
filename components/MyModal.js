import { Alert, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Heading from "./Heading";
import CustomButton from "./CustomButton";
import PolicyText from "./PolicyText";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

function MyModal({visible, setVisible}){
    const [phone, setPhone] = useState('');
    
    const navigation = useNavigation()

    function phoneNumber(number){
        setPhone(number);
    }
    
    function gotoOTPScreen(){
        if(phone.length==10)
        {
            setVisible();
            setPhone('')
            navigation.navigate("OTP",{phone:phone});
        }
        else
        Alert.alert("Invalid!","Please enter the valid 10 digit number.");
        
    }

    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        >
            <Pressable style={styles.backBtn} onPress={()=>setVisible()}></Pressable>
            <View style={styles.modalContainer}>
                <Heading heading={'LOGIN'} txt={'Enter your phonne number to proceed'}/>
                <Text style={styles.label}>PHONE NUMBER</Text>
                <View style={styles.inputBox}>
                    <Text style={styles.code}>+91</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={phoneNumber}
                        value={phone}
                        autoFocus={true}
                        keyboardType="phone-pad"
                        keyboardAppearance="light"
                        cursorColor={'#FE8C00'}
                        maxLength={10}
                    />
                </View>
                <View style={styles.line} />
                <CustomButton label={'CONTINUE'} onPress={gotoOTPScreen} value={phone.length==10? true : false} />
                <PolicyText />
            </View>
        </Modal>
        
    )
}
export default MyModal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#FEF8F0',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingHorizontal: 15,
        //marginTop:220,
    },
    backBtn:{
        flex:0.45
    },
    label:{
        color: "#878787",
        marginTop:20,
        marginBottom:0,
    },
    line:{
        borderTopWidth:2,
        borderRadius:2,
        width:"100%",
        borderBlockColor: '#FE8C00',
        marginTop:10,
        marginBottom:20
    },
    inputBox:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    code:{
        fontSize:16
    },
    input:{
        width: '90%',
        fontSize: 16,
        paddingTop:1
    }
})