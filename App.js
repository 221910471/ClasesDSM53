/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {Text, View} from 'react-native';
 //navigator container
 import { NavigationContainer } from '@react-navigation/native';
 //bottomTabNavigator
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
 
 
 function HomeScreen(){
   return(
     <View style={[styles.container, {// Try setting 'flexDirection' to '"row"'
     flexDirection: "column"}]}>x
     <View style={{ flex: 1, backgroundColor: "red", justifyContent:"center",  }}>Slider</View>
       <Text>V2-Base de Datos</Text>
       <View style={{ flex: 1, backgroundColor: "darkorange", justifyContent:"center", flexDirection: "row", alignItems: "center"  }}>post 1</View>
       <View style={{ flex: 1, flexDirection: "row", justifyContent:"center",  }}>post 1</View>
       <View style={{ flex: 1, flexDirection: "row", justifyContent:"center",  }}>post 2</View>
       <View style={{ flex: 1, flexDirection: "row", justifyContent:"center",  }}>post 3</View>
       <Text>V3-Laravel</Text>
       <View style={{ flex: 1, backgroundColor: "green", justifyContent:"center", flexDirection: "row", alignItems: "center"  }}>post 1</View>
       <View style={{ flex: 1, flexDirection: "row", justifyContent:"center",  }}>post 1</View>
       <View style={{ flex: 1, flexDirection: "row", justifyContent:"center",  }}>post 2</View>
       <View style={{ flex: 1, flexDirection: "row", justifyContent:"center",  }}>post 3</View>
       <Text>V4-Info</Text>
       <View style={{ flex: 1, backgroundColor: "blue", justifyContent:"center", flexDirection: "row", alignItems: "center"  }}>post 1</View>
       <View style={{ flex: 1, flexDirection: "row", justifyContent:"center",  }}>post 1</View>
       <View style={{ flex: 1, flexDirection: "row", justifyContent:"center",  }}>post 2</View>
       <View style={{ flex: 1, flexDirection: "row", justifyContent:"center",  }}>post 3</View>
     
     
     </View>
     
   );
 }
 
 function CategoriesScreen(){
   return(
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "yellow"}}>
       <Text>SCREEN DE CATEGORIAS</Text>
     </View>
   );
 }
 
 function PostScreen(){
   return(
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "green"}}>
       <Text>PANTALLA DE INFO</Text>
     </View>
   );
 }
 
 function InfoScreen(){
   return(
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "gray"}}>
       <Text>SCREEN DE POSTS</Text>
     </View>
   );
 }
 
 const Tab = createBottomTabNavigator();
 
 export default function App(){
   return(
       <NavigationContainer>
         <Tab.Navigator>
           <Tab.Screen name="Inicio" component={HomeScreen}
             options={{
               tabBarIcon: ({ color, size }) => (
                 <MaterialCommunityIcons name="home" color={'#F32A64'} size={25} />
               ),
             }}
           />
           <Tab.Screen name="Post" component={PostScreen}
             options={{
               tabBarIcon: ({ color, size }) => (
                 <MaterialCommunityIcons name="newspaper" color={'#F32A64'} size={25} />
               ),
             }}
           />
           <Tab.Screen name="Categorias" component={CategoriesScreen}
             options={{
               tabBarIcon: ({ color, size }) => (
                 <MaterialCommunityIcons name="new-box" color={'#F32A64'} size={25} />
               ),
             }}
           />
           <Tab.Screen name="Info" component={InfoScreen}
             options={{
               tabBarIcon: ({ color, size }) => (
                 <MaterialCommunityIcons name="information" color={'#F32A64'} size={25} />
               ),
             }}
           />
         </Tab.Navigator>
       </NavigationContainer>
   );
 }
