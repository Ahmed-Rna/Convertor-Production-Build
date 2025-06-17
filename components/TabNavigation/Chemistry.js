import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';


const Concentration = [
  { name: '  Mass Percent', source: require('../../assets/chem1.jpeg'), screen: 'MassPercent' },
  { name: 'Molality', source: require('../../assets/chem2.jpeg'), screen: 'Molality' },
  { name: 'Molarity', source: require('../../assets/chem3.jpeg'), screen: 'Molarity' },
  { name: 'Normality', source: require('../../assets/chem4.jpeg'), screen: 'Normality' },
  { name: 'Parts Per Billion', source: require('../../assets/chem5.jpeg'), screen: 'PartsPerBillion' },
  { name: 'Parts Per Million', source: require('../../assets/chem6.jpeg'), screen: 'PartsPerMillion' },
  { name: 'Volume Percent', source: require('../../assets/chem7.jpeg'), screen: 'VolumePercent' },
  { name: 'Weight Percent', source: require('../../assets/chem8.jpeg'), screen: 'WeightPercent' },

];

const Pressure = [
  { name: 'Atmosphere', source: require('../../assets/chem9.jpeg'), screen: 'Atmosphere' },
  { name: 'Bar', source: require('../../assets/chem10.jpeg'), screen: 'Bar' },
  { name: 'Millimeter Of Mercury', source: require('../../assets/chem11.jpeg'), screen: 'MillimeterOfMercury' },
  { name: 'Pascal', source: require('../../assets/chem12.jpeg'), screen: 'Pascal' },
  { name: 'Pounds Per Square Inch', source: require('../../assets/chem13.jpeg'), screen: 'PoundsPerSquareInch' },
  { name: 'Torr', source: require('../../assets/chem14.jpeg'), screen: 'Torr' },

];

const EnergyAndHeat = [
    { name: 'British Thermal Unit', source: require('../../assets/chem15.jpeg'), screen: 'BritishThermalUnit' },
    { name: 'Calorie', source: require('../../assets/chem16.jpeg'), screen: 'Calorie' },
    { name: 'Electronvolt', source: require('../../assets/chem17.jpeg'), screen: 'Electronvolt' },
    { name: 'Joule', source: require('../../assets/chem18.jpeg'), screen: 'Joule' },
    { name: 'Kilocalorie', source: require('../../assets/chem19.jpeg'), screen: 'Kilocalorie' },
    { name: 'Kilojoule', source: require('../../assets/chem20.jpeg'), screen: 'Kilojoule' },

];

const Force = [
  { name: 'Dyne', source: require('../../assets/chem21.jpeg'), screen: 'Dyne' },
  { name: 'Newton', source: require('../../assets/chem22.jpeg'), screen: 'Newton' },
  { name: 'Pound Force', source: require('../../assets/chem23.jpeg'), screen: 'PoundForce' },

];

const RadioactivityAndRadiation = [
  { name: 'Becquerel', source: require('../../assets/chem24.jpeg'), screen: 'Becquerel' },
  { name: 'Curie', source: require('../../assets/chem25.jpeg'), screen: 'Curie' },
  { name: 'Gray', source: require('../../assets/chem26.jpeg'), screen: 'Gray' },
  { name: 'Sievert', source: require('../../assets/chem27.jpeg'), screen: 'Sievert' },

];

const ChemicalAmount = [
  { name: 'Equivalent Weight', source: require('../../assets/chem28.jpeg'), screen: 'EquivalentWeight' },
  { name: 'Mole', source: require('../../assets/chem29.jpeg'), screen: 'Mole' },
  { name: 'Molecular Weight', source: require('../../assets/chem30.jpeg'), screen: 'MolecularWeight' },

];

const FlowAndRate = [
  { name: 'Mass Flow Rate', source: require('../../assets/chem31.jpeg'), screen: 'MassFlowRate' },
  { name: 'Molar Flow Rate', source: require('../../assets/chem32.jpeg'), screen: 'MolarFlowRate' },
  { name: 'Volume Flow Rate', source: require('../../assets/chem33.jpeg'), screen: 'VolumeFlowRate' },

];

