import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function Percentile() {
  const [inputValue, setInputValue] = useState('');
  const [percentile, setPercentile] = useState(null);
  const [percentileRank, setPercentileRank] = useState('');

  const calculatePercentile = () => {
    const numbers = inputValue
      .split(',')
      .map(num => parseFloat(num.trim()))
      .filter(num => !isNaN(num)); // Filter out invalid numbers

    if (numbers.length === 0) {
      Alert.alert('Invalid Input', 'Please enter a valid list of numbers separated by commas.');
      return;
    }

    // Sort the numbers in ascending order
    numbers.sort((a, b) => a - b);

    // Ensure percentile rank is between 0 and 100
    const p = parseFloat(percentileRank);
    if (isNaN(p) || p < 0 || p > 100) {
      Alert.alert('Invalid Percentile Rank', 'Please enter a valid percentile rank between 0 and 100.');
      return;
    }

    // Calculate the percentile rank
    const n = numbers.length;
    const rank = (p / 100) * (n + 1);

    let percentileValue;
    if (rank % 1 === 0) {
      percentileValue = numbers[rank - 1]; // Exact data point
    } else {
      const lowerIndex = Math.floor(rank) - 1;
      const upperIndex = Math.ceil(rank) - 1;
      const fraction = rank - Math.floor(rank);
      percentileValue = numbers[lowerIndex] + (numbers[upperIndex] - numbers[lowerIndex]) * fraction;
    }

    setPercentile(percentileValue);
    Alert.alert('Percentile Calculated', `The ${p}-th percentile is: ${percentileValue.toFixed(2)}`);
  };

  return (
    <View style={tw`flex-1 bg-gray-600 p-4`}>
      {/* Title */}
      <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Percentile Calculator</Text>

      {/* Input Field for Data */}
      <Text style={tw`text-lg font-semibold mb-2`}>Enter Numbers (comma-separated):</Text>
      <TextInput
        placeholder="Enter numbers (e.g., 1, 2, 3, 4)"
        placeholderTextColor="gray"
        value={inputValue}
        onChangeText={setInputValue}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="default"
      />

      {/* Input Field for Percentile Rank */}
      <Text style={tw`text-lg font-semibold mb-2`}>Enter Percentile Rank (0-100):</Text>
      <TextInput
        placeholder="Enter percentile rank (e.g., 90)"
        placeholderTextColor="gray"
        value={percentileRank}
        onChangeText={setPercentileRank}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      {/* Calculate Button */}
      <TouchableOpacity
        onPress={calculatePercentile}
        style={tw`bg-blue-500 px-4 py-2 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white font-bold`}>Calculate Percentile</Text>
      </TouchableOpacity>

      {/* Display Percentile Value */}
      {percentile !== null && (
        <Text style={tw`text-xl text-white mt-4 text-center`}>
          {percentileRank}-th Percentile: {percentile.toFixed(2)}
        </Text>
      )}
    </View>
  );
}

export default Percentile;