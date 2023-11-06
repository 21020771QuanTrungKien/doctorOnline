import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/home';
import Signup from './src/register'
import Login from './src/login';
import Welcome from './src/welcome'

const Stack = createNativeStackNavigator();

function App() {
  return <Welcome/>
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator screenOptions={{ headerShown: false }}>
  //       {/* <Stack.Screen name="Home" component={Home} />
  //       <Stack.Screen name="Signup" component={Signup} />
  //       <Stack.Screen name="Login" component={Login} /> */}
  //       <Stack.Screen name="welcome" component={Welcome}/>
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
}

export default App;