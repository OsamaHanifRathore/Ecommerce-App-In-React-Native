import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FormButton from '../Components/FormButton'
import {AuthContext} from '../Context'

export default function Account() {

    return (
        <View style={Styles.container}>
            <FormButton buttonText = "Sign Out" onTouch={()=>{}}/>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        paddingHorizontal:10,
    }
})