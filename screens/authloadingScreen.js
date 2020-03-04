import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';

class AuthLoadingScreen extends React.Component {

  constructor() {
    super();
    this.checkToken();
  }

  checkToken = async () => {
    const token = await AsyncStorage.setItem("token");
    if (token) {
      this.props.navigation.navigate("App");
    }
    else {
      this.props.navigation.navigate("Auth");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.activityItem}/>
      </View>
    );
  }
}

export default AuthLoadingScreen;

const styles = StyleSheet.create({
    container:{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    activityItem: {
        width: 50,
        height: 50,
    }
})
