import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const Discount = () => {
    const [originalPrice, setOriginalPrice] = useState('');
    const [discountRate, setDiscountRate] = useState('');
    const [discountAmount, setDiscountAmount] = useState(null);
    const [finalPrice, setFinalPrice] = useState(null);

    const calculateDiscount = () => {
        const price = parseFloat(originalPrice);
        const rate = parseFloat(discountRate);

        // Input validation
        if (isNaN(price) || price <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Original Price.');
            return;
        }
        if (isNaN(rate) || rate < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Discount Rate.');
            return;
        }

        // Discount Calculation
        const calculatedDiscount = (price * rate) / 100;
        const total = price - calculatedDiscount;
        setDiscountAmount(calculatedDiscount.toFixed(2));
        setFinalPrice(total.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>
                Discount Calculator
            </Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Original Price ($)</Text>
                    <TextInput
                        value={originalPrice}
                        onChangeText={setOriginalPrice}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Original Price"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Discount Rate (%)</Text>
                    <TextInput
                        value={discountRate}
                        onChangeText={setDiscountRate}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Discount Rate"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateDiscount}
                    style={tw`bg-red-500 px-4 py-3 rounded-lg shadow-lg mb-4 flex items-center justify-center`}
                >
                    <Text style={tw`text-white text-center font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Results */}
                {discountAmount && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Discount Amount: ${discountAmount}
                        </Text>
                        {finalPrice && (
                            <Text style={tw`text-center text-xl font-semibold text-gray-800 mt-2`}>
                                Final Price (After Discount): ${finalPrice}
                            </Text>
                        )}
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Discount;
