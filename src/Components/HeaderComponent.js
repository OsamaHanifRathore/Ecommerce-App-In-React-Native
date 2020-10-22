import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {blueTheme} from '../utils/constant';
export default function HeaderComponent() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftIcon}>
        <Icon name="qrcode" color={blueTheme} size={22} />
        <Text style={styles.iconText}>Scan</Text>
      </View>
      <View style={styles.searchField}>
        <Icon
          name="search"
          color={blueTheme}
          size={18}
          style={styles.textFieldIcon}
        />
        <TextInput placeholder="Search Here" />
      </View>
      <View style={styles.rightIcon}>
        <Icon name="wallet" color={blueTheme} size={22} />
        <Text style={styles.iconText}>wallet</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 70,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  leftIcon: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchField: {
    flex: 0.6,
    flexDirection: 'row',
    borderColor: blueTheme,
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    alignItems: 'center',
  },
  rightIcon: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: blueTheme,
    fontSize: 14,
    fontWeight: '100',
  },
  textFieldIcon: {
    marginHorizontal: 5,
  },
});
