import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const Annuity = () => {
    const [payment, setPayment] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [timePeriods, setTimePeriods] = useState('');
    const [annuityType, setAnnuityType] = useState('Future Value');  // Default to Future Value
    const [result, setResult] = useState(null);  // Initially no result to show

    const calculateAnnuity = () => {
        // Check if any of the fields are empty
        if (!payment || !interestRate || !timePeriods) {
            Alert.alert('Invalid Input', 'Please fill in all the fields.');
            return;
        }

        const P = parseFloat(payment);  // Payment amount per period
        const r = parseFloat(interestRate) / 100;  // Interest rate per period as decimal
        const n = parseInt(timePeriods);  // Number of periods

        if (!isNaN(P) && !isNaN(r) && !isNaN(n) && P > 0 && r > 0 && n > 0) {
            let resultValue;
            if (annuityType === 'Future Value') {
                // Formula for Future Value of Annuity
                resultValue = P * ((Math.pow(1 + r, n) - 1) / r);
            } else {
                // Formula for Present Value of Annuity
                resultValue = P * ((1 - Math.pow(1 + r, -n)) / r);
            }
            setResult(resultValue.toFixed(2));  // Update the result
        } else {
            setResult('Invalid input');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Annuity Calculator</Text>
            
            <View style={tw`bg-white p-6 rounded-lg shadow-lg`}>
                {/* Input Fields - Combined into one container */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Payment Amount (P)</Text>
                    <TextInput
                        value={payment}
                        onChangeText={setPayment}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Payment Amount"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Interest Rate (%)</Text>
                    <TextInput
                        value={interestRate}
                        onChangeText={setInterestRate}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Interest Rate"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Time Periods (n)</Text>
                    <TextInput
                        value={timePeriods}
                        onChangeText={setTimePeriods}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Time Periods"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Annuity Type Buttons */}
                <Text style={tw`text-lg font-semibold mb-2`}>Choose Annuity Type</Text>
                <View style={tw`flex-row justify-between mb-4`}>
                    <TouchableOpacity 
                        onPress={() => setAnnuityType('Future Value')} 
                        style={tw`bg-blue-500 px-4 py-2 rounded-lg shadow-lg ${annuityType === 'Future Value' ? 'bg-blue-700' : ''}`}
                    >
                        <Text style={tw`text-white font-bold`}>Future Value</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => setAnnuityType('Present Value')} 
                        style={tw`bg-blue-500 px-4 py-2 rounded-lg shadow-lg ${annuityType === 'Present Value' ? 'bg-blue-700' : ''}`}
                    >
                        <Text style={tw`text-white font-bold`}>Present Value</Text>
                    </TouchableOpacity>
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateAnnuity} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-white font-bold`}>Calculate Annuity</Text>
                </TouchableOpacity>

                {/* Result */}
                {result && result !== 'Invalid input' && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            {annuityType}: Rs : {result}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Annuity;

