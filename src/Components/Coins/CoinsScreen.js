//importamos react
import React, { Component } from 'react';
//importar los componentes nativos de react
//declaramos el componente stylesheet para hacer nuestro css
//declaramos un componente con pressable
import {View, Text, Pressable, StyleSheet } from 'react-native';



//declaramos nuestro componente de tipo class

class CoinsScreen extends Component{
    //declaramos una funcion para llamar con props la pista de detalle
    //handlesPress es para que cuando presione suceda lo que esta dentro
    handlesPress = () => {
        console.log("di clic en el boton ir a pantalla de detalle");
    }
    render(){
        return(
            <View style={styles.container}>
                <Text  style={styles.btnText}>Mi primer pantalla realizado con los alumnos del DSM-53</Text>
                <Pressable style = {styles.btn} onPress={this.handlesPress}><Text style={styles.btnText}>Ir a detalle</Text></Pressable>
            </View>
        )
    }

}
// asi se declaran stylos en react native para atributos
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

export default CoinsScreen;
