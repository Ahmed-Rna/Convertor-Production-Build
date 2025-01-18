import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Entropy = () => {
    const [heat, setHeat] = useState('');
    const [temperature, setTemperature] = useState('');
    const [entropyChange, setEntropyChange] = useState(null);

    const calculateEntropy = () => {
        const Q = parseFloat(heat);
        const T = parseFloat(temperature);

        if (isNaN(Q) || isNaN(T) || Q <= 0 || T <= 0) {
            Alert.alert('Invalid Input', 'Please enter valid heat and temperature values.');
            return;
        }

        const deltaS = Q / T; // Entropy change formula: ΔS = Q / T
        setEntropyChange(deltaS.toFixed(2)); // Result in Joules per Kelvin (J/K)
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Entropy Change Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Heat Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Heat (J)</Text>
                    <TextInput
                        value={heat}
                        onChangeText={setHeat}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter heat added or removed in Joules"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Temperature Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Temperature (K)</Text>
                    <TextInput
                        value={temperature}
                        onChangeText={setTemperature}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter temperature in Kelvin"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateEntropy}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate Entropy Change</Text>
                </TouchableOpacity>

                {/* Results */}
                {entropyChange !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Entropy Change: {entropyChange} J/K
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Entropy;
