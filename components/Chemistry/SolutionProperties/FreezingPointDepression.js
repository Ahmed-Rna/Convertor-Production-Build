import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const FreezingPointDepression = () => {
    const [molality, setMolality] = useState('');
    const [cryoscopicConstant, setCryoscopicConstant] = useState('');
    const [ionizationFactor, setIonizationFactor] = useState('');
    const [freezingPointDepression, setFreezingPointDepression] = useState(null);

    const calculateFreezingPointDepression = () => {
        const m = parseFloat(molality);
        const Kf = parseFloat(cryoscopicConstant);
        const i = parseFloat(ionizationFactor);

        if (isNaN(m) || m <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid molality (mol/kg).');
            return;
        }

        if (isNaN(Kf) || Kf <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid cryoscopic constant.');
            return;
        }

        if (isNaN(i) || i <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid ionization factor.');
            return;
        }

        // Calculate freezing point depression
        const deltaTf = Kf * m * i;
        setFreezingPointDepression(deltaTf.toFixed(2)); // Round the result to 2 decimal places
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Freezing Point Depression Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Molality Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Molality (mol/kg)</Text>
                    <TextInput
                        value={molality}
                        onChangeText={setMolality}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter molality in mol/kg"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Cryoscopic Constant Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Cryoscopic Constant (K₋f)</Text>
                    <TextInput
                        value={cryoscopicConstant}
                        onChangeText={setCryoscopicConstant}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter cryoscopic constant"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Ionization Factor Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Ionization Factor</Text>
                    <TextInput
                        value={ionizationFactor}
                        onChangeText={setIonizationFactor}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter ionization factor"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateFreezingPointDepression}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate Freezing Point Depression</Text>
                </TouchableOpacity>

                {/* Results */}
                {freezingPointDepression !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Freezing Point Depression: {freezingPointDepression} °C
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default FreezingPointDepression;
