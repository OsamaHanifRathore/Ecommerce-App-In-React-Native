import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import FormButton from '../Components/FormButton';
import TextInputField from '../Components/TextInputField';
import {blueTheme, screenHeight, screenWidth} from '../utils/constant';
import {AuthContext} from '../Context';
import {Divider} from 'react-native-paper';
import {color} from 'react-native-reanimated';
import SocialAccountButton from '../Components/SocialAccountButton';

export default function Login({navigation}) {
  const {signIn} = React.useContext(AuthContext);
  return (
    <ScrollView>
      <View style={Styles.container}>
        <Text style={Styles.labelText}>Email Address</Text>
        <TextInputField
          placeholderText="Enter your email address here"
          labelValue="emailaddress"
          keyboardType="email-address"
        />
        <Text style={Styles.labelText}>Password</Text>
        <TextInputField
          placeholderText="Enter your password here"
          labelValue="password"
          keyboardType="email-address"
          secureTextEntry
        />
        <Text style={Styles.forgetPassword}>Forget Password?</Text>

        <FormButton buttonText="Login" onTouch={() => signIn()} />
        <Divider style={Styles.divider} />
        <View style={Styles.createAccoutText}>
          <Text style={Styles.textofAccout}>Don't have an accout yet? </Text>
          <TouchableOpacity onPress={() => navigation.push('SignUp')}>
            <Text style={Styles.createAccout}>Create Account</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            height: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Divider style={{height: 2, flex: 0.4, marginTop: 8}} />
          <View style={{flex: 0.2, alignItems: 'center'}}>
            <Text style={{color: '#757575'}}>OR</Text>
          </View>
          <Divider
            style={{height: 2, flex: 0.4, marginTop: 8, width: '100%'}}
          />
        </View>
        <View style={{marginTop: 40}}>
          <SocialAccountButton
            name="facebook"
            buttonText="Continue with Facebook"
            color="blue"
          />
          <SocialAccountButton
            name="google"
            buttonText="Continue with Google"
            color="red"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    padding: 20,
    height: screenHeight,
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  image: {
    height: 100,
    width: 200,
  },
  createAccoutText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  textofAccout: {
    fontSize: 16,
    fontWeight: '300',
  },
  createAccout: {
    fontSize: 16,
    fontWeight: 'bold',
    color: blueTheme,
  },
  labelText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#424242',
    marginTop: 20,
  },
  forgetPassword: {
    marginTop: 15,
    marginBottom: 10,
    color: blueTheme,
    alignSelf: 'center',
    fontWeight: '600',
  },
  divider: {
    color: 'black',
  },
});
