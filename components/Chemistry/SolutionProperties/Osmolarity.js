import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Osmolarity = () => {
    const [molarity, setMolarity] = useState('');
    const [ionizationFactor, setIonizationFactor] = useState('');
    const [osmolarity, setOsmolarity] = useState(null);

    const calculateOsmolarity = () => {
        const molarityValue = parseFloat(molarity);
        const ionFactor = parseFloat(ionizationFactor);

        if (isNaN(molarityValue) || molarityValue <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid molarity (mol/L).');
            return;
        }

        if (isNaN(ionFactor) || ionFactor <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid ionization factor.');
            return;
        }

        // Calculate osmolarity
        const osmolarityValue = molarityValue * ionFactor;
        setOsmolarity(osmolarityValue.toFixed(2)); // Round the result to 2 decimal places
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Osmolarity Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Molarity Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Molarity (mol/L)</Text>
                    <TextInput
                        value={molarity}
                        onChangeText={setMolarity}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter molarity in mol/L"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Ionization Factor Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Ionization Factor</Text>
                    <TextInput
                        value={ionizationFactor}
                        onChangeText={setIonizationFactor}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter ionization factor"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateOsmolarity}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate Osmolarity</Text>
                </TouchableOpacity>

                {/* Results */}
                {osmolarity !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Osmolarity: {osmolarity} Osm/L
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Osmolarity;
