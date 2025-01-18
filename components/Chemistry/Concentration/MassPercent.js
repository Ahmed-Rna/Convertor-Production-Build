import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const MassPercent = () => {
    const [soluteMass, setSoluteMass] = useState('');
    const [solutionMass, setSolutionMass] = useState('');
    const [massPercent, setMassPercent] = useState(null);

    const calculateMassPercent = () => {
        const solute = parseFloat(soluteMass); // Mass of solute
        const solution = parseFloat(solutionMass); // Mass of solution

        if (isNaN(solute) || solute <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid mass of the solute.');
            return;
        }

        if (isNaN(solution) || solution <= 0 || solution < solute) {
            Alert.alert('Invalid Input', 'Please enter a valid mass of the solution.');
            return;
        }

        // Calculate Mass Percent
        const percent = (solute / solution) * 100;
        setMassPercent(percent.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Mass Percent Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Solute Mass Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Mass of Solute (g)</Text>
                    <TextInput
                        value={soluteMass}
                        onChangeText={setSoluteMass}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Mass of Solute"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Solution Mass Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Mass of Solution (g)</Text>
                    <TextInput
                        value={solutionMass}
                        onChangeText={setSolutionMass}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Mass of Solution"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateMassPercent}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {massPercent && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Mass Percent: {massPercent}%
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default MassPercent;
