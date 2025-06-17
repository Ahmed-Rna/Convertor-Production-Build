import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const CertificateOfDeposit = () => {
    const [principal, setPrincipal] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [time, setTime] = useState('');
    const [compoundsPerYear, setCompoundsPerYear] = useState('1'); // Default to 1 for annual compounding
    const [result, setResult] = useState(null);

    const calculateCD = () => {
        const P = parseFloat(principal); // Principal amount
        const r = parseFloat(interestRate) / 100; // Annual interest rate in decimal
        const n = parseFloat(compoundsPerYear); // Number of compounding periods per year
        const t = parseFloat(time); // Time in years

        // Input validation
        if (isNaN(P) || P <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Principal amount.');
            return;
        }
        if (isNaN(r) || r <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Interest Rate.');
            return;
        }
        if (isNaN(n) || n <= 0) {
            Alert.alert('Invalid Input', 'Please enter valid Compounding Periods per Year.');
            return;
        }
        if (isNaN(t) || t <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Time in Years.');
            return;
        }

        // Calculate Future Value
        const futureValue = P * Math.pow(1 + r / n, n * t);
        setResult(futureValue.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>
                Certificate of Deposit Calculator
            </Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Principal (Initial Deposit)</Text>
                    <TextInput
                        value={principal}
                        onChangeText={setPrincipal}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Principal"
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
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Time (Years)</Text>
                    <TextInput
                        value={time}
                        onChangeText={setTime}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Time in Years"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>
                        Enter Compounding Periods per Year
                    </Text>
                    <TextInput
                        value={compoundsPerYear}
                        onChangeText={setCompoundsPerYear}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Compounding Periods"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateCD}
                    style={tw`bg-red-500 py-2 rounded-lg shadow-lg `}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {result && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Future Value of CD: ₹{result}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default CertificateOfDeposit;



