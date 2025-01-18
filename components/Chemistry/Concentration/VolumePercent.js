import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const VolumePercent= () => {
    const [volumeSolute, setVolumeSolute] = useState('');
    const [volumeSolution, setVolumeSolution] = useState('');
    const [result, setResult] = useState(null);

    const calculateVolumePercent = () => {
        const solute = parseFloat(volumeSolute);
        const solution = parseFloat(volumeSolution);

        if (isNaN(solute) || solute <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid volume for the solute.');
            return;
        }
        if (isNaN(solution) || solution <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid volume for the solution.');
            return;
        }
        if (solute > solution) {
            Alert.alert('Invalid Input', 'Solute volume cannot exceed solution volume.');
            return;
        }

        const volumePercent = (solute / solution) * 100;
        setResult(volumePercent.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Volume Percent Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Solute Volume Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Volume of Solute (mL or L)</Text>
                    <TextInput
                        value={volumeSolute}
                        onChangeText={setVolumeSolute}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter solute volume"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Solution Volume Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Volume of Solution (mL or L)</Text>
                    <TextInput
                        value={volumeSolution}
                        onChangeText={setVolumeSolution}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter solution volume"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateVolumePercent}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {result && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Volume Percent: {result}%
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default VolumePercent;
