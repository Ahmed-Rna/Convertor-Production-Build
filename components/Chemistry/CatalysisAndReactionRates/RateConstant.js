import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';

const RateConstant = () => {
    const [rate, setRate] = useState('');
    const [concentration, setConcentration] = useState('');
    const [order, setOrder] = useState('');
    const [rateConstant, setRateConstant] = useState(null);

    const calculateRateConstant = () => {
        const r = parseFloat(rate);
        const c = parseFloat(concentration);
        const o = parseFloat(order);

        if (isNaN(r) || r <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid rate of reaction.');
            return;
        }

        if (isNaN(c) || c <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid concentration.');
            return;
        }

        if (isNaN(o) || o <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid order of reaction.');
            return;
        }

        const k = r / Math.pow(c, o); // Calculate rate constant using the rate law formula
        setRateConstant(k.toFixed(4)); // Set rate constant value
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Rate Constant Calculator
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Rate Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Rate of Reaction (mol/s)</Text>
                    <TextInput
                        value={rate}
                        onChangeText={setRate}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter rate of reaction"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Concentration Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Concentration (mol/L)</Text>
                    <TextInput
                        value={concentration}
                        onChangeText={setConcentration}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter concentration in mol/L"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Order of Reaction Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Order of Reaction</Text>
                    <TextInput
                        value={order}
                        onChangeText={setOrder}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        placeholder="Enter reaction order"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateRateConstant}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate Rate Constant</Text>
                </TouchableOpacity>

                {/* Results */}
                {rateConstant && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Rate Constant (k): {rateConstant} mol/L·s
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default RateConstant;
