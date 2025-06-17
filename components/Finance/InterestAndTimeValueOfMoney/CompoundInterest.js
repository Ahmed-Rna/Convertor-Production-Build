import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const CompoundInterest = () => {
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [time, setTime] = useState('');
    const [compoundFrequency, setCompoundFrequency] = useState('');
    const [result, setResult] = useState(null);

    const calculateCompoundInterest = () => {
        const P = parseFloat(principal);
        const r = parseFloat(rate) / 100; // Convert percentage to decimal
        const t = parseFloat(time);
        const n = parseFloat(compoundFrequency);

        // Input validation
        if (isNaN(P) || P <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Principal amount.');
            return;
        }
        if (isNaN(r) || r <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Interest Rate.');
            return;
        }
        if (isNaN(t) || t <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Time in Years.');
            return;
        }
        if (isNaN(n) || n <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Compounding Frequency.');
            return;
        }

        // Compound Interest Calculation
        const A = P * Math.pow(1 + r / n, n * t);
        setResult(A.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>
                Compound Interest Calculator
            </Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Principal Amount (P)</Text>
                    <TextInput
                        value={principal}
                        onChangeText={setPrincipal}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Principal"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Annual Interest Rate (%)</Text>
                    <TextInput
                        value={rate}
                        onChangeText={setRate}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Interest Rate"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Time (Years)</Text>
                    <TextInput
                        value={time}
                        onChangeText={setTime}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Time in Years"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Compounding Frequency (n)</Text>
                    <TextInput
                        value={compoundFrequency}
                        onChangeText={setCompoundFrequency}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Frequency"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateCompoundInterest}
                    style={tw`bg-red-500 py-3 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {result && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Compound Amount: ₹{result}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default CompoundInterest;
