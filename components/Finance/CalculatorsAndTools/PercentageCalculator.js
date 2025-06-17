import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const PercentageCalculator = () => {
    const [value, setValue] = useState('');
    const [percentage, setPercentage] = useState('');
    const [result, setResult] = useState(null);

    const calculatePercentage = () => {
        const v = parseFloat(value);
        const p = parseFloat(percentage);

        if (isNaN(v) || isNaN(p)) {
            Alert.alert('Invalid Input', 'Please enter valid numbers.');
            return;
        }

        const calculatedValue = (v * p) / 100;
        setResult(calculatedValue.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Percentage Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Value Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Value</Text>
                    <TextInput
                        value={value}
                        onChangeText={setValue}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Value"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Percentage Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Percentage (%)</Text>
                    <TextInput
                        value={percentage}
                        onChangeText={setPercentage}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Percentage"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculatePercentage}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {result && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Result: {result}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default PercentageCalculator;