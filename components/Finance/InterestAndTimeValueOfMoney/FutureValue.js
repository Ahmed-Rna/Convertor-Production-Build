import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const FutureValue = () => {
    const [presentValue, setPresentValue] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [timePeriods, setTimePeriods] = useState('');
    const [futureValue, setFutureValue] = useState(null);

    const calculateFutureValue = () => {
        const PV = parseFloat(presentValue); // Present Value
        const r = parseFloat(interestRate) / 100; // Annual Interest Rate as decimal
        const n = parseInt(timePeriods); // Time periods in years

        if (isNaN(PV) || PV <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Present Value (PV).');
            return;
        }
        if (isNaN(r) || r <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Interest Rate.');
            return;
        }
        if (isNaN(n) || n <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid number of Time Periods.');
            return;
        }

        const fvValue = PV * Math.pow(1 + r, n); // Future Value formula
        setFutureValue(fvValue.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Future Value Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Present Value Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Present Value (₹)</Text>
                    <TextInput
                        value={presentValue}
                        onChangeText={setPresentValue}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Present Value"
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

                {/* Time Periods Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Time Periods (Years)</Text>
                    <TextInput
                        value={timePeriods}
                        onChangeText={setTimePeriods}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Time Periods"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateFutureValue}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>
                        Calculate Future Value
                    </Text>
                </TouchableOpacity>

                {/* Result */}
                {futureValue && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl font-semibold text-white`}>
                            Future Value: ₹{futureValue}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default FutureValue;
