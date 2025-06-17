import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const PartsPerMillion= () => {
    const [massSolute, setMassSolute] = useState('');
    const [massSolution, setMassSolution] = useState('');
    const [ppm, setPPM] = useState(null);

    const calculatePPM = () => {
        const solute = parseFloat(massSolute); // Mass of solute in grams
        const solution = parseFloat(massSolution); // Mass of solution in grams

        // Input validation
        if (isNaN(solute) || solute <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid mass of the solute.');
            return;
        }
        if (isNaN(solution) || solution <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid mass of the solution.');
            return;
        }

        // Calculate PPM
        const ppmValue = (solute / solution) * 1e6; // PPM formula
        setPPM(ppmValue.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Parts Per Million (PPM) Calculator
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
                        placeholder="Enter mass of solute"
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
                        placeholder="Enter mass of solution"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculatePPM}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {ppm && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            PPM: {ppm}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default PartsPerMillion;
