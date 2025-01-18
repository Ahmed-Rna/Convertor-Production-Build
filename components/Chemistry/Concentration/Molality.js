import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Molality = () => {
    const [moles, setMoles] = useState('');
    const [mass, setMass] = useState('');
    const [molality, setMolality] = useState(null);

    const calculateMolality = () => {
        const n = parseFloat(moles); // Moles of solute
        const m = parseFloat(mass); // Mass of solvent in kilograms

        if (isNaN(n) || n <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid number of moles.');
            return;
        }
        if (isNaN(m) || m <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid mass of solvent in kilograms.');
            return;
        }

        const molalityValue = n / m;
        setMolality(molalityValue.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Molality Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Moles Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Moles of Solute</Text>
                    <TextInput
                        value={moles}
                        onChangeText={setMoles}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Moles"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Mass Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Mass of Solvent (kg)</Text>
                    <TextInput
                        value={mass}
                        onChangeText={setMass}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Mass in kg"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateMolality}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {molality && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Molality: {molality} mol/kg
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Molality;
