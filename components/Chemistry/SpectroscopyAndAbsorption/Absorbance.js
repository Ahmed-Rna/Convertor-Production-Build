import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Absorbance = () => {
    const [epsilon, setEpsilon] = useState('');
    const [concentration, setConcentration] = useState('');
    const [pathLength, setPathLength] = useState('');
    const [transmittance, setTransmittance] = useState('');
    const [absorbance, setAbsorbance] = useState(null);

    const calculateAbsorbance = () => {
        if (epsilon && concentration && pathLength) {
            // Beer-Lambert Law
            const e = parseFloat(epsilon);
            const c = parseFloat(concentration);
            const l = parseFloat(pathLength);

            if (isNaN(e) || e <= 0 || isNaN(c) || c <= 0 || isNaN(l) || l <= 0) {
                Alert.alert('Invalid Input', 'Please enter valid values for all inputs.');
                return;
            }

            const absorbanceValue = e * c * l;
            setAbsorbance(absorbanceValue.toFixed(2));
        } else if (transmittance) {
            // Using transmittance
            const T = parseFloat(transmittance);

            if (isNaN(T) || T <= 0 || T > 1) {
                Alert.alert('Invalid Input', 'Please enter a valid transmittance (between 0 and 1).');
                return;
            }

            const absorbanceValue = -Math.log10(T);
            setAbsorbance(absorbanceValue.toFixed(2));
        } else {
            Alert.alert('Invalid Input', 'Please provide either Beer-Lambert inputs or transmittance.');
        }
    };

    return (
        <ScrollView
            contentContainerStyle={tw`flex-grow bg-gray-600 p-6`}
            showsVerticalScrollIndicator={false}
        >
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Absorbance Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Beer-Lambert Law Inputs */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Molar Absorptivity (ε) in L·mol⁻¹·cm⁻¹</Text>
                    <TextInput
                        value={epsilon}
                        onChangeText={setEpsilon}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter molar absorptivity"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Concentration (c) in mol/L</Text>
                    <TextInput
                        value={concentration}
                        onChangeText={setConcentration}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter concentration in mol/L"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Path Length (l) in cm</Text>
                    <TextInput
                        value={pathLength}
                        onChangeText={setPathLength}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter path length in cm"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* OR Transmittance Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>OR Enter Transmittance (T)</Text>
                    <TextInput
                        value={transmittance}
                        onChangeText={setTransmittance}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter transmittance (between 0 and 1)"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateAbsorbance}
                    style={tw`bg-red-500 py-4 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate Absorbance</Text>
                </TouchableOpacity>

                {/* Results */}
                {absorbance !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Absorbance: {absorbance}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Absorbance;
