//importar react
import React, {componente} from 'react';
//importar los componentes nativos de react
import {View, Text} from 'react-native';
//estos componentes son nativos de react

//declaramos nuestro componente de tipo clase

//esta clase es la forma basica de estos componentes
export default  class CoinScreen extends Components{
    render(){
        //siempre debe de llevar el return dentro del render para renderizar el contenido
        return(
            <View>
                <Text>Mi primer pantalla de Coins Screen</Text> 
            </View>

        );
    }

}
