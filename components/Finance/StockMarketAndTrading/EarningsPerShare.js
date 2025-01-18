import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const EarningsPerShare = () => {
    const [netIncome, setNetIncome] = useState('');
    const [preferredDividends, setPreferredDividends] = useState('');
    const [outstandingShares, setOutstandingShares] = useState('');
    const [eps, setEps] = useState(null);

    const calculateEPS = () => {
        const income = parseFloat(netIncome);  // Net income of the company
        const dividends = parseFloat(preferredDividends);  // Preferred dividends
        const shares = parseInt(outstandingShares);  // Number of outstanding shares

        // Input validation
        if (isNaN(income) || income <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Net Income value.');
            return;
        }
        if (isNaN(dividends) || dividends < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Preferred Dividends value.');
            return;
        }
        if (isNaN(shares) || shares <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid number of Outstanding Shares.');
            return;
        }

        // Calculate EPS
        const epsValue = (income - dividends) / shares;
        setEps(epsValue.toFixed(2)); // EPS value result
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Earnings Per Share (EPS) Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Net Income</Text>
                    <TextInput
                        value={netIncome}
                        onChangeText={setNetIncome}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Net Income"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Preferred Dividends</Text>
                    <TextInput
                        value={preferredDividends}
                        onChangeText={setPreferredDividends}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Preferred Dividends"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Outstanding Shares</Text>
                    <TextInput
                        value={outstandingShares}
                        onChangeText={setOutstandingShares}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Outstanding Shares"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateEPS} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {eps !== null && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Earnings Per Share (EPS): ${eps}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default EarningsPerShare;