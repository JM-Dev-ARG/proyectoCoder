import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import FormInput from './FormInput'
import theme from '../theme';
import AvatarComp from './AvatarComp.jsx';


export default function Form() {
  const [name, setUserName] = useState("");
  const [password, setPassword] = useState("");


  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <AvatarComp />
      </View>

      <View style={styles.formInputs}>
        <FormInput placeholder={"UserName"} setValueProp={setUserName} />
        <FormInput placeholder={"Password"} setValueProp={setPassword} mode={true} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignContent: 'center',
    backgroundColor: theme.bgColors['bg-100'],
    width: '80%',
    height: '100%',
    marginTop: 50,
    gap: 30,
  },
  formInputs: {
    gap: 30,
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  }

})