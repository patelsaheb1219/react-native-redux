import React from 'react';
import { View, Text, Button } from "react-native";

const Counter = () => {
  return (
    <View>
      <Text>
        0
      </Text>
      <View style={{ flexDirection: 'row' }}>
      <Button
        title="+"
        style={{
          padding: 10
        }}
      />
        <Button
        title="-"
        style={{
          padding: 10
        }}
      />
      </View>
    </View>
  )
}

export default Counter;
