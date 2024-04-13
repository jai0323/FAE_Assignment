import { Alert, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import MyHeader from "../components/MyHeader";
import Heading from "../components/Heading";
import { useRoute } from '@react-navigation/native';
import { useEffect, useRef, useState } from "react";
import CustomButton from "../components/CustomButton";

function  OTPScreen({navigation}){
    const route = useRoute(); 
    const [phone, setPhone] = useState();
    const [OTP, setOTP] = useState('');
    const [count, setCount] = useState(60);
    const [t1,setT1] = useState();
    const [t2,setT2] = useState();
    const [t3,setT3] = useState();
    const [t4,setT4] = useState();
    const [t5,setT5] = useState();
    const [t6,setT6] = useState();
    
    const et1 = useRef();
    const et2 = useRef();
    const et3 = useRef();
    const et4 = useRef();
    const et5 = useRef();
    const et6 = useRef();
    

    useEffect(()=>{
        setPhone(route.params.phone);
    });

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(count==0)
                clearInterval(interval);
            else
                setCount(count -1);
        }, 1000);
        return ()=>{
            clearInterval(interval)
        }
    },[count])

    function sendOTP(){
        if(OTP.length == 6)
        {          
            navigation.navigate('MyTabs');
        }
        else{
                setT1('')
                setT2('')
                setT3('')
                setT4('')
                setT5('')
                setT6('')
            Alert.alert("Invalid!","Enter the correct OTP.");
        }
    }

    function back(){
        navigation.goBack();
    }




    return (
    <>
        
        <ImageBackground
            source={require('../assets/OTP_bg.png')}
            style={styles.bg_img}
        >
            
            <MyHeader onPress={back} />
            <View style={{paddingHorizontal:15}}>
                <Heading heading={'VERIFY DETAILS'} txt={`OTP sent to ${phone}`} />
            </View>
        </ImageBackground>
        <View style={styles.container}>
            <Text style={styles.label}>ENTER OTP</Text>
            <View style={styles.otpView}>
                <TextInput 
                    ref={et1} 
                    style={styles.inputView} 
                    keyboardType="phone-pad" 
                    maxLength={1}
                    autoFocus={true}
                    value={t1}
                    cursorColor={'#FE8C00'}
                    onChangeText={txt => {
                        setT1(txt);
                        if(txt.length>=1)
                        et2.current.focus();
                    }}
                />
                <TextInput 
                    ref={et2}
                    style={styles.inputView} 
                    keyboardType="phone-pad" 
                    maxLength={1}
                    value={t2}
                    cursorColor={'#FE8C00'}
                    onChangeText={txt => {
                        setT2(txt);
                        if(txt.length>=1)
                            et3.current.focus();
                        else if(txt.length < 1)
                            et1.current.focus();
                    }} 
                />
                <TextInput 
                    ref={et3}
                    style={styles.inputView} 
                    keyboardType="phone-pad" 
                    maxLength={1}
                    value={t3}
                    cursorColor={'#FE8C00'}
                    onChangeText={txt => {
                        setT3(txt);
                        if(txt.length>=1)
                            et4.current.focus();
                        else if(txt.length < 1)
                            et2.current.focus();
                    }} 
                
                />
                <TextInput 
                    ref={et4}
                    style={styles.inputView} 
                    keyboardType="phone-pad" 
                    maxLength={1}
                    value={t4}
                    cursorColor={'#FE8C00'}
                    onChangeText={txt => {
                        setT4(txt);
                        if(txt.length>=1)
                            et5.current.focus();
                        else if(txt.length < 1)
                            et3.current.focus();
                    }}  
                />
                <TextInput 
                    ref={et5}
                    style={styles.inputView} 
                    keyboardType="phone-pad" 
                    maxLength={1}
                    value={t5}
                    cursorColor={'#FE8C00'}
                    onChangeText={txt => {
                        setT5(txt);
                        if(txt.length>=1)
                            et6.current.focus();
                        else if(txt.length < 1)
                            et4.current.focus();
                    }} 
                
                />
                <TextInput 
                    ref={et6}
                    style={styles.inputView} 
                    keyboardType="phone-pad" 
                    maxLength={1}
                    value={t6}
                    cursorColor={'#FE8C00'}
                    onChangeText={txt => {
                        setT6(txt);
                        if(txt.length>=1)
                            setOTP(t1+t2+t3+t4+t5+txt);
                        else if(txt.length < 1)
                            et5.current.focus();
                    }}  
                />
            </View>
            <View style={styles.retryBox}>
                <Text style={styles.txt}>Didn't receive the OTP? </Text>
                <Pressable onPress={()=>{count==0 && setCount(60)}}>
                    <Text style={[styles.txt,{color: count==0? '#FE8C00' : '#878787'}]}>Retry </Text>
                </Pressable>
                {count>0 && <Text style={styles.txt}>in 00.{count}</Text>}
            </View>
            <CustomButton label={'VERIFY AND PROCEED'} onPress={sendOTP} value={OTP.length==6? true : false}/>
        </View>
    </>
    )
}
export default OTPScreen;

const styles = StyleSheet.create({
    bg_img:{
        width: '100%',
        height:200,
    },
    container:{
        flex:1,
        paddingHorizontal:15,
        paddingTop:50,
        backgroundColor: '#FFFF'
    },
    label:{
        color:'#878787'
    },
    otpView:{
        width:'100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:10
    },
    inputView:{
        width:40,
        height: 40,
        borderBottomWidth:1,
        borderColor:"#FE8C00",
        textAlign: 'center',
        color: '#101010',
        fontSize: 20
    },
    retryBox:{
        flexDirection: 'row',
        marginTop: 20,
        marginBottom:70
    },
    txt:{
        color: '#878787',
        fontSize: 12,
    }

})