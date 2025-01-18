import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';

const pKa_pKb = () => {
    const [ka, setKa] = useState(''); // Acid dissociation constant (Ka)
    const [kb, setKb] = useState(''); // Base dissociation constant (Kb)
    const [pKa, setpKa] = useState(null); // pKa value
    const [pKb, setpKb] = useState(null); // pKa + pKb relationship
    const [pKa_pKbRelationship, setpKa_pKbRelationship] = useState(null); // pKa + pKb = 14

    const calculatepKa = () => {
        const Ka = parseFloat(ka); // Acid dissociation constant (Ka)

        if (isNaN(Ka) || Ka <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Ka value.');
            return;
        }

        const pKaValue = -Math.log10(Ka); // Calculate pKa
        setpKa(pKaValue.toFixed(2)); // Set pKa value
    };

    const calculatepKb = () => {
        const Kb = parseFloat(kb); // Base dissociation constant (Kb)

        if (isNaN(Kb) || Kb <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Kb value.');
            return;
        }

        const pKbValue = -Math.log10(Kb); // Calculate pKb
        setpKb(pKbValue.toFixed(2)); // Set pKb value
    };

    const calculatepKa_pKbRelationship = () => {
        if (pKa && pKb) {
            const sum = parseFloat(pKa) + parseFloat(pKb);
            setpKa_pKbRelationship(sum.toFixed(2)); // Display pKa + pKb = 14
        }
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
                    pKa and pKb Calculator
                </Text>

                {/* Calculator Container */}
                <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                    {/* Ka Input */}
                    <View style={tw`mb-4`}>
                        <Text style={tw`text-white text-lg mb-2`}>Enter Acid Dissociation Constant (Ka)</Text>
                        <TextInput
                            value={ka}
                            onChangeText={setKa}
                            style={tw`w-full p-4 bg-white rounded-lg text-black`}
                            placeholder="Enter Ka value"
                            keyboardType="numeric"
                            placeholderTextColor="gray"
                        />
                    </View>

                    {/* Kb Input */}
                    <View style={tw`mb-4`}>
                        <Text style={tw`text-white text-lg mb-2`}>Enter Base Dissociation Constant (Kb)</Text>
                        <TextInput
                            value={kb}
                            onChangeText={setKb}
                            style={tw`w-full p-4 bg-white rounded-lg text-black`}
                            placeholder="Enter Kb value"
                            keyboardType="numeric"
                            placeholderTextColor="gray"
                        />
                    </View>

                    {/* Calculate pKa Button */}
                    <TouchableOpacity
                        onPress={calculatepKa}
                        style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                    >
                        <Text style={tw`text-center text-white text-lg font-bold`}>Calculate pKa</Text>
                    </TouchableOpacity>

                    {/* Calculate pKb Button */}
                    <TouchableOpacity
                        onPress={calculatepKb}
                        style={tw`bg-red-500 py-1 rounded-lg shadow-lg mt-4`}
                    >
                        <Text style={tw`text-center text-white text-lg font-bold`}>Calculate pKb</Text>
                    </TouchableOpacity>

                    {/* pKa + pKb Relationship Button */}
                    <TouchableOpacity
                        onPress={calculatepKa_pKbRelationship}
                        style={tw`bg-blue-500 py-1 rounded-lg shadow-lg mt-4`}
                    >
                        <Text style={tw`text-center text-white text-lg font-bold`}>Check pKa + pKb = 14</Text>
                    </TouchableOpacity>

                    {/* Results */}
                    {pKa && (
                        <View style={tw`mt-6`}>
                            <Text style={tw`text-center text-xl text-white font-semibold`}>
                                pKa: {pKa}
                            </Text>
                        </View>
                    )}

                    {pKb && (
                        <View style={tw`mt-6`}>
                            <Text style={tw`text-center text-xl text-white font-semibold`}>
                                pKb: {pKb}
                            </Text>
                        </View>
                    )}

                    {pKa_pKbRelationship && (
                        <View style={tw`mt-6`}>
                            <Text style={tw`text-center text-xl text-white font-semibold`}>
                                pKa + pKb = {pKa_pKbRelationship}
                            </Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default pKa_pKb;
