import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import symbolOn from './assets/pictures/symbol-on.png'
import symbolOff from './assets/pictures/symbol-off.png'
import { use, useState } from 'react';

export default function App() {
  const [isActive, setIsActive] = useState<boolean>(false)
  const handleClick = () => {
    setIsActive((oldValue:boolean)=>{
      return !oldValue
    })
  }
  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={handleClick}>
        <Image source={isActive ? symbolOn : symbolOff}/>
      </TouchableOpacity>
      <StatusBar style={isActive ? "light" : "dark"} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
