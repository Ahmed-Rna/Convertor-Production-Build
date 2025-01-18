import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const AssetAllocation = () => {
    const [stocksPercentage, setStocksPercentage] = useState('');
    const [bondsPercentage, setBondsPercentage] = useState('');
    const [realEstatePercentage, setRealEstatePercentage] = useState('');
    const [cashPercentage, setCashPercentage] = useState('');
    const [totalAllocation, setTotalAllocation] = useState(null);

    const calculateAssetAllocation = () => {
        const stocks = parseFloat(stocksPercentage); // Stocks allocation percentage
        const bonds = parseFloat(bondsPercentage);  // Bonds allocation percentage
        const realEstate = parseFloat(realEstatePercentage);  // Real Estate allocation percentage
        const cash = parseFloat(cashPercentage);  // Cash allocation percentage

        // Validate input values
        if (isNaN(stocks) || isNaN(bonds) || isNaN(realEstate) || isNaN(cash)) {
            Alert.alert('Invalid Input', 'Please enter valid percentages for all asset types.');
            return;
        }

        const total = stocks + bonds + realEstate + cash;

        // Check if the total allocation equals 100%
        if (total !== 100) {
            Alert.alert('Invalid Allocation', 'The total percentage of asset allocation must be 100%.');
            return;
        }

        // Set the result
        setTotalAllocation(total);
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Asset Allocation Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Stocks Allocation (%)</Text>
                    <TextInput
                        value={stocksPercentage}
                        onChangeText={setStocksPercentage}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Stocks Allocation Percentage"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Bonds Allocation (%)</Text>
                    <TextInput
                        value={bondsPercentage}
                        onChangeText={setBondsPercentage}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Bonds Allocation Percentage"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Real Estate Allocation (%)</Text>
                    <TextInput
                        value={realEstatePercentage}
                        onChangeText={setRealEstatePercentage}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Real Estate Allocation Percentage"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Cash Allocation (%)</Text>
                    <TextInput
                        value={cashPercentage}
                        onChangeText={setCashPercentage}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Cash Allocation Percentage"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateAssetAllocation} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {totalAllocation !== null && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Total Asset Allocation: {totalAllocation}%
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default AssetAllocation;