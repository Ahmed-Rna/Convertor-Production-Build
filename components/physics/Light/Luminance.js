import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Luminance = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnitL, setFromUnitL] = useState('cd_m2');
    const [toUnitL, setToUnitL] = useState('lm');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesLuminance = {
        cd_m2: 1,             // candela per square meter
        lm: 1,                // lumen
        lux: 1,               // lux
        nit: 1,               // nit
        fc: 1,                // foot-candle
        lux_ft: 1,            // foot-candle (Lux equivalent)
        ph: 1,                // phot
        footlambert: 1,       // foot-lambert
        lumen_per_steradian: 1, // lumen per steradian
        sb: 1,                // stilb
    };

    const simulateConversion = () => {
        const fromRateLuminance = conversionRatesLuminance[fromUnitL];
        const toRateLuminance = conversionRatesLuminance[toUnitL];

        if (fromRateLuminance && toRateLuminance) {
            const result = (parseFloat(amount) * fromRateLuminance) / toRateLuminance;
            setConversionResult(result.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Luminance Converter
            </Text>
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Luminance</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter luminance"
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={tw`flex-row justify-between items-center mb-4`}>
                    <View style={tw`flex-1 mr-2`}>
                        <Text style={tw`text-white text-lg mb-2`}>From</Text>
                        <Picker
                            selectedValue={fromUnitL}
                            onValueChange={(itemValue) => setFromUnitL(itemValue)}
                            style={tw`h-14 w-full bg-white rounded-lg text-black`}
                        >
                            <Picker.Item label="Candela per Square Meter (cd/m²)" value="cd_m2" />
                            <Picker.Item label="Lumen (lm)" value="lm" />
                            <Picker.Item label="Lux (lx)" value="lux" />
                            <Picker.Item label="Nit (nt)" value="nit" />
                            <Picker.Item label="Foot-Candle (fc)" value="fc" />
                            <Picker.Item label="Lux (Foot-Candle)" value="lux_ft" />
                            <Picker.Item label="Phot (ph)" value="ph" />
                            <Picker.Item label="Foot-Lambert" value="footlambert" />
                            <Picker.Item label="Lumen per Steradian" value="lumen_per_steradian" />
                            <Picker.Item label="Stilb (sb)" value="sb" />
                        </Picker>
                    </View>
                    <View style={tw`flex-1`}>
                        <Text style={tw`text-white text-lg mb-2`}>To</Text>
                        <Picker
                            selectedValue={toUnitL}
                            onValueChange={(itemValue) => setToUnitL(itemValue)}
                            style={tw`h-14 w-full bg-white rounded-lg text-black`}
                        >
                            <Picker.Item label="Candela per Square Meter (cd/m²)" value="cd_m2" />
                            <Picker.Item label="Lumen (lm)" value="lm" />
                            <Picker.Item label="Lux (lx)" value="lux" />
                            <Picker.Item label="Nit (nt)" value="nit" />
                            <Picker.Item label="Foot-Candle (fc)" value="fc" />
                            <Picker.Item label="Lux (Foot-Candle)" value="lux_ft" />
                            <Picker.Item label="Phot (ph)" value="ph" />
                            <Picker.Item label="Foot-Lambert" value="footlambert" />
                            <Picker.Item label="Lumen per Steradian" value="lumen_per_steradian" />
                            <Picker.Item label="Stilb (sb)" value="sb" />
                        </Picker>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={simulateConversion}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert</Text>
                </TouchableOpacity>
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Luminance: {conversionResult} {toUnitL}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Luminance;
