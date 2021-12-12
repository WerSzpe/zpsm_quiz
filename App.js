import * as React from 'react';
import { AsyncStorage, View, Text } from 'react-native';
import { useState, useEffect } from 'react';

import WelcomeScreen from './screens/welcomeScreen';
import Drawer from './Drawer';

export default function App(props) {
  const [value, setValue] = useState(false);

  const checkFirst = async() =>{
    try {
      const value = await AsyncStorage.getItem('username');
      if(value !== null) {
        setValue(false);
      } else {
        setValue(true);
      }
    } catch (error) {
      setValue(true);
    }
  }

  useEffect( () => checkFirst())

  confirm = async(username) => {
    if(!username)
      return;
    try{
      await AsyncStorage.setItem('username', username);
    } catch (error) {
      console.log(error);
    }
    setValue(false);
  }

  return(
    props.value ? (<WelcomeScreen confirm={confirm}/>) : (<Drawer/>)
  )
}
