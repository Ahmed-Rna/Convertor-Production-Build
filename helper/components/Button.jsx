import { Pressable, StyleSheet, Text, View } from 'react-native'
import { theme } from '../constants/theme';
import { wp } from '../helper/common';
import { hp } from '../helper/common';
import React from 'react'

import Loading from './Loading';

const Button = ({
    buttonStyle,
    textStyle,
    title='',
    onPress=()=>{},
    loading = false,
    hasShadow = true,
}) => {

    const shadowStyle = {
        shadowColor: theme.colors.dark,
        shadowOffset: {width: 0, height:10},
        shdadowOpacity:0.2,
        shdadowRadius: 8,
        elevation: 4
    }

    if(loading){
        return (
            <View style={[styles.button, buttonStyle, {backgroundColor: '#dbdbdb'}]}>
                <Loading/>
            </View>
        )
    }
  return (

    <Pressable onPress={onPress} style={[styles.button,buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
      backgroundColor: theme.colors.primary,
      height: hp(6.6),
      fontSize: hp(5),
      alignItems: 'center',
      justifyContent: 'center',
      borderCurve:'continuous',
      borderRadius: theme.radius.xl
    },

    text:{
        fontSize: hp(2.5),
        color:'white',
        fontWeight: theme.fonts.bold

    }
})