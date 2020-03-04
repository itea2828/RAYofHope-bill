import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/loginScreen';
import DashboardScreen from './screens/dashboardScreen';
import AuthLoadingScreen from './screens/authloadingScreen';

// const beforeSignin = createStackNavigator({
//     Login: {
//         screen: LoginScreen
//     }
// }, {
//     headerMode: "none",
//     initialRouteName: "Login"
// })

// const afterSignin = createStackNavigator({
//     Dashboard: {
//         screen: DashboardScreen
//     }
// }, {
//     headerMode: "none",
//     initialRouteName: "Dashboard"
// })


// const AppNavigator = createStackNavigator({
//     Auth: beforeSignin,
//     App: afterSignin,
//     AuthLoadingScreen: AuthLoadingScreen
// },{
//     headerMode: "none",
//     initialRouteName: "Auth"
// })

// function AppNavigator() {
//     return (
//         <Stack.Navigator
//             initialRouteName="Auth"
//         >
//             <Stack.Screen
//                 name="Auth"
//                 component={beforeSignin}
//             />
//             <Stack.Screen
//                 name="App"
//                 component={afterSignin}
//             />
//             <Stack.Screen
//                 name="AuthLoadingScreen"
//                 component={AuthLoadingScreen}
//             />
//         </Stack.Navigator>
//     );
// }

const Stack = createStackNavigator();

function beforeSignin() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
            headerShown: false,
          }}
      />
    </Stack.Navigator>
  );
}

function afterSignin() {
    return (
        <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{ gestureEnabled: false }}
        >
        <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{
                headerShown: false,
              }}
        />
        </Stack.Navigator>
    );
}

// function authLoading() {
//   return (
//     <Stack.Navigator
//       initialRouteName="AuthLoading"
//       screenOptions={{ gestureEnabled: false }}
//     >
//       <Stack.Screen
//         name="AuthLoading"
//         component={AuthLoadingScreen}
//         options={{
//             headerShown: false,
//           }}
//       />
//     </Stack.Navigator>
//   );
// }


function AppCont() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Auth"
            >
                <Stack.Screen
                    name="Auth"
                    component={beforeSignin}
                    options={{
                        headerShown: false,
                      }}
                />
                <Stack.Screen
                    name="App"
                    component={afterSignin}
                    options={{
                        headerShown: false,
                      }}
                />
                <Stack.Screen
                    name="authLoading"
                    component={AuthLoadingScreen}
                    options={{
                        headerShown: false,
                      }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
  }


export default AppCont;