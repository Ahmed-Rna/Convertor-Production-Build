import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function ConfidenceInterval() {
  const [mean, setMean] = useState('');
  const [stdDev, setStdDev] = useState('');
  const [sampleSize, setSampleSize] = useState('');
  const [confidenceLevel, setConfidenceLevel] = useState(95);

  const calculateConfidenceInterval = () => {
    const sampleMean = parseFloat(mean);
    const sampleStdDev = parseFloat(stdDev);
    const n = parseInt(sampleSize);

    if (isNaN(sampleMean) || isNaN(sampleStdDev) || isNaN(n) || n <= 0) {
      Alert.alert('Invalid Input', 'Please enter valid numbers.');
      return;
    }

    // Z-value for 95% confidence level
    const zValue = 1.96; // For 95% confidence level

    // Standard error
    const standardError = sampleStdDev / Math.sqrt(n);

    // Margin of error
    const marginOfError = zValue * standardError;

    // Confidence interval
    const lowerLimit = sampleMean - marginOfError;
    const upperLimit = sampleMean + marginOfError;

    Alert.alert('Confidence Interval', `CI: (${lowerLimit.toFixed(2)}, ${upperLimit.toFixed(2)})`);
  };

  return (
    <View style={tw`flex-1 bg-gray-600 p-4`}>
      <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Confidence Interval Calculator</Text>

      {/* Input Fields */}
      <Text style={tw`text-lg font-semibold mb-2`}>Sample Mean:</Text>
      <TextInput
        placeholder="Enter sample mean"
        placeholderTextColor="gray"
        value={mean}
        onChangeText={setMean}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      <Text style={tw`text-lg font-semibold mb-2`}>Sample Standard Deviation:</Text>
      <TextInput
        placeholder="Enter standard deviation"
        placeholderTextColor="gray"
        value={stdDev}
        onChangeText={setStdDev}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      <Text style={tw`text-lg font-semibold mb-2`}>Sample Size:</Text>
      <TextInput
        placeholder="Enter sample size"
        placeholderTextColor="gray"
        value={sampleSize}
        onChangeText={setSampleSize}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      {/* Calculate Button */}
      <TouchableOpacity
        onPress={calculateConfidenceInterval}
        style={tw`bg-blue-500 px-4 py-2 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white font-bold`}>Calculate Confidence Interval</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ConfidenceInterval;
