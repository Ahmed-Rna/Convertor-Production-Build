import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Resistance = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnit, setFromUnit] = useState('Ω');
    const [toUnit, setToUnit] = useState('kΩ');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesResistance = {
        Ω: 1,           // Ohm
        kΩ: 1000,       // Kilo-ohm
        MΩ: 1000000,    // Mega-ohm
        mΩ: 0.001,      // Milliohm
        μΩ: 0.000001,   // Microohm
        GΩ: 1000000000, // Giga-ohm
        TΩ: 1000000000000, // Tera-ohm
    };

    const simulateConversion = () => {
        const fromRate = conversionRatesResistance[fromUnit];
        const toRate = conversionRatesResistance[toUnit];

        if (fromRate && toRate) {
            const result = (parseFloat(amount) * fromRate) / toRate;
            setConversionResult(result.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            {/* Title */}
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Resistance Converter
            </Text>

            {/* Calculator Container */}
            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                {/* Amount Input */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Resistance</Text>
                    <TextInput 
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter resistance"
                        placeholderTextColor="gray"
                    />
                </View>

                {/* From Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>From</Text>
                    <Picker 
                        selectedValue={fromUnit}
                        onValueChange={(itemValue) => setFromUnit(itemValue)}
                        style={tw`h-14 w-full bg-white text-black`}
                    >
                        <Picker.Item label="Ohm (Ω)" value="Ω" />
                        <Picker.Item label="Kilo-ohm (kΩ)" value="kΩ" />
                        <Picker.Item label="Mega-ohm (MΩ)" value="MΩ" />
                        <Picker.Item label="Milliohm (mΩ)" value="mΩ" />
                        <Picker.Item label="Microohm (μΩ)" value="μΩ" />
                        <Picker.Item label="Giga-ohm (GΩ)" value="GΩ" />
                        <Picker.Item label="Tera-ohm (TΩ)" value="TΩ" />
                    </Picker>
                </View>

                {/* To Unit Picker */}
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>To</Text>
                    <Picker 
                        selectedValue={toUnit}
                        onValueChange={(itemValue) => setToUnit(itemValue)}
                        style={tw`h-14 w-full bg-white text-black`}
                    >
                        <Picker.Item label="Ohm (Ω)" value="Ω" />
                        <Picker.Item label="Kilo-ohm (kΩ)" value="kΩ" />
                        <Picker.Item label="Mega-ohm (MΩ)" value="MΩ" />
                        <Picker.Item label="Milliohm (mΩ)" value="mΩ" />
                        <Picker.Item label="Microohm (μΩ)" value="μΩ" />
                        <Picker.Item label="Giga-ohm (GΩ)" value="GΩ" />
                        <Picker.Item label="Tera-ohm (TΩ)" value="TΩ" />
                    </Picker>
                </View>

                {/* Convert Button */}
                <Button title="Convert" onPress={simulateConversion} color="red" />

                {/* Result */}
                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Resistance: {conversionResult} {toUnit}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Resistance;
