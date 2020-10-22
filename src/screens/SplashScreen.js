import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import {screenHeight, screenWidth} from '../utils/constant';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function SplashScreen({navigation}) {
  return (
    <View>
      <Video
        source={require('../assets/videos/videoplayback.mp4')}
        style={styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
      />

      <View style={styles.wrapper}>
        <TouchableOpacity
          style={{width: '100%', height: '100%'}}
          onPress={() => navigation.push('SignUp')}>
          <Text style={{color: 'white', fontSize: 18}}> Get Started </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginText}>
        <Text style={{color: 'white'}}>Already have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.push('Login')}>
          <Text style={{color: 'white'}}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    height: screenHeight,
    alignItems: 'stretch',
  },
  wrapper: {
    position: 'absolute',
    bottom: 140,
    left: 20,
    right: 20,
    justifyContent: 'center',
    padding: 12,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'red',
    borderRadius: 5,
  },
  loginText: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
    justifyContent: 'center',
    padding: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export const Wrapper = styled.View`
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  flex-direction: column;
`;
export const TextDescription = styled.Text`
  letter-spacing: 3;
  color: #f4f4f4;
  text-align: center;
  text-transform: uppercase;
`;
export const ButtonWrapper = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
export const Title = styled.Text`
  color: #f4f4f4;
  margin: 50% 0px 20px;
  font-size: 30;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3;
`;
const StyledButton = styled.TouchableHighlight`
 width:250px;
 background-color:${(props) => (props.transparent ? 'transparent' : '#f3f8ff')};
 padding:15px;
border:${(props) => (props.transparent ? '1px solid #f3f8ff ' : 0)}
 justify-content:center;
 margin-bottom:20px;
 border-radius:24px
`;
const StyledTitle = styled.Text`
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3;
  color: ${(props) => (props.transparent ? '#f3f8ff ' : '#666')};
`;
