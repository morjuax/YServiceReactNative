import React, {useState, useEffect} from 'react';
import {
    View,
    Alert,
    TextInput,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Text,
    TouchableOpacity
} from 'react-native';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);


    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Error', 'Por favor ingrese su email y contraseña');
            return;
        }

        fetch('http://localhost:3333/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setData(data)
            })
        // Aquí iría la lógica de autenticación con el backend
        console.log('Email:', email);
        console.log('Password:', password);
        // Route
        navigation.navigate('Dashboard')
    };

    useEffect(() => {

    }, [])

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <View style={styles.section}>
                    <Text style={styles.textLg}>Hello there,</Text>
                    <Text style={[styles.textXL, styles.appTitleText]} testID="heading">
                        Welcome LoginApp 👋
                    </Text>
                </View>
                <View style={styles.section}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        // autoCompleteType="email"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.submitLoginButton} onPress={handleLogin}>
                        <Text style={styles.textButton}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    section: {
        marginVertical: 24,
        marginHorizontal: 12,
    },
    textLight: {
        fontWeight: '300',
    },
    textBold: {
        fontWeight: '500',
    },
    textCenter: {
        textAlign: 'center',
    },
    text2XS: {
        fontSize: 12,
    },
    textXS: {
        fontSize: 14,
    },
    textSm: {
        fontSize: 16,
    },
    textMd: {
        fontSize: 18,
    },
    textLg: {
        fontSize: 24,
    },
    textXL: {
        fontSize: 48,
    },
    appTitleText: {
        paddingTop: 12,
        fontWeight: '500',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
        width: '100%',
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

export default Login;