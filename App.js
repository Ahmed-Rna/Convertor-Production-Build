import Volume from './components/physics/Common/Volume';
import Favorites from './components/Favorites';
import Area from './components/physics/Common/Area';
import FuelEfficiency from './components/physics/Common/FuelEfficiency';
import Speed from './components/physics/Common/Speed';
import Weight from './components/physics/Common/Weight';
import Prefix from './components/physics/Common/Prefix';
import Length from './components/physics/Common/Length';
import Profile from './components/physics/Common/Profile';

//---------Engg. units -------------- 

import Acceleration from './components/physics/Engineering/Acceleration';
import Angle from './components/physics/Engineering/Angle';
import Density from './components/physics/Engineering/Density';
import Force from './components/physics/Engineering/Force';
import HeatCapacity from './components/physics/Engineering/HeatCapacity';
import HeatDensity from './components/physics/Engineering/HeatDesnity';
import Inertia from './components/physics/Engineering/Inertia';
import Pressure from './components/physics/Engineering/Pressure';
import Sound from './components/physics/Engineering/Sound';
import Torque from './components/physics/Engineering/Torque';

//---------Fluids units -------------- 

import Viscosity from './components/physics/Fluids/Viscosity';
import Concentration from './components/physics/Fluids/Concentration';
import Flow from './components/physics/Fluids/Flow';
import SolutionConverter from './components/physics/Fluids/SolutionConverter';
import SurfaceTension from './components/physics/Fluids/SurfaceTension';

//---------Electricity units -------------- 

import Charge from './components/physics/Electricity/Charge';
import Conductance from './components/physics/Electricity/Conductance';
import ConductivityConverter from './components/physics/Electricity/ConductivityConverter';
import Energy from './components/physics/Electricity/Energy';
import Current from './components/physics/Electricity/Current';
import FieldStrength from './components/physics/Electricity/FieldStrength';
import Inductance from './components/physics/Electricity/Inductance';
import Potential from './components/physics/Electricity/Potential';
import Power from './components/physics/Electricity/Power';
import Resistivity from './components/physics/Electricity/Resistivity';
import Resistance from './components/physics/Electricity/Resistance';
import SurfaceCharge from './components/physics/Electricity/SurfaceCharge';
import VolumeCharge from './components/physics/Electricity/VolumeCharge';

//---------Computer units -------------- 

import Images from './components/physics/Computer/Images';
import Storage from './components/physics/Computer/Storage';
import ResolutionConverter from './components/physics/Computer/ResolutionConverter';

//---------Light units -------------- 

import Frequency from './components/physics/Light/Frequency';
import Illumination from './components/physics/Light/Illumination';
import Luminance from './components/physics/Light/Luminance';

//---------Time units -------------- 

import Time from './components/physics/Time/Time';

//---------Magnet units -------------- 

import Magnet from './components/physics/Magnet/Magnet';
import FluxDensity from './components/physics/Magnet/FluxDensity';


//------------------------------------------------------------------------------------------------


//---------Area units -------------- 

import Circle from './components/mathematics/Areas/Circle';
import Triangle from './components/mathematics/Areas/Triangle';
import Rectangle from './components/mathematics/Areas/Rectangle';
import Trapezoid from './components/mathematics/Areas/Trapezoid';

//---------Volume units -------------- 

import Cone from './components/mathematics/Volumes/Cone';
import Cube from './components/mathematics/Volumes/Cube';
import Cylinder from './components/mathematics/Volumes/Cylinder';
import Tent from './components/mathematics/Volumes/Tent';

//---------Surface Area units -------------- 

import SCube from './components/mathematics/SurfaceArea/SCube';
import SCylinder from './components/mathematics/SurfaceArea/SCylinder';
import Sphere from './components/mathematics/SurfaceArea/Sphere';

//---------Perimeter units -------------- 

import Prectangle from './components/mathematics/Perimeters/Prectangle';
import Psquare from './components/mathematics/Perimeters/Psquare';
import Ptriangle from './components/mathematics/Perimeters/Ptriangle';

//---------Stats units -------------- 

import Mean from './components/statistics/Central Tendency Units/Mean';
import Median from './components/statistics/Central Tendency Units/Median';
import Mode from './components/statistics/Central Tendency Units/Mode';


import Range from './components/statistics/Variability/Range';
import SD from './components/statistics/Variability/SD';
import Variance from './components/statistics/Variability/Variance';


import Correlation from './components/statistics/Probability Units/Correlation';
import Regression from './components/statistics/Probability Units/Regression';

import Absolute from './components/statistics/Frequency Units/Absolute';
import Commulative from './components/statistics/Frequency Units/Commulative';
import Relative from './components/statistics/Frequency Units/Relative';


import ChiSquare from './components/statistics/Hypothesis Testing/ChiSquare';
// import Degree from './Hypothesis Testing/Degree';
import PValue from './components/statistics/Hypothesis Testing/PValue';
import ZScore from './components/statistics/Hypothesis Testing/ZScore';


import MarginOfError from './components/statistics/Sampling Units/MarginOfError';
import SampleSize from './components/statistics/Sampling Units/SampleSize';
import StandardError from './components/statistics/Sampling Units/StandardError';


import Percentile from './components/statistics/Miscellaneous Stats/Percentile';
import ConfidenceInterval from './components/statistics/Miscellaneous Stats/ConfidenceInterval';
import EffectSize from './components/statistics/Miscellaneous Stats/EffectSize';

//------------------------------------------------------------------------------------------------


//---------Medical units -------------- 

//--------- Blood Chemistry and Biochemical Markers units -------------- 

import Calcium from './components/Medical/BloodChemistryAndBiochemicalMarkers/Calcium';
import Cholesterol from './components/Medical/BloodChemistryAndBiochemicalMarkers/Cholesterol';
import Enzymes from './components/Medical/BloodChemistryAndBiochemicalMarkers/Enzymes';
import Glucose from './components/Medical/BloodChemistryAndBiochemicalMarkers/Glucose';

//--------- Vital Signs and Physical Measurements -------------- 

import BloodPressure from './components/Medical/VitalSignsAndPhysicalMeasurements/BloodPressure';
import BodyTemperature from './components/Medical/VitalSignsAndPhysicalMeasurements/BodyTemperature';
import OxygenLevel from './components/Medical/VitalSignsAndPhysicalMeasurements/OxygenLevel';
import HeartRate from './components/Medical/VitalSignsAndPhysicalMeasurements/HeartRate';
import BodyWeight from './components/Medical/VitalSignsAndPhysicalMeasurements/BodyWeight';

//--------- Clinical and Diagnostic Parameters -------------- 

import Haemoglobin from './components/Medical/ClinicalAndDiagnosticParameters/Haemoglobin';
import BloodGas from './components/Medical/ClinicalAndDiagnosticParameters/BloodGas';
import PregnancyHormone from './components/Medical/ClinicalAndDiagnosticParameters/PregnancyHormone';

//--------- Dosage and Nutritional Indicators -------------- 

import Dosage from './components/Medical/DosageAndNutritionalIndicators/Dosage';
import NutrientElectrolyte from './components/Medical/DosageAndNutritionalIndicators/NutrientElectrolyte';

//--------- Proteins and Protein-Related Indicators -------------- 

import Albumin from './components/Medical/ProteinsAndProteinRelatedIndicators/Albumin';
import Ferritin from './components/Medical/ProteinsAndProteinRelatedIndicators/Ferritin';

//--------- Kidney Function Indicators -------------- 

import Creatinine from './components/Medical/KidneyFunctionIndicators/Creatinine';
import Urea from './components/Medical/KidneyFunctionIndicators/Urea';


//------------------------------------------------------------------------------------------------


//---------Finance units -------------- 

//---------Investment and Returns units -------------- 

import CapitalGains from './components/Finance/InvestmentAndReturns/CapitalGains';
import ReturnOnInvestment from './components/Finance/InvestmentAndReturns/ReturnOnInvestment';
import CAGR from './components/Finance/InvestmentAndReturns/CAGR';
import YieldToMaturity from './components/Finance/InvestmentAndReturns/YieldToMaturity';
import DividendYield from './components/Finance/InvestmentAndReturns/DividendYield';
import InternalRateOfReturn from './components/Finance/InvestmentAndReturns/InternalRateOfReturn';
import ValueAtRisk from './components/Finance/InvestmentAndReturns/ValueAtRisk';

//---------Financial Ratios units -------------- 

import DebtToEquityRatio from './components/Finance/FinancialRatios/DebtToEquityRatio';
import PriceToEarningRatio from './components/Finance/FinancialRatios/PriceToEarningRatio';
import LiquidityRatios from './components/Finance/FinancialRatios/LiquidityRatios';
import GrossProfitMargin from './components/Finance/FinancialRatios/GrossProfitMargin';
import OperatingProfitMargin from './components/Finance/FinancialRatios/OperatingProfitMargin';
import DebtServiceCoverageRatio from './components/Finance/FinancialRatios/DebtServiceCoverageRatio';
import DebtToIncomeRatio from './components/Finance/FinancialRatios/DebtToIncomeRatio';