const AcidityAndBasicity = [
  { name: 'pH', source: require('../../assets/chem34.jpeg'), screen: 'pH' },
  { name: 'pKa_pKb', source: require('../../assets/chem35.jpeg'), screen: 'pKa_pKb' },

];

const RefractiveProperties = [
  { name: 'Refractive Index', source: require('../../assets/chem36.jpeg'), screen: 'RefractiveIndex' },

];

const OpticalProperties = [
  { name: 'Degree', source: require('../../assets/chem37.jpeg'), screen: 'Degree' },

];

const CatalysisAndReactionRates = [
  { name: 'Activation Energy', source: require('../../assets/chem38.jpeg'), screen: 'ActivationEnergy' },
  { name: 'Rate Constant', source: require('../../assets/chem39.jpeg'), screen: 'RateConstant' },

];

const StoichiometryAndYield = [
  { name: 'Actual Yield', source: require('../../assets/chem40.jpeg'), screen: 'ActualYield' },
  { name: 'Percent Yield', source: require('../../assets/chem41.jpeg'), screen: 'PercentYield' },
  { name: 'Theoretical Yield', source: require('../../assets/chem42.jpeg'), screen: 'TheoreticalYield' },

];

const SolutionProperties = [
  { name: '       B.P Elevation', source: require('../../assets/chem43.jpeg'), screen: 'BoilingPointElevation' },
  { name: '       F.P Depression', source: require('../../assets/chem44.jpeg'), screen: 'FreezingPointDepression' },
  { name: 'Osmolality', source: require('../../assets/chem45.jpeg'), screen: 'Osmolality' },
  { name: 'Osmolarity', source: require('../../assets/chem46.jpeg'), screen: 'Osmolarity' },

];

const SpectroscopyAndAbsorption = [
  { name: 'Absorbance', source: require('../../assets/chem47.jpeg'), screen: 'Absorbance' },
  { name: 'Wavelength', source: require('../../assets/chem49.jpeg'), screen: 'Wavelength' },

];

const ThermodynamicProperties = [
  { name: 'Enthalpy', source: require('../../assets/chem50.jpeg'), screen: 'Enthalpy' },
  { name: 'Entropy', source: require('../../assets/chem51.jpeg'), screen: 'Entropy' },
  { name: 'Gibbs Free Energy', source: require('../../assets/chem52.jpeg'), screen: 'GibbsFreeEnergy' },

];




