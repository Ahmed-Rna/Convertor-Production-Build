import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Wavelength = () => {
    const [frequency, setFrequency] = useState('');
    const [wavelength, setWavelength] = useState(null);

    const calculateWavelength = () => {
        const freq = parseFloat(frequency);

        if (isNaN(freq) || freq <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid frequency in Hz.');
            return;
        }

        // Speed of light (m/s)
        const c = 3e8;

        // Calculate wavelength
        const wavelengthValue = c / freq;
        setWavelength(wavelengthValue.toFixed(2)); // Result in meters
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Wavelength Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Frequency Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Frequency (Hz)</Text>
                    <TextInput
                        value={frequency}
                        onChangeText={setFrequency}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter frequency in Hz"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateWavelength}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate Wavelength</Text>
                </TouchableOpacity>

                {/* Results */}
                {wavelength !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Wavelength: {wavelength} meters
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Wavelength;
