import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function StandardError() {
  const [inputValue, setInputValue] = useState('');
  const [standardError, setStandardError] = useState(null);

  // Function to calculate the standard deviation
  const calculateStandardDeviation = (numbers) => {
    const mean = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
    const variance = numbers.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0) / (numbers.length - 1);
    return Math.sqrt(variance);
  };

  const calculateStandardError = () => {
    const numbers = inputValue
      .split(',')
      .map(num => parseFloat(num.trim()))
      .filter(num => !isNaN(num)); // Filter out invalid numbers

    if (numbers.length < 2) {
      Alert.alert('Invalid Input', 'Please enter at least two valid numbers.');
      return;
    }

    // Calculate the standard deviation
    const standardDeviation = calculateStandardDeviation(numbers);

    // Calculate the standard error
    const n = numbers.length;
    const se = standardDeviation / Math.sqrt(n);

    setStandardError(se);

    Alert.alert('Standard Error Calculated', `The standard error is: ${se.toFixed(4)}`);
  };

  return (
    <View style={tw`flex-1 bg-gray-600 p-4`}>
      {/* Title */}
      <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Standard Error Calculator</Text>

      {/* Input Field */}
      <Text style={tw`text-lg font-semibold mb-2`}>Enter Numbers (comma-separated):</Text>
      <TextInput
        placeholder="Enter numbers (e.g., 1, 2, 3, 4)"
        placeholderTextColor="gray"
        value={inputValue}
        onChangeText={setInputValue}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="default"
      />

      {/* Calculate Button */}
      <TouchableOpacity
        onPress={calculateStandardError}
        style={tw`bg-blue-500 px-4 py-2 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white font-bold`}>Calculate Standard Error</Text>
      </TouchableOpacity>

      {/* Display Standard Error */}
      {standardError !== null && (
        <Text style={tw`text-xl text-white mt-4 text-center`}>
          Standard Error: {standardError.toFixed(4)}
        </Text>
      )}
    </View>
  );
}

export default StandardError;
