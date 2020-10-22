import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import CartProductComponent from '../Components/CartProductComponent';
import {screenWidth} from '../utils/constant';

function Cart({item, length, bill}) {
  return (
    <View style={{backgroundColor:'#bdbdbd',flex:1}}>
  
      <FlatList
        style={styles.listContainer}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(val, idx) => idx.toString()}
        data={item}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <CartProductComponent
              title={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          );
        }}
      />
      <View style={styles.priceDetails}>
        <View style={styles.numberOfItemsInCart}>
          <Text style={styles.leftText}>Number of items</Text>
          <Text>{length}</Text>
        </View>
        <View style={styles.numberOfItemsInCart}>
          <Text>TOTAL BILL</Text>
          <Text>{bill}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    width: screenWidth,
    borderBottomWidth: 1,
    borderBottomColor: '#bdbdbd',
  },
  listContainer: {
    flex: 0.8,
    backgroundColor: '#bdbdbd',
    padding: 16,
  },
  listText: {
    fontSize: 30,
  },
  priceDetails: {
    flex: 0.2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    padding:20,
  },

  contentContainer: {
    paddingBottom: 20,
  },

  numberOfItemsInCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal:10,
  },
  leftText:{
    fontSize:20,
    marginBottom:10,
  }
});

const mapStateToProps = (state) => {
 let totalBillOfCart = state.cartList.map((item) => item.price).reduce((a, b) => a + b, 0);
  return {
    item: state.cartList,
    length: state.cartList.length,
    bill: totalBillOfCart,
  };
};

export default connect(mapStateToProps)(Cart);
