import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';

const ActivationEnergy = () => {
    const [rate1, setRate1] = useState('');
    const [rate2, setRate2] = useState('');
    const [temp1, setTemp1] = useState('');
    const [temp2, setTemp2] = useState('');
    const [activationEnergy, setActivationEnergy] = useState(null);

    const calculateActivationEnergy = () => {
        const k1 = parseFloat(rate1);
        const k2 = parseFloat(rate2);
        const T1 = parseFloat(temp1) + 273.15; // Convert to Kelvin
        const T2 = parseFloat(temp2) + 273.15; // Convert to Kelvin

        if (isNaN(k1) || k1 <= 0 || isNaN(k2) || k2 <= 0) {
            Alert.alert('Invalid Input', 'Please enter valid rate constants.');
            return;
        }

        if (isNaN(T1) || T1 <= 0 || isNaN(T2) || T2 <= 0) {
            Alert.alert('Invalid Input', 'Please enter valid temperatures.');
            return;
        }

        // Using the Arrhenius equation to calculate activation energy
        const R = 8.314; // Gas constant in J/mol·K
        const activationEnergy = (R * Math.log(k2 / k1)) / ((1 / T2) - (1 / T1));
        setActivationEnergy(activationEnergy.toFixed(2)); // Set activation energy in J/mol
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={tw`flex-1 bg-gray-600`}
        >
            <ScrollView
                contentContainerStyle={tw`flex-grow p-6`}
                keyboardShouldPersistTaps="handled"
            >
                {/* Title */}
                <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                    Activation Energy Calculator
                </Text>

                {/* Calculator Container */}
                <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                    {/* Rate Constant 1 Input */}
                    <View style={tw`mb-4`}>
                        <Text style={tw`text-white text-lg mb-2`}>Enter Rate Constant 1 (k₁) (mol/s)</Text>
                        <TextInput
                            value={rate1}
                            onChangeText={setRate1}
                            style={tw`w-full p-4 bg-white rounded-lg text-black`}
                            placeholder="Enter rate constant k₁"
                            keyboardType="numeric"
                            placeholderTextColor="gray"
                        />
                    </View>

                    {/* Rate Constant 2 Input */}
                    <View style={tw`mb-4`}>
                        <Text style={tw`text-white text-lg mb-2`}>Enter Rate Constant 2 (k₂) (mol/s)</Text>
                        <TextInput
                            value={rate2}
                            onChangeText={setRate2}
                            style={tw`w-full p-4 bg-white rounded-lg text-black`}
                            placeholder="Enter rate constant k₂"
                            keyboardType="numeric"
                            placeholderTextColor="gray"
                        />
                    </View>

                    {/* Temperature 1 Input */}
                    <View style={tw`mb-4`}>
                        <Text style={tw`text-white text-lg mb-2`}>Enter Temperature 1 (°C)</Text>
                        <TextInput
                            value={temp1}
                            onChangeText={setTemp1}
                            style={tw`w-full p-4 bg-white rounded-lg text-black`}
                            placeholder="Enter temperature T₁ in Celsius"
                            keyboardType="numeric"
                            placeholderTextColor="gray"
                        />
                    </View>

                    {/* Temperature 2 Input */}
                    <View style={tw`mb-4`}>
                        <Text style={tw`text-white text-lg mb-2`}>Enter Temperature 2 (°C)</Text>
                        <TextInput
                            value={temp2}
                            onChangeText={setTemp2}
                            style={tw`w-full p-4 bg-white rounded-lg text-black`}
                            placeholder="Enter temperature T₂ in Celsius"
                            keyboardType="numeric"
                            placeholderTextColor="gray"
                        />
                    </View>

                    {/* Calculate Button */}
                    <TouchableOpacity
                        onPress={calculateActivationEnergy}
                        style={tw`bg-red-500 py-3 rounded-lg shadow-lg`}
                    >
                        <Text style={tw`text-center text-white text-lg font-bold`}>
                            Calculate Activation Energy
                        </Text>
                    </TouchableOpacity>

                    {/* Results */}
                    {activationEnergy && (
                        <View style={tw`mt-6`}>
                            <Text style={tw`text-center text-xl text-white font-semibold`}>
                                Activation Energy: {activationEnergy} J/mol
                            </Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default ActivationEnergy;
