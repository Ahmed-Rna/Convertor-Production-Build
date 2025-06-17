import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const MarketCapitalization = () => {
    const [stockPrice, setStockPrice] = useState('');
    const [outstandingShares, setOutstandingShares] = useState('');
    const [marketCap, setMarketCap] = useState(null);

    const calculateMarketCap = () => {
        const price = parseFloat(stockPrice);  // Stock price
        const shares = parseFloat(outstandingShares);  // Outstanding shares

        // Input validation
        if (isNaN(price) || price <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid stock price.');
            return;
        }
        if (isNaN(shares) || shares <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid number of outstanding shares.');
            return;
        }

        // Calculate Market Capitalization
        const marketCapValue = price * shares;
        setMarketCap(marketCapValue.toFixed(2)); // Market Cap result
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Market Capitalization Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Stock Price ($)</Text>
                    <TextInput
                        value={stockPrice}
                        onChangeText={setStockPrice}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Stock Price"
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
                    onPress={calculateMarketCap} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {marketCap !== null && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Market Capitalization: ${marketCap}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default MarketCapitalization;