import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ItemCard from '../Components/ItemCard';
import Data from '../data/studentlist.json';
import { blueTheme, screenWidth } from '../utils/constant';

export default function Mens({navigation}) {
  var data = Data.shopdata.filter((hat) => hat.title == 'Mens');

  console.log('data without map', data);
  var dataLog = data.map((value) => value.items.map((value) => value));

  // var hats = data.map(items=>items.items);

  var dataList = dataLog[0];
  // var extraArray = [];
  console.log(dataList);

  return (
    <View style={styles.mainContainer}>
    
      <ScrollView
        
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {dataList.map((value, idx) => (
            <ItemCard
              imgSource={value.imageUrl}
              name={value.name}
              price={value.price}
              key={value.id}
              navigation={navigation}
              index={idx}
              data={dataList}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    color: blueTheme,
    width: screenWidth,
    flexWrap: 'wrap',
  },
  mainContainer: {
    backgroundColor: '#eeeeee',
  },
});
