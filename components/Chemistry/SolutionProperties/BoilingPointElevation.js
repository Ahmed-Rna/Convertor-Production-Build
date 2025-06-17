import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const BoilingPointElevation = () => {
    const [molality, setMolality] = useState('');
    const [ebullioscopicConstant, setEbullioscopicConstant] = useState('');
    const [ionizationFactor, setIonizationFactor] = useState('');
    const [boilingPointElevation, setBoilingPointElevation] = useState(null);

    const calculateBoilingPointElevation = () => {
        const m = parseFloat(molality);
        const Kb = parseFloat(ebullioscopicConstant);
        const i = parseFloat(ionizationFactor);

        if (isNaN(m) || m <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid molality (mol/kg).');
            return;
        }

        if (isNaN(Kb) || Kb <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid ebullioscopic constant.');
            return;
        }

        if (isNaN(i) || i <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid ionization factor.');
            return;
        }

        // Calculate boiling point elevation
        const deltaTb = Kb * m * i;
        setBoilingPointElevation(deltaTb.toFixed(2)); // Round the result to 2 decimal places
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-grow bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Boiling Point Elevation Calculator
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

                {/* Ebullioscopic Constant Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Ebullioscopic Constant (K₋b)</Text>
                    <TextInput
                        value={ebullioscopicConstant}
                        onChangeText={setEbullioscopicConstant}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter ebullioscopic constant"
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
                    onPress={calculateBoilingPointElevation}
                    style={tw`bg-red-500 p-2 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate Boiling Point Elevation</Text>
                </TouchableOpacity>

                {/* Results */}
                {boilingPointElevation !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Boiling Point Elevation: {boilingPointElevation} °C
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default BoilingPointElevation;
