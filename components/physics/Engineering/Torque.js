import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Torque = () => {
    const [amount, setAmount] = useState('0');
    const [fromUnitA, setFromUnitA] = useState('n_m');    // Newton meter (N·m)
    const [toUnitA, setToUnitA] = useState('kgf_m');      // Kilogram-force meter (kgf·m)
    const [conversionResult, setConversionResult] = useState(null);

    const conversionRatesTorque = {
        n_m: 1,                // Newton meter (N·m)
        kgf_m: 9.80665,        // Kilogram-force meter (kgf·m)
        lbf_ft: 1.35582,       // Pound-force foot (lbf·ft)
        ozf_in: 0.007233,      // Ounce-force inch (ozf·in)
        ft_lbf: 1.35582,       // Foot-pound-force (ft·lbf)
        m_kgf: 0.1019716,      // Meter-kilogram-force (m·kgf)
        dyn_cm: 1e-5,          // Dyne centimeter (dyn·cm)
    };

    const simulateConversion = () => {
        // Check if input is valid (non-empty and numeric)
        if (!amount || isNaN(parseFloat(amount))) {
            Alert.alert('Invalid Input', 'Please enter a valid numeric torque value.');
            return;
        }

        const fromRateTorque = conversionRatesTorque[fromUnitA];
        const toRateTorque = conversionRatesTorque[toUnitA];

        if (fromRateTorque && toRateTorque) {
            const result = (parseFloat(amount) * fromRateTorque) / toRateTorque;
            setConversionResult(result.toFixed(2));
        } else {
            setConversionResult('Invalid conversion');
        }
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-1 bg-gray-600 p-6`}>
            <Text style={tw`text-center text-2xl font-bold text-white mb-6`}>
                Torque Converter
            </Text>

            <View style={tw`bg-gray-600 p-6 rounded-lg shadow-lg`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-white text-lg mb-2`}>Enter Torque</Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        style={tw`w-full p-4 bg-white rounded-lg text-black`}
                        keyboardType="numeric"
                        placeholder="Enter torque"
                        placeholderTextColor="gray"
                    />
                </View>

                <View style={tw`flex-row justify-between items-center mt-4`}>
                    <View style={tw`flex-1 mr-2 mb-3`}>
                        <Text style={tw`text-white text-lg mb-2`}>From</Text>
                        <Picker 
                            selectedValue={fromUnitA}
                            onValueChange={(itemValue) => setFromUnitA(itemValue)}
                            style={tw`h-12 w-full bg-white text-black rounded-lg`}
                        >
                            <Picker.Item label="Newton Meter (N·m)" value="n_m" />
                            <Picker.Item label="Kilogram-Force Meter (kgf·m)" value="kgf_m" />
                            <Picker.Item label="Pound-Force Foot (lbf·ft)" value="lbf_ft" />
                            <Picker.Item label="Ounce-Force Inch (ozf·in)" value="ozf_in" />
                            <Picker.Item label="Foot-Pound-Force (ft·lbf)" value="ft_lbf" />
                            <Picker.Item label="Meter-Kilogram-Force (m·kgf)" value="m_kgf" />
                            <Picker.Item label="Dyne Centimeter (dyn·cm)" value="dyn_cm" />
                        </Picker>
                    </View>
                    <View style={tw`flex-1 mr-2 mb-3`}>
                        <Text style={tw`text-white text-lg mb-2`}>To</Text>
                        <Picker
                            selectedValue={toUnitA}
                            onValueChange={(itemValue) => setToUnitA(itemValue)}
                            style={tw`h-12 w-full bg-white text-black rounded-lg`}
                        >
                            <Picker.Item label="Newton Meter (N·m)" value="n_m" />
                            <Picker.Item label="Kilogram-Force Meter (kgf·m)" value="kgf_m" />
                            <Picker.Item label="Pound-Force Foot (lbf·ft)" value="lbf_ft" />
                            <Picker.Item label="Ounce-Force Inch (ozf·in)" value="ozf_in" />
                            <Picker.Item label="Foot-Pound-Force (ft·lbf)" value="ft_lbf" />
                            <Picker.Item label="Meter-Kilogram-Force (m·kgf)" value="m_kgf" />
                            <Picker.Item label="Dyne Centimeter (dyn·cm)" value="dyn_cm" />
                        </Picker>
                    </View>
                </View>

                <Button 
                    title="Convert" 
                    onPress={simulateConversion} 
                    color="red" 
                    style={tw`mt-4`}
                />

                {conversionResult && (
                    <View style={tw`mt-6`}>
                        <Text style={tw`text-center text-xl text-white font-semibold`}>
                            Converted Torque: {conversionResult} {toUnitA}
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Torque;
