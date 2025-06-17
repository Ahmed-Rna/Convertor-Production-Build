import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const DividendYield = () => {
    const [annualDividend, setAnnualDividend] = useState('');
    const [stockPrice, setStockPrice] = useState('');
    const [dividendYield, setDividendYield] = useState(null);

    const calculateDividendYield = () => {
        const dividend = parseFloat(annualDividend); // Annual Dividend
        const price = parseFloat(stockPrice); // Stock Price

        // Input validation
        if (isNaN(dividend) || dividend <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Annual Dividend.');
            return;
        }
        if (isNaN(price) || price <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Stock Price.');
            return;
        }

        // Calculate Dividend Yield
        const yieldValue = (dividend / price) * 100;
        setDividendYield(yieldValue.toFixed(2)); // Result as percentage, rounded to 2 decimal places
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Dividend Yield Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Annual Dividend ($)</Text>
                    <TextInput
                        value={annualDividend}
                        onChangeText={setAnnualDividend}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Annual Dividend"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Stock Price ($)</Text>
                    <TextInput
                        value={stockPrice}
                        onChangeText={setStockPrice}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Stock Price"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateDividendYield} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {dividendYield !== null && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Dividend Yield: {dividendYield}%
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default DividendYield;