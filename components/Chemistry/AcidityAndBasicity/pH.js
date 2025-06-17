import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const pH = () => {
    const [hydrogenIonConcentration, setHydrogenIonConcentration] = useState('');
    const [pH, setpH] = useState(null);

    const calculatepH = () => {
        const H = parseFloat(hydrogenIonConcentration); 
        if (isNaN(H) || H <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid hydrogen ion concentration.');
            return;
        }

        const pHValue = -Math.log10(H); 
        setpH(pHValue.toFixed(2)); 
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                pH Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Hydrogen Ion Concentration Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Hydrogen Ion Concentration (mol/L)</Text>
                    <TextInput
                        value={hydrogenIonConcentration}
                        onChangeText={setHydrogenIonConcentration}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter H⁺ Concentration"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculatepH}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {pH && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            pH: {pH}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default pH;
