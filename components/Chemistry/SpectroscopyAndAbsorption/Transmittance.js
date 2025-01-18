import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Transmittance = () => {
    const [absorbance, setAbsorbance] = useState('');
    const [incidentIntensity, setIncidentIntensity] = useState('');
    const [transmittedIntensity, setTransmittedIntensity] = useState('');
    const [transmittance, setTransmittance] = useState(null);

    const calculateTransmittance = () => {
        if (absorbance) {
            // Using Absorbance to calculate Transmittance
            const A = parseFloat(absorbance);

            if (isNaN(A) || A <= 0) {
                Alert.alert('Invalid Input', 'Please enter a valid absorbance.');
                return;
            }

            const T = Math.pow(10, -A); // Transmittance from Absorbance
            setTransmittance(T.toFixed(4));
        } else if (incidentIntensity && transmittedIntensity) {
            // Using intensities to calculate Transmittance
            const I0 = parseFloat(incidentIntensity);
            const It = parseFloat(transmittedIntensity);

            if (isNaN(I0) || isNaN(It) || I0 <= 0 || It < 0) {
                Alert.alert('Invalid Input', 'Please enter valid intensities.');
                return;
            }

            const T = It / I0; // Transmittance = I_t / I_0
            setTransmittance(T.toFixed(4));
        } else {
            Alert.alert('Invalid Input', 'Please provide either absorbance or intensities.');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Transmittance Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Absorbance Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Absorbance (A)</Text>
                    <TextInput
                        value={absorbance}
                        onChangeText={setAbsorbance}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter absorbance value"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* OR Intensities Input */}
                <Text style={tw`text-white text-lg mb-2`}>OR Enter Intensities</Text>

                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Incident Intensity (I₀)</Text>
                    <TextInput
                        value={incidentIntensity}
                        onChangeText={setIncidentIntensity}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter incident intensity"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Transmitted Intensity (Iₜ)</Text>
                    <TextInput
                        value={transmittedIntensity}
                        onChangeText={setTransmittedIntensity}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter transmitted intensity"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateTransmittance}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate Transmittance</Text>
                </TouchableOpacity>

                {/* Results */}
                {transmittance !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Transmittance: {transmittance}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Transmittance;
