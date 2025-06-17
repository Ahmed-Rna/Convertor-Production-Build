import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Illumination = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnitI, setFromUnitI] = useState('lux');
    const [toUnitI, setToUnitI] = useState('lux');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesIllumination = {
        lux: 1,
        fc: 10.7639,
        lumen: 1,
        nit: 0.000291,
        foot_lambert: 0.003426,
        candela_per_meter_square: 1,
        klux: 1000,
        phot: 0.092903,
        stilb: 0.0001,
        lambert: 0.003426,
    };

    const simulateConversion = () => {
        const fromRateIllumination = conversionRatesIllumination[fromUnitI];
        const toRateIllumination = conversionRatesIllumination[toUnitI];

        if (fromRateIllumination && toRateIllumination) {
            const result = (parseFloat(amount) * fromRateIllumination) / toRateIllumination;
            setConversionResult(result.toFixed(2));
        } else {
            Alert.alert('Invalid Input', 'Please select valid units for conversion.');
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Illumination Converter
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Amount Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Illumination</Text>
                    <TextInput 
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter amount"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From</Text>
                    <Picker 
                        selectedValue={fromUnitI}
                        onValueChange={(itemValue) => setFromUnitI(itemValue)}
                        style={tw`w-full  bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Lux (lx)" value="lux" />
                        <Picker.Item label="Foot-candle (fc)" value="fc" />
                        <Picker.Item label="Lumen (lm)" value="lumen" />
                        <Picker.Item label="Nit (nt)" value="nit" />
                        <Picker.Item label="Foot-lambert (fL)" value="foot_lambert" />
                        <Picker.Item label="Candela per meter squared (cd/m²)" value="candela_per_meter_square" />
                        <Picker.Item label="Kilolux (klx)" value="klux" />
                        <Picker.Item label="Phot (ph)" value="phot" />
                        <Picker.Item label="Stilb (sb)" value="stilb" />
                        <Picker.Item label="Lambert (L)" value="lambert" />
                    </Picker>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To</Text>
                    <Picker
                        selectedValue={toUnitI}
                        onValueChange={(itemValue) => setToUnitI(itemValue)}
                        style={tw`w-full bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Lux (lx)" value="lux" />
                        <Picker.Item label="Foot-candle (fc)" value="fc" />
                        <Picker.Item label="Lumen (lm)" value="lumen" />
                        <Picker.Item label="Nit (nt)" value="nit" />
                        <Picker.Item label="Foot-lambert (fL)" value="foot_lambert" />
                        <Picker.Item label="Candela per meter squared (cd/m²)" value="candela_per_meter_square" />
                        <Picker.Item label="Kilolux (klx)" value="klux" />
                        <Picker.Item label="Phot (ph)" value="phot" />
                        <Picker.Item label="Stilb (sb)" value="stilb" />
                        <Picker.Item label="Lambert (L)" value="lambert" />
                    </Picker>
                </View>

                {/* Convert Button */}
                <TouchableOpacity
                    onPress={simulateConversion}
                    style={tw`bg-red-500 py-1 rounded-lg shadow-lg mb-4`}
                >
                    <Text style={tw`text-center text-white text-lg font-bold`}>Convert</Text>
                </TouchableOpacity>

                {/* Conversion Result */}
                {conversionResult && (
                    <Text style={tw`text-center text-xl text-white font-semibold`}>
                        Converted Illumination: {conversionResult} {toUnitI}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
};

export default Illumination;
