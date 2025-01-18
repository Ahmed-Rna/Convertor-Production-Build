import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Reusable UnitCard Component
const UnitCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`border border-slate-100 bg-current h-25 w-26 p-4 w-[30%] rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
    >
      <View>
        <Image source={item.source} style={tw`w-10 h-10 mr-1`} />
        <Text style={tw`font-normal mt-2 text-xs text-white`}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const unitOptions = [
  { name: 'Volume', source: require('../assets/volume2.jpeg'), screen: 'Volume' },
  { name: 'Area', source: require('../assets/areaa.jpeg'), screen: 'Area' },
  { name: 'Weight', source: require('../assets/weight2.jpeg'), screen: 'Weight' },
  { name: 'Speed', source: require('../assets/speed3.jpeg'), screen: 'Speed' },
  { name: 'Fuel', source: require('../assets/fuel2.jpeg'), screen: 'FuelEfficiency' },
  { name: 'Prefix', source: require('../assets/prefix2.jpeg'), screen: 'Prefix' },
  { name: 'Length', source: require('../assets/length2.jpeg'), screen: 'Length' },

{ name: 'Acceleration', source: require('../assets/drill2.jpg'), screen: 'Acceleration' },
  { name: 'Angle', source: require('../assets/frequency3.jpeg'), screen: 'Angle' },
  { name: 'Density', source: require('../assets/density2.jpeg'), screen: 'Density' },
  { name: 'Force', source: require('../assets/force.jpeg'), screen: 'Force' },
  { name: '   Heat\nCapacity', source: require('../assets/heatcapacity2.jpeg'), screen: 'HeatCapacity' },
  { name: '  Heat Density', source: require('../assets/heatdensity.jpeg'), screen: 'HeatDensity' },
  { name: 'Inertia', source: require('../assets/inertia.jpeg'), screen: 'Inertia' },
  { name: 'Sound', source: require('../assets/sound2.jpeg'), screen: 'Sound' },
  { name: 'Torque', source: require('../assets/torque2.jpeg'), screen: 'Torque' },

 { name: 'Viscosity', source: require('../assets/viscosity2.jpeg'), screen: 'Viscosity' },
  { name: 'Concentrate', source: require('../assets/concentration2.jpeg'), screen: 'Concentration' },
  { name: 'Flow', source: require('../assets/flow2.jpeg'), screen: 'Flow' },
  { name: '   Solution\n  Converter', source: require('../assets/solutionconverter2.jpeg'), screen: 'SolutionConverter' },
  { name: 'Surface\nTension', source: require('../assets/surfacetension.jpeg'), screen: 'SurfaceTension' },

 { name: 'Charge', source: require('../assets/charge2.jpeg'), screen: 'Charge' },
  { name: 'Conductance', source: require('../assets/conduc.webp'), screen: 'Conductance' },
  { name: 'ConductivityConverter', source: require('../assets/conductivity2.jpeg'), screen: 'ConductivityConverter' },
  { name: 'Energy', source: require('../assets/energy.jpeg'), screen: 'Energy' },
  { name: 'Current', source: require('../assets/current2.jpeg'), screen: 'Current' },
  { name: 'Field\nStrength', source: require('../assets/filedstrength2.jpeg'), screen: 'FieldStrength' },
  { name: 'Inductance', source: require('../assets/inductance2.jpeg'), screen: 'Inductance' },
  { name: 'Potential', source: require('../assets/potential.jpeg'), screen: 'Potential' },
  { name: 'Power', source: require('../assets/power2.jpeg'), screen: 'Power' },
  { name: 'Resistivity', source: require('../assets/resistance2.jpeg'), screen: 'Resistivity' },
  { name: 'Resistance', source: require('../assets/resistor2.jpeg'), screen: 'Resistance' },
  { name: `Surface\nCharge`, source: require('../assets/surfacecharge2.jpeg'), screen: 'SurfaceCharge' },
  { name: 'Volume\nCharge', source: require('../assets/volumecharge2.jpeg'), screen: 'VolumeCharge' }, 
{ name: 'Image', source: require('../assets/image.jpeg'), screen: 'Image' },
  { name: 'Storage', source: require('../assets/storage2.jpeg'), screen: 'Storage' },
  { name: 'Resolution\nConverter', source: require('../assets/resolution2.jpeg'), screen: 'ResolutionConverter' },
 { name: 'Frequency', source: require('../assets/angle3.jpeg'), screen: 'Frequency' },
  { name: 'Illumination', source: require('../assets/illumination2.jpeg'), screen: 'Illumination' },
  { name: 'Luminance', source: require('../assets/luminance2.jpeg'), screen: 'Luminance' }, 
{ name: 'Time', source: require('../assets/time2.jpeg'), screen: 'Time' },
 { name: 'Magnet', source: require('../assets/magnet2.jpeg'), screen: 'Magnet' },
  { name: 'FluxDensity', source: require('../assets/flux.jpeg'), screen: 'FluxDensity' },

  { name: 'Mean', source: require('../assets/s17.jpeg'), screen: 'Mean' },
  { name: 'Median', source: require('../assets/s18.jpeg'), screen: 'Median' },
  { name: 'Mode', source: require('../assets/stats3.jpeg'), screen: 'Mode' },
  { name: 'Range', source: require('../assets/stats4.jpeg'), screen: 'Range' },
  { name: 'Standard Daviation', source: require('../assets/stats5.jpeg'), screen: 'SD' },
  { name: 'Variance', source: require('../assets/stats6.jpeg'), screen: 'Variance' },
  { name: 'Correlation', source: require('../assets/stats7.jpeg'), screen: 'Correlation' },
  { name: 'Regression', source: require('../assets/stats8.jpeg'), screen: 'Regression' },
  { name: 'Absolute', source: require('../assets/stats9.jpeg'), screen: 'Absolute' },
  { name: 'Commulative', source: require('../assets/stats10.jpeg'), screen: 'Commulative' },
  { name: 'Relative', source: require('../assets/stats11.jpeg'), screen: 'Relative' },
  { name: 'ChiSquare', source: require('../assets/stats12.jpeg'), screen: 'ChiSquare' },
  { name: 'Degree', source: require('../assets/stats13.jpeg'), screen: 'Degree' },
  { name: 'ZScore', source: require('../assets/stats14.jpeg'), screen: 'ZScore' },
  { name: 'MarginOfError', source: require('../assets/stats15.jpeg'), screen: 'MarginOfError' },
  { name: 'SampleSize', source: require('../assets/stats16.jpeg'), screen: 'SampleSize' },
  { name: 'StandardError', source: require('../assets/stats17.jpeg'), screen: 'StandardError' },
  { name: 'ConfidenceInterval', source: require('../assets/stats18.jpeg'), screen: 'ConfidenceInterval' },
  { name: 'EffectSize', source: require('../assets/stats1.jpeg'), screen: 'EffectSize' },
  { name: 'Percentile', source: require('../assets/stats1.jpeg'), screen: 'Percentile' },

   { name: 'Calcium', source: require('../assets/calcium2.jpeg'), screen: 'Calcium' },
    { name: 'Cholesterol', source: require('../assets/cholestrol2.jpeg'), screen: 'Cholesterol' },
    { name: 'Enzymes', source: require('../assets/enzyme2.jpeg'), screen: 'Enzymes' },
    { name: 'Glucose', source: require('../assets/glucose2.jpeg'), screen: 'Glucose' },
    { name: '  Blood Pressure', source: require('../assets/bloodpressure2.jpeg'), screen: 'BloodPressure' },
    { name: '     Body Temperture', source: require('../assets/bodytemperature2.jpeg'), screen: 'BodyTemperture' },
    { name: '  Body  Weight', source: require('../assets/bio7.jpeg'), screen: 'BodyWeight' },
    { name: 'Heart Rate', source: require('../assets/bio8.jpeg'), screen: 'HeartRate' },
    { name: 'Oxygen Level', source: require('../assets/oxygenlevel2.jpeg'), screen: 'OxygenLevel' },

    { name: 'Blood Gas', source: require('../assets/bloodgas.jpeg'), screen: 'BloodGas' },
    { name: 'Haemo  globin', source: require('../assets/bio11.jpeg'), screen: 'Haemoglobin' },
    { name: 'Pregnancy  Hormone', source: require('../assets/bio12.jpeg'), screen: 'PregnancyHormone' },

    { name: 'Dosage', source: require('../assets/bio13.jpeg'), screen: 'Dosage' },
    { name: 'Nutrient Electrolyte', source: require('../assets/bio14.jpeg'), screen: 'NutrientElectrolyte' },
    { name: 'Albumin', source: require('../assets/bio15.jpeg'), screen: 'Albumin' },
    { name: 'Ferritin', source: require('../assets/bio16.jpeg'), screen: 'Ferritin' },
  { name: 'Creatinine', source: require('../assets/bio17.jpeg'), screen: 'Creatinine' },
  { name: 'Urea', source: require('../assets/bio18.jpeg'), screen: 'Urea' },

  { name: 'Circle', source: require('../assets/Sphere.jpeg'), screen: 'Circle' },
  { name: 'Rectangle', source: require('../assets/rectangle.jpeg'), screen: 'Rectangle' },
  { name: 'Triangle', source: require('../assets/triangle3.jpeg'), screen: 'Triangle' },
  { name: 'Trapezoid', source: require('../assets/trapezoid.jpeg'), screen: 'Trapezoid' },
  { name: 'Cone', source: require('../assets/cone.jpeg'), screen: 'Cone' },
  { name: 'Cube', source: require('../assets/square2.jpeg'), screen: 'Cube' },
  { name: 'Cylinder', source: require('../assets/cylinder.jpeg'), screen: 'Cylinder' },
  { name: 'Tent', source: require('../assets/tent.jpeg'), screen: 'Tent' },
  { name: 'Cube', source: require('../assets/square.jpeg'), screen: 'SCube' },
  { name: 'Cylinder', source: require('../assets/cylinder2.jpeg'), screen: 'SCylinder' },
  { name: 'Sphere', source: require('../assets/sphere2.jpeg'), screen: 'Sphere' },
  { name: 'Number System', source: require('../assets/number2.jpeg'), screen: 'Profile' },
  { name: 'Rectangle', source: require('../assets/rectangle2.jpeg'), screen: 'Prectangle' },
  { name: 'Square', source: require('../assets/square3.jpeg'), screen: 'Psquare' },
  { name: 'Triangle', source: require('../assets/cone2.jpeg'), screen: 'Ptriangle' },
  { name: '  Mass Percent', source: require('../assets/chem1.jpeg'), screen: 'MassPercent' },
  { name: 'Molality', source: require('../assets/chem2.jpeg'), screen: 'Molality' },
  { name: 'Molarity', source: require('../assets/chem3.jpeg'), screen: 'Molarity' },
  { name: 'Normality', source: require('../assets/chem4.jpeg'), screen: 'Normality' },
  { name: 'Parts Per Billion', source: require('../assets/chem5.jpeg'), screen: 'PartsPerBillion' },
  { name: 'Parts Per Million', source: require('../assets/chem6.jpeg'), screen: 'PartsPerMillion' },
  { name: 'Volume Percent', source: require('../assets/chem7.jpeg'), screen: 'VolumePercent' },
  { name: 'Weight Percent', source: require('../assets/chem8.jpeg'), screen: 'WeightPercent' },
  { name: 'Atmosphere', source: require('../assets/chem9.jpeg'), screen: 'Atmosphere' },
  { name: 'Bar', source: require('../assets/chem10.jpeg'), screen: 'Bar' },
  { name: 'Millimeter Of Mercury', source: require('../assets/chem11.jpeg'), screen: 'MillimeterOfMercury' },
  { name: 'Pascal', source: require('../assets/chem12.jpeg'), screen: 'Pascal' },
  { name: 'Pounds Per Square Inch', source: require('../assets/chem13.jpeg'), screen: 'PoundsPerSquareInch' },
  { name: 'Torr', source: require('../assets/chem14.jpeg'), screen: 'Torr' },
  { name: 'British Thermal Unit', source: require('../assets/chem15.jpeg'), screen: 'BritishThermalUnit' },
  { name: 'Calorie', source: require('../assets/chem16.jpeg'), screen: 'Calorie' },
  { name: 'Electronvolt', source: require('../assets/chem17.jpeg'), screen: 'Electronvolt' },
  { name: 'Joule', source: require('../assets/chem18.jpeg'), screen: 'Joule' },
  { name: 'Kilocalorie', source: require('../assets/chem19.jpeg'), screen: 'Kilocalorie' },
  { name: 'Kilojoule', source: require('../assets/chem20.jpeg'), screen: 'Kilojoule' },
  { name: 'Dyne', source: require('../assets/chem21.jpeg'), screen: 'Dyne' },
  { name: 'Newton', source: require('../assets/chem22.jpeg'), screen: 'Newton' },
  { name: 'Pound Force', source: require('../assets/chem23.jpeg'), screen: 'PoundForce' },
  { name: 'Becquerel', source: require('../assets/chem24.jpeg'), screen: 'Becquerel' },
  { name: 'Curie', source: require('../assets/chem25.jpeg'), screen: 'Curie' },
  { name: 'Gray', source: require('../assets/chem26.jpeg'), screen: 'Gray' },
  { name: 'Sievert', source: require('../assets/chem27.jpeg'), screen: 'Sievert' },
  { name: 'Equivalent Weight', source: require('../assets/chem28.jpeg'), screen: 'EquivalentWeight' },
  { name: 'Mole', source: require('../assets/chem29.jpeg'), screen: 'Mole' },
  { name: 'Molecular Weight', source: require('../assets/chem30.jpeg'), screen: 'MolecularWeight' },
  { name: 'Mass Flow Rate', source: require('../assets/chem31.jpeg'), screen: 'MassFlowRate' },
  { name: 'Molar Flow Rate', source: require('../assets/chem32.jpeg'), screen: 'MolarFlowRate' },
  { name: 'Volume Flow Rate', source: require('../assets/chem33.jpeg'), screen: 'VolumeFlowRate' },
  { name: 'pH', source: require('../assets/chem34.jpeg'), screen: 'pH' },
  { name: 'pKa_pKb', source: require('../assets/chem35.jpeg'), screen: 'pKa_pKb' },
  { name: 'Refractive Index', source: require('../assets/chem36.jpeg'), screen: 'RefractiveIndex' },
  { name: 'Degree', source: require('../assets/chem37.jpeg'), screen: 'Degree' },
  { name: 'Activation Energy', source: require('../assets/chem38.jpeg'), screen: 'ActivationEnergy' },
  { name: 'Rate Constant', source: require('../assets/chem39.jpeg'), screen: 'RateConstant' },
  { name: 'Actual Yield', source: require('../assets/chem40.jpeg'), screen: 'ActualYield' },
  { name: 'Percent Yield', source: require('../assets/chem41.jpeg'), screen: 'PercentYield' },
  { name: 'Theoretical Yield', source: require('../assets/chem42.jpeg'), screen: 'TheoreticalYield' },
  { name: '       B.P Elevation', source: require('../assets/chem43.jpeg'), screen: 'BoilingPointElevation' },
  { name: '       F.P Depression', source: require('../assets/chem44.jpeg'), screen: 'FreezingPointDepression' },
  { name: 'Osmolality', source: require('../assets/chem45.jpeg'), screen: 'Osmolality' },
  { name: 'Osmolarity', source: require('../assets/chem46.jpeg'), screen: 'Osmolarity' },
  { name: 'Absorbance', source: require('../assets/chem47.jpeg'), screen: 'Absorbance' },
  { name: 'Wavelength', source: require('../assets/chem49.jpeg'), screen: 'Wavelength' },
  { name: 'Enthalpy', source: require('../assets/chem50.jpeg'), screen: 'Enthalpy' },
  { name: 'Entropy', source: require('../assets/chem51.jpeg'), screen: 'Entropy' },
  { name: 'Gibbs Free Energy', source: require('../assets/chem52.jpeg'), screen: 'GibbsFreeEnergy' },


  { name: 'CAGR', source: require('../assets/cagr2.jpeg'), screen: 'CAGR' },
  { name: 'Capital Gains', source: require('../assets/capitalgain2.jpeg'), screen: 'CapitalGains' },
  { name: 'Dividend Yield', source: require('../assets/dividend2.jpeg'), screen: 'DividendYield' },
  { name: 'Internal Rate', source: require('../assets/internalrate2.jpeg'), screen: 'InternalRateOfReturn' },
  { name: 'Return On Investment', source: require('../assets/f1.jpeg'), screen: 'ReturnOnInvestment' },
  { name: 'Value At Risk', source: require('../assets/f7.jpeg'), screen: 'ValueAtRisk' },
  { name: 'Yield To Maturity', source: require('../assets/f2.jpeg'), screen: 'YieldToMaturity' },
  { name: 'Debt Service', source: require('../assets/f8.jpeg'), screen: 'DebtServiceCoverageRatio' },
  { name: 'Debt To Equity Ratio', source: require('../assets/f3.jpeg'), screen: 'DebtToEquityRatio' },
  { name: 'Debt To Income Ratio', source: require('../assets/f9.jpeg'), screen: 'DebtToIncomeRatio' },
  { name: 'Gross Profit Margin', source: require('../assets/f4.jpeg'), screen: 'GrossProfitMargin' },
  { name: 'Liquidity Ratios', source: require('../assets/f5.jpeg'), screen: 'LiquidityRatios' },
  { name: 'Operating Profit Margin', source: require('../assets/f6.jpeg'), screen: 'OperatingProfitMargin' },
  { name: 'Price To Earning Ratio', source: require('../assets/fin14.jpeg'), screen: 'PriceToEarningRatio' },

  { name: 'CarLoan', source: require('../assets/fin15.jpeg'), screen: 'CarLoan' },
  { name: 'Certificate Of Deposit', source: require('../assets/fin16.jpeg'), screen: 'CertificateOfDeposit' },
  { name: 'EMI', source: require('../assets/fin17.jpeg'), screen: 'EMI' },
  { name: 'Fixed Deposit', source: require('../assets/fin18.jpeg'), screen: 'FixedDeposit' },
  { name: 'Loan', source: require('../assets/fin19.jpeg'), screen: 'Loan' },
  { name: 'Mortgage', source: require('../assets/fin20.jpeg'), screen: 'Mortgage' },

   { name: 'Annuity', source: require('../assets/fin21.jpeg'), screen: 'Annuity' },
  { name: 'Compound Interest', source: require('../assets/fin22.jpeg'), screen: 'CompoundInterest' },
  { name: 'Discount', source: require('../assets/fin23.jpeg'), screen: 'Discount' },
  { name: 'Future Value', source: require('../assets/fin24.jpeg'), screen: 'FutureValue' },
  { name: 'Perpetuity', source: require('../assets/fin25.jpeg'), screen: 'Perpetuity' },
  { name: 'Present Value', source: require('../assets/fin26.jpeg'), screen: 'PresentValue' },
  { name: 'Simple Interest', source: require('../assets/fin27.jpeg'), screen: 'SimpleInterest' },

   { name: 'Asset Allocation', source: require('../assets/fin28.jpeg'), screen: 'AssetAllocation' },
  { name: 'Cash Flow', source: require('../assets/fin29.jpeg'), screen: 'CashFlow' },
  { name: 'Retirement', source: require('../assets/fin30.jpeg'), screen: 'Retirement' },
  { name: 'Working Capital', source: require('../assets/fin31.jpeg'), screen: 'WorkingCapital' },

   { name: 'Beta', source: require('../assets/fin40.jpeg'), screen: 'Beta' },
  { name: 'Market Capitalization', source: require('../assets/fin33.jpeg'), screen: 'MarketCapitalization' },
  { name: 'Earnings PerShare', source: require('../assets/fin36.jpeg'), screen: 'EarningsPerShare' },
  { name: 'Stock', source: require('../assets/fin35.jpeg'), screen: 'Stock' },

 { name: 'Service Tax', source: require('../assets/fin34.jpeg'), screen: 'ServiceTax' },

  { name: 'Percentage Calculator', source: require('../assets/fin37.jpeg'), screen: 'PercentageCalculator' },
  { name: 'Tip Calculator', source: require('../assets/fin38.jpeg'), screen: 'TipCalculator' },
  { name: 'Capital Asset Pricing Model', source: require('../assets/fin39.jpeg'), screen: 'CapitalAssetPricingModel' },
  { name: 'Cost Of Capital', source: require('../assets/fin32.jpeg'), screen: 'CostOfCapital' },


];

const Favorites = () => {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  // Function to save favorites to AsyncStorage
  const saveFavorites = async (favorites) => {
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  };

  // Load favorites when the component mounts
  useEffect(() => {
    loadFavorites();
  }, []);

  // Update AsyncStorage whenever favorites change
  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  const addFavorite = (unit) => {
    if (!favorites.find((item) => item.name === unit.name)) {
      const updatedFavorites = [...favorites, unit];
      setFavorites(updatedFavorites);
      setModalVisible(false);
    } else {
      Alert.alert('Already Added', `${unit.name} is already in favorites.`);
    }
  };

  const removeFavorite = (unitName) => {
    const updatedFavorites = favorites.filter((item) => item.name !== unitName);
    setFavorites(updatedFavorites);
  };

  const navigateToScreen = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={tw`flex-1 p-4 bg-black`}>

      <TouchableOpacity
        style={tw`bg-green-700 py-3 rounded-lg mb-4`}
        onPress={() => setModalVisible(true)}
      >
        <Text style={tw`text-white text-center text-lg`}>Add Favorite Unit</Text>
      </TouchableOpacity>

      <FlatList
        data={favorites}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item }) => (
          <View style={tw`flex-row items-center mb-3`}>
            <UnitCard
              item={item}
              onPress={() => navigateToScreen(item.screen)}
            />
            <TouchableOpacity
              style={tw`ml-2 bg-red-500 py-2 px-3 rounded-lg`}
              onPress={() => removeFavorite(item.name)}
            >
              <Text style={tw`text-white text-lg`}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={tw`text-center text-gray-600 mt-4`}>
            No favorite units added yet.
          </Text>
        }
      />

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={tw`flex-1 justify-center items-center bg-black p-4`}>
          <Text style={tw`text-xl font-bold mb-6 text-white`}>Select a Unit</Text>
          <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
            {unitOptions.map((unit, index) => (
              <UnitCard
                key={index}
                item={unit}
                onPress={() => addFavorite(unit)}
              />
            ))}
          </ScrollView>
          <TouchableOpacity
            style={tw`mt-6 bg-green-700 py-3 px-6 rounded-lg`}
            onPress={() => setModalVisible(false)}
          >
            <Text style={tw`text-white text-center text-lg`}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Favorites;
