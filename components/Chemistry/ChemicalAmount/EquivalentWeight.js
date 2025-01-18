import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const EquivalentWeight = () => {
    const [molarMass, setMolarMass] = useState('');
    const [replaceableIons, setReplaceableIons] = useState('');
    const [equivalentWeight, setEquivalentWeight] = useState(null);
    const [substanceType, setSubstanceType] = useState('acid'); // Default is acid

    const calculateEquivalentWeight = () => {
        const MolarMass = parseFloat(molarMass);
        const ReplaceableIons = parseFloat(replaceableIons);

        if (isNaN(MolarMass) || MolarMass <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid molar mass.');
            return;
        }

        if (isNaN(ReplaceableIons) || ReplaceableIons <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid number of replaceable ions.');
            return;
        }

        const eqWeight = MolarMass / ReplaceableIons;
        setEquivalentWeight(eqWeight.toFixed(2)); // Result in grams
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Equivalent Weight Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Molar Mass Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Molar Mass (g/mol)</Text>
                    <TextInput
                        value={molarMass}
                        onChangeText={setMolarMass}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Molar Mass"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Replaceable Ions Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Replaceable Ions</Text>
                    <TextInput
                        value={replaceableIons}
                        onChangeText={setReplaceableIons}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter number of replaceable ions"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Substance Type Selection */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Select Substance Type</Text>
                    <TextInput
                        value={substanceType}
                        onChangeText={setSubstanceType}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter substance type (acid, base, salt)"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateEquivalentWeight}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {equivalentWeight && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Equivalent Weight: {equivalentWeight} g
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default EquivalentWeight;
