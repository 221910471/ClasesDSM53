//importar react
import React from 'react'; 
//import libreria stack
import { createStackNavigator } from '@react-navigation/stack';

//importamos nuesto componente de CoinsScreen 
import CoinsScreen from './CoinsScreen';
import CoinDetailScreen from './CoinDetailScreen';

//declarar constante para stack
const Stack = createStackNavigator();


//empez<mos a construir nuesto componente de tipo stalles

const CoinsStack = () => {
    return(
        <Stack.Navigator>

            <Stack.Screen name="Coins"  
            name="stack"
            component={CoinsScreen}
            />
        {/* {importamos nuestra pantalla detalle} */}

            <Stack.Screen name="DetailsComponents"  
            component={CoinDetailScreen}
            />

        </Stack.Navigator>

    )
}

export default CoinsStack;