import React from 'react'
import {Text, View, StyleSheet} from "react-native";

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#f4f4f4'
    }
})

const CabecalhoListaInvestimentos = () => {
    return(
        <View style={style.container}>
            <Text>INVESTIMENTOS</Text>
            <View style={{marginLeft: 'auto'}}>
                <Text>R$</Text>
            </View>
        </View>
    )
}

export default CabecalhoListaInvestimentos