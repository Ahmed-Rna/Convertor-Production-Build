import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const OperatingProfitMargin = () => {
    const [revenue, setRevenue] = useState('');
    const [operatingProfit, setOperatingProfit] = useState('');
    const [operatingProfitMargin, setOperatingProfitMargin] = useState(null);

    const calculateOperatingProfitMargin = () => {
        const rev = parseFloat(revenue); // Revenue
        const profit = parseFloat(operatingProfit); // Operating Profit

        // Input validation
        if (isNaN(rev) || rev <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Revenue amount.');
            return;
        }
        if (isNaN(profit) || profit < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Operating Profit amount.');
            return;
        }

        // Calculate Operating Profit Margin
        const margin = (profit / rev) * 100;

        setOperatingProfitMargin(margin.toFixed(2)); // Percentage format
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Operating Profit Margin Calculator</Text>

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
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Operating Profit ($)</Text>
                    <TextInput
                        value={operatingProfit}
                        onChangeText={setOperatingProfit}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Operating Profit"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateOperatingProfitMargin} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {operatingProfitMargin && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Operating Profit Margin: {operatingProfitMargin}%
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default OperatingProfitMargin;