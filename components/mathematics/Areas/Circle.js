import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function Circle() {
  const [inputValue, setInputValue] = useState('0');

  const convertNumber = () => {
    const radius = parseFloat(inputValue);
    if (isNaN(radius) || radius <= 0) {
      Alert.alert('Invalid Input', 'Please enter a valid radius.');
      return;
    }
    const area = Math.PI * radius * radius;
    Alert.alert('Area Calculated', `The area of the circle is: ${area.toFixed(2)}`);
  };

  return (
    <View style={tw`flex-1 bg-gray-600 p-4`}>
      {/* Title */}
      <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Area of Circle</Text>
      {/* Input Field */}
      <Text style={tw`text-lg font-semibold mb-2`}>Input Radius:</Text>
      <TextInput
        placeholder="Enter Radius"
        placeholderTextColor="gray"
        value={inputValue}
        onChangeText={setInputValue}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      {/* Submit Button */}
      <TouchableOpacity
        onPress={convertNumber}
        style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white font-bold`}>Convert</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Circle;
