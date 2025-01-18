import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Weight = () => {
  const [amount, setAmount] = useState('');
  const [fromUnit, setFromUnit] = useState('g');
  const [toUnit, setToUnit] = useState('kg');
  const [conversionResult, setConversionResult] = useState(null);

  const conversionRatesWeight = {
    g: 1,
    kg: 1000,
    mg: 0.001,
    lb: 453.592,
    oz: 28.3495,
    st: 6350.29,
    t: 1000000,
    ct: 0.2,
    gr: 0.0648,
    slug: 14.5939,
    'long ton': 1016046.91,
    'short ton': 907184.74,
  };

  const simulateConversion = () => {
    const fromRate = conversionRatesWeight[fromUnit];
    const toRate = conversionRatesWeight[toUnit];

    if (fromRate && toRate) {
      const result = (parseFloat(amount) * fromRate) / toRate;
      setConversionResult(result.toFixed(2));
    } else {
      setConversionResult('Invalid conversion');
    }
  };

  return (
    <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
      {/* Title */}
      <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
        Weight Converter
      </Text>

      {/* Calculator Container */}
      <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
        {/* Amount Input */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-white text-lg mb-2`}>Enter Weight</Text>
          <TextInput
            value={amount}
            onChangeText={setAmount}
            style={tw`w-full p-4 bg-white rounded-lg text-black`}
            placeholder="Enter weight"
            keyboardType="numeric"
            placeholderTextColor="gray"
          />
        </View>

        {/* Unit Selection */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-white text-lg mb-2`}>From Unit</Text>
          <Picker
            selectedValue={fromUnit}
            onValueChange={(itemValue) => setFromUnit(itemValue)}
            style={tw`w-full bg-white rounded-lg text-black`}
          >
            <Picker.Item label="Gram" value="g" />
            <Picker.Item label="Kilogram" value="kg" />
            <Picker.Item label="Milligram" value="mg" />
            <Picker.Item label="Pound" value="lb" />
            <Picker.Item label="Ounce" value="oz" />
            <Picker.Item label="Stone" value="st" />
            <Picker.Item label="Metric Ton" value="t" />
            <Picker.Item label="Carat" value="ct" />
            <Picker.Item label="Grain" value="gr" />
            <Picker.Item label="Slug" value="slug" />
            <Picker.Item label="Long Ton" value="long ton" />
            <Picker.Item label="Short Ton" value="short ton" />
          </Picker>
        </View>

        <View style={tw`mb-4`}>
          <Text style={tw`text-white text-lg mb-2`}>To Unit</Text>
          <Picker
            selectedValue={toUnit}
            onValueChange={(itemValue) => setToUnit(itemValue)}
            style={tw`w-full bg-white rounded-lg text-black`}
          >
            <Picker.Item label="Gram" value="g" />
            <Picker.Item label="Kilogram" value="kg" />
            <Picker.Item label="Milligram" value="mg" />
            <Picker.Item label="Pound" value="lb" />
            <Picker.Item label="Ounce" value="oz" />
            <Picker.Item label="Stone" value="st" />
            <Picker.Item label="Metric Ton" value="t" />
            <Picker.Item label="Carat" value="ct" />
            <Picker.Item label="Grain" value="gr" />
            <Picker.Item label="Slug" value="slug" />
            <Picker.Item label="Long Ton" value="long ton" />
            <Picker.Item label="Short Ton" value="short ton" />
          </Picker>
        </View>

        {/* Convert Button */}
        <TouchableOpacity
          onPress={simulateConversion}
          style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
        >
          <Text style={tw`text-center text-white text-lg font-bold`}>
            Convert 
          </Text>
        </TouchableOpacity>

        {/* Results */}
        {conversionResult !== null && (
          <View style={tw`mt-6`}>
            <Text style={tw`text-center text-xl text-white font-semibold`}>
              Converted Weight: {conversionResult} {toUnit}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Weight;
