import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const CapitalGains = () => {
    const [purchasePrice, setPurchasePrice] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [capitalGains, setCapitalGains] = useState(null);

    const calculateCapitalGains = () => {
        const purchase = parseFloat(purchasePrice);
        const selling = parseFloat(sellingPrice);
        const qty = parseFloat(quantity);

        // Input validation
        if (isNaN(purchase) || purchase <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Purchase Price.');
            return;
        }
        if (isNaN(selling) || selling <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Selling Price.');
            return;
        }
        if (isNaN(qty) || qty <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Quantity.');
            return;
        }

        // Calculate Capital Gains
        const gains = (selling - purchase) * qty;
        setCapitalGains(gains.toFixed(2)); // Result formatted to 2 decimal places
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Capital Gains Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Purchase Price</Text>
                    <TextInput
                        value={purchasePrice}
                        onChangeText={setPurchasePrice}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Purchase Price"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Selling Price</Text>
                    <TextInput
                        value={sellingPrice}
                        onChangeText={setSellingPrice}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Selling Price"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Quantity</Text>
                    <TextInput
                        value={quantity}
                        onChangeText={setQuantity}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Quantity"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateCapitalGains} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {capitalGains !== null && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            {capitalGains >= 0
                                ? `Capital Gains: $${capitalGains}`
                                : `Capital Loss: $${Math.abs(capitalGains)}`}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default CapitalGains;