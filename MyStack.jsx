import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login/Login";
import Dashboard from "./screens/Dashboard/Dashboard";

const Stack = createNativeStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator initialRouteName={Login}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    );
}
