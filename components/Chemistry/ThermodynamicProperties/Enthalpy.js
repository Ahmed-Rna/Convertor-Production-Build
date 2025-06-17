import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Enthalpy = () => {
    const [heatChange, setHeatChange] = useState('');
    const [moles, setMoles] = useState('');
    const [enthalpyChange, setEnthalpyChange] = useState(null);

    const calculateEnthalpy = () => {
        const heat = parseFloat(heatChange);
        const numberOfMoles = parseFloat(moles);

        if (isNaN(heat) || isNaN(numberOfMoles) || heat <= 0 || numberOfMoles <= 0) {
            Alert.alert('Invalid Input', 'Please enter valid heat change and moles.');
            return;
        }

        const enthalpy = heat / numberOfMoles; // Enthalpy change per mole
        setEnthalpyChange(enthalpy.toFixed(2)); // Result in Joules per mole (J/mol)
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Enthalpy Change Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Heat Change Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Heat Change (J)</Text>
                    <TextInput
                        value={heatChange}
                        onChangeText={setHeatChange}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter heat change in Joules"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Moles Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Number of Moles</Text>
                    <TextInput
                        value={moles}
                        onChangeText={setMoles}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter number of moles"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateEnthalpy}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate Enthalpy</Text>
                </TouchableOpacity>

                {/* Results */}
                {enthalpyChange !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Enthalpy Change: {enthalpyChange} J/mol
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Enthalpy;
