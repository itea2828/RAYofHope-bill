import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';


class DashboardScreen extends React.Component {

  doLogout(){
    AsyncStorage.removeItem("token")
    .then(
      res => {
        this.props.navigation.navigate('Auth')
      }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.greetingTxt}>Hey User</Text>
        <TouchableOpacity 
        activeOpacity={0.8}
        style={styles.logoutBtn}
          onPress={() => this.doLogout()}
        >
            <Text style={styles.logoutTxt}>Выйти</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DashboardScreen;

const styles = StyleSheet.create({
    container:{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    greetingTxt: {
        fontSize: 24,
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    logoutBtn: {
        backgroundColor: "#f72929",
        paddingVertical: 10,
        width: 100
        
    },
    logoutTxt: {
        color: "#fafafa",
        textAlign: 'center',
    }
})