//---------Banking and Loans units -------------- 

import Loan from './components/Finance/BankingAndLoans/Loan';
import Mortgage from './components/Finance/BankingAndLoans/Mortgage';
import CarLoan from './components/Finance/BankingAndLoans/CarLoan';
import FixedDeposit from './components/Finance/BankingAndLoans/FixedDeposit';
import CertificateOfDeposit from './components/Finance/BankingAndLoans/CertificateOfDeposit';
import EMI from './components/Finance/BankingAndLoans/EMI';

//---------Interest and Time Value Of Money units -------------- 

import SimpleInterest from './components/Finance/InterestAndTimeValueOfMoney/SimpleInterest';
import CompoundInterest from './components/Finance/InterestAndTimeValueOfMoney/CompoundInterest';
import PresentValue from './components/Finance/InterestAndTimeValueOfMoney/PresentValue';
import FutureValue from './components/Finance/InterestAndTimeValueOfMoney/FutureValue';
import Discount from './components/Finance/InterestAndTimeValueOfMoney/Discount';
import Annuity from './components/Finance/InterestAndTimeValueOfMoney/Annuity';
import Perpetuity from './components/Finance/InterestAndTimeValueOfMoney/Perpetuity';

//---------Financial Planning and Management units -------------- 

import WorkingCapital from './components/Finance/FinancialPlanningAndManagement/WorkingCapital';
import CashFlow from './components/Finance/FinancialPlanningAndManagement/CashFlow';
import AssetAllocation from './components/Finance/FinancialPlanningAndManagement/AssetAllocation';
import Retirement from './components/Finance/FinancialPlanningAndManagement/Retirement';

//---------Stock Market and Trading units -------------- 

import Stock from './components/Finance/StockMarketAndTrading/Stock';
import MarketCapitalization from './components/Finance/StockMarketAndTrading/MarketCapitalization';
import Beta from './components/Finance/StockMarketAndTrading/Beta';
import EarningsPerShare from './components/Finance/StockMarketAndTrading/EarningsPerShare';

//---------Taxation and Charges units -------------- 

import ServiceTax from './components/Finance/TaxationAndCharges/ServiceTax';

//---------Calculators and Tools units -------------- 

import PercentageCalculator from './components/Finance/CalculatorsAndTools/PercentageCalculator';
import TipCalculator from './components/Finance/CalculatorsAndTools/TipCalculator';

//---------Cost Of Capital and Valuation units -------------- 

import CostOfCapital from './components/Finance/CostOfCapitalAndValuation/CostOfCapital';
import CapitalAssetPricingModel from './components/Finance/CostOfCapitalAndValuation/CapitalAssetPricingModel';


//------------------------------------------------------------------------------------------------


//---------Chemistry units -------------- 

//---------Concentration units --------------

import Molarity from './components/Chemistry/Concentration/Molarity';
import Molality from './components/Chemistry/Concentration/Molality';
import Normality from './components/Chemistry/Concentration/Normality';
import WeightPercent from './components/Chemistry/Concentration/WeightPercent';
import VolumePercent from './components/Chemistry/Concentration/VolumePercent';
import MassPercent from './components/Chemistry/Concentration/MassPercent';
import PartsPerMillion from './components/Chemistry/Concentration/PartsPerMillion';
import PartsPerBillion from './components/Chemistry/Concentration/PartsPerBillion';

//---------Pressure units --------------

import Pascal from './components/Chemistry/Pressure/Pascal';
import Bar from './components/Chemistry/Pressure/Bar';
import Atmosphere from './components/Chemistry/Pressure/Atmosphere';
import Torr from './components/Chemistry/Pressure/Torr';
import MillimeterOfMercury from './components/Chemistry/Pressure/MillimeterOfMercury';
import PoundsPerSquareInch from './components/Chemistry/Pressure/PoundsPerSquareInch';

//---------Energy and Heat units --------------

import Joule from './components/Chemistry/EnergyAndHeat/Joule';
import Kilojoule from './components/Chemistry/EnergyAndHeat/Kilojoule';
import Calorie from './components/Chemistry/EnergyAndHeat/Calorie';
import Kilocalorie from './components/Chemistry/EnergyAndHeat/Kilocalorie';
import Electronvolt from './components/Chemistry/EnergyAndHeat/Electronvolt';
import BritishThermalUnit from './components/Chemistry/EnergyAndHeat/BritishThermalUnit';

