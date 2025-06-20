import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React,{ useRef, useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { theme } from "../constants/theme";
import Icon from "../assets/icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import BackButton from "../components/BackButton";
import Input from "../components/Input";
import { hp, wp } from "../helper/common";
import Button from '../components/Button';
import { supabase } from "../lib/supabase";


const signUp = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const nameRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async ()=>{
    if (!nameRef.current || !emailRef.current || !passwordRef.current ) {
      Alert.alert('Sign up', "Please fill in the mandatory fields");
      return;
      
    }

    let name = nameRef.current.trim();
    let email = emailRef.current.trim();
    let password = passwordRef.current.trim();

    setLoading(true);

    const {data: {session}, error} = await supabase.auth.signUp({
      email,
      password,
      options:{
        data:{
          name
        }
      }
    });

    setLoading(false);

    console.log('session',session);
    console.log('error', error);
    if(error){
      Alert.alert('Sign up',error.message);

    }
    
  }

  return (
    <ScreenWrapper bg='#dbdbdb'>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />

        {/* welcome */}
        <View>
          <Text style={styles.welcomeText}>Let's</Text>
          <Text style={styles.welcomeText}>Get Started</Text>
        </View>

        {/* form */}
        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Please fill the details to create your account
          </Text>
          <Input
          icon = {<Icon name="user" size={26} strokeWidth={1.1}/>}
          placeholder= "Enter your name"
          onChangeText={value=>nameRef.current = value}
          />

          <Input
          icon = {<Icon name="mail" size={26} strokeWidth={0.9}/>}
          placeholder= "Enter your email"
          onChangeText={value=>emailRef.current = value}
          />

          <Input
          icon = {<Icon name="lock" size={26} strokeWidth={1.9}/>}
          placeholder= "Enter your password"
          secureTextEntry
          onChangeText={value=>passwordRef.current = value}
          />

        {/* button */}
        <View style={{ paddingTop: 12 }}>
        <Button title={'Sign up'} loading={loading} onPress={onSubmit} />
        </View>
        
        </View>
        
        {/* footer */}
        <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account?
        </Text>

        <Pressable onPress={()=>router.push('login')}>
        <Text style={[styles.footerText, {color: theme.colors.darkgreen, fontWeight: theme.fonts.semibold}]}>Login</Text>
        </Pressable>

        </View>


      </View>
    </ScreenWrapper>
  );
};

export default signUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#dbdbdb',
    gap: 45,

    paddingHorizontal: wp(5),
  },

  welcomeText: {
    fontSize: hp(4),

    fontweight: theme.fonts.bold,

    color: theme.colors.text,
  },

  form: {
    gap: 25,
  },

  footer: {
    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",

    gap: 5,
  },

  footerText: {
    textAlign: "center",

    color: theme.colors.text,

    fontSize: hp(1.6),
  },
});
