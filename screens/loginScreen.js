import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';


class LoginScreen extends React.Component {
    // https://reqres.in/api/login
    state = {
        username: "",
        password: "",
        loading: false
    }

    onChangeHandle(state, value){
        this.setState({
            [state]: value
        })
    }

    doLogin() {
        const {username, password} = this.state;
        if(username && password) {
            const req = {
                "email": username,
                "password": password
            }
            this.setState({
                loading: true
            })
            axios.post("https://reqres.in/api/login", req)
                .then(
                    res=> {
                        this.setState({
                            loading: false
                        })
                        AsyncStorage.setItem("token", res.data.token)
                            .then(
                                res => {
                                    this.props.navigation.navigate("App");
                                    alert("Успешно!");
                                }
                            );
                    },
                    err => {
                        alert("Логин или пароль не правильный, пожалуйста проверьте данные");
                    }
                )
        }
        else {
            alert("Введите логин и пароль");
        }
        
    }

  render() {
      const {username, password, loading} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.formWrapper}>
            <Text style={styles.welcomeText}>Добро пожаловать!</Text>
            <View style={styles.formRow}>
                <TextInput 
                style={styles.formText} 
                placeholderTextColor='#333' placeholder="Email"
                value={username}
                autoCapitalize = 'none'
                onChangeText = {(value) => this.onChangeHandle('username', value)}
                />
            </View>
            <View style={styles.formRow}>
                <TextInput 
                style={styles.formText} 
                secureTextEntry={true} 
                placeholderTextColor='#333' 
                placeholder="Пароль"
                value={password}
                onChangeText = {(value) => this.onChangeHandle('password', value)}
                />
            </View>
            <TouchableOpacity 
            activeOpacity={0.8}
            style={{
                ...styles.signinBtn,
                backgroundColor: loading? "#ddd": "#3b7cbf"
            }}
                onPress={() => this.doLogin()}
                disabled={loading}
            >
                <Text style={styles.signinTxt}>
                    {loading? "Загрузка..." : "Войти"}
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formWrapper: {
        width: '80%',
    }, 
    formRow: {
        marginBottom: 10,
    },
    formText: {
        height: 40,
        backgroundColor: '#ddd',
        paddingLeft: 10,
        paddingRight: 5,
        paddingHorizontal: 10,
        color: '#333',
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom:20,
        color: '#000',
    },
    signinBtn: {
        paddingVertical: 10,
        width: '45%'
        
    },
    signinTxt: {
        color: "#fafafa",
        textAlign: 'center',
    }
})
