// Import Types
import { Alert } from 'react-native';
import { COUNTER, RESET_COUNTER } from '../types';

// Counter Action defination for Increment/Decrement
export const updateCounter = (counterValue, type) => async dispatch => {
  try {
    if (type === "increment") {
      const payload = counterValue + 1;
      dispatch({
        type: COUNTER,
        payload
      })
    } else if (type === "decrement") {
      if (counterValue <= 0) {
        Alert.alert("Counter value cannot be less than 0");
        dispatch({
          type: COUNTER,
          payload: 0
        })
      } else {
        const payload = counterValue - 1;
        dispatch({
          type: COUNTER,
          payload
        })
      }
    } else {
      dispatch({
        type: COUNTER,
        payload: 0
      })
      Alert.alert("Something went wrong!, Counter reset to 0");
    }
  } catch (err) {
    console.error(err);
  }
}

// Counter Reset
export const resetCounter = () => async dispatch => {
  try {
    dispatch({
      type: RESET_COUNTER,
      payload: 0
    })
  } catch (err) {
    console.error(err);
  }
} 