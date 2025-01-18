import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function TStats() {
  const [sampleMean, setSampleMean] = useState('');
  const [populationMean, setPopulationMean] = useState('');
  const [stdDev, setStdDev] = useState('');
  const [sampleSize, setSampleSize] = useState('');

  const calculateTStatistic = () => {
    const X = parseFloat(sampleMean);
    const μ = parseFloat(populationMean);
    const s = parseFloat(stdDev);
    const n = parseFloat(sampleSize);

    if (isNaN(X) || isNaN(μ) || isNaN(s) || isNaN(n) || n <= 0) {
      Alert.alert('Invalid Input', 'Please enter valid numbers for all fields.');
      return;
    }

    // Calculate T-statistic
    const standardError = s / Math.sqrt(n);
    const T = (X - μ) / standardError;

    Alert.alert('T-Statistic Calculated', `The calculated T-statistic is: ${T.toFixed(2)}`);
  };

  return (
    <View style={tw`flex-1 bg-gray-800 p-6`}>
      <Text style={tw`text-white text-3xl font-bold mb-6 text-center`}>T-Statistic Calculator</Text>

      {/* Input Fields */}
      <Text style={tw`text-white font-semibold mb-2`}>Sample Mean (X̄):</Text>
      <TextInput
        value={sampleMean}
        onChangeText={setSampleMean}
        placeholder="Enter Sample Mean"
        keyboardType="numeric"
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4`}
      />
      <Text style={tw`text-white font-semibold mb-2`}>Population Mean (μ):</Text>
      <TextInput
        value={populationMean}
        onChangeText={setPopulationMean}
        placeholder="Enter Population Mean"
        keyboardType="numeric"
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4`}
      />
      <Text style={tw`text-white font-semibold mb-2`}>Sample Standard Deviation (s):</Text>
      <TextInput
        value={stdDev}
        onChangeText={setStdDev}
        placeholder="Enter Sample Standard Deviation"
        keyboardType="numeric"
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4`}
      />
      <Text style={tw`text-white font-semibold mb-2`}>Sample Size (n):</Text>
      <TextInput
        value={sampleSize}
        onChangeText={setSampleSize}
        placeholder="Enter Sample Size"
        keyboardType="numeric"
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4`}
      />

      {/* Submit Button */}
      <TouchableOpacity
        onPress={calculateTStatistic}
        style={tw`bg-blue-500 px-4 py-3 rounded-lg shadow-lg`}
      >
        <Text style={tw`text-white text-lg font-bold text-center`}>Calculate T-Statistic</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TStats;