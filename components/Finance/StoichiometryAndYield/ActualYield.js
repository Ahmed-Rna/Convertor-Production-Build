import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const ActualYield = () => {
    const [theoreticalYield, setTheoreticalYield] = useState('');
    const [percentYield, setPercentYield] = useState('');
    const [actualYield, setActualYield] = useState(null);

    const calculateActualYield = () => {
        const theoretical = parseFloat(theoreticalYield);
        const percent = parseFloat(percentYield);

        if (isNaN(theoretical) || theoretical <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid theoretical yield.');
            return;
        }

        if (isNaN(percent) || percent <= 0 || percent > 100) {
            Alert.alert('Invalid Input', 'Please enter a valid percent yield (0-100).');
            return;
        }

        // Calculate actual yield
        const yieldValue = (percent / 100) * theoretical;
        setActualYield(yieldValue.toFixed(2)); // Round the result to 2 decimal places
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Actual Yield Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
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

                {/* Percent Yield Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Percent Yield (%)</Text>
                    <TextInput
                        value={percentYield}
                        onChangeText={setPercentYield}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter percent yield (0-100)"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateActualYield}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate Actual Yield</Text>
                </TouchableOpacity>

                {/* Results */}
                {actualYield !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Actual Yield: {actualYield} grams
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default ActualYield;