//---------Force units --------------

import Dyne from './components/Chemistry/Force/Dyne';
import Newton from './components/Chemistry/Force/Newton';
import PoundForce from './components/Chemistry/Force/PoundForce';

//---------Radioactivity and Radiation units --------------

import Becquerel from './components/Chemistry/RadioactivityAndRadiation/Becquerel';
import Curie from './components/Chemistry/RadioactivityAndRadiation/Curie';
import Gray from './components/Chemistry/RadioactivityAndRadiation/Gray';
import Sievert from './components/Chemistry/RadioactivityAndRadiation/Sievert';

//---------Chemical Amount units --------------

import Mole from './components/Chemistry/ChemicalAmount/Mole';
import MolecularWeight from './components/Chemistry/ChemicalAmount/MolecularWeight';
import EquivalentWeight from './components/Chemistry/ChemicalAmount/EquivalentWeight';

//---------Flow and Rate units --------------

import MassFlowRate from './components/Chemistry/FlowAndRate/MassFlowRate';
import MolarFlowRate from './components/Chemistry/FlowAndRate/MolarFlowRate';
import VolumeFlowRate from './components/Chemistry/FlowAndRate/VolumeFlowRate';

//---------Acidity and Basicity units --------------

import pH from './components/Chemistry/AcidityAndBasicity/pH';
import pKa_pKb from './components/Chemistry/AcidityAndBasicity/pKa_pKb';

//---------Refractive Properties --------------

import RefractiveIndex from './components/Chemistry/RefractiveProperties/RefractiveIndex';

//---------Optical Properties --------------

import Degree from './components/Chemistry/OpticalProperties/Degree';

//---------Catalysis and Reaction Rates --------------

import ActivationEnergy from './components/Chemistry/CatalysisAndReactionRates/ActivationEnergy';
import RateConstant from './components/Chemistry/CatalysisAndReactionRates/RateConstant';

//---------Stoichiometry and Yield --------------

import ActualYield from './components/Finance/StoichiometryAndYield/ActualYield';
import PercentYield from './components/Finance/StoichiometryAndYield/PercentYield';
import TheoreticalYield from './components/Finance/StoichiometryAndYield/TheoreticalYield';

//---------Solution Properties --------------

import BoilingPointElevation from './components/Chemistry/SolutionProperties/BoilingPointElevation';
import FreezingPointDepression from './components/Chemistry/SolutionProperties/FreezingPointDepression';
import Osmolality from './components/Chemistry/SolutionProperties/Osmolality';
import Osmolarity from './components/Chemistry/SolutionProperties/Osmolarity';

//---------Spectroscopy and Absorption --------------

import Absorbance from './components/Chemistry/SpectroscopyAndAbsorption/Absorbance';
import Wavelength from './components/Chemistry/SpectroscopyAndAbsorption/Wavelength';

//---------Thermodynamic Properties --------------

import Enthalpy from './components/Chemistry/ThermodynamicProperties/Enthalpy';
import Entropy from './components/Chemistry/ThermodynamicProperties/Entropy';
import GibbsFreeEnergy from './components/Chemistry/ThermodynamicProperties/GibbsFreeEnergy';


// //------------------------------------------------------------------------------------------------

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import MyTabs from './MyTabs';
import AboutUs from './components/DrawerNavigation/AboutUs';
import Feedback from './components/DrawerNavigation/Feedback';
import ContactUs from './components/DrawerNavigation/ContactUs';


// Tab Navigator
const Tab = createBottomTabNavigator();
<MyTabs />

