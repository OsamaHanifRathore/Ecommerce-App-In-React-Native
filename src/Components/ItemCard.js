import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { blueTheme, fontColorOfProducts, screenWidth } from '../utils/constant';

export default function ItemCard({
  imgSource,
  name,
  price,
  navigation,
  index,
  data,
}) {
  

  const image = {uri: imgSource};
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push('product', {image, price, name, index, data})
      }>
      <View style={styles.container}>
        <View style={{flex: 0.5}}>
          <Image source={image} style={{height: 200, width: '100%'}} />
        </View>
        <View style={{flex: 0.5, marginTop: 10}}>
          <Text style={styles.ProductName}>{name}</Text>
          <Text style={styles.price}>Price : ${price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    width: screenWidth / 2 - 20,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 0,
    elevation: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopRightRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: '#fafafa',
    alignSelf:'flex-start',
  },

  ProductName: {
    color: fontColorOfProducts,
    fontWeight: '600',
    fontSize: 18,
  },
  price: {
    color: blueTheme,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
});
