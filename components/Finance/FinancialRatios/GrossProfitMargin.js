import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const GrossProfitMargin = () => {
    const [revenue, setRevenue] = useState('');
    const [cogs, setCogs] = useState('');
    const [grossProfitMargin, setGrossProfitMargin] = useState(null);

    const calculateGrossProfitMargin = () => {
        const rev = parseFloat(revenue); // Revenue
        const cost = parseFloat(cogs);  // Cost of Goods Sold

        // Input validation
        if (isNaN(rev) || rev <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Revenue amount.');
            return;
        }
        if (isNaN(cost) || cost < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Cost of Goods Sold (COGS) amount.');
            return;
        }

        // Calculate Gross Profit Margin
        const grossProfit = rev - cost;
        const grossProfitMarginValue = (grossProfit / rev) * 100;

        setGrossProfitMargin(grossProfitMarginValue.toFixed(2)); // Percentage format
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Gross Profit Margin Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Revenue ($)</Text>
                    <TextInput
                        value={revenue}
                        onChangeText={setRevenue}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Revenue"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Cost of Goods Sold (COGS) ($)</Text>
                    <TextInput
                        value={cogs}
                        onChangeText={setCogs}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter COGS"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateGrossProfitMargin} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {grossProfitMargin && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Gross Profit Margin: {grossProfitMargin}%
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default GrossProfitMargin;