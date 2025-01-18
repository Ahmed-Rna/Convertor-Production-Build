import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const atomicWeights = {
    H: 1.008,
    He: 4.0026,
    Li: 6.94,
    Be: 9.0122,
    B: 10.81,
    C: 12.011,
    N: 14.007,
    O: 16.00,
    F: 18.998,
    Ne: 20.180,
    Na: 22.990,
    Mg: 24.305,
    Al: 26.982,
    Si: 28.085,
    P: 30.974,
    S: 32.06,
    Cl: 35.45,
    K: 39.098,
    Ca: 40.078,
    Fe: 55.845,
    Cu: 63.546,
    Zn: 65.38,
    Br: 79.904,
    I: 126.90,
    Au: 196.97,
    Hg: 200.59,
    Pb: 207.2,
};

const parseFormula = (formula) => {
    const regex = /([A-Z][a-z]*)(\d*)/g;
    let result = {};
    let match;
    while ((match = regex.exec(formula)) !== null) {
        const element = match[1];
        const quantity = match[2] ? parseInt(match[2], 10) : 1;
        if (result[element]) {
            result[element] += quantity;
        } else {
            result[element] = quantity;
        }
    }
    return result;
};

const MolecularWeight = () => {
    const [formula, setFormula] = useState('');
    const [molecularWeight, setMolecularWeight] = useState(null);

    const calculateMolecularWeight = () => {
        if (!formula) {
            Alert.alert('Invalid Input', 'Please enter a chemical formula.');
            return;
        }

        const parsedFormula = parseFormula(formula);
        let totalWeight = 0;

        for (let element in parsedFormula) {
            if (atomicWeights[element]) {
                totalWeight += atomicWeights[element] * parsedFormula[element];
            } else {
                Alert.alert('Invalid Element', `Element "${element}" is not recognized.`);
                return;
            }
        }

        setMolecularWeight(totalWeight.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Molecular Weight Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Formula Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Chemical Formula</Text>
                    <TextInput
                        value={formula}
                        onChangeText={setFormula}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Chemical Formula"
                        keyboardType="default"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateMolecularWeight}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {molecularWeight && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Molecular Weight: {molecularWeight} g/mol
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default MolecularWeight;
