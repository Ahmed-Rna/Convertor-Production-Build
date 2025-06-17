import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const MolarFlowRate = () => {
    const [volumetricFlowRate, setVolumetricFlowRate] = useState('');
    const [concentration, setConcentration] = useState('');
    const [molarFlowRate, setMolarFlowRate] = useState(null);

    const calculateMolarFlowRate = () => {
        const Q = parseFloat(volumetricFlowRate); // Volumetric Flow Rate (L/s)
        const C = parseFloat(concentration); // Concentration (mol/L)

        if (isNaN(Q) || Q <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid volumetric flow rate.');
            return;
        }

        if (isNaN(C) || C <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid concentration.');
            return;
        }

        const molarFlow = Q * C; // Molar Flow Rate (mol/s)
        setMolarFlowRate(molarFlow.toFixed(2)); // Result in moles per second (mol/s)
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Molar Flow Rate Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Volumetric Flow Rate Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Volumetric Flow Rate (L/s)</Text>
                    <TextInput
                        value={volumetricFlowRate}
                        onChangeText={setVolumetricFlowRate}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Volumetric Flow Rate in L/s"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Concentration Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Concentration (mol/L)</Text>
                    <TextInput
                        value={concentration}
                        onChangeText={setConcentration}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Concentration in mol/L"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateMolarFlowRate}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {molarFlowRate && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Molar Flow Rate: {molarFlowRate} mol/s
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default MolarFlowRate;

