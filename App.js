import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import OTPScreen from './screens/OTPScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons,Feather, Octicons, FontAwesome6, SimpleLineIcons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FoodScreen from './screens/FoodScreen';
import InstamartScreen from './screens/InstamartScreen';
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown:false,
        tabBarLabelStyle: {
          fontSize: 12, // Adjust the font size as needed
          //color: 'grey',
          fontWeight:'500'
        },
        tabBarActiveTintColor:'#101010',
        tabBarStyle:{
          paddingVertical:5,
          height:50
        }
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
         tabBarLabel:'Swiggy',
         tabBarIcon: ({ color, size }) => (
          <Feather name="home" size={size} color={color} />
        ),
        }
        }
      
      />
      <Tab.Screen 
        name="Food" 
        component={FoodScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="fast-food-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Instmart" 
        component={InstamartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="basket-shopping" size={20} color={color} />
          ),
          tabBarStyle:{
            height:0
          }
        }} 
      />
      <Tab.Screen 
        name="Dineout" 
        component={InstamartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="badge" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Credit Card" 
        component={InstamartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="credit-card" size={size} color={color} />
          ),
        }} 
      />
      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
    <StatusBar style="dark" />
      <NavigationContainer>
          <MyStack />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
