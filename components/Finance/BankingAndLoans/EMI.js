import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const EMI = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTenure, setLoanTenure] = useState('');
    const [emiResult, setEmiResult] = useState(null);

    const calculateEMI = () => {
        const P = parseFloat(loanAmount); // Principal Loan Amount
        const r = parseFloat(interestRate) / 100 / 12; // Monthly Interest Rate
        const n = parseInt(loanTenure) * 12; // Loan Tenure in Months

        if (isNaN(P) || P <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Loan Amount.');
            return;
        }
        if (isNaN(r) || r <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Interest Rate.');
            return;
        }
        if (isNaN(n) || n <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Loan Tenure.');
            return;
        }

        const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        setEmiResult(emi.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>EMI Calculator</Text>

            {/* Calculator Container */}
            <View style={tw`bg-grey-600 p-6 rounded-lg shadow-lg`}>
                {/* Loan Amount */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Loan Amount ($)</Text>
                    <TextInput
                        value={loanAmount}
                        onChangeText={setLoanAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Loan Amount"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Interest Rate */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Annual Interest Rate (%)</Text>
                    <TextInput
                        value={interestRate}
                        onChangeText={setInterestRate}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Interest Rate"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Loan Tenure */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Loan Tenure (Years)</Text>
                    <TextInput
                        value={loanTenure}
                        onChangeText={setLoanTenure}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Loan Tenure"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateEMI}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {emiResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl font-semibold text-white`}>
                            Monthly EMI: {emiResult !== 'Invalid input' ? `$${emiResult}` : emiResult}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default EMI;
