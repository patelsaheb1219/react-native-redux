// Module Import
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Component Import
import CustomButton from "../components/CustomButton";

const Counter = () => {
  return (
    <View>
      <Text style={styles.counterText}>0</Text>
      <View style={styles.buttonViewContainer}>
        <CustomButton
          title={"+"}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
        />
        <CustomButton
          title={"-"}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
      <CustomButton 
        title={"Reset"}
        buttonStyle={styles.resetButton}
        textStyle={styles.buttonText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  counterText: {
    textAlign: 'center',
    fontSize: 24
  },
  buttonViewContainer: {
    flexDirection: 'row'
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10, 
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10, 
    backgroundColor: '#000fff', 
    color: '#fff', 
    textAlign: 'center'
  },
  resetButton: {
    padding: 10, 
    margin: 10, 
    backgroundColor: '#000', 
    color: '#fff', 
    textAlign: 'center'
  },
  buttonText: {
    color: 'white', 
    fontSize: 18, 
    fontWeight: '700', 
    textAlign: 'center'
  }
})

export default Counter;
