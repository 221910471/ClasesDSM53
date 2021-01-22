// importar react
import React from 'react';
//importar la lib de react navigation stack
import {createStackNavigatior} from '@react-navigation/stack';
//declaración de const de Stack
const Stack = createStackNavigatior();

//importamos el componente CoinScreen
import CoinsinScreen from './CoinScreen;'

//declarar nuetsro componente de los tipos stateless

const CoinsStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name= "Coins" component={CoinScreen} />
        </Stack.Navigator>
    )
}