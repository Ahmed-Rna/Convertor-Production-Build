import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Loan = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [emi, setEmi] = useState(null);
    const [totalPayment, setTotalPayment] = useState(null);
    const [totalInterest, setTotalInterest] = useState(null);

    const calculateLoan = () => {
        const P = parseFloat(loanAmount); // Principal
        const r = parseFloat(interestRate) / 100 / 12; // Monthly Interest Rate
        const n = parseFloat(loanTerm) * 12; // Loan Term in months

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

        const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPaymentValue = emiValue * n;
        const totalInterestValue = totalPaymentValue - P;

        setEmi(emiValue.toFixed(2));
        setTotalPayment(totalPaymentValue.toFixed(2));
        setTotalInterest(totalInterestValue.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Loan Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Loan Amount Input */}
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

                {/* Interest Rate Input */}
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

                {/* Loan Term Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Loan Term (Years)</Text>
                    <TextInput
                        value={loanTerm}
                        onChangeText={setLoanTerm}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Loan Term"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateLoan}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {emi && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Monthly EMI: ${emi !== 'Invalid input' ? emi : emi}
                        </Text>
                        {totalPayment && (
                            <Text style={tw`text-center text-lg text-white mt-2`}>
                                Total Payment: ${totalPayment}
                            </Text>
                        )}
                        {totalInterest && (
                            <Text style={tw`text-center text-lg text-white mt-2`}>
                                Total Interest: ${totalInterest}
                            </Text>
                        )}
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Loan;
