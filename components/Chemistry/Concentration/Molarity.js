import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Molarity = () => {
    const [moles, setMoles] = useState('');
    const [volume, setVolume] = useState('');
    const [result, setResult] = useState(null);

    const calculateMolarity = () => {
        const m = parseFloat(moles);
        const v = parseFloat(volume);

        if (isNaN(m) || isNaN(v) || v <= 0) {
            Alert.alert('Invalid Input', 'Please enter valid numbers. Volume must be greater than zero.');
            return;
        }

        const molarity = m / v;
        setResult(molarity.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Molarity Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Moles Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Moles (mol)</Text>
                    <TextInput
                        value={moles}
                        onChangeText={setMoles}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Moles"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Volume Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Volume (L)</Text>
                    <TextInput
                        value={volume}
                        onChangeText={setVolume}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Volume"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateMolarity}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {result && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Molarity: {result} M
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Molarity;
