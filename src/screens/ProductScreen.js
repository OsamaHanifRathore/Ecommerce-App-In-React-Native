import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {blueTheme, screenWidth} from '../utils/constant';
import {connect} from 'react-redux';
import {addCart} from '../actions/cartcontrol';

function ProductScreen({route, navigation, reduceDispatcher}) {
  const {image, name, price, index, data} = route.params;
  return (
    <View style={Styles.container}>
      <View style={{flex: 0.7}}>
        <Image source={image} style={{height: 400, width: '100%'}} />
        <View style={Styles.tag}>
          <Text style={{color: 'white', marginLeft: 10, fontSize: 12}}>
            -20%
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.2,
          flexDirection: 'row',
          marginHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'column'}}>
          <Text style={Styles.priceText}>${price}</Text>
          <Text style={Styles.title}>{name}</Text>
        </View>
        <Icon name="heart" size={22} />
      </View>

      <View
        style={{
          flex: 0.1,
          backgroundColor: blueTheme,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={()=>{reduceDispatcher.add(data[index])}}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="shopping-bag"
              size={22}
              color="white"
              style={{marginRight: 10}}
            />
            <Text style={{fontSize: 22, color: 'white', fontWeight: '400'}}>
              Add to shopping cart
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    flexDirection: 'column',
  },

  priceText: {
    fontSize: 24,
    color: blueTheme,
    marginLeft: 10,
    fontWeight: '300',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  tag: {
    height: 40,
    width: 40,
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: blueTheme,
    borderBottomLeftRadius: 40,
    borderTopLeftRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  //   firstScroll: {
  //     flex: 0.8,
  //     width: screenWidth,
  //   },
  //   firstView: {
  //     flex: 0.5,
  //   },
  //   secondScroll: {
  //     flex: 0.5,
  //     width: screenWidth,
  //   },
  //   secondView: {
  //     flex: 1,
  //     backgroundColor: 'red',
  //     width: screenWidth,
  //   },
  //   lastView: {
  //     width: screenWidth,
  //     flex: 0.2,
  //     backgroundColor: 'pink',
  //   },
});

const mapStateToProps = (state) => {
  return {
    item: state.cartList,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    reduceDispatcher: {
      add: (itemobject) => dispatch(addCart(itemobject)),
    },
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(ProductScreen);
