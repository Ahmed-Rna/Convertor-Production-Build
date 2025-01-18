import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const GibbsFreeEnergy = () => {
    const [enthalpy, setEnthalpy] = useState('');
    const [entropy, setEntropy] = useState('');
    const [temperature, setTemperature] = useState('');
    const [gibbsFreeEnergy, setGibbsFreeEnergy] = useState(null);

    const calculateGibbsFreeEnergy = () => {
        const H = parseFloat(enthalpy);
        const S = parseFloat(entropy);
        const T = parseFloat(temperature);

        if (isNaN(H) || isNaN(S) || isNaN(T) || H <= 0 || S <= 0 || T <= 0) {
            Alert.alert('Invalid Input', 'Please enter valid enthalpy, entropy, and temperature values.');
            return;
        }

        const deltaG = H - T * S; // Gibbs Free Energy formula: G = H - TS
        setGibbsFreeEnergy(deltaG.toFixed(2)); // Result in Joules (J)
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Gibbs Free Energy Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Enthalpy Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Enthalpy (H in J)</Text>
                    <TextInput
                        value={enthalpy}
                        onChangeText={setEnthalpy}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter enthalpy in Joules"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Entropy Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Entropy (S in J/K)</Text>
                    <TextInput
                        value={entropy}
                        onChangeText={setEntropy}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter entropy in J/K"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Temperature Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Temperature (T in K)</Text>
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
                    onPress={calculateGibbsFreeEnergy}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate Gibbs Free Energy</Text>
                </TouchableOpacity>

                {/* Results */}
                {gibbsFreeEnergy !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Gibbs Free Energy: {gibbsFreeEnergy} J
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default GibbsFreeEnergy;
