import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import CategoryItems from '../Components/CategoryItems';
import HeaderComponent from '../Components/HeaderComponent';
import Data from '../data/categories.json';
import {blueTheme} from '../utils/constant';
import {createStackNavigator} from '@react-navigation/stack';
import Hats from './Hats';
import Jackets from './Jackets';
import Sneakers from './Sneakers';
import Mens from './Men';
import Womens from './Women';
import ProductScreen from './ProductScreen';

export default function Dashboard({navigation}) {

  // <DashboardStack.Screen name="hats" component={Hats} />
  //   <DashboardStack.Screen name="jackets" component={Jackets} />
  //   <DashboardStack.Screen name="sneakers" component={Sneakers} />
  //   <DashboardStack.Screen name="mens" component={Mens} />
  //   <DashboardStack.Screen name="womens" component={Womens} />
  //   <DashboardStack.Screen name="product" component={ProductScreen}/>
  
  const [cat, setCat] = useState([]);

  useEffect(() => {
    setCat(Data.sections);
  }, []);

 if (cat.length == 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={blueTheme} />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}>
      <HeaderComponent />
      {cat.map((value) => (
        <CategoryItems
          titleText={value.title}
          imgSource={value.imageUrl}
          key={value.id}
          onTap={() => navigation.push(value.title)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f9fafd',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
