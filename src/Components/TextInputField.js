import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  placeholderText,
} from 'react-native';

export default function TextInputField({labelValue, placeholderText, ...rest}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholderText}
        numberOfLines={1}
        pla
        clearTextOnFocus={true}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: Dimensions.get('window').height / 15,
    borderColor: '#ccc',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#eeeeee',
  },
  input: {
    padding: 10,
    paddingLeft: 10,
    flex: 1,
    fontSize: 16,
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
