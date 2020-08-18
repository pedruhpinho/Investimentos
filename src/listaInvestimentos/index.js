import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from "react-native";
import InvestimentosItem from "./InvestimentoItem";
import CabecalhoListaInvestimentos from "./CabecalhoListaInvestimentos";

const style = StyleSheet.create({
    container:{
        backgroundColor: '#f4f4f4'
    }
})

const ListaInvestimentosScreen = ({navigation}) => {

    const [investimentos, setInvestimentos] = useState([])

    useEffect(() => {
        const fetchInvestimentos = async () => {
            const response = await fetch('http://www.mocky.io/v2/5e76797e2f0000f057986099')
            let responseJson = await response.json()
            setInvestimentos(responseJson.response.data.listaInvestimentos)
        }
        fetchInvestimentos()
    }, [])

    return (
        <View style={style.container}>
            <CabecalhoListaInvestimentos />
            {investimentos.length > 0 && investimentos.map((invest, index) => (
                <TouchableOpacity
                    key={index}
                    disabled={invest.indicadorCarencia == 'S' ? true: false}
                    onPress={() => navigation.navigate('ResgatePersonalizado', {investimento: invest})}>
                    <InvestimentosItem
                        titulo={invest.nome}
                        descricao={invest.objetivo}
                        valor={invest.saldoTotalDisponivel}
                        borda={investimentos.length != index+1}
                    />
                </TouchableOpacity>
            ))
            }
        </View>
    )
}

export default ListaInvestimentosScreen;