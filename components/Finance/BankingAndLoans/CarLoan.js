import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const CarLoan = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTenure, setLoanTenure] = useState('');
    const [emi, setEmi] = useState(null);
    const [totalAmount, setTotalAmount] = useState(null);

    const calculateCarLoan = () => {
        const P = parseFloat(loanAmount); // Principal loan amount
        const annualRate = parseFloat(interestRate); // Annual Interest Rate
        const n = parseInt(loanTenure); // Loan tenure in months

        if (!P || !annualRate || !n || P <= 0 || annualRate <= 0 || n <= 0) {
            Alert.alert('Invalid Input', 'Please fill all fields with valid positive numbers.');
            return;
        }

        const r = (annualRate / 100) / 12; // Monthly interest rate
        const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1); // EMI formula
        const totalRepayment = emiValue * n; // Total repayment over the loan tenure

        setEmi(emiValue.toFixed(2));
        setTotalAmount(totalRepayment.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Car Loan Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Loan Amount</Text>
                    <TextInput
                        value={loanAmount}
                        onChangeText={setLoanAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Loan Amount"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Annual Interest Rate (%)</Text>
                    <TextInput
                        value={interestRate}
                        onChangeText={setInterestRate}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Annual Interest Rate"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Loan Tenure (Months)</Text>
                    <TextInput
                        value={loanTenure}
                        onChangeText={setLoanTenure}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Loan Tenure"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateCarLoan}
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-white font-bold text-center`}>Calculate EMI</Text>
                </TouchableOpacity>

                {/* Results */}
                {emi && totalAmount && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Monthly EMI: ₹{emi}
                        </Text>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Total Repayment: ₹{totalAmount}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default CarLoan;