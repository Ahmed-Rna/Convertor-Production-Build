import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const WeightPercent = () => {
    const [massSolute, setMassSolute] = useState('');
    const [massSolution, setMassSolution] = useState('');
    const [weightPercent, setWeightPercent] = useState(null);

    const calculateWeightPercent = () => {
        const solute = parseFloat(massSolute); // Mass of solute
        const solution = parseFloat(massSolution); // Mass of solution

        if (isNaN(solute) || solute <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid mass for the solute.');
            return;
        }
        if (isNaN(solution) || solution <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid mass for the solution.');
            return;
        }
        if (solute > solution) {
            Alert.alert('Invalid Input', 'Solute mass cannot be greater than solution mass.');
            return;
        }

        // Calculate Weight Percent
        const percent = (solute / solution) * 100;
        setWeightPercent(percent.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Weight Percent Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Solute Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Mass of Solute (g)</Text>
                    <TextInput
                        value={massSolute}
                        onChangeText={setMassSolute}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Mass of Solute"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Solution Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Mass of Solution (g)</Text>
                    <TextInput
                        value={massSolution}
                        onChangeText={setMassSolution}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Mass of Solution"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateWeightPercent}
                    style={tw`bg-red-500 py-2 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {weightPercent && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Weight Percent: {weightPercent}%
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default WeightPercent;
