import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Speed = () => {
  const [amount, setAmount] = useState('');
  const [fromUnitSpeed, setFromUnitSpeed] = useState('mps');
  const [toUnitSpeed, setToUnitSpeed] = useState('kmh');
  const [conversionResult, setConversionResult] = useState(null);

  const conversionRatesSpeed = {
    mps: 1,
    kmh: 0.27778,
    mph: 0.44704,
    fps: 0.3048,
    knot: 0.51444,
    kms: 1000,
    mis: 1609.34,
    mach: 343,
    c: 299792458,
  };

  const simulateConversion = () => {
    const fromRateSpeed = conversionRatesSpeed[fromUnitSpeed];
    const toRateSpeed = conversionRatesSpeed[toUnitSpeed];

    if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      Alert.alert('Invalid Input', 'Please enter a valid speed.');
      return;
    }

    if (fromRateSpeed && toRateSpeed) {
      const result = (parseFloat(amount) * fromRateSpeed) / toRateSpeed;
      setConversionResult(result.toFixed(2));
    } else {
      setConversionResult('Invalid conversion');
    }
  };

  return (
    <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
      <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
        Speed Converter
      </Text>

      <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
        <View style={tw`mb-4`}>
          <Text style={tw`text-white text-lg mb-2`}>Enter Speed</Text>
          <TextInput
            value={amount}
            onChangeText={setAmount}
            style={tw`w-full p-4 bg-white rounded-lg text-black`}
            placeholder="Enter speed"
            keyboardType="numeric"
            placeholderTextColor="gray"
          />
        </View>

        <View style={tw`mb-4`}>
          <Text style={tw`text-white text-lg mb-2`}>From</Text>
          <Picker
            selectedValue={fromUnitSpeed}
            onValueChange={(itemValue) => setFromUnitSpeed(itemValue)}
            style={tw`w-full bg-white rounded-lg`}
          >
            <Picker.Item label="Meters per Second" value="mps" />
            <Picker.Item label="Kilometers per Hour" value="kmh" />
            <Picker.Item label="Miles per Hour" value="mph" />
            <Picker.Item label="Feet per Second" value="fps" />
            <Picker.Item label="Knots" value="knot" />
            <Picker.Item label="Kilometers per Second" value="kms" />
            <Picker.Item label="Miles per Second" value="mis" />
            <Picker.Item label="Mach (Speed of Sound)" value="mach" />
            <Picker.Item label="Speed of Light" value="c" />
          </Picker>
        </View>

        <View style={tw`mb-4`}>
          <Text style={tw`text-white text-lg mb-2`}>To</Text>
          <Picker
            selectedValue={toUnitSpeed}
            onValueChange={(itemValue) => setToUnitSpeed(itemValue)}
            style={tw`w-full bg-white rounded-lg`}
          >
            <Picker.Item label="Meters per Second" value="mps" />
            <Picker.Item label="Kilometers per Hour" value="kmh" />
            <Picker.Item label="Miles per Hour" value="mph" />
            <Picker.Item label="Feet per Second" value="fps" />
            <Picker.Item label="Knots" value="knot" />
            <Picker.Item label="Kilometers per Second" value="kms" />
            <Picker.Item label="Miles per Second" value="mis" />
            <Picker.Item label="Mach (Speed of Sound)" value="mach" />
            <Picker.Item label="Speed of Light" value="c" />
          </Picker>
        </View>

        <TouchableOpacity
          onPress={simulateConversion}
          style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
        >
          <Text style={tw`text-center text-white text-lg font-bold`}>Convert</Text>
        </TouchableOpacity>

        {conversionResult && (
          <View style={tw`mt-6`}>
            <Text style={tw`text-center text-xl text-white font-semibold`}>
              Converted Speed: {conversionResult} {toUnitSpeed}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Speed;
