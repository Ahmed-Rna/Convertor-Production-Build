import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function SampleSize() {
  const [sampleSize, setSampleSize] = useState('');

  const calculateDegreesOfFreedom = () => {
    const n = parseInt(sampleSize, 10);

    if (isNaN(n) || n <= 1) {
      Alert.alert('Invalid Input', 'Please enter a valid sample size greater than 1.');
      return;
    }

    // For T-Test Degrees of Freedom: df = n - 1
    const df = n - 1;
    Alert.alert('Degrees of Freedom', `Degrees of Freedom (df) = ${df}`);
  };

  return (
    <View style={tw`flex-1 bg-gray-600 p-4`}>
      {/* Title */}
      <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Sample Size and Degrees of Freedom Calculator</Text>

      {/* Sample Size Input */}
      <Text style={tw`text-lg font-semibold mb-2`}>Enter Sample Size:</Text>
      <TextInput
        placeholder="Enter sample size (n)"
        placeholderTextColor="gray"
        value={sampleSize}
        onChangeText={setSampleSize}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      {/* Calculate Button */}
      <TouchableOpacity
        onPress={calculateDegreesOfFreedom}
        style={tw`bg-blue-500 px-4 py-2 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white font-bold`}>Calculate Degrees of Freedom</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SampleSize;