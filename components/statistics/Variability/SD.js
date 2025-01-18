import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function SD() {
  const [inputValue, setInputValue] = useState('');

  const calculateStandardDeviation = () => {
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
    const mean = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;

    // Calculate variance
    const variance = numbers
      .map(num => Math.pow(num - mean, 2)) // Squared differences from the mean
      .reduce((acc, squaredDiff) => acc + squaredDiff, 0) / numbers.length;

    // Calculate standard deviation
    const standardDeviation = Math.sqrt(variance);

    Alert.alert('Standard Deviation Calculated', `The standard deviation is: ${standardDeviation.toFixed(2)}`);
  };

  return (
    <View style={tw`flex-1 bg-gray-800 p-6`}>
      {/* Title */}
      <Text style={tw`text-white text-3xl font-bold mb-6 text-center`}>Standard Deviation Calculator</Text>

      {/* Input Field */}
      <Text style={tw`text-lg text-white font-semibold mb-2`}>
        Input Numbers (comma-separated):
      </Text>
      <TextInput
        placeholder="Enter numbers (e.g., 1, 2, 3)"
        placeholderTextColor="gray"
        value={inputValue}
        onChangeText={setInputValue}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-6 shadow-lg`}
        keyboardType="default"
      />

      {/* Submit Button */}
      <TouchableOpacity
        onPress={calculateStandardDeviation}
        style={tw`bg-yellow-500 px-4 py-3 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white text-lg font-bold text-center`}>Calculate Standard Deviation</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={tw`mt-6`}>
        <Text style={tw`text-gray-300 text-sm text-center`}>
          Enter a list of numbers separated by commas to calculate the standard deviation.
        </Text>
      </View>
    </View>
  );
}

export default SD;