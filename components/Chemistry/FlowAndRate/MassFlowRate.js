import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const MassFlowRate = () => {
    const [volumetricFlowRate, setVolumetricFlowRate] = useState('');
    const [density, setDensity] = useState('');
    const [massFlowRate, setMassFlowRate] = useState(null);

    const calculateMassFlowRate = () => {
        const Q = parseFloat(volumetricFlowRate); // Volumetric Flow Rate (L/s or m³/s)
        const rho = parseFloat(density); // Density (kg/m³ or g/cm³)

        if (isNaN(Q) || Q <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid volumetric flow rate.');
            return;
        }

        if (isNaN(rho) || rho <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid density.');
            return;
        }

        const massFlow = Q * rho; // Mass Flow Rate (kg/s or g/s)
        setMassFlowRate(massFlow.toFixed(2)); // Result in kg/s or g/s
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Mass Flow Rate Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Volumetric Flow Rate Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Volumetric Flow Rate (L/s or m³/s)</Text>
                    <TextInput
                        value={volumetricFlowRate}
                        onChangeText={setVolumetricFlowRate}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Volumetric Flow Rate"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Density Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Density (kg/m³ or g/cm³)</Text>
                    <TextInput
                        value={density}
                        onChangeText={setDensity}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Density"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateMassFlowRate}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {massFlowRate && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Mass Flow Rate: {massFlowRate} kg/s
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default MassFlowRate;
