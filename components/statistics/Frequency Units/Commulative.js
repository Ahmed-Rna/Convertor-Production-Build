import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function Commulative() {
  const [inputValue, setInputValue] = useState('');

  const calculateCumulativeFrequency = () => {
    // Split the input into an array of numbers
    const numbers = inputValue
      .split(',')
      .map(num => parseFloat(num.trim()))
      .filter(num => !isNaN(num)); // Filter out invalid numbers

    if (numbers.length === 0) {
      Alert.alert('Invalid Input', 'Please enter a valid list of numbers separated by commas.');
      return;
    }

    // Sort the numbers to calculate cumulative frequency correctly
    numbers.sort((a, b) => a - b);

    // Calculate frequency and cumulative frequency
    const frequencyMap = numbers.reduce((acc, num) => {
      acc[num] = acc[num] ? acc[num] + 1 : 1;
      return acc;
    }, {});

    let cumulativeFrequency = 0;
    let result = 'Cumulative Frequency:\n';
    
    for (const [num, freq] of Object.entries(frequencyMap)) {
      cumulativeFrequency += freq; // Add frequency to cumulative frequency
      result += `Value: ${num}, Cumulative Frequency: ${cumulativeFrequency}\n`;
    }

    Alert.alert('Calculated Cumulative Frequencies', result);
  };

  return (
    <View style={tw`flex-1 bg-gray-800 p-6`}>
      {/* Title */}
      <Text style={tw`text-white text-3xl font-bold mb-6 text-center`}>Cumulative Frequency Calculator</Text>

      {/* Input Field */}
      <Text style={tw`text-lg text-white font-semibold mb-2`}>Input Numbers (comma-separated):</Text>
      <TextInput
        placeholder="Enter numbers (e.g., 1, 2, 2, 3)"
        placeholderTextColor="gray"
        value={inputValue}
        onChangeText={setInputValue}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="default"
      />

      {/* Submit Button */}
      <TouchableOpacity
        onPress={calculateCumulativeFrequency}
        style={tw`bg-blue-500 px-4 py-3 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white text-lg font-bold text-center`}>Calculate Cumulative Frequency</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={tw`mt-6`}>
        <Text style={tw`text-gray-300 text-sm text-center`}>
          Enter a list of numbers separated by commas to calculate the cumulative frequency.
        </Text>
      </View>
    </View>
  );
}

export default Commulative;