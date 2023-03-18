import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export function Dashboard({navigation}) {
    const back = () => {
        navigation.navigate('Login')
    }
    return (
        <View style={styles.container}>
            <Text>Welcome to dashboard!</Text>
            <TouchableOpacity style={styles.submitLoginButton} onPress={back}>
                <Text style={styles.textButton}>Volver</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitLoginButton: {
        backgroundColor: '#22282d',
        paddingVertical: 16,
        borderRadius: 8,
        width: '50%',
        marginTop: 24,
        alignItems: 'center',
        alignSelf: 'center'
    },
    textButton: {
        color: '#ffffff'
    }
});



export default Dashboard;