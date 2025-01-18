import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function Mode() {
  const [inputValue, setInputValue] = useState('');

  const calculateMode = () => {
    // Split the input into an array of numbers
    const numbers = inputValue
      .split(',')
      .map(num => parseFloat(num.trim()))
      .filter(num => !isNaN(num)); // Filter out invalid numbers

    if (numbers.length === 0) {
      Alert.alert('Invalid Input', 'Please enter a valid list of numbers separated by commas.');
      return;
    }

    // Calculate mode
    const frequency = {};
    numbers.forEach(num => {
      frequency[num] = (frequency[num] || 0) + 1; // Increment count for each number
    });

    const maxFrequency = Math.max(...Object.values(frequency));
    const mode = Object.keys(frequency)
      .filter(key => frequency[key] === maxFrequency)
      .map(Number);

    if (mode.length === numbers.length) {
      Alert.alert('No Mode', 'All numbers appear with the same frequency, so there is no mode.');
    } else {
      Alert.alert('Mode Calculated', `The mode is: ${mode.join(', ')}`);
    }
  };

  return (
    <View style={tw`flex-1 bg-gray-800 p-6`}>
      {/* Title */}
      <Text style={tw`text-white text-3xl font-bold mb-6 text-center`}>Mode Calculator</Text>

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
        onPress={calculateMode}
        style={tw`bg-purple-600 px-4 py-3 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white text-lg font-bold text-center`}>Calculate Mode</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={tw`mt-6`}>
        <Text style={tw`text-gray-300 text-sm text-center`}>
          Enter a list of numbers separated by commas to calculate the mode.
        </Text>
      </View>
    </View>
  );
}

export default Mode;
