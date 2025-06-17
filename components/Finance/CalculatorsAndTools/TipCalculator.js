import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const TipCalculator = () => {
    const [billAmount, setBillAmount] = useState('');
    const [tipPercentage, setTipPercentage] = useState('');
    const [tipAmount, setTipAmount] = useState(null);
    const [totalAmount, setTotalAmount] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const calculateTip = () => {
        const bill = parseFloat(billAmount);
        const tipPercent = parseFloat(tipPercentage);

        if (isNaN(bill) || isNaN(tipPercent) || bill <= 0 || tipPercent < 0) {
            Alert.alert('Invalid Input', 'Please enter valid numeric values for both Bill Amount and Tip Percentage.');
            return;
        }

        setIsLoading(true);
        const calculatedTip = (bill * tipPercent) / 100;
        const total = bill + calculatedTip;
        setTipAmount(calculatedTip.toFixed(2));
        setTotalAmount(total.toFixed(2));
        setIsLoading(false);
    };

    return (
      <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
      <Text style={tw`text-center text-2xl font-bold mb-4 text-slate-100`}>Tip Calculator</Text>
      <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-slate-100`}>Enter Bill Amount ($)</Text>
                    <TextInput
                        value={billAmount}
                        onChangeText={setBillAmount}
                        style={tw`border border-gray-300 text-slate-100 rounded-lg h-12 p-2`}
                        keyboardType="numeric"
                        placeholder="Enter bill amount"
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-slate-100`}>Tip Percentage (%)</Text>
                    <TextInput
                        value={tipPercentage}
                        onChangeText={setTipPercentage}
                        style={tw`border border-gray-300 text-slate-100 rounded-lg h-12 p-2`}
                        keyboardType="numeric"
                        placeholder="Enter tip percentage"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateTip}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                    disabled={isLoading || !billAmount || !tipPercentage}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>
                        {isLoading ? 'Calculating...' : 'Calculate'}
                    </Text>
                </TouchableOpacity>

                {/* Display Result */}
                {tipAmount !== null && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-slate-100 text-lg`}>
                            Tip Amount: {tipAmount !== 'Invalid input' ? `$${tipAmount}` : tipAmount}
                        </Text>
                        {totalAmount && (
                            <Text style={tw`text-center text-slate-100 text-lg mt-2`}>
                                Total Amount (Including Tip): ${totalAmount}
                            </Text>
                        )}
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default TipCalculator;