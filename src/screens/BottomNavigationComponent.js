import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Account from './Account';
import Dashboard from './Dashboard';
import Hats from './Hats';
import Jackets from './Jackets';
import Sneakers from './Sneakers';
import Mens from './Men';
import Womens from './Women';
import ProductScreen from './ProductScreen';
import Cart from './Cart';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();

const DashboardStack = createStackNavigator();

const DashboardStackScreen = () => (
  <DashboardStack.Navigator>
    <DashboardStack.Screen name="Dashboard" component={Dashboard}  />
    <DashboardStack.Screen name="hats" component={Hats} />
    <DashboardStack.Screen name="jackets" component={Jackets} />
    <DashboardStack.Screen name="sneakers" component={Sneakers} />
    <DashboardStack.Screen name="mens" component={Mens} />
    <DashboardStack.Screen name="womens" component={Womens} />
    <DashboardStack.Screen name="product" component={ProductScreen}/>
  </DashboardStack.Navigator>
);

const DasboardRoute = () => <DashboardStackScreen />;

const CartRoute = () => <Cart/>;

const AccountRoute = () => <Account />;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'dashboard', title: 'Dashboard', icon: 'home'},
    {key: 'signup', title: 'cart', icon: 'cart'},
    {key: 'signin', title: 'account', icon: 'account'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: DasboardRoute,
    signup: CartRoute,
    signin: AccountRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}

      />
  );
};

export default MyComponent;

// <Tab.Navigator>
// <Tab.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
// <Tab.Screen name="hats" component={Hats} />
// <Tab.Screen name="jackets" component={Jackets} />
// <Tab.Screen name="sneakers" component={Sneakers} />
// <Tab.Screen name="mens" component={Mens} />
// <Tab.Screen name="womens" component={Womens} />
// <Tab.Screen name="product" component={ProductScreen}/>
// </Tab.Navigator>