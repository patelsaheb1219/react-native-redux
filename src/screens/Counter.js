// Module Import
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from 'react-redux';

// Component Import
import CustomButton from "../components/CustomButton";
import { resetCounter, updateCounter } from "../redux/actions/counter";

const Counter = (props) => {
  const { counter, updateCounter, resetCounter } = props;
  return (
    <View>
      <Text style={styles.counterText}>{counter}</Text>
      <View style={styles.buttonViewContainer}>
        <CustomButton
          title={"+"}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          onPress={() => updateCounter(counter, "increment")}
        />
        <CustomButton
          title={"-"}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          onPress={() => updateCounter(counter, "decrement")}
        />
      </View>
      <CustomButton
        title={"Reset"}
        buttonStyle={styles.resetButton}
        textStyle={styles.buttonText}
        onPress={() => resetCounter()}
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
});

const mapStateToProps = (state) => ({
  counter: state.counter
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateCounter: (counterValue, type) => dispatch(updateCounter(counterValue, type)),
    resetCounter: () => dispatch(resetCounter())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
