import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Bar = () => {
    const [pressureInPascal, setPressureInPascal] = useState('');
    const [pressureInBar, setPressureInBar] = useState(null);

    const calculateBar = () => {
        const pascal = parseFloat(pressureInPascal);

        // Validate input
        if (isNaN(pascal) || pascal <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid pressure in Pascals.');
            return;
        }

        // Conversion factor: 1 Bar = 100,000 Pascals
        const barValue = pascal / 100000;
        setPressureInBar(barValue.toFixed(5));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Bar Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Pascal Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Pressure in Pascals (Pa)</Text>
                    <TextInput
                        value={pressureInPascal}
                        onChangeText={setPressureInPascal}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Pressure in Pascals"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateBar}
                    style={tw`bg-red-500 py-3 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {pressureInBar && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Pressure: {pressureInBar} Bar
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Bar;
