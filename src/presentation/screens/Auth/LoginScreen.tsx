import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import {LoginScreenProps} from "../../type/navigation";

const LoginScreen = ({ navigation, route }: LoginScreenProps) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Email"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                placeholder="Mật khẩu"
                style={styles.input}
                secureTextEntry
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => console.log('Đăng nhập')}
            >
                <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => console.log('Quên mật khẩu')}
            >
                <Text style={styles.link}>Quên mật khẩu?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={styles.buttonText}>Đăng ký</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.googleButton]}
                onPress={() => console.log('Đăng nhập bằng Google')}
            >
                <Text style={styles.buttonText}>Đăng nhập bằng Google</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 32,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#007bff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    link: {
        color: '#007bff',
        marginVertical: 8,
    },
    googleButton: {
        backgroundColor: '#db4437',
    },
});

export default LoginScreen;
