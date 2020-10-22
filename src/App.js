import React from 'react';
import MyComponent from './screens/BottomNavigationComponent';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from './Context';
import SplashScreen from './screens/SplashScreen';

export default function App() {
  const AuthStack = createStackNavigator();

  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setUserToken('admin');
      },
      signUp: () => {
        setUserToken('admin');
      },
      signOut: () => {
        setUserToken(null);
      },
    };
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? (
          <MyComponent />
        ) : (
          <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="SignUp" component={SignUp} />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
