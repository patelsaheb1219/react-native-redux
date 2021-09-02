// Module Import
import React from 'react';
import { Text, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  const { title, buttonStyle, onPress, textStyle } = props;
  return (
    <TouchableOpacity 
      style={buttonStyle}
      onPress={onPress}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;
