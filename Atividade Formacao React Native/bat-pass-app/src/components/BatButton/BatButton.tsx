import React, { useState } from 'react';
import { Button, View, Text, Pressable } from 'react-native';
import generatePassword from '../../services/passwordService'
import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import * as Clipboard from 'expo-clipboard';
export function BatButton() {
  const [pass, setPass] = useState('')
  function handleGenerateButton(){
    const p:string = generatePassword()
    setPass(p)
  }
  return (
    <>
        <BatTextInput pass = {pass}/>
        <Pressable 
        onPress={handleGenerateButton}
        style = {styles.button}
        >
          <Text style = {styles.text}>GENERATE</Text>
        </Pressable>

        <Pressable 
        onPress={() => {Clipboard.setStringAsync(pass); console.log('Copiado')}}
        style = {styles.button}
        >
        <Text style = {styles.text}>⚡ COPY</Text>
        </Pressable>
    </>
  );
}