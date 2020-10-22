import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {withTheme} from 'react-native-paper';
import {blueTheme} from '../utils/constant';

export default function FormButton({buttonText, onTouch, ...rest}) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onTouch}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#bdbdbd',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
});
