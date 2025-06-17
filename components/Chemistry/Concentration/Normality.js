import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Normality = () => {
    const [equivalents, setEquivalents] = useState('');
    const [volume, setVolume] = useState('');
    const [normality, setNormality] = useState(null);

    const calculateNormality = () => {
        const eq = parseFloat(equivalents); // Equivalents of solute
        const vol = parseFloat(volume); // Volume of solution in liters

        if (isNaN(eq) || eq <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid number of equivalents.');
            return;
        }

        if (isNaN(vol) || vol <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid volume (in liters).');
            return;
        }

        const calculatedNormality = eq / vol;
        setNormality(calculatedNormality.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Normality Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Equivalents Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Equivalents of Solute</Text>
                    <TextInput
                        value={equivalents}
                        onChangeText={setEquivalents}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Equivalents"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Volume Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Volume of Solution (L)</Text>
                    <TextInput
                        value={volume}
                        onChangeText={setVolume}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Volume in Liters"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateNormality}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {normality && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Normality: {normality} N
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Normality;
