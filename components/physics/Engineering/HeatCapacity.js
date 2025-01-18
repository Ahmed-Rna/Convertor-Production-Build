import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const HeatCapacity = () => {
    const [amount, setAmount] = useState('0');
    const [massUnit, setMassUnit] = useState('kg');
    const [specificHeatUnit, setSpecificHeatUnit] = useState('j_kg_c');
    const [temperatureChangeUnit, setTemperatureChangeUnit] = useState('celsius');
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesMass = {
        kg: 1,
        g: 0.001,
        mg: 1e-6,
        lb: 0.453592,
        oz: 0.0283495,
    };

    const conversionRatesSpecificHeat = {
        j_kg_c: 1,
        cal_kg_c: 4184,
        btu_lb_f: 4186.8,
    };

    const conversionRatesTemperature = {
        celsius: 1,
        fahrenheit: 5 / 9,
        kelvin: 1,
    };

    const simulateConversion = () => {
        const massConversionRate = conversionRatesMass[massUnit];
        const specificHeatConversionRate = conversionRatesSpecificHeat[specificHeatUnit];
        const temperatureChangeConversionRate = conversionRatesTemperature[temperatureChangeUnit];

        if (massConversionRate && specificHeatConversionRate && temperatureChangeConversionRate) {
            const massInKg = parseFloat(amount) * massConversionRate;
            const specificHeatInJkgC = specificHeatConversionRate;
            const temperatureChangeInC = parseFloat(amount) * temperatureChangeConversionRate;

            const heatEnergy = massInKg * specificHeatInJkgC * temperatureChangeInC;
            setConversionResult(heatEnergy.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Heat Capacity Converter
            </Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Mass</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter mass"
                        placeholderTextColor="gray"
                    />
                </View>

                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Mass Unit</Text>
                    <Picker
                        selectedValue={massUnit}
                        onValueChange={(itemValue) => setMassUnit(itemValue)}
                        style={tw`w-full bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Kilogram" value="kg" />
                        <Picker.Item label="Gram" value="g" />
                        <Picker.Item label="Milligram" value="mg" />
                        <Picker.Item label="Pound" value="lb" />
                        <Picker.Item label="Ounce" value="oz" />
                    </Picker>
                </View>

                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Specific Heat Unit</Text>
                    <Picker
                        selectedValue={specificHeatUnit}
                        onValueChange={(itemValue) => setSpecificHeatUnit(itemValue)}
                        style={tw`w-full bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Joule/kg°C" value="j_kg_c" />
                        <Picker.Item label="Calorie/kg°C" value="cal_kg_c" />
                        <Picker.Item label="BTU/lb°F" value="btu_lb_f" />
                    </Picker>
                </View>

                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Temperature Change Unit</Text>
                    <Picker
                        selectedValue={temperatureChangeUnit}
                        onValueChange={(itemValue) => setTemperatureChangeUnit(itemValue)}
                        style={tw`w-full bg-white rounded-lg text-black`}
                    >
                        <Picker.Item label="Celsius" value="celsius" />
                        <Picker.Item label="Fahrenheit" value="fahrenheit" />
                        <Picker.Item label="Kelvin" value="kelvin" />
                    </Picker>
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
                            Heat Energy: {conversionResult} Joules
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default HeatCapacity;