const Chemistry = () => {
  const [isConcentration, setConcentration] = useState(true);
  const [isPressure, setPressure] = useState(true);
  const [isEnergyAndHeat, setEnergyAndHeat] = useState(true);
  const [isForce, setForce] = useState(true);
  const [isRadioactivityAndRadiation, setRadioactivityAndRadiation] = useState(true);
  const [isChemicalAmount, setChemicalAmount] = useState(true);
  const [isFlowAndRate, setFlowAndRate] = useState(true);
  const [isAcidityAndBasicity, setAcidityAndBasicity] = useState(true);
  const [isRefractiveProperties, setRefractiveProperties] = useState(true);
  const [isOpticalProperties, setOpticalProperties] = useState(true);
  const [isCatalysisAndReactionRates, setCatalysisAndReactionRates] = useState(true);
  const [isStoichiometryAndYield, setStoichiometryAndYield] = useState(true);
  const [isSolutionProperties, setSolutionProperties] = useState(true);
  const [isSpectroscopyAndAbsorption, setSpectroscopyAndAbsorption] = useState(true);
  const [isThermodynamicProperties, setThermodynamicProperties] = useState(true);

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
          source={require('../../assets/Chemistry1.jpeg')}Pressure
        />

        {/* Unit Views */}
        <Text style={tw`border border-slate-100 rounded-2xl mt-2 ml-2 mt-2 text-zinc-50 text-xl font-bold p-2 bg-current`}>
          CHEMISTRY
        </Text>
        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center mt-5 ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/Concentrations.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setConcentration(!isConcentration)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Concentration</Text>
            <Icon name={isConcentration ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isConcentration && (
          <View style={tw`bg-grey rounded-lg mt-1 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {Concentration.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-27 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
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
            source={require('../../assets/Pressures.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setPressure(!isPressure)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Pressure</Text>
            <Icon name={isPressure ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isPressure && (
          <View style={tw`bg-grey rounded-lg mt-4 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {Pressure.map((item, index) => (
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
        <View style={tw`flex-row items-center ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/EnergyAndHeat.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setEnergyAndHeat(!isEnergyAndHeat)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Energy and Heat</Text>
            <Icon name={isEnergyAndHeat ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isEnergyAndHeat && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {EnergyAndHeat.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-30 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
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
            source={require('../../assets/Forces.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setForce(!isForce)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Force</Text>
            <Icon name={isForce ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isForce && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {Force.map((item, index) => (
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
            source={require('../../assets/RadioactivityAndRadiation.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setRadioactivityAndRadiation(!isRadioactivityAndRadiation)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Radioactivity and Radiation</Text>
            <Icon name={isRadioactivityAndRadiation ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isRadioactivityAndRadiation && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {RadioactivityAndRadiation.map((item, index) => (
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
            source={require('../../assets/ChemicalAmount.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setChemicalAmount(!isChemicalAmount)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Chemical Amount</Text>
            <Icon name={isChemicalAmount ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isChemicalAmount && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {ChemicalAmount.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-28 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                >
                  <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                  <Text style={tw`font-normal mt-4 text-sm text-white`}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}


        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/FlowAndRate.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setFlowAndRate(!isFlowAndRate)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Flow and Rate</Text>
            <Icon name={isFlowAndRate ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isFlowAndRate && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {FlowAndRate.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-28 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
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
            source={require('../../assets/chemch.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setAcidityAndBasicity(!isAcidityAndBasicity)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Acidity and Basicity</Text>
            <Icon name={isAcidityAndBasicity ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isAcidityAndBasicity && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {AcidityAndBasicity.map((item, index) => (
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

        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/RefractiveProperties.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setRefractiveProperties(!isRefractiveProperties)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Refractive Properties</Text>
            <Icon name={isRefractiveProperties ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isRefractiveProperties && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {RefractiveProperties.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-28 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                >
                  <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                  <Text style={tw`font-normal mt-4 text-sm text-white`}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/OpticalProperties.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setOpticalProperties(!isOpticalProperties)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Optical Properties</Text>
            <Icon name={isOpticalProperties ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isOpticalProperties && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {OpticalProperties.map((item, index) => (
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

        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/CatalysisAndReactionRates.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setCatalysisAndReactionRates(!isCatalysisAndReactionRates)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Catalysis and Reaction Rates</Text>
            <Icon name={isCatalysisAndReactionRates ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isCatalysisAndReactionRates && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {CatalysisAndReactionRates.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-28 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                >
                  <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                  <Text style={tw`font-normal mt-4 text-sm text-white`}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/StoichiometryAndYield.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setStoichiometryAndYield(!isStoichiometryAndYield)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Stoichiometry and Yield</Text>
            <Icon name={isStoichiometryAndYield ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isStoichiometryAndYield && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {StoichiometryAndYield.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-28 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                >
                  <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                  <Text style={tw`font-normal mt-4 text-sm text-white`}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/SolutionProperties.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setSolutionProperties(!isSolutionProperties)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Solution Properties</Text>
            <Icon name={isSolutionProperties ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isSolutionProperties && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {SolutionProperties.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-28 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                >
                  <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                  <Text style={tw`font-normal mt-4 text-sm text-white`}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/SpectroscopyAndAbsorption.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setSpectroscopyAndAbsorption(!isSpectroscopyAndAbsorption)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Spectroscopy and Absorption</Text>
            <Icon name={isSpectroscopyAndAbsorption ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isSpectroscopyAndAbsorption && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {SpectroscopyAndAbsorption.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-28 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
                >
                  <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
                  <Text style={tw`font-normal mt-4 text-sm text-white`}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/ThermodynamicProperties.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setThermodynamicProperties(!isThermodynamicProperties)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Thermodynamic Properties</Text>
            <Icon name={isThermodynamicProperties ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isThermodynamicProperties && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {ThermodynamicProperties.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-28 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
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

export default Chemistry;
