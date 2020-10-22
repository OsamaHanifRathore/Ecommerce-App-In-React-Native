import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {blueTheme, screenWidth} from '../utils/constant';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {deleteFromCart} from '../actions/cartcontrol';

function CartProductComponent({title, price, imageUrl, reduceDispatcher}) {
  const image = {uri: imageUrl};
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={{
          height: 70,
          width: 70,
          alignSelf: 'center',
          marginHorizontal: 5,
        }}
      />
      <View style={{flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.priceText}>${price} </Text>
      </View>
      <Icon
        name="times-circle"
        size={15}
        style={styles.iconStyle}
        onPress={() => reduceDispatcher.delete(title)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 100,
    width: screenWidth,
    elevation:5,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fafafa',
  },
  productTitle: {
    fontSize: 20,
    color: '#212121',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  iconStyle: {
    position: 'absolute',
    top: 0,
    right: 40,
    marginTop: 8,
  },
  priceText: {
    color: '#9e9e9e',
    fontSize: 20,
    marginLeft: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    item: state.cartList,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    reduceDispatcher: {
      delete: (itemname) => dispatch(deleteFromCart(itemname)),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(CartProductComponent);
