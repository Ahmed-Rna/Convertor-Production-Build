import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const ServiceTax = () => {
    const [amount, setAmount] = useState('');
    const [taxRate, setTaxRate] = useState('');
    const [serviceTax, setServiceTax] = useState(null);
    const [totalAmount, setTotalAmount] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const calculateServiceTax = () => {
        const taxableAmount = parseFloat(amount);
        const rate = parseFloat(taxRate);

        if (isNaN(taxableAmount) || isNaN(rate)) {
            Alert.alert('Invalid Input', 'Please enter valid numeric values for both amount and tax rate.');
            return;
        }

        if (taxableAmount <= 0) {
            Alert.alert('Invalid Amount', 'Amount should be greater than zero.');
            return;
        }

        if (rate < 0) {
            Alert.alert('Invalid Rate', 'Tax rate cannot be negative.');
            return;
        }

        setIsLoading(true);

        const calculatedTax = (taxableAmount * rate) / 100;
        const total = taxableAmount + calculatedTax;

        setServiceTax(calculatedTax.toFixed(2));
        setTotalAmount(total.toFixed(2));
        setIsLoading(false);
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            <Text style={tw`text-center text-2xl font-bold mb-4 text-slate-100`}>Service Tax Calculator</Text>
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-slate-100`}>Enter Service Amount ($)</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`border border-gray-300 text-slate-100 rounded-lg h-12 p-2`}
                        keyboardType="numeric"
                        placeholder="Enter amount"
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-slate-100`}>Service Tax Rate (%)</Text>
                    <TextInput
                        value={taxRate}
                        onChangeText={setTaxRate}
                        style={tw`border border-gray-300 text-slate-100 rounded-lg h-12 p-2`}
                        keyboardType="numeric"
                        placeholder="Enter tax rate"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateServiceTax}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                    disabled={isLoading}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>
                        {isLoading ? 'Calculating...' : 'Calculate'}
                    </Text>
                </TouchableOpacity>

                {/* Display Result */}
                {serviceTax && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-slate-100 text-lg`}>
                            Service Tax: {serviceTax !== 'Invalid input' ? `$${serviceTax}` : serviceTax}
                        </Text>
                        {totalAmount && (
                            <Text style={tw`text-center text-slate-100 text-lg mt-2`}>
                                Total Amount (Including Tax): ${totalAmount}
                            </Text>
                        )}
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default ServiceTax;