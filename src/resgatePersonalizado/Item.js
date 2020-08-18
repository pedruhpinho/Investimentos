import React from 'react'
import {Text, View, StyleSheet} from "react-native";

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#ffffff',
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#f4f4f4'
    },
    valor: {
        marginLeft: 'auto'
    }
})

const Item = ({descricao, valor, border}) => {

    return (
        <View style={[style.container, border ? style.borderBottom : {}]}>
            <Text>{descricao}</Text>
            <View style={style.valor}>
                <Text>
                    {typeof valor === 'number' ?
                        valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
                        :
                        valor}
                </Text>
            </View>
        </View>
    )
}

export default Item