import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import PropTypes from 'prop-types';

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fcfcfc'
    },
    descricao:{
        backgroundColor: '#fcfcfc',
    },
    valor: {
        marginLeft: 'auto',
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#f4f4f4'
    },
})

const InvestimentosItem = ({titulo, descricao, valor, borda}) => {

    return (
        <View style={[style.container, borda ? style.borderBottom : {}]}>
            <View style={style.descricao}>
                <Text>{titulo}</Text>
                <Text>{descricao}</Text>
            </View>
            <View style={style.valor}>
                <Text>{valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</Text>
            </View>
        </View>
    )
}

InvestimentosItem.propTypes = {
    valor: PropTypes.number
}

export default InvestimentosItem