import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Perpetuity = () => {
    const [payment, setPayment] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [result, setResult] = useState(null);

    const calculatePerpetuity = () => {
        const P = parseFloat(payment);  // Payment amount per period
        const r = parseFloat(interestRate) / 100;  // Interest rate per period as decimal

        if (isNaN(P) || isNaN(r) || P <= 0 || r <= 0) {
            Alert.alert('Invalid Input', 'Please enter valid numbers for payment and interest rate.');
            return;
        }

        const presentValue = P / r;  // Present Value of Perpetuity formula
        setResult(presentValue.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Perpetuity Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Payment Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Payment Amount (P)</Text>
                    <TextInput
                        value={payment}
                        onChangeText={setPayment}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Payment Amount"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Interest Rate Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Interest Rate (%)</Text>
                    <TextInput
                        value={interestRate}
                        onChangeText={setInterestRate}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter Interest Rate"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculatePerpetuity}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>
                        Calculate Perpetuity Value
                    </Text>
                </TouchableOpacity>

                {/* Results */}
                {result && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Present Value of Perpetuity: ₹{result}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Perpetuity;