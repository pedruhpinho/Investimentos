import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import ResgatePersonalizadoScreen from "../resgatePersonalizado";
import ListaInvestimentosScreen from "../listaInvestimentos";

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator
            initialRoutName="ListaInvestimentos"
            screenOptions={{
                title: 'RESGATE',
                headerBackTitleVisible: false,
                headerStyle: {
                    backgroundColor: '#005aa5',
                    borderBottomWidth: 5,
                    borderBottomColor: '#fae128'
                },
                headerTitleStyle:{
                    color: 'white'
                }
            }}
        >
            <Stack.Screen
                name="ListaInvestimentos"
                component={ListaInvestimentosScreen}
            />
            <Stack.Screen
                name="ResgatePersonalizado"
                component={ResgatePersonalizadoScreen}
            />
        </Stack.Navigator>
    )
}
export default MainNavigator;