import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const CAGR = () => {
    const [presentValue, setPresentValue] = useState('');
    const [futureValue, setFutureValue] = useState('');
    const [years, setYears] = useState('');
    const [cagr, setCagr] = useState(null);

    const calculateCAGR = () => {
        const PV = parseFloat(presentValue);  // Present Value
        const FV = parseFloat(futureValue);  // Future Value
        const n = parseFloat(years);  // Number of years

        // Input validation
        if (isNaN(PV) || PV <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Present Value (PV).');
            return;
        }
        if (isNaN(FV) || FV <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Future Value (FV).');
            return;
        }
        if (isNaN(n) || n <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid number of years.');
            return;
        }

        // Calculate CAGR
        const cagrValue = Math.pow(FV / PV, 1 / n) - 1;
        setCagr((cagrValue * 100).toFixed(2)); // CAGR as percentage
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>CAGR Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Present Value (PV)</Text>
                    <TextInput
                        value={presentValue}
                        onChangeText={setPresentValue}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Present Value"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Future Value (FV)</Text>
                    <TextInput
                        value={futureValue}
                        onChangeText={setFutureValue}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Future Value"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Number of Years (n)</Text>
                    <TextInput
                        value={years}
                        onChangeText={setYears}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Number of Years"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateCAGR} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {cagr && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Compound Annual Growth Rate (CAGR): {cagr}%
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default CAGR;
