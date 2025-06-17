import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const PercentYield = () => {
    const [actualYield, setActualYield] = useState('');
    const [theoreticalYield, setTheoreticalYield] = useState('');
    const [percentYield, setPercentYield] = useState(null);

    const calculatePercentYield = () => {
        const actual = parseFloat(actualYield);
        const theoretical = parseFloat(theoreticalYield);

        if (isNaN(actual) || actual < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid actual yield.');
            return;
        }

        if (isNaN(theoretical) || theoretical <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid theoretical yield.');
            return;
        }

        // Calculate percent yield
        const percent = (actual / theoretical) * 100;
        setPercentYield(percent.toFixed(2)); // Round the result to 2 decimal places
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Percent Yield Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Actual Yield Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Actual Yield (grams)</Text>
                    <TextInput
                        value={actualYield}
                        onChangeText={setActualYield}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter actual yield in grams"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Theoretical Yield Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Theoretical Yield (grams)</Text>
                    <TextInput
                        value={theoreticalYield}
                        onChangeText={setTheoreticalYield}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter theoretical yield in grams"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculatePercentYield}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate Percent Yield</Text>
                </TouchableOpacity>

                {/* Results */}
                {percentYield !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Percent Yield: {percentYield} %
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default PercentYield;
