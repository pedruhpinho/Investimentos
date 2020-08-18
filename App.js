import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import MainNavigator from "./src/navigators/MainNavigator";
import Reactotron from "./src/reactotron/reactotronConfig";

App = () => {
    return (
        <NavigationContainer>
            <MainNavigator/>
        </NavigationContainer>
    );
}

const AppWithBenefits = __DEV__ ? Reactotron.overlay(App) : App;

export default AppWithBenefits;