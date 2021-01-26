//importamos ract
import React, { Component } from 'react';
//importamos componentes nativos en react-native
import {View, text, Pressable, StyleSheet} from 'react-native';
//declaración de un class component

class CoinDetailScreen extends Component{
    handlesPress = () => {
        console.log("Ya te encuentras en la pantalla de detalles");
    }
    render(){
        return(
            <View style={styles.container}>
                <Text  style={styles.btnText}>Esta es mi pantalla de detalles</Text>
                <Pressable style = {styles.btn} onPress={this.handlesPress}><Text style={styles.btnText}>Estos son mis detalles</Text></Pressable>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue"
    },
    btn:{
        padding: 8,
        backgroundColor: "red",
        borderRadius: 8,
        margin: 16
    },
    btnText:{
        color: "#FFFFFF",
        textAlign: "center",

    }
});

export default CoinDetailScreen;

