import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Stock = () => {
    const [buyPrice, setBuyPrice] = useState('');
    const [sellPrice, setSellPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [profitLoss, setProfitLoss] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const calculateProfitLoss = () => {
        const buy = parseFloat(buyPrice);
        const sell = parseFloat(sellPrice);
        const qty = parseInt(quantity);

        if (isNaN(buy) || isNaN(sell) || isNaN(qty) || qty <= 0) {
            Alert.alert('Invalid Input', 'Please enter valid numeric values for all fields.');
            return;
        }

        setIsLoading(true);
        const result = (sell - buy) * qty;
        setProfitLoss(result.toFixed(2));
        setIsLoading(false);
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            <Text style={tw`text-center text-2xl font-bold mb-4 text-slate-100`}>Stock Calculator</Text>
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-slate-100`}>Enter Buy Price</Text>
                    <TextInput
                        value={buyPrice}
                        onChangeText={setBuyPrice}
                        style={tw`border border-gray-300 text-slate-100 rounded-lg h-12 p-2`}
                        keyboardType="numeric"
                        placeholder="Enter buy price"
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-slate-100`}>Enter Sell Price</Text>
                    <TextInput
                        value={sellPrice}
                        onChangeText={setSellPrice}
                        style={tw`border border-gray-300 text-slate-100 rounded-lg h-12 p-2`}
                        keyboardType="numeric"
                        placeholder="Enter sell price"
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-slate-100`}>Enter Quantity</Text>
                    <TextInput
                        value={quantity}
                        onChangeText={setQuantity}
                        style={tw`border border-gray-300 text-slate-100 rounded-lg h-12 p-2`}
                        keyboardType="numeric"
                        placeholder="Enter quantity"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateProfitLoss}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                    disabled={isLoading}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>
                        {isLoading ? 'Calculating...' : 'Calculate'}
                    </Text>
                </TouchableOpacity>

                {/* Display Result */}
                {profitLoss !== null && (
                    <Text style={tw`my-4 text-center text-slate-100 text-lg font-semibold`}>
                        {profitLoss > 0
                            ? `Profit: $${profitLoss}`
                            : profitLoss < 0
                            ? `Loss: $${Math.abs(profitLoss)}`
                            : `No Profit or Loss`}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
};

export default Stock;