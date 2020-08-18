import React from 'react';
import {View} from 'react-native'
import Header from "./Header";

export default Container = ({children}) => {
    return (
        <View style={{flex:1}}>
            <Header/>
            <View style={{flex: 9, backgroundColor: 'yellow'}}>
                {children}
            </View>
        </View>
    )
}