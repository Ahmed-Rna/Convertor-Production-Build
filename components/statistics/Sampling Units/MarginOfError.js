import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

function MarginOfError() {
  const [sampleSize, setSampleSize] = useState('');
  const [populationStdDev, setPopulationStdDev] = useState('');
  const [confidenceLevel, setConfidenceLevel] = useState('95'); // Default confidence level to 95%

  // Z-scores for common confidence levels
  const zScores = {
    '90': 1.645,
    '95': 1.96,
    '99': 2.576,
  };

  const calculateMarginOfError = () => {
    const n = parseInt(sampleSize, 10);
    const sigma = parseFloat(populationStdDev);

    if (isNaN(n) || isNaN(sigma) || n <= 1 || sigma <= 0) {
      Alert.alert('Invalid Input', 'Please enter valid values for sample size and population standard deviation.');
      return;
    }

    const z = zScores[confidenceLevel];
    if (!z) {
      Alert.alert('Invalid Confidence Level', 'Please select a valid confidence level (90%, 95%, or 99%).');
      return;
    }

    // Margin of Error calculation
    const marginOfError = z * (sigma / Math.sqrt(n));
    Alert.alert('Margin of Error', `Margin of Error (MoE) = ${marginOfError.toFixed(4)}`);
  };

  return (
    <View style={tw`flex-1 bg-gray-600 p-4`}>
      {/* Title */}
      <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Margin of Error Calculator</Text>

      {/* Sample Size Input */}
      <Text style={tw`text-lg font-semibold mb-2`}>Enter Sample Size (n):</Text>
      <TextInput
        placeholder="Enter sample size (n)"
        placeholderTextColor="gray"
        value={sampleSize}
        onChangeText={setSampleSize}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      {/* Population Standard Deviation Input */}
      <Text style={tw`text-lg font-semibold mb-2`}>Enter Population Standard Deviation (σ):</Text>
      <TextInput
        placeholder="Enter population standard deviation (σ)"
        placeholderTextColor="gray"
        value={populationStdDev}
        onChangeText={setPopulationStdDev}
        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
        keyboardType="numeric"
      />

      {/* Confidence Level Dropdown */}
      <Text style={tw`text-lg font-semibold mb-2`}>Select Confidence Level:</Text>
      <View style={tw`bg-white rounded-lg mb-4`}>
        <TouchableOpacity onPress={() => setConfidenceLevel('90')} style={tw`px-4 py-2`}>
          <Text style={tw`text-gray-800`}>90%</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setConfidenceLevel('95')} style={tw`px-4 py-2`}>
          <Text style={tw`text-gray-800`}>95%</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setConfidenceLevel('99')} style={tw`px-4 py-2`}>
          <Text style={tw`text-gray-800`}>99%</Text>
        </TouchableOpacity>
      </View>

      {/* Calculate Button */}
      <TouchableOpacity
        onPress={calculateMarginOfError}
        style={tw`bg-blue-500 px-4 py-2 rounded-lg shadow-lg mt-2`}
      >
        <Text style={tw`text-white font-bold`}>Calculate Margin of Error</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MarginOfError;
