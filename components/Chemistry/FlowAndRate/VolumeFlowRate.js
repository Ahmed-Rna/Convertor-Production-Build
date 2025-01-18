import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const VolumeFlowRate = () => {
    const [velocity, setVelocity] = useState('');
    const [area, setArea] = useState('');
    const [volumeFlowRate, setVolumeFlowRate] = useState(null);

    const calculateVolumeFlowRate = () => {
        const v = parseFloat(velocity); // Velocity (m/s)
        const A = parseFloat(area); // Cross-sectional Area (m²)

        if (isNaN(v) || v <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid velocity.');
            return;
        }

        if (isNaN(A) || A <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid cross-sectional area.');
            return;
        }

        const flowRate = v * A; // Volume Flow Rate (m³/s)
        setVolumeFlowRate(flowRate.toFixed(2)); // Result in m³/s
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Volume Flow Rate Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Velocity Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Velocity (m/s)</Text>
                    <TextInput
                        value={velocity}
                        onChangeText={setVelocity}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Velocity in m/s"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Area Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Cross-Sectional Area (m²)</Text>
                    <TextInput
                        value={area}
                        onChangeText={setArea}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Area in m²"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateVolumeFlowRate}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {volumeFlowRate && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Volume Flow Rate: {volumeFlowRate} m³/s
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default VolumeFlowRate;
