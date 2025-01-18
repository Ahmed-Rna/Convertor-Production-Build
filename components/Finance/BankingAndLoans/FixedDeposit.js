import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const FixedDeposit = () => {
    const [principal, setPrincipal] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [time, setTime] = useState('');
    const [compoundsPerYear, setCompoundsPerYear] = useState('1'); // Default to 1 for annual compounding
    const [result, setResult] = useState(null);

    const calculateFD = () => {
        const P = parseFloat(principal); // Principal amount
        const r = parseFloat(interestRate) / 100; // Annual interest rate in decimal
        const n = parseFloat(compoundsPerYear); // Number of compounding periods per year
        const t = parseFloat(time); // Time in years

        if (isNaN(P) || P <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Principal amount.');
            return;
        }
        if (isNaN(r) || r <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Interest Rate.');
            return;
        }
        if (isNaN(t) || t <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Time period.');
            return;
        }
        if (isNaN(n) || n <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid number of Compounding Periods.');
            return;
        }

        const futureValue = P * Math.pow(1 + r / n, n * t); // Future Value of FD formula
        setResult(futureValue.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Fixed Deposit Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-grey p-6 rounded-lg shadow-lg`}>
                {/* Principal Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Principal (₹)</Text>
                    <TextInput
                        value={principal}
                        onChangeText={setPrincipal}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Principal Amount"
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

                {/* Time Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Time (Years)</Text>
                    <TextInput
                        value={time}
                        onChangeText={setTime}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Time in Years"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Compounding Periods Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>
                        Compounding Periods per Year
                    </Text>
                    <TextInput
                        value={compoundsPerYear}
                        onChangeText={setCompoundsPerYear}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Compounding Periods"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateFD}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>
                        Calculate Future Value
                    </Text>
                </TouchableOpacity>

                {/* Result */}
                {result && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl font-semibold text-white`}>
                            Future Value of FD: ₹{result}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default FixedDeposit;