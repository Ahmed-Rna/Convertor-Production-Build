import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Mole = () => {
    const [particles, setParticles] = useState(''); // in number of particles (atoms, molecules, etc.)
    const [mole, setMole] = useState(null); // in Mole (mol)

    const calculateMole = () => {
        const numParticles = parseFloat(particles);

        if (isNaN(numParticles) || numParticles <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid number of particles.');
            return;
        }

        const moleValue = numParticles / 6.022e23; // Convert number of particles to moles (1 mol = 6.022 × 10²³ particles)
        setMole(moleValue.toFixed(10)); // Result in Mole (mol)
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Mole (mol) Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Particles Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Number of Particles</Text>
                    <TextInput
                        value={particles}
                        onChangeText={setParticles}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Number of Particles"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateMole}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {mole && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Amount: {mole} mol
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Mole;
