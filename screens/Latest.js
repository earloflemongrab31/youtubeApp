import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default ()=> <View style ={styles.container}><Text>Latest</Text></View>

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    }
  });