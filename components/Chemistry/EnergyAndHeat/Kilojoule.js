import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Kilojoule = () => {
    const [force, setForce] = useState(''); // in Newtons (N)
    const [distance, setDistance] = useState(''); // in meters (m)
    const [energy, setEnergy] = useState(null); // in Kilojoules (kJ)

    const calculateEnergy = () => {
        const F = parseFloat(force);
        const D = parseFloat(distance);

        if (isNaN(F) || F <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid force (N).');
            return;
        }

        if (isNaN(D) || D <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid distance (m).');
            return;
        }

        const energyInJoules = F * D; // Energy in Joules (J)

        // Convert Joules to Kilojoules (1 kJ = 1000 J)
        const energyInKilojoules = energyInJoules / 1000;

        setEnergy(energyInKilojoules.toFixed(2)); // Result in Kilojoules
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Kilojoule (kJ) Energy Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Force Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Force (N)</Text>
                    <TextInput
                        value={force}
                        onChangeText={setForce}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Force in Newtons"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Distance Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Distance (m)</Text>
                    <TextInput
                        value={distance}
                        onChangeText={setDistance}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Distance in meters"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateEnergy}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {energy && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Energy: {energy} kJ
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Kilojoule;
