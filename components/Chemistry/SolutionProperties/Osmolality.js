import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Osmolality = () => {
    const [molesOfSolute, setMolesOfSolute] = useState('');
    const [ionizationFactor, setIonizationFactor] = useState('');
    const [massOfSolvent, setMassOfSolvent] = useState('');
    const [osmolality, setOsmolality] = useState(null);

    const calculateOsmolality = () => {
        const moles = parseFloat(molesOfSolute);
        const ionFactor = parseFloat(ionizationFactor);
        const massSolvent = parseFloat(massOfSolvent);

        if (isNaN(moles) || moles <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid number of moles of solute.');
            return;
        }

        if (isNaN(ionFactor) || ionFactor <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid ionization factor.');
            return;
        }

        if (isNaN(massSolvent) || massSolvent <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid mass of solvent (kg).');
            return;
        }

        // Calculate osmolality
        const osmolalityValue = (moles * ionFactor) / massSolvent;
        setOsmolality(osmolalityValue.toFixed(2)); // Round the result to 2 decimal places
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Osmolality Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Moles of Solute Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Moles of Solute (mol)</Text>
                    <TextInput
                        value={molesOfSolute}
                        onChangeText={setMolesOfSolute}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter moles of solute"
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

                {/* Mass of Solvent Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Mass of Solvent (kg)</Text>
                    <TextInput
                        value={massOfSolvent}
                        onChangeText={setMassOfSolvent}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter mass of solvent in kg"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateOsmolality}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate Osmolality</Text>
                </TouchableOpacity>

                {/* Results */}
                {osmolality !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Osmolality: {osmolality} mol/kg
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Osmolality;
