import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import ItemCard from '../Components/ItemCard';
import Data from '../data/studentlist.json';
import { blueTheme, screenWidth } from '../utils/constant';


var db = openDatabase({name: 'ProductDatabase.db'});

export default function Hats({navigation}) {
  // var data = Data.shopdata.filter(function (cat) {
  //   return cat.title === 'Hats';
  // });

  db.transaction(function (txn) {
    txn.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='table_hats'",
      [],
      function (tx, res) {
        if (res.rows.length == 0) {
          txn.executeSql('DROP TABLE IF EXISTS table_hats', []);
          txn.executeSql(
            'CREATE TABLE IF NOT EXISTS table_hats(hats_id INTEGER PRIMARY KEY, hats_title VARCHAR(20),  hats_img VARCHAR(255), hats_price INTEGER)',
            [],
          );
        }
      },
    );
  });

  var data = Data.shopdata.filter((hat) => hat.title == 'Hats');

  console.log('data without map', data);
  var dataLog = data.map((value) => value.items.map((value) => value));

  // var hats = data.map(items=>items.items);

  var dataList = dataLog[0];
  // var extraArray = [];
  console.log(dataList);

  dataList.forEach((val) => {
    try {
      db.transaction((tx) => {
        var str = `INSERT INTO table_hats(hats_id, hats_title, hats_img, hats_price) VALUES (${val.id}, '${val.name}', '${val.imageUrl}' , ${val.price})`;
        console.log(str);
        tx.executeSql(
          str,
          // [],
          (tx, results) => {
            // console.log('Insert Results', results.rowsAffected);
            // if (results.rowsAffected > 0) {
            //   Alert.alert(
            //     'Success',
            //     'User updated successfully',
            //     [{text: 'Ok', onPress: () => {}}],
            //     {cancelable: false},
            //   );
            // } else {
            //   alert('Updation Failed');
            // }
          },
        );
      });
    } catch (error) {
      console.log(error);
    }
  });

  // var dataList = extraArray.concat(hats);

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
    padding: 0,
    color: blueTheme,
    width: screenWidth,
    flexWrap: 'wrap',
    color: 'grey',
    justifyContent: 'center',
  },
  mainContainer: {
    backgroundColor: '#eeeeee',
  },
});
