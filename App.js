

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default function App () {

  return (
    <>
    <SafeAreaView style = {styles.safeArea}>
      <Text>Formulario HEAD</Text>
    </SafeAreaView>
    <View>
      <Text>Resultad</Text>
    </View>
    <View>
      <Text>Footer</Text>
    </View>
    </>
  )
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f00',
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center'
  }
})
