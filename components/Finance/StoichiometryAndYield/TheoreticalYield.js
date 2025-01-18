import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const TheoreticalYield = () => {
    const [reactantMass, setReactantMass] = useState('');
    const [molarMassReactant, setMolarMassReactant] = useState('');
    const [molarMassProduct, setMolarMassProduct] = useState('');
    const [stoichiometricRatio, setStoichiometricRatio] = useState('');
    const [theoreticalYield, setTheoreticalYield] = useState(null);

    const calculateTheoreticalYield = () => {
        const mass = parseFloat(reactantMass);
        const molarMassR = parseFloat(molarMassReactant);
        const molarMassP = parseFloat(molarMassProduct);
        const ratio = parseFloat(stoichiometricRatio);

        if (isNaN(mass) || mass <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid mass of the reactant.');
            return;
        }

        if (isNaN(molarMassR) || molarMassR <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid molar mass of the reactant.');
            return;
        }

        if (isNaN(molarMassP) || molarMassP <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid molar mass of the product.');
            return;
        }

        if (isNaN(ratio) || ratio <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid stoichiometric ratio.');
            return;
        }

        // Calculate moles of reactant
        const molesOfReactant = mass / molarMassR;

        // Calculate theoretical yield (grams)
        const yieldInGrams = molesOfReactant * molarMassP * ratio;
        setTheoreticalYield(yieldInGrams.toFixed(2)); // Round the result to 2 decimal places
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Theoretical Yield Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Reactant Mass Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Mass of Reactant (grams)</Text>
                    <TextInput
                        value={reactantMass}
                        onChangeText={setReactantMass}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter mass of reactant in grams"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Molar Mass of Reactant Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Molar Mass of Reactant (g/mol)</Text>
                    <TextInput
                        value={molarMassReactant}
                        onChangeText={setMolarMassReactant}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter molar mass of reactant"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Molar Mass of Product Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Molar Mass of Product (g/mol)</Text>
                    <TextInput
                        value={molarMassProduct}
                        onChangeText={setMolarMassProduct}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter molar mass of product"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Stoichiometric Ratio Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Stoichiometric Ratio</Text>
                    <TextInput
                        value={stoichiometricRatio}
                        onChangeText={setStoichiometricRatio}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter stoichiometric ratio (product:reactant)"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateTheoreticalYield}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate Theoretical Yield</Text>
                </TouchableOpacity>

                {/* Results */}
                {theoreticalYield !== null && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Theoretical Yield: {theoreticalYield} grams
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default TheoreticalYield;
