import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const RefractiveIndex = () => {
    const [speedInMedium, setSpeedInMedium] = useState('');
    const [refractiveIndex, setRefractiveIndex] = useState(null);

    const calculateRefractiveIndex = () => {
        const speed = parseFloat(speedInMedium); // Speed of light in the medium (m/s)

        if (isNaN(speed) || speed <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid speed of light in the medium.');
            return;
        }

        const speedOfLightInVacuum = 3.00 * Math.pow(10, 8); // Speed of light in a vacuum (m/s)
        const n = speedOfLightInVacuum / speed; // Calculate refractive index

        setRefractiveIndex(n.toFixed(2)); // Set refractive index result
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Refractive Index Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Speed in Medium Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Speed of Light in Medium (m/s)</Text>
                    <TextInput
                        value={speedInMedium}
                        onChangeText={setSpeedInMedium}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter speed in medium"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateRefractiveIndex}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {refractiveIndex && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Refractive Index: {refractiveIndex}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default RefractiveIndex;
