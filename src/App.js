import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BottomNavigationComponent from './screens/BottomNavigationComponent';
import Dashboard from './screens/Dashboard';
import Hats from './screens/Hats';
import Jackets from './screens/Jackets';
import Login from './screens/Login';
import Mens from './screens/Men';
import ProductScreen from './screens/ProductScreen';
import SignUp from './screens/SignUp';
import Sneakers from './screens/Sneakers';
import SplashScreen from './screens/SplashScreen';
import Womens from './screens/Women';
export default function App() {
  const AuthStack = createStackNavigator();

  return (
    <NavigationContainer>
      <AuthStack.Navigator >
        <AuthStack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />
        <AuthStack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <AuthStack.Screen name="SignUp" component={SignUp}  options={{headerShown:false}}/>
        <AuthStack.Screen
          name="BottomNavigationComponent"
          component={BottomNavigationComponent}
          options={{headerShown:false}}
          />
        <AuthStack.Screen name="Dashboard" component={Dashboard} />
        <AuthStack.Screen name="hats" component={Hats} />
        <AuthStack.Screen name="jackets" component={Jackets} />
        <AuthStack.Screen name="sneakers" component={Sneakers} />
        <AuthStack.Screen name="mens" component={Mens} />
        <AuthStack.Screen name="womens" component={Womens} />
        <AuthStack.Screen name="product" component={ProductScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
