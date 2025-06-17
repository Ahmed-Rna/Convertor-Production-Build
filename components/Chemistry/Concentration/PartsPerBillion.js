import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const PartsPerBillion = () => {
    const [massSolute, setMassSolute] = useState('');
    const [massSolution, setMassSolution] = useState('');
    const [ppb, setPpb] = useState(null);

    const calculatePPB = () => {
        const solute = parseFloat(massSolute);
        const solution = parseFloat(massSolution);

        if (isNaN(solute) || solute <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid mass of the solute (g).');
            return;
        }

        if (isNaN(solution) || solution <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid mass of the solution (g).');
            return;
        }

        const ppbValue = (solute / solution) * 1e9;
        setPpb(ppbValue.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Parts Per Billion (PPB) Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Mass of Solute Input */}
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

                {/* Mass of Solution Input */}
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
                    onPress={calculatePPB}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {ppb && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Parts Per Billion (PPB): {ppb}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default PartsPerBillion;
