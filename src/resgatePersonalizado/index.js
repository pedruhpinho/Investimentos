import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert} from "react-native";
import Item from "./Item";
import ModalConfirmacao from "./ModalConfirmacao";

const style = StyleSheet.create({
    fieldResgate: {
        backgroundColor: '#ffffff',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10
    },
    tituloSecao: {
        padding: 20,
        backgroundColor: '#f4f4f4'
    },
    botaoConfirmar:{
        backgroundColor: '#fae128',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 20,
    },
    textBotaoConfirmar: {
        color: '#045ca3'
    },
    erro:{
        color: 'red'
    }
})

const ResgatePersonalizadoScreen = ({route}) => {

    const [valoresResgate, setValoresResgate] = useState({})
    const [erros, setErros] = useState({})
    const [totalResgate, setTotalResgate] = useState(0)
    const [visibleModal, setvisibleModal] = useState(false)

    const {investimento} = route.params;

    useEffect(() => {
        let valoresAcumulados = {}
        investimento.acoes.forEach((acao, index) => {
            valoresAcumulados = {
                ...valoresAcumulados,
                [`valorResgate${index}`]: {
                    ...valoresAcumulados[`valorResgate${index}`],
                    valorResgateDesejado: 0,
                    valorAcumulado: calculaValorAcao(investimento.saldoTotalDisponivel, acao.percentual)
                }
            }
            setValoresResgate(valoresAcumulados)
        })
    }, [])

    useEffect(() => setTotalResgate(calculaTotalResgate(valoresResgate)))

    const validaIndividual = (valor, index) => {
        if(!valor)
            valor = 0
        if (valor < valoresResgate[`valorResgate${index}`].valorAcumulado) {
            setErroByResgateIndex(index,undefined)
            setValoresResgate({
                ...valoresResgate,
                [`valorResgate${index}`]: {
                    ...valoresResgate[`valorResgate${index}`],
                    valorResgateDesejado: valor
                }
            })
        } else {
            setErroByResgateIndex(index, "Valor a resgatar não pode ser maior que saldo acumulado")
        }
    }

    const setErroByResgateIndex = (index, mensagemErro) => {
        setErros({
            ...erros,
            [`valorResgate${index}`]: mensagemErro
        })
    }

    const validaSubmit = () => {
        if (totalResgate <= 0)
            Alert.alert(null,"Preencha o valor do resgate desejado",[{text: 'OK', onPress:null}])
        else if (totalResgate > investimento.saldoTotalDisponivel)
            Alert.alert(null,"Valor total de resgate não pode ser maior do que o valor total Disponível")
        else
            setvisibleModal(true)
    }

    return (
        <ScrollView>
            <View style={style.tituloSecao}>
                <Text>DADOS DO INVESTIMENTO</Text>
            </View>
            <Item descricao="Nome" valor={investimento.nome} border/>
            <Item descricao="Saldo total disponivel" valor={investimento.saldoTotalDisponivel}/>
            <View style={style.tituloSecao}>
                <Text>RESGATE DO SEU JEITO</Text>
            </View>
            {investimento.acoes.map((acao, index) => (
                <View key={acao.id}>
                    <Item descricao="Ação" valor={acao.nome} border/>
                    <Item
                        descricao="Saldo acumulado"
                        valor={valoresResgate[`valorResgate${index}`] ? valoresResgate[`valorResgate${index}`].valorAcumulado : ""}
                        border
                    />
                    <View style={style.fieldResgate}>
                        <Text>Valor a resgatar</Text>
                        <TextInput
                            value={valoresResgate[`valorResgate${index}`] ? valoresResgate[`valorResgate${index}`].valorResgateDesejado.toString() : ""}
                            onChangeText={valor => {
                                let valorFloat = parseFloat(valor)
                                validaIndividual(valorFloat, index)
                            }}
                            keyboardType="numeric"
                        />
                        {erros[`valorResgate${index}`] && <Text style={style.erro}>{erros[`valorResgate${index}`]}</Text>}
                    </View>
                </View>
            ))}
            <Item descricao="Valor total resgatar" valor={totalResgate}/>
            <TouchableOpacity onPress={validaSubmit}>
                <View style={style.botaoConfirmar}><Text style={style.textBotaoConfirmar}>Confirmar Resgate</Text></View>
            </TouchableOpacity>
            <ModalConfirmacao modalVisible={visibleModal} toggleModal={() => setvisibleModal(!visibleModal)}/>
        </ScrollView>
    )
}

export const calculaValorAcao = (valorTotal, percentual) => {
    const valorAcao = valorTotal * (percentual / 100)
    return valorAcao
}

export const calculaTotalResgate = (valoresResgate) => {
    let totalResgate = Object.values(valoresResgate).reduce((acc, cur) => {
        return acc + cur.valorResgateDesejado
    }, 0)
    return totalResgate
}

export default ResgatePersonalizadoScreen;