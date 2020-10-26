import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {screenWidth} from '../utils/constant';

export default function CategoryItems({imgSource, titleText, onTap}) {
  const image = {uri: imgSource};
  return (
    <TouchableOpacity style={styles.container} onPress={onTap}>
      <ImageBackground source={image} style={styles.image} />
      <Text style={styles.text}>{titleText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: 300,
    flex: 1,
    flexDirection: 'column',
    marginVertical: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.8,
  },
  text: {
    position: 'absolute',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    top: 140,
    left: screenWidth / 2 - 50,
  },
});
