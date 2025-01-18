
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function Mean() {
  const [inputValue, setInputValue] = useState('');

  const calculateMean = () => {
    // Split the input into an array of numbers
    const numbers = inputValue
      .split(',')
      .map(num => parseFloat(num.trim()))
      .filter(num => !isNaN(num)); // Filter out invalid numbers

    if (numbers.length === 0) {
      Alert.alert('Invalid Input', 'Please enter a valid list of numbers separated by commas.');
      return;
    }

    // Calculate mean
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const mean = sum / numbers.length;

    Alert.alert('Mean Calculated', `The mean is: ${mean.toFixed(2)}`);
  };

  return (
    <View style={tw`flex-1 bg-gray-600 p-4`}>
      {/* Title */}
      <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Mean Calculator</Text>

      {/* Input Field */}
      <Text style={tw`text-lg font-semibold mb-2`}>Input Numbers (comma-separated):</Text>
      <TextInput
        placeholder="Enter numbers (e.g., 1, 2, 3)"
        placeholderTextColor="gray"
        value={inputValue}
        onChangeText={setInputValue}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="default"
      />

      {/* Submit Button */}
      <TouchableOpacity
        onPress={calculateMean}
        style={tw`bg-blue-500 px-4 py-2 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white font-bold`}>Calculate Mean</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Mean;