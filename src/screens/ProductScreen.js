import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {blueTheme, screenWidth} from '../utils/constant';
import {connect} from 'react-redux';
import { addCart } from '../actions/cartcontrol';



 function ProductScreen({route, navigation , reduceDispatcher}) {
  const {image, name, price, index, data} = route.params;
  return (
    <View style={Styles.container}>
      <ScrollView>
        <Image source={image} style={{height: 400, width: '100%'}} />
        <Text style={Styles.priceText}>${price}</Text>
        <Text style={Styles.title}>{name}</Text>
        <Text style={Styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Text>
        <Button title="Add To Cart"
        onPress={()=>{reduceDispatcher.add(data[index])}}
        />
      </ScrollView>
      <Icon
        name="arrow-circle-left"
        size={40}
        style={Styles.icon}
        color="black"
        onPress={() => navigation.pop()}
      />
    </View>
  );
}


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
  },

  priceText: {
    fontSize: 24,
    color: blueTheme,
    marginLeft: 10,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  icon: {
    position: 'absolute',
    opacity: 0.5,
    top: 10,
    left: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: '400',
  },
  title: {
    fontSize: 18,
    fontWeight: '200',
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


export default connect(mapStateToProps,mapDispatchtoProps)(ProductScreen);
