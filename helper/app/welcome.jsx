import React from 'react';
import { Image,StyleSheet,View, Text, Pressable } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import Button from '../components/Button';
import { wp } from '../helper/common';
import { hp } from '../helper/common';
import { StatusBar } from 'expo-status-bar';
import { theme } from '../constants/theme';
import { useRouter } from 'expo-router';

const welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="#dbdbdb">
      <StatusBar style="dark"/>
      <View style={styles.container}>

      
      <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/welcome.png')}/>

    <View style={{gap: 20}}>
      <Text style={styles.title}>Units Converter</Text>
      <Text style={styles.punchline}>
      Seamlessly convert units for every subject—physics, chemistry, math, and beyond!
      </Text>
    </View>

      <View style={styles.footer}>

        <Button
          title="Getting Started"
          buttonStyle={{marginHorizontal: wp(3)}}
          onPress={()=> router.push('signUp')}
        />
        <View style={styles.bottomTextContainer}>
        <Text style={styles.loginText}>
          Already have an account!
        </Text>
        <Pressable onPress={()=> router.push('login')}>
        <Text style={[styles.loginText,{color:theme.colors.primaryDark, fontWeight: theme.fonts.semibold}]}>
          Login
        </Text>
        </Pressable>

        </View>
      
    </View>

      </View>
    </ScreenWrapper>
  );
};

export default welcome;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor:'#dbdbdb',
        paddingHorizontal: wp(2)
    },

    welcomeImage: {
    width: wp(70), 
    height: wp(100),
    
    
    // width: hp(35), 
    // height: hp(90),
    // paddingHorizontal: wp(20),
     //paddingVertical: wp(20), // Adds padding to left and right
    // marginHorizontal: wp(10),
     marginLeft: wp(-0.25),
    // marginVertical: wp(10),
    //paddingLeft: hp(40),
    //paddingRight: hp(80),
    resizeMode: 'contain',
    },

    title:{
      color: theme.colors.text,
      fontSize: hp(5),
      textAlign: 'center',
      fontWeight: theme.fonts.extraBold
    },

    punchline:{
      
      fontSize: hp(2,7),
      paddingBlock: wp(1),
      paddingHorizontal: wp(10),
      marginBottom:wp(17),
      textAlign: 'center',
      color: theme.colors.text
      
    },

    footer:{
    gap:30,
    width: '100%',
    paddingBottom:wp(7),
    
    },

    bottomTextContainer:{
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'center',
      gap:5
    },

    loginText:{
      textAlign: 'center',
      color: theme.colors.text,
      fontSize: hp(1.6),
    }



})