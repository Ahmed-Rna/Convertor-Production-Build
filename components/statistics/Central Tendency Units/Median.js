import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function Median() {
  const [inputValue, setInputValue] = useState('');

  const calculateMeanMedian = () => {
    // Split the input into an array of numbers
    const numbers = inputValue
      .split(',')
      .map(num => parseFloat(num.trim()))
      .filter(num => !isNaN(num)); // Filter out invalid numbers

    if (numbers.length === 0) {
      Alert.alert('Invalid Input', 'Please enter a valid list of numbers separated by commas.');
      return;
    }

    // Sort numbers for median calculation
    const sortedNumbers = [...numbers].sort((a, b) => a - b);


    // Calculate median
    let median;
    const mid = Math.floor(sortedNumbers.length / 2);
    if (sortedNumbers.length % 2 === 0) {
      // Even number of elements: average of two middle values
      median = (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2;
    } else {
      // Odd number of elements: middle value
      median = sortedNumbers[mid];
    }

    // Show results
    Alert.alert(
      'Results Calculated',
      `The mean is: ${mean.toFixed(2)}\nThe median is: ${median.toFixed(2)}`
    );
  };

  return (
    <View style={tw`flex-1 bg-gray-700 p-6`}>
      {/* Title */}
      <Text style={tw`text-white text-3xl font-bold mb-6 text-center`}>Mean & Median Calculator</Text>

      {/* Input Field */}
      <Text style={tw`text-lg text-white font-semibold mb-2`}>Input Numbers (comma-separated):</Text>
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
        onPress={calculateMeanMedian}
        style={tw`bg-blue-600 px-4 py-3 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white text-lg font-bold text-center`}>Calculate</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={tw`mt-6`}>
        <Text style={tw`text-white text-sm text-center`}>
          Enter a list of numbers separated by commas to calculate both the mean and median.
        </Text>
      </View>
    </View>
  );
}

export default Median;
