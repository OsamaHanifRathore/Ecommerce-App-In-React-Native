import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {screenHeight} from '../utils/constant';

export default function SocialAccountButton({name, buttonText, color}) {
  return (
    <View style={styles.inputContainer}>
      <View style={{flex: 0.1, marginLeft: 10}}>
        <Icon name={name} size={22} color={color} />
      </View>
      <View style={{flex: 0.9, justifyContent: 'center'}}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: screenHeight / 15,
    borderColor: '#ccc',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    alignSelf: 'center',
  },
});