// Drawer Navigator
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={StackNavigator} options={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
      }}
      />

      <Drawer.Screen name="Favorites" component={Favorites} options={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
      }} />
      <Drawer.Screen name="Feedback" component={Feedback} />
      <Drawer.Screen name="Contact Us" component={ContactUs} />
      <Drawer.Screen name="About Us" component={AboutUs} />

    </Drawer.Navigator>
  );
}
// Stack Navigator
const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={MyTabs}
        options={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
          headerShown: false,
        }}
      />

      <Stack.Screen name="Volume" component={Volume} options={{ headerShown: false }} />
      <Stack.Screen name="Weight" component={Weight} options={{ headerShown: false }} />
      <Stack.Screen name="Speed" component={Speed} options={{ headerShown: false }} />
      <Stack.Screen name="FuelEfficiency" component={FuelEfficiency} options={{ headerShown: false }} />
      <Stack.Screen name="Prefix" component={Prefix} options={{ headerShown: false }} />
      <Stack.Screen name="Area" component={Area} options={{ headerShown: false }} />
      <Stack.Screen name="Length" component={Length} options={{ headerShown: false }} />

      <Stack.Screen name="Acceleration" component={Acceleration} options={{ headerShown: false }} />
      <Stack.Screen name="Angle" component={Angle} options={{ headerShown: false }} />
      <Stack.Screen name="Density" component={Density} options={{ headerShown: false }} />
      <Stack.Screen name="Force" component={Force} options={{ headerShown: false }} />
      <Stack.Screen name="HeatCapacity" component={HeatCapacity} options={{ headerShown: false }} />
      <Stack.Screen name="HeatDensity" component={HeatDensity} options={{ headerShown: false }} />
      <Stack.Screen name="Inertia" component={Inertia} options={{ headerShown: false }} />
      <Stack.Screen name="Pressure" component={Pressure} options={{ headerShown: false }} />
      <Stack.Screen name="Sound" component={Sound} options={{ headerShown: false }} />
      <Stack.Screen name="Torque" component={Torque} options={{ headerShown: false }} />

      <Stack.Screen name="Viscosity" component={Viscosity} options={{ headerShown: false }} />
      <Stack.Screen name="Concentration" component={Concentration} options={{ headerShown: false }} />
      <Stack.Screen name="Flow" component={Flow} options={{ headerShown: false }} />
      <Stack.Screen name="SolutionConverter" component={SolutionConverter} options={{ headerShown: false }} />
      <Stack.Screen name="SurfaceTension" component={SurfaceTension} options={{ headerShown: false }} />

      <Stack.Screen name="Charge" component={Charge} options={{ headerShown: false }} />
      <Stack.Screen name="Conductance" component={Conductance} options={{ headerShown: false }} />
      <Stack.Screen name="ConductivityConverter" component={ConductivityConverter} options={{ headerShown: false }} />
      <Stack.Screen name="Energy" component={Energy} options={{ headerShown: false }} />
      <Stack.Screen name="Current" component={Current} options={{ headerShown: false }} />
      <Stack.Screen name="FieldStrength" component={FieldStrength} options={{ headerShown: false }} />
      <Stack.Screen name="Inductance" component={Inductance} options={{ headerShown: false }} />
      <Stack.Screen name="Potential" component={Potential} options={{ headerShown: false }} />
      <Stack.Screen name="Power" component={Power} options={{ headerShown: false }} />
      <Stack.Screen name="Resistivity" component={Resistivity} options={{ headerShown: false }} />
      <Stack.Screen name="Resistance" component={Resistance} options={{ headerShown: false }} />
      <Stack.Screen name="SurfaceCharge" component={SurfaceCharge} options={{ headerShown: false }} />
      <Stack.Screen name="VolumeCharge" component={VolumeCharge} options={{ headerShown: false }} />

      <Stack.Screen name="Image" component={Images} options={{ headerShown: false }} />
      <Stack.Screen name="Storage" component={Storage} options={{ headerShown: false }} />
      <Stack.Screen name="ResolutionConverter" component={ResolutionConverter} options={{ headerShown: false }} />

      <Stack.Screen name="Magnet" component={Magnet} options={{ headerShown: false }} />
      <Stack.Screen name="FluxDensity" component={FluxDensity} options={{ headerShown: false }} />

      <Stack.Screen name="Time" component={Time} options={{ headerShown: false }} />

      <Stack.Screen name="Luminance" component={Luminance} options={{ headerShown: false }} />
      <Stack.Screen name="Frequency" component={Frequency} options={{ headerShown: false }} />
      <Stack.Screen name="Illumination" component={Illumination} options={{ headerShown: false }} />

      <Stack.Screen name="Circle" component={Circle} options={{ headerShown: false }} />
      <Stack.Screen name="Triangle" component={Triangle} options={{ headerShown: false }} />
      <Stack.Screen name="Trapezoid" component={Trapezoid} options={{ headerShown: false }} />
      <Stack.Screen name="Rectangle" component={Rectangle} options={{ headerShown: false }} />

      <Stack.Screen name="Cone" component={Cone} options={{ headerShown: false }} />
      <Stack.Screen name="Cube" component={Cube} options={{ headerShown: false }} />
      <Stack.Screen name="Cylinder" component={Cylinder} options={{ headerShown: false }} />
      <Stack.Screen name="Tent" component={Tent} options={{ headerShown: false }} />

      <Stack.Screen name="SCube" component={SCube} options={{ headerShown: false }} />
      <Stack.Screen name="SCylinder" component={SCylinder} options={{ headerShown: false }} />
      <Stack.Screen name="Sphere" component={Sphere} options={{ headerShown: false }} />

      <Stack.Screen name="Psquare" component={Psquare} options={{ headerShown: false }} />
      <Stack.Screen name="Prectangle" component={Prectangle} options={{ headerShown: false }} />
      <Stack.Screen name="Ptriangle" component={Ptriangle} options={{ headerShown: false }} />

      <Stack.Screen name="Mean" component={Mean} options={{ headerShown: false }} />
      <Stack.Screen name="Median" component={Median} options={{ headerShown: false }} />
      <Stack.Screen name="Mode" component={Mode} options={{ headerShown: false }} />

      <Stack.Screen name="Range" component={Range} options={{ headerShown: false }} />
      <Stack.Screen name="SD" component={SD} options={{ headerShown: false }} />
      <Stack.Screen name="Variance" component={Variance} options={{ headerShown: false }} />

      <Stack.Screen name="Correlation" component={Correlation} options={{ headerShown: false }} />
      <Stack.Screen name="Regression" component={Regression} options={{ headerShown: false }} />

      <Stack.Screen name="Absolute" component={Absolute} options={{ headerShown: false }} />
      <Stack.Screen name="Commulative" component={Commulative} options={{ headerShown: false }} />
      <Stack.Screen name="Relative" component={Relative} options={{ headerShown: false }} />

      <Stack.Screen name="ChiSquare" component={ChiSquare} options={{ headerShown: false }} />
      <Stack.Screen name="Degree" component={Degree} options={{ headerShown: false }} />
      <Stack.Screen name="ZScore" component={ZScore} options={{ headerShown: false }} />

      <Stack.Screen name="MarginOfError" component={MarginOfError} options={{ headerShown: false }} />
      <Stack.Screen name="SampleSize" component={SampleSize} options={{ headerShown: false }} />
      <Stack.Screen name="StandardError" component={StandardError} options={{ headerShown: false }} />

      <Stack.Screen name="ConfidenceInterval" component={ConfidenceInterval} options={{ headerShown: false }} />
      <Stack.Screen name="EffectSize" component={EffectSize} options={{ headerShown: false }} />
      <Stack.Screen name="Percentile" component={Percentile} options={{ headerShown: false }} />

      <Stack.Screen name="CapitalGains" component={CapitalGains} options={{ headerShown: false }} />
      <Stack.Screen name="ReturnOnInvestment" component={ReturnOnInvestment} options={{ headerShown: false }} />
      <Stack.Screen name="CAGR" component={CAGR} options={{ headerShown: false }} />
      <Stack.Screen name="YieldToMaturity" component={YieldToMaturity} options={{ headerShown: false }} />
      <Stack.Screen name="DividendYield" component={DividendYield} options={{ headerShown: false }} />
      <Stack.Screen name="InternalRateOfReturn" component={InternalRateOfReturn} options={{ headerShown: false }} />
      <Stack.Screen name="ValueAtRisk" component={ValueAtRisk} options={{ headerShown: false }} />

      <Stack.Screen name="DebtToEquityRatio" component={DebtToEquityRatio} options={{ headerShown: false }} />
      <Stack.Screen name="PriceToEarningRatio" component={PriceToEarningRatio} options={{ headerShown: false }} />
      <Stack.Screen name="LiquidityRatios" component={LiquidityRatios} options={{ headerShown: false }} />
      <Stack.Screen name="GrossProfitMargin" component={GrossProfitMargin} options={{ headerShown: false }} />
      <Stack.Screen name="OperatingProfitMargin" component={OperatingProfitMargin} options={{ headerShown: false }} />
      <Stack.Screen name="DebtServiceCoverageRatio" component={DebtServiceCoverageRatio} options={{ headerShown: false }} />
      <Stack.Screen name="DebtToIncomeRatio" component={DebtToIncomeRatio} options={{ headerShown: false }} />

      <Stack.Screen name="Loan" component={Loan} options={{ headerShown: false }} />
      <Stack.Screen name="Mortgage" component={Mortgage} options={{ headerShown: false }} />
      <Stack.Screen name="CarLoan" component={CarLoan} options={{ headerShown: false }} />
      <Stack.Screen name="FixedDeposit" component={FixedDeposit} options={{ headerShown: false }} />
      <Stack.Screen name="CertificateOfDeposit" component={CertificateOfDeposit} options={{ headerShown: false }} />
      <Stack.Screen name="EMI" component={EMI} options={{ headerShown: false }} />

      <Stack.Screen name="SimpleInterest" component={SimpleInterest} options={{ headerShown: false }} />
      <Stack.Screen name="CompoundInterest" component={CompoundInterest} options={{ headerShown: false }} />
      <Stack.Screen name="PresentValue" component={PresentValue} options={{ headerShown: false }} />
      <Stack.Screen name="FutureValue" component={FutureValue} options={{ headerShown: false }} />
      <Stack.Screen name="Discount" component={Discount} options={{ headerShown: false }} />
      <Stack.Screen name="Annuity" component={Annuity} options={{ headerShown: false }} />
      <Stack.Screen name="Perpetuity" component={Perpetuity} options={{ headerShown: false }} />

      <Stack.Screen name="WorkingCapital" component={WorkingCapital} options={{ headerShown: false }} />
      <Stack.Screen name="CashFlow" component={CashFlow} options={{ headerShown: false }} />
      <Stack.Screen name="AssetAllocation" component={AssetAllocation} options={{ headerShown: false }} />
      <Stack.Screen name="Retirement" component={Retirement} options={{ headerShown: false }} />

      <Stack.Screen name="Stock" component={Stock} options={{ headerShown: false }} />
      <Stack.Screen name="MarketCapitalization" component={MarketCapitalization} options={{ headerShown: false }} />
      <Stack.Screen name="Beta" component={Beta} options={{ headerShown: false }} />
      <Stack.Screen name="EarningsPerShare" component={EarningsPerShare} options={{ headerShown: false }} />

      <Stack.Screen name="ServiceTax" component={ServiceTax} options={{ headerShown: false }} />

      <Stack.Screen name="PercentageCalculator" component={PercentageCalculator} options={{ headerShown: false }} />
      <Stack.Screen name="TipCalculator" component={TipCalculator} options={{ headerShown: false }} />

      <Stack.Screen name="CostOfCapital" component={CostOfCapital} options={{ headerShown: false }} />
      <Stack.Screen name="CapitalAssetPricingModel" component={CapitalAssetPricingModel} options={{ headerShown: false }} />

      <Stack.Screen name="Calcium" component={Calcium} options={{ headerShown: false }} />
      <Stack.Screen name="Cholesterol" component={Cholesterol} options={{ headerShown: false }} />
      <Stack.Screen name="Enzymes" component={Enzymes} options={{ headerShown: false }} />
      <Stack.Screen name="Glucose" component={Glucose} options={{ headerShown: false }} />

      <Stack.Screen name="BloodPressure" component={BloodPressure} options={{ headerShown: false }} />
      <Stack.Screen name="BodyTemperature" component={BodyTemperature} options={{ headerShown: false }} />
      <Stack.Screen name="OxygenLevel" component={OxygenLevel} options={{ headerShown: false }} />
      <Stack.Screen name="HeartRate" component={HeartRate} options={{ headerShown: false }} />
      <Stack.Screen name="BodyWeight" component={BodyWeight} options={{ headerShown: false }} />

      <Stack.Screen name="Haemoglobin" component={Haemoglobin} options={{ headerShown: false }} />
      <Stack.Screen name="BloodGas" component={BloodGas} options={{ headerShown: false }} />
      <Stack.Screen name="PregnancyHormone" component={PregnancyHormone} options={{ headerShown: false }} />

      <Stack.Screen name="Dosage" component={Dosage} options={{ headerShown: false }} />
      <Stack.Screen name="NutrientElectrolyte" component={NutrientElectrolyte} options={{ headerShown: false }} />

      <Stack.Screen name="Albumin" component={Albumin} options={{ headerShown: false }} />
      <Stack.Screen name="Ferritin" component={Ferritin} options={{ headerShown: false }} />

      <Stack.Screen name="Creatinine" component={Creatinine} options={{ headerShown: false }} />
      <Stack.Screen name="Urea" component={Urea} options={{ headerShown: false }} />

      <Stack.Screen name="Molarity" component={Molarity} options={{ headerShown: false }} />
      <Stack.Screen name="Molality" component={Molality} options={{ headerShown: false }} />
      <Stack.Screen name="Normality" component={Normality} options={{ headerShown: false }} />
      <Stack.Screen name="WeightPercent" component={WeightPercent} options={{ headerShown: false }} />
      <Stack.Screen name="VolumePercent" component={VolumePercent} options={{ headerShown: false }} />

      <Stack.Screen name="MassPercent" component={MassPercent} options={{ headerShown: false }} />
      <Stack.Screen name="PartsPerMillion" component={PartsPerMillion} options={{ headerShown: false }} />
      <Stack.Screen name="PartsPerBillion" component={PartsPerBillion} options={{ headerShown: false }} />

      <Stack.Screen name="Pascal" component={Pascal} options={{ headerShown: false }} />
      <Stack.Screen name="Bar" component={Bar} options={{ headerShown: false }} />
      <Stack.Screen name="Atmosphere" component={Atmosphere} options={{ headerShown: false }} />
      <Stack.Screen name="Torr" component={Torr} options={{ headerShown: false }} />
      <Stack.Screen name="MillimeterOfMercury" component={MillimeterOfMercury} options={{ headerShown: false }} />
      <Stack.Screen name="PoundsPerSquareInch" component={PoundsPerSquareInch} options={{ headerShown: false }} />

      <Stack.Screen name="Joule" component={Joule} options={{ headerShown: false }} />
      <Stack.Screen name="Kilojoule" component={Kilojoule} options={{ headerShown: false }} />
      <Stack.Screen name="Calorie" component={Calorie} options={{ headerShown: false }} />
      <Stack.Screen name="Kilocalorie" component={Kilocalorie} options={{ headerShown: false }} />
      <Stack.Screen name="Electronvolt" component={Electronvolt} options={{ headerShown: false }} />
      <Stack.Screen name="BritishThermalUnit" component={BritishThermalUnit} options={{ headerShown: false }} />

      <Stack.Screen name="Newton" component={Newton} options={{ headerShown: false }} />
      <Stack.Screen name="Dyne" component={Dyne} options={{ headerShown: false }} />
      <Stack.Screen name="PoundForce" component={PoundForce} options={{ headerShown: false }} />

      <Stack.Screen name="Becquerel" component={Becquerel} options={{ headerShown: false }} />
      <Stack.Screen name="Curie" component={Curie} options={{ headerShown: false }} />
      <Stack.Screen name="Gray" component={Gray} options={{ headerShown: false }} />
      <Stack.Screen name="Sievert" component={Sievert} options={{ headerShown: false }} />

      <Stack.Screen name="Mole" component={Mole} options={{ headerShown: false }} />
      <Stack.Screen name="MolecularWeight" component={MolecularWeight} options={{ headerShown: false }} />
      <Stack.Screen name="EquivalentWeight" component={EquivalentWeight} options={{ headerShown: false }} />

      <Stack.Screen name="MassFlowRate" component={MassFlowRate} options={{ headerShown: false }} />
      <Stack.Screen name="VolumeFlowRate" component={VolumeFlowRate} options={{ headerShown: false }} />
      <Stack.Screen name="MolarFlowRate" component={MolarFlowRate} options={{ headerShown: false }} />

      <Stack.Screen name="pH" component={pH} options={{ headerShown: false }} />
      <Stack.Screen name="pKa_pKb" component={pKa_pKb} options={{ headerShown: false }} />

      <Stack.Screen name="RefractiveIndex" component={RefractiveIndex} options={{ headerShown: false }} />

      <Stack.Screen name="RateConstant" component={RateConstant} options={{ headerShown: false }} />
      <Stack.Screen name="ActivationEnergy" component={ActivationEnergy} options={{ headerShown: false }} />

      <Stack.Screen name="PercentYield" component={PercentYield} options={{ headerShown: false }} />
      <Stack.Screen name="TheoreticalYield" component={TheoreticalYield} options={{ headerShown: false }} />
      <Stack.Screen name="ActualYield" component={ActualYield} options={{ headerShown: false }} />

      <Stack.Screen name="Osmolarity" component={Osmolarity} options={{ headerShown: false }} />
      <Stack.Screen name="Osmolality" component={Osmolality} options={{ headerShown: false }} />
      <Stack.Screen name="BoilingPointElevation" component={BoilingPointElevation} options={{ headerShown: false }} />
      <Stack.Screen name="FreezingPointDepression" component={FreezingPointDepression} options={{ headerShown: false }} />

      <Stack.Screen name="Wavelength" component={Wavelength} options={{ headerShown: false }} />
      <Stack.Screen name="Absorbance" component={Absorbance} options={{ headerShown: false }} />

      <Stack.Screen name="Enthalpy" component={Enthalpy} options={{ headerShown: false }} />
      <Stack.Screen name="Entropy" component={Entropy} options={{ headerShown: false }} />
      <Stack.Screen name="GibbsFreeEnergy" component={GibbsFreeEnergy} options={{ headerShown: false }} />

      <Stack.Screen name="Favorites" component={Favorites} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />



    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </>
  );
}
