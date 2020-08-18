import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const style = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalView: {
        width: '80%',
        height: '30%',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowRadius: 3.84,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 2
        },
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoNovoResgate: {
        backgroundColor: '#fae128',
        width: '100%',
        padding: 20,
    },
    colorTexto: {
        color: '#045ca3'
    },
    tituloModal: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold'
    },
    textoModal: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 15
    }

})

const ModalConfirmacao = ({modalVisible, toggleModal}) => {
    return (
        <View style={style.centeredView}>
            <Modal visible={modalVisible} transparent={true}>
                <View style={style.centeredView}>
                    <View style={[style.modalView, style.center]}>
                        <Text style={[style.colorTexto, style.tituloModal]}>RESGATE EFETUADO!</Text>
                        <Text style={[style.colorTexto, style.textoModal]}>
                            O valor solicitado estará em sua conta em até
                            5 dias úteis!
                        </Text>
                        <View style={{marginTop: 'auto', width: '100%'}}>
                            <TouchableOpacity onPress={toggleModal}>
                                <View style={[style.botaoNovoResgate, style.center]}>
                                    <Text style={[style.colorTexto]}>Novo Resgate</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ModalConfirmacao;