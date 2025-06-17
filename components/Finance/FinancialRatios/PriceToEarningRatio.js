import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const PriceToEarningRatio = () => {
    const [sharePrice, setSharePrice] = useState('');
    const [earningsPerShare, setEarningsPerShare] = useState('');
    const [peRatio, setPeRatio] = useState(null);

    const calculatePERatio = () => {
        const price = parseFloat(sharePrice);
        const eps = parseFloat(earningsPerShare);

        // Input validation
        if (isNaN(price) || price <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Share Price.');
            return;
        }
        if (isNaN(eps) || eps <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Earnings Per Share (EPS).');
            return;
        }

        // Calculate P/E Ratio
        const ratio = price / eps;
        setPeRatio(ratio.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Price-to-Earnings (P/E) Ratio Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Share Price ($)</Text>
                    <TextInput
                        value={sharePrice}
                        onChangeText={setSharePrice}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Share Price"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Earnings Per Share (EPS) ($)</Text>
                    <TextInput
                        value={earningsPerShare}
                        onChangeText={setEarningsPerShare}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter EPS"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculatePERatio} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {peRatio && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Price-to-Earnings Ratio: {peRatio}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default PriceToEarningRatio;