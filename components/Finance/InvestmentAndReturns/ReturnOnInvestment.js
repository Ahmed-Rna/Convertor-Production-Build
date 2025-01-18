import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';

const ReturnOnInvestment = () => {
    const [gain, setGain] = useState('');
    const [cost, setCost] = useState('');
    const [roi, setRoi] = useState(null);

    const calculateROI = () => {
        const g = parseFloat(gain);
        const c = parseFloat(cost);

        if (isNaN(g) || isNaN(c)) {
            Alert.alert('Invalid Input', 'Please enter valid numeric values for both gain and cost.');
            return;
        }

        if (c === 0) {
            Alert.alert('Invalid Input', 'Cost cannot be zero.');
            return;
        }

        const calculatedROI = ((g - c) / c) * 100;
        setRoi(calculatedROI.toFixed(2));
    };

    return (
        <View style={tw`flex-1 bg-gray-600 p-6`}>
            <Text style={tw`text-center text-2xl font-bold mb-4 text-slate-100`}>ROI Calculator</Text>
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-slate-100`}>Enter Gain from Investment</Text>
                    <TextInput
                        value={gain}
                        onChangeText={setGain}
                        style={tw`border border-gray-300 text-slate-100 rounded-lg h-12 p-2`}
                        keyboardType="numeric"
                        placeholder="Enter gain"
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-slate-100`}>Enter Cost of Investment</Text>
                    <TextInput
                        value={cost}
                        onChangeText={setCost}
                        style={tw`border border-gray-300 text-slate-100 rounded-lg h-12 p-2`}
                        keyboardType="numeric"
                        placeholder="Enter cost"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity
                    onPress={calculateROI}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Display Result */}
                {roi && (
                    <Text style={tw`my-4 text-center text-slate-100 text-lg font-semibold`}>
                        ROI: {roi}%
                    </Text>
                )}
            </View>
        </View>
    );
};

export default ReturnOnInvestment;
