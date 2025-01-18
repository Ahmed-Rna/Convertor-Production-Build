import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Mortgage = () => {
    const [principal, setPrincipal] = useState('');
    const [annualRate, setAnnualRate] = useState('');
    const [years, setYears] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(null);

    const calculateMortgage = () => {
        const P = parseFloat(principal); // Loan Amount
        const r = parseFloat(annualRate) / 100 / 12; // Monthly Interest Rate
        const n = parseInt(years) * 12; // Total Number of Payments (Months)

        if (isNaN(P) || P <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid loan amount.');
            return;
        }
        if (isNaN(r) || r <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid annual interest rate.');
            return;
        }
        if (isNaN(n) || n <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid loan term.');
            return;
        }

        const monthly = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        setMonthlyPayment(monthly.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Mortgage Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Loan Amount Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Loan Amount ($)</Text>
                    <TextInput
                        value={principal}
                        onChangeText={setPrincipal}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Loan Amount"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Annual Interest Rate Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Annual Interest Rate (%)</Text>
                    <TextInput
                        value={annualRate}
                        onChangeText={setAnnualRate}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Interest Rate"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Loan Term Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Loan Term (Years)</Text>
                    <TextInput
                        value={years}
                        onChangeText={setYears}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Loan Term"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateMortgage}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {monthlyPayment && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Monthly Payment: {monthlyPayment !== 'Invalid input' ? `$${monthlyPayment}` : monthlyPayment}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Mortgage;