import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const DebitToIncome = () => {
    const [monthlyDebtPayments, setMonthlyDebtPayments] = useState('');
    const [grossMonthlyIncome, setGrossMonthlyIncome] = useState('');
    const [dti, setDti] = useState(null);

    const calculateDTI = () => {
        const debtPayments = parseFloat(monthlyDebtPayments); // Total Monthly Debt Payments
        const income = parseFloat(grossMonthlyIncome); // Gross Monthly Income

        // Input validation
        if (isNaN(debtPayments) || debtPayments < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Monthly Debt Payments.');
            return;
        }
        if (isNaN(income) || income <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Gross Monthly Income.');
            return;
        }

        // Calculate Debt-to-Income Ratio (DTI)
        const ratio = (debtPayments / income) * 100;

        setDti(ratio.toFixed(2)); // DTI as a percentage
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Debt-to-Income Ratio (DTI) Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Total Monthly Debt Payments ($)</Text>
                    <TextInput
                        value={monthlyDebtPayments}
                        onChangeText={setMonthlyDebtPayments}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Monthly Debt Payments"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Gross Monthly Income ($)</Text>
                    <TextInput
                        value={grossMonthlyIncome}
                        onChangeText={setGrossMonthlyIncome}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Gross Monthly Income"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateDTI} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {dti && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Debt-to-Income Ratio (DTI): {dti}%
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default DebitToIncome;