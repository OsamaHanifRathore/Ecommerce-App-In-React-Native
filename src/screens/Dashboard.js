import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import CategoryItems from '../Components/CategoryItems';
import HeaderComponent from '../Components/HeaderComponent';
import Data from '../data/categories.json';
import {blueTheme} from '../utils/constant';

var db = openDatabase({name: 'ProductDatabase.db'});

export default function Dashboard({navigation}) {
  // <DashboardStack.Screen name="hats" component={Hats} />
  //   <DashboardStack.Screen name="jackets" component={Jackets} />
  //   <DashboardStack.Screen name="sneakers" component={Sneakers} />
  //   <DashboardStack.Screen name="mens" component={Mens} />
  //   <DashboardStack.Screen name="womens" component={Womens} />
  //   <DashboardStack.Screen name="product" component={ProductScreen}/>

  const [cat, setCat] = useState([]);

  db.transaction(function (txn) {
    txn.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='table_product'",
      [],
      function (tx, res) {
        if (res.rows.length == 0) {
          txn.executeSql('DROP TABLE IF EXISTS table_product', []);
          txn.executeSql(
            'CREATE TABLE IF NOT EXISTS table_product(user_id INTEGER PRIMARY KEY, product_title VARCHAR(20),  product_img VARCHAR(255))',
            [],
          );
        }
      },
    );
  });

  useEffect(() => {
    setCat(Data.sections);
  }, []);

  if (cat.length == 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={blueTheme} />
      </View>
    );
  } else {
    cat.forEach((val) => {
      try {
        db.transaction((tx) => {
          console.log('value', val.id, val.title, val.imageUrl);
          // Loop would be here in case of many values
          var str = `INSERT INTO table_product (user_id, product_title, product_img) VALUES (${val.id}, '${val.title}', '${val.imageUrl}')`;
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

    // db.transaction((tx) => {
    //   console.log('select query executed');
    //   tx.executeSql('SELECT * FROM table_product', [], (tx, result) => {
    //     if (result.rows.length > 0) {
    //       console.log(result.rows.item(0));
    //       var temp = [];
    //       for (var i = 0; i < result.rows.length; i++) {
    //         temp.push(result.rows.item(i));
    //       }
    //       setCat(temp);
    //       console.log(cat);
    //     }
    //   });
    // }
    // );
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
