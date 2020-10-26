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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {blueTheme} from '../utils/constant';
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {connect} from 'react-redux';
// const DashboardStack = createStackNavigator();

// const DashboardStackScreen = () => (
//   <DashboardStack.Navigator>
//     <DashboardStack.Screen name="Dashboard" component={Dashboard}  />
//     <DashboardStack.Screen name="hats" component={Hats} />
//     <DashboardStack.Screen name="jackets" component={Jackets} />
//     <DashboardStack.Screen name="sneakers" component={Sneakers} />
//     <DashboardStack.Screen name="mens" component={Mens} />
//     <DashboardStack.Screen name="womens" component={Womens} />
//     <DashboardStack.Screen name="product" component={ProductScreen}/>
//   </DashboardStack.Navigator>
// );

// const DasboardRoute = () => <Dashboard/>;

// const CartRoute = () => <Cart/>;

// const AccountRoute = () => <Account />;

const BottomNavigationComponent = ({length}) => {
  const Tab = createMaterialBottomTabNavigator();
  let lengthOfBadge = length == 0 ? null: length;
  console.log(lengthOfBadge);
  return (
    <Tab.Navigator
    activeColor="#546E7A"
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
          tabBarBadge:lengthOfBadge,
        }}
      
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {},
});

const mapStateToProps = (state) => {
   return {
     
     length: state.cartList.length,
  
   };
 };
 
 export default connect(mapStateToProps)(BottomNavigationComponent);

// <Tab.Navigator>
// <Tab.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
// <Tab.Screen name="hats" component={Hats} />
// <Tab.Screen name="jackets" component={Jackets} />
// <Tab.Screen name="sneakers" component={Sneakers} />
// <Tab.Screen name="mens" component={Mens} />
// <Tab.Screen name="womens" component={Womens} />
// <Tab.Screen name="product" component={ProductScreen}/>
// </Tab.Navigator>
