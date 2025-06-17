import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const ValueAtRisk = () => {
    const [portfolioValue, setPortfolioValue] = useState('');
    const [confidenceLevel, setConfidenceLevel] = useState('');
    const [standardDeviation, setStandardDeviation] = useState('');
    const [varValue, setVarValue] = useState(null);

    const calculateVaR = () => {
        const P = parseFloat(portfolioValue); // Portfolio value
        const CL = parseFloat(confidenceLevel); // Confidence level (percentage)
        const SD = parseFloat(standardDeviation); // Standard deviation

        // Input validation
        if (isNaN(P) || P <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Portfolio Value.');
            return;
        }
        if (isNaN(CL) || CL <= 0 || CL >= 100) {
            Alert.alert('Invalid Input', 'Please enter a valid Confidence Level (between 0 and 100).');
            return;
        }
        if (isNaN(SD) || SD <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Standard Deviation.');
            return;
        }

        // Calculate Z-score based on confidence level
        const zScore = {
            90: 1.28,
            95: 1.65,
            99: 2.33,
        }[CL] || (CL / 100 - 0.5) * 2.58; // Approximation for other confidence levels

        if (!zScore) {
            Alert.alert('Error', 'Confidence Level must be 90, 95, or 99.');
            return;
        }

        // Calculate VaR
        const varValue = zScore * SD * Math.sqrt(P);
        setVarValue(varValue.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Value at Risk (VaR) Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Portfolio Value ($)</Text>
                    <TextInput
                        value={portfolioValue}
                        onChangeText={setPortfolioValue}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Portfolio Value"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Confidence Level (%)</Text>
                    <TextInput
                        value={confidenceLevel}
                        onChangeText={setConfidenceLevel}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Confidence Level (e.g., 90, 95, or 99)"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Standard Deviation (%)</Text>
                    <TextInput
                        value={standardDeviation}
                        onChangeText={setStandardDeviation}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Standard Deviation"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateVaR} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {varValue && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Value at Risk (VaR): ${varValue}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default ValueAtRisk;