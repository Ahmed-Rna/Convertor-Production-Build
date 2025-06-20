import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useRouter } from 'expo-router';
import React from 'react'
import { theme } from '../constants/theme';
import Icon from '../assets/icons';


const BackButton = ({size=26}) => {
  const router = useRouter();
  return (
    <Pressable onPress={()=> router.back()} style={styles.button}>
        <Icon name="arrowLeft" strokeWidth={2.5} size={size} color={theme.colors.text} />
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button:{
        alignSelf:'flex-start',
        padding: 5,
        borderRadius: theme.radius.sm,
        backgroundColor: 'rgba(15, 15, 15, 0.07)'
    }

})