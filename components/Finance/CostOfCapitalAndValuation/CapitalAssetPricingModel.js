import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const CapitalAssetPricingModel = () => {
    const [riskFreeRate, setRiskFreeRate] = useState('');
    const [beta, setBeta] = useState('');
    const [marketReturn, setMarketReturn] = useState('');
    const [expectedReturn, setExpectedReturn] = useState(null);

    const calculateCAPM = () => {
        const Rf = parseFloat(riskFreeRate);  // Risk-free rate
        const β = parseFloat(beta);  // Beta of the stock
        const Rm = parseFloat(marketReturn);  // Market return

        // Input validation
        if (isNaN(Rf) || Rf < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Risk-Free Rate.');
            return;
        }
        if (isNaN(β) || β < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Beta value.');
            return;
        }
        if (isNaN(Rm) || Rm < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Market Return.');
            return;
        }

        // Calculate CAPM
        const expected = Rf + β * (Rm - Rf);
        setExpectedReturn(expected.toFixed(4));  // Expected return with 4 decimal places
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>CAPM Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Risk-Free Rate (Rf)</Text>
                    <TextInput
                        value={riskFreeRate}
                        onChangeText={setRiskFreeRate}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Risk-Free Rate"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Beta (β)</Text>
                    <TextInput
                        value={beta}
                        onChangeText={setBeta}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Beta"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Market Return (Rm)</Text>
                    <TextInput
                        value={marketReturn}
                        onChangeText={setMarketReturn}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Market Return"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateCAPM} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {expectedReturn !== null && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Expected Return: {expectedReturn}%
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default CapitalAssetPricingModel;
