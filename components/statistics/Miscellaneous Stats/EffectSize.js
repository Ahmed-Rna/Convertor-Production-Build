import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function EffectSize() {
  const [group1Input, setGroup1Input] = useState('');
  const [group2Input, setGroup2Input] = useState('');

  const calculateCohensD = () => {
    // Parse the input values into arrays of numbers
    const group1 = group1Input.split(',').map(num => parseFloat(num.trim()));
    const group2 = group2Input.split(',').map(num => parseFloat(num.trim()));

    // Check for empty groups
    if (group1.length === 0 || group2.length === 0) {
      Alert.alert('Invalid Input', 'Please enter valid numbers for both groups.');
      return;
    }

    // Calculate the means and standard deviations for each group
    const mean1 = group1.reduce((a, b) => a + b, 0) / group1.length;
    const mean2 = group2.reduce((a, b) => a + b, 0) / group2.length;

    const sd1 = Math.sqrt(group1.reduce((a, b) => a + Math.pow(b - mean1, 2), 0) / group1.length);
    const sd2 = Math.sqrt(group2.reduce((a, b) => a + Math.pow(b - mean2, 2), 0) / group2.length);

    // Pooled standard deviation
    const pooledSD = Math.sqrt(((group1.length - 1) * Math.pow(sd1, 2) + (group2.length - 1) * Math.pow(sd2, 2)) / (group1.length + group2.length - 2));

    // Cohen's d
    const cohenD = (mean1 - mean2) / pooledSD;

    Alert.alert('Cohen\'s d Calculated', `Cohen's d = ${cohenD.toFixed(2)}`);
  };

  return (
    <View style={tw`flex-1 bg-gray-600 p-4`}>
      <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Effect Size Calculator</Text>

      {/* Input Fields */}
      <Text style={tw`text-lg font-semibold mb-2`}>Enter Group 1 Data (comma-separated):</Text>
      <TextInput
        placeholder="Enter numbers (e.g., 1, 2, 3)"
        placeholderTextColor="gray"
        value={group1Input}
        onChangeText={setGroup1Input}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      <Text style={tw`text-lg font-semibold mb-2`}>Enter Group 2 Data (comma-separated):</Text>
      <TextInput
        placeholder="Enter numbers (e.g., 4, 5, 6)"
        placeholderTextColor="gray"
        value={group2Input}
        onChangeText={setGroup2Input}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      {/* Calculate Button */}
      <TouchableOpacity
        onPress={calculateCohensD}
        style={tw`bg-blue-500 px-4 py-2 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white font-bold`}>Calculate Cohen's d</Text>
      </TouchableOpacity>
    </View>
  );
}

export default EffectSize;

