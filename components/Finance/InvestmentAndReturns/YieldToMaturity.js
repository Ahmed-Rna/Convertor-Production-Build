import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import tw from 'twrnc';

const YTMCalculator = () => {
    const [faceValue, setFaceValue] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');
    const [couponRate, setCouponRate] = useState('');
    const [yearsToMaturity, setYearsToMaturity] = useState('');
    const [ytm, setYTM] = useState(null);

    const calculateYTM = () => {
        const FV = parseFloat(faceValue); // Face Value
        const CP = parseFloat(currentPrice); // Current Price
        const CR = parseFloat(couponRate); // Coupon Rate (percentage)
        const n = parseFloat(yearsToMaturity); // Years to Maturity

        // Input validation
        if (isNaN(FV) || FV <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Face Value.');
            return;
        }
        if (isNaN(CP) || CP <= 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Current Price.');
            return;
        }
        if (isNaN(CR) || CR < 0) {
            Alert.alert('Invalid Input', 'Please enter a valid Coupon Rate.');
            return;
        }
        if (isNaN(n) || n <= 0) {
            Alert.alert('Invalid Input', 'Please enter valid Years to Maturity.');
            return;
        }

        // Approximate YTM formula
        const annualCoupon = (CR / 100) * FV; // Annual coupon payment
        const approximateYTM = 
            ((annualCoupon + (FV - CP) / n) / ((FV + CP) / 2)) * 100;

        setYTM(approximateYTM.toFixed(2));
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-4`}>
            {/* Title */}
            <Text style={tw`text-black text-2xl font-bold mb-6 text-center`}>Yield to Maturity (YTM) Calculator</Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Input Fields */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Face Value ($)</Text>
                    <TextInput
                        value={faceValue}
                        onChangeText={setFaceValue}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Face Value"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Current Price ($)</Text>
                    <TextInput
                        value={currentPrice}
                        onChangeText={setCurrentPrice}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Current Price"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Coupon Rate (%)</Text>
                    <TextInput
                        value={couponRate}
                        onChangeText={setCouponRate}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Coupon Rate"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                    <Text style={tw`text-lg font-semibold mb-2`}>Enter Years to Maturity</Text>
                    <TextInput
                        value={yearsToMaturity}
                        onChangeText={setYearsToMaturity}
                        style={tw`w-full p-4 bg-white rounded-lg text-gray-800 mb-4 shadow-lg`}
                        placeholder="Enter Years to Maturity"
                        keyboardType="numeric"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity 
                    onPress={calculateYTM} 
                    style={tw`bg-red-500 px-4 py-2 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white font-bold`}>Calculate</Text>
                </TouchableOpacity>

                {/* Result */}
                {ytm && (
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-center text-xl font-semibold text-gray-800`}>
                            Yield to Maturity (YTM): {ytm}%
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default YTMCalculator;