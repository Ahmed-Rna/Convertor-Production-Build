import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const Beta = () => {
    const [covariance, setCovariance] = useState('');
    const [marketVariance, setMarketVariance] = useState('');
    const [beta, setBeta] = useState(null);

    const calculateBeta = () => {
        const covar = parseFloat(covariance);  // Covariance of the stock and market returns
        const marketVar = parseFloat(marketVariance);  // Variance of the market returns

        // Input validation
        if (isNaN(covar) || covar === 0) {
            Alert.alert('Invalid Input', 'Please enter a valid covariance value.');
            return;
        }
        if (isNaN(marketVar) || marketVar === 0) {
            Alert.alert('Invalid Input', 'Please enter a valid market variance value.');
            return;
        }

        // Calculate Beta (β)
        const betaValue = covar / marketVar;
        setBeta(betaValue.toFixed(2)); // Beta value result
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Beta Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Covariance of Stock and Market</Text>
                    <TextInput
                        value={covariance}
                        onChangeText={setCovariance}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Covariance"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Market Variance</Text>
                    <TextInput
                        value={marketVariance}
                        onChangeText={setMarketVariance}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Market Variance"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateBeta} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {beta !== null && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Beta (β): {beta}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Beta;