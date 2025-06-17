import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const IRRCalculator = () => {
    const [initialInvestment, setInitialInvestment] = useState('');
    const [cashFlows, setCashFlows] = useState('');
    const [irr, setIrr] = useState(null);

    const calculateIRR = () => {
        const investment = parseFloat(initialInvestment);
        if (isNaN(investment) || investment <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Initial Investment.');
            return;
        }

        const cashFlowsArray = cashFlows
            .split(',')
            .map((value) => parseFloat(value.trim()))
            .filter((value) => !isNaN(value));

        if (cashFlowsArray.length === 0) {
            Alert.alert('Invalid Input', 'Please enter valid Cash Flows as a comma-separated list.');
            return;
        }

        // IRR Calculation using an iterative approach
        const guessRate = 0.1; // Starting guess for IRR
        const maxIterations = 100;
        const precision = 0.0001;

        let irrRate = guessRate;
        let iteration = 0;

        const npv = (rate) =>
            -investment +
            cashFlowsArray.reduce((sum, cashFlow, index) => {
                return sum + cashFlow / Math.pow(1 + rate, index + 1);
            }, 0);

        while (iteration < maxIterations) {
            const npvValue = npv(irrRate);
            const derivative = cashFlowsArray.reduce((sum, cashFlow, index) => {
                return sum - (index + 1) * cashFlow / Math.pow(1 + irrRate, index + 2);
            }, 0);

            const newIrrRate = irrRate - npvValue / derivative;
            if (Math.abs(newIrrRate - irrRate) < precision) {
                irrRate = newIrrRate;
                break;
            }

            irrRate = newIrrRate;
            iteration++;
        }

        if (iteration === maxIterations) {
            Alert.alert('Calculation Error', 'Failed to converge to a solution. Try different inputs.');
        } else {
            setIrr((irrRate * 100).toFixed(2)); // IRR as a percentage
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Internal Rate of Return (IRR) Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Initial Investment ($)</Text>
                    <TextInput
                        value={initialInvestment}
                        onChangeText={setInitialInvestment}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Initial Investment"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Cash Flows (comma-separated)</Text>
                    <TextInput
                        value={cashFlows}
                        onChangeText={setCashFlows}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="E.g., 5000, 7000, 10000"
                        keyboardType="default"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateIRR} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {irr && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Internal Rate of Return (IRR): {irr}%
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default IRRCalculator;