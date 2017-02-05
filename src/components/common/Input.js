import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={{ height: 20, length: 100 }}
      />
    </View>
  );
};

export { Input };