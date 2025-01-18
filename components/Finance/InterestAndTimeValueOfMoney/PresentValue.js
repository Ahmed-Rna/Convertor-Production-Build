import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const PresentValue = () => {
    const [futureValue, setFutureValue] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [timePeriods, setTimePeriods] = useState('');
    const [presentValue, setPresentValue] = useState(null);

    const calculatePresentValue = () => {
        const FV = parseFloat(futureValue);  // Future Value
        const r = parseFloat(interestRate) / 100;  // Annual Interest Rate as decimal
        const n = parseInt(timePeriods);  // Time period in years

        if (isNaN(FV) || isNaN(r) || isNaN(n) || FV <= 0 || r <= 0 || n <= 0) {
            Alert.alert('Invalid Input', 'Please enter valid values for all fields.');
            return;
        }

        const pvValue = FV / Math.pow(1 + r, n);  // PV formula
        setPresentValue(pvValue.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Present Value Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Future Value Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Future Value (FV)</Text>
                    <TextInput
                        value={futureValue}
                        onChangeText={setFutureValue}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Future Value"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Interest Rate Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Annual Interest Rate (%)</Text>
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
                    <Text style={tw`text-white text-lg mb-2`}>Enter Time Periods (Years)</Text>
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
                    onPress={calculatePresentValue}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>
                        Calculate Present Value
                    </Text>
                </TouchableOpacity>

                {/* Results */}
                {presentValue && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Present Value: ₹{presentValue}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default PresentValue;