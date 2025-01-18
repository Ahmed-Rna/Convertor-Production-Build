import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';


const BloodChemistryAndBiochemicalMarkers = [
    { name: 'Calcium', source: require('../../assets/calcium2.jpeg'), screen: 'Calcium' },
    { name: 'Cholesterol', source: require('../../assets/cholestrol2.jpeg'), screen: 'Cholesterol' },
    { name: 'Enzymes', source: require('../../assets/enzyme2.jpeg'), screen: 'Enzymes' },
    { name: 'Glucose', source: require('../../assets/glucose2.jpeg'), screen: 'Glucose' },

];

const VitalSignsAndPhysicalMeasurements = [
    { name: '  Blood Pressure', source: require('../../assets/bloodpressure2.jpeg'), screen: 'BloodPressure' },
    { name: '     Body Temperture', source: require('../../assets/bodytemperature2.jpeg'), screen: 'BodyTemperature' },
    { name: '  Body  Weight', source: require('../../assets/bio7.jpeg'), screen: 'BodyWeight' },
    { name: 'Heart Rate', source: require('../../assets/bio8.jpeg'), screen: 'HeartRate' },
    { name: 'Oxygen Level', source: require('../../assets/oxygenlevel2.jpeg'), screen: 'OxygenLevel' },

];

const ClinicalAndDiagnosticParameters = [
    { name: 'Blood Gas', source: require('../../assets/bloodgas.jpeg'), screen: 'BloodGas' },
    { name: 'Haemo  globin', source: require('../../assets/bio11.jpeg'), screen: 'Haemoglobin' },
    { name: 'Pregnancy  Hormone', source: require('../../assets/bio12.jpeg'), screen: 'PregnancyHormone' },

];

const DosageAndNutritionalIndicators = [
    { name: 'Dosage', source: require('../../assets/bio13.jpeg'), screen: 'Dosage' },
    { name: 'Nutrient Electrolyte', source: require('../../assets/bio14.jpeg'), screen: 'NutrientElectrolyte' },

];

const ProteinsAndProteinRelatedIndicators = [
    { name: 'Albumin', source: require('../../assets/bio15.jpeg'), screen: 'Albumin' },
    { name: 'Ferritin', source: require('../../assets/bio16.jpeg'), screen: 'Ferritin' },

];

const KidneyFunctionIndicators = [
    { name: 'Creatinine', source: require('../../assets/bio17.jpeg'), screen: 'Creatinine' },
    { name: 'Urea', source: require('../../assets/bio18.jpeg'), screen: 'Urea' },

];



const Medical = () => {
    const [isBloodChemistryAndBiochemicalMarkers, setBloodChemistryAndBiochemicalMarkers] = useState(true);
    const [isVitalSignsAndPhysicalMeasurements, setVitalSignsAndPhysicalMeasurements] = useState(true);
    const [isClinicalAndDiagnosticParameters, setClinicalAndDiagnosticParameters] = useState(true);
    const [isDosageAndNutritionalIndicators, setDosageAndNutritionalIndicators] = useState(true);
    const [isProteinsAndProteinRelatedIndicators, setProteinsAndProteinRelatedIndicators] = useState(true);
    const [isKidneyFunctionIndicators, setKidneyFunctionIndicators] = useState(true);


    const navigation = useNavigation();

    const handlePress = (screen) => {
        navigation.navigate(screen); // Navigate to the selected screen
    };

    return (
        <ScrollView contentContainerStyle={tw`flex-grow`}>
            <View style={tw`flex-1 bg-neutral-950`}>
                <StatusBar barStyle="light-content" />

                {/* Title */}
                {/* <Text style={tw`text-zinc-50 text-xl ml-4 font-bold bg-current`}>Unit Converter</Text> */}

                {/* Image */}
                <Image
                    style={tw`w-100 h-50`}
                    source={require('../../assets/Medical1.jpg')}
                     resizeMode="stretch"
                />

                {/* Unit Views */}
                <Text style={tw`border border-slate-100 rounded-2xl mt-2 ml-2 mr-2 text-zinc-50 text-xl font-bold p-2 bg-current`}>
                    MEDICAL
                </Text>

                {/* Common Dropdown Button */}
                <View style={tw`flex-row items-center mt-5 ml-4`}>
                    <Image
                        style={tw`w-10 h-10 mr-4`}
                        source={require('../../assets/BloodChemistryAndBiochemicalMarkers.jpeg')}
                    />
                    <TouchableOpacity
                        onPress={() => setBloodChemistryAndBiochemicalMarkers(!isBloodChemistryAndBiochemicalMarkers)}
                        style={tw`flex-row items-center`}
                    >
                        <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Blood Chemistry Units</Text>
                        <Icon name={isBloodChemistryAndBiochemicalMarkers ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
                    </TouchableOpacity>
                </View>

                {/* Dropdown Content */}
                {isBloodChemistryAndBiochemicalMarkers && (
                    <View style={tw`bg-grey rounded-lg mt-1 shadow-lg p-2`}>
                        <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
                            {BloodChemistryAndBiochemicalMarkers.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handlePress(item.screen)}
                                    style={tw`border border-slate-100 bg-current h-25 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                                >
                                    {/* Dynamically set the image source */}
                                    <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                                    <Text style={tw`font-normal mt-2 text-sm text-white`}>{item.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                )}



                {/* Common Dropdown Button */}
                <View style={tw`flex-row items-center mt-2 ml-4`}>
                    <Image
                        style={tw`w-10 h-10 mr-4`}
                        source={require('../../assets/VitalSignsAndPhysicalMeasurements.jpeg')}
                    />
                    <TouchableOpacity
                        onPress={() => setVitalSignsAndPhysicalMeasurements(!isVitalSignsAndPhysicalMeasurements)}
                        style={tw`flex-row items-center`}
                    >
                        <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Bio Physical Measurements</Text>
                        <Icon name={isVitalSignsAndPhysicalMeasurements ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
                    </TouchableOpacity>
                </View>

                {/* Dropdown Content */}
                {isVitalSignsAndPhysicalMeasurements && (
                    <View style={tw`bg-grey rounded-lg mt-4 shadow-lg p-2`}>
                        <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
                            {VitalSignsAndPhysicalMeasurements.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handlePress(item.screen)}
                                    style={tw`border border-slate-100 bg-current h-25 w-26 p-4 rounded  flex-col items-center p-3 ml-2 border-b border-gray-200`}
                                >
                                    <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                                    <Text style={tw`font-normal mt-1 text-sm text-white`}>{item.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                )}



                {/* Common Dropdown Button */}
                <View style={tw`flex-row items-center  ml-4`}>
                    <Image
                        style={tw`w-10 h-10 mr-4`}
                        source={require('../../assets/ClinicalAndDiagnosticParameters.jpeg')}
                    />
                    <TouchableOpacity
                        onPress={() => setClinicalAndDiagnosticParameters(!isClinicalAndDiagnosticParameters)}
                        style={tw`flex-row items-center`}
                    >
                        <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Clinical Parameters</Text>
                        <Icon name={isClinicalAndDiagnosticParameters ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
                    </TouchableOpacity>
                </View>

                {/* Dropdown Content */}
                {isClinicalAndDiagnosticParameters && (
                    <View style={tw`bg-grey rounded-lg mt-2 shadow-lg  p-2`}>
                        <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
                            {ClinicalAndDiagnosticParameters.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handlePress(item.screen)}
                                    style={tw`border border-slate-100 bg-current h-25 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                                >
                                    <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                                    <Text style={tw`font-normal mt-1 text-sm text-white`}>{item.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                )}





                {/* Common Dropdown Button */}
                <View style={tw`flex-row items-center  ml-4`}>
                    <Image
                        style={tw`w-10 h-10 mr-4`}
                        source={require('../../assets/DosageAndNutritionalIndicators.jpeg')}
                    />
                    <TouchableOpacity
                        onPress={() => setDosageAndNutritionalIndicators(!isDosageAndNutritionalIndicators)}
                        style={tw`flex-row items-center`}
                    >
                        <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Nutritional Indicators</Text>
                        <Icon name={isDosageAndNutritionalIndicators ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
                    </TouchableOpacity>
                </View>

                {/* Dropdown Content */}
                {isDosageAndNutritionalIndicators && (
                    <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
                        <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
                            {DosageAndNutritionalIndicators.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handlePress(item.screen)}
                                    style={tw`border border-slate-100 bg-current h-25 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                                >
                                    <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                                    <Text style={tw`font-normal mt-1 text-sm text-white`}>{item.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                )}



                {/* Common Dropdown Button */}
                <View style={tw`flex-row items-center ml-4`}>
                    <Image
                        style={tw`w-10 h-10 mr-4`}
                        source={require('../../assets/ProteinsAndProteinRelatedIndicators.jpeg')}
                    />
                    <TouchableOpacity
                        onPress={() => setProteinsAndProteinRelatedIndicators(!isProteinsAndProteinRelatedIndicators)}
                        style={tw`flex-row items-center`}
                    >
                        <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Protein Indicators</Text>
                        <Icon name={isProteinsAndProteinRelatedIndicators ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
                    </TouchableOpacity>
                </View>

                {/* Dropdown Content */}
                {isProteinsAndProteinRelatedIndicators && (
                    <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
                        <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
                            {ProteinsAndProteinRelatedIndicators.map((item, index) => (
                                <TouchableOpacity
                                    key={index} StockMarketAndTrading
                                    onPress={() => handlePress(item.screen)}
                                    style={tw`border border-slate-100 bg-current h-26 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                                >
                                    <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                                    <Text style={tw`font-normal mt-2 text-sm text-white`}>{item.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                )}


                {/* Common Dropdown Button */}
                <View style={tw`flex-row items-center ml-4`}>
                    <Image
                        style={tw`w-10 h-10 mr-4`}
                        source={require('../../assets/KidneyFunctionIndicators.jpeg')}
                    />
                    <TouchableOpacity
                        onPress={() => setKidneyFunctionIndicators(!isKidneyFunctionIndicators)}
                        style={tw`flex-row items-center`}
                    >
                        <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Kidney Indicators</Text>
                        <Icon name={isKidneyFunctionIndicators ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
                    </TouchableOpacity>
                </View>

                {/* Dropdown Content */}
                {isKidneyFunctionIndicators && (
                    <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
                        <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
                            {KidneyFunctionIndicators.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handlePress(item.screen)}
                                    style={tw`border border-slate-100 bg-current h-25 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                                >
                                    <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                                    <Text style={tw`font-normal mt-4 text-sm text-white`}>{item.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                )}
   <View style={tw`flex-grow bg-black`} />

            </View>
        </ScrollView>
    );
};

export default Medical;

