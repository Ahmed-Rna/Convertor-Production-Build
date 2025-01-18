import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';


const InvestmentAndReturns = [
  { name: 'CAGR', source: require('../../assets/cagr2.jpeg'), screen: 'CAGR' },
  { name: 'Capital Gains', source: require('../../assets/capitalgain2.jpeg'), screen: 'CapitalGains' },
  { name: 'Dividend Yield', source: require('../../assets/dividend2.jpeg'), screen: 'DividendYield' },
  { name: 'Internal Rate', source: require('../../assets/internalrate2.jpeg'), screen: 'InternalRateOfReturn' },
  { name: 'Return On Investment', source: require('../../assets/f1.jpeg'), screen: 'ReturnOnInvestment' },
  { name: 'Value At Risk', source: require('../../assets/f7.jpeg'), screen: 'ValueAtRisk' },
  { name: 'Yield To Maturity', source: require('../../assets/f2.jpeg'), screen: 'YieldToMaturity' },

];

const FinancialRatios = [
  { name: 'Debt Service', source: require('../../assets/f8.jpeg'), screen: 'DebtServiceCoverageRatio' },
  { name: 'Debt To Equity Ratio', source: require('../../assets/f3.jpeg'), screen: 'DebtToEquityRatio' },
  { name: 'Debt To Income Ratio', source: require('../../assets/f9.jpeg'), screen: 'DebtToIncomeRatio' },
  { name: 'Gross Profit Margin', source: require('../../assets/f4.jpeg'), screen: 'GrossProfitMargin' },
  { name: 'Liquidity Ratios', source: require('../../assets/f5.jpeg'), screen: 'LiquidityRatios' },
  { name: 'Operating Profit Margin', source: require('../../assets/f6.jpeg'), screen: 'OperatingProfitMargin' },
  { name: 'Price To Earning Ratio', source: require('../../assets/fin14.jpeg'), screen: 'PriceToEarningRatio' },

];

const BankingAndLoans = [
  { name: 'CarLoan', source: require('../../assets/fin15.jpeg'), screen: 'CarLoan' },
  { name: 'Certificate Of Deposit', source: require('../../assets/fin16.jpeg'), screen: 'CertificateOfDeposit' },
  { name: 'EMI', source: require('../../assets/fin17.jpeg'), screen: 'EMI' },
  { name: 'Fixed Deposit', source: require('../../assets/fin18.jpeg'), screen: 'FixedDeposit' },
  { name: 'Loan', source: require('../../assets/fin19.jpeg'), screen: 'Loan' },
  { name: 'Mortgage', source: require('../../assets/fin20.jpeg'), screen: 'Mortgage' },

];

const InterestAndTimeValueOfMoney = [
  { name: 'Annuity', source: require('../../assets/fin21.jpeg'), screen: 'Annuity' },
  { name: 'Compound Interest', source: require('../../assets/fin22.jpeg'), screen: 'CompoundInterest' },
  { name: 'Discount', source: require('../../assets/fin23.jpeg'), screen: 'Discount' },
  { name: 'Future Value', source: require('../../assets/fin24.jpeg'), screen: 'FutureValue' },
  { name: 'Perpetuity', source: require('../../assets/fin25.jpeg'), screen: 'Perpetuity' },
  { name: 'Present Value', source: require('../../assets/fin26.jpeg'), screen: 'PresentValue' },
  { name: 'Simple Interest', source: require('../../assets/fin27.jpeg'), screen: 'SimpleInterest' },

];

const FinancialPlanningAndManagement = [
  { name: 'Asset Allocation', source: require('../../assets/fin28.jpeg'), screen: 'AssetAllocation' },
  { name: 'Cash Flow', source: require('../../assets/fin29.jpeg'), screen: 'CashFlow' },
  { name: 'Retirement', source: require('../../assets/fin30.jpeg'), screen: 'Retirement' },
  { name: 'Working Capital', source: require('../../assets/fin31.jpeg'), screen: 'WorkingCapital' },

];

const StockMarketAndTrading = [
  { name: 'Beta', source: require('../../assets/fin40.jpeg'), screen: 'Beta' },
  { name: 'Market Capitalization', source: require('../../assets/fin33.jpeg'), screen: 'MarketCapitalization' },
  { name: 'Earnings PerShare', source: require('../../assets/fin36.jpeg'), screen: 'EarningsPerShare' },
  { name: 'Stock', source: require('../../assets/fin35.jpeg'), screen: 'Stock' },

];

const TaxationAndCharges = [
  { name: 'Service Tax', source: require('../../assets/fin34.jpeg'), screen: 'ServiceTax' },

];

const CalculatorsAndTools = [
  { name: 'Percentage Calculator', source: require('../../assets/fin37.jpeg'), screen: 'PercentageCalculator' },
  { name: 'Tip Calculator', source: require('../../assets/fin38.jpeg'), screen: 'TipCalculator' },

];

const CostOfCapitalAndValuation = [
  { name: 'Capital Asset Pricing Model', source: require('../../assets/fin39.jpeg'), screen: 'CapitalAssetPricingModel' },
  { name: 'Cost Of Capital', source: require('../../assets/fin32.jpeg'), screen: 'CostOfCapital' },

];

const Finance = () => {
  const [isInvestmentAndReturns, setInvestmentAndReturns] = useState(true);
  const [isFinancialRatios, setFinancialRatios] = useState(true);
  const [isBankingAndLoans, setBankingAndLoans] = useState(true);
  const [isInterestAndTimeValueOfMoney, setInterestAndTimeValueOfMoney] = useState(true);
  const [isFinancialPlanningAndManagement, setFinancialPlanningAndManagement] = useState(true);
  const [isStockMarketAndTrading, setStockMarketAndTrading] = useState(true);
  const [isTaxationAndCharges, setTaxationAndCharges] = useState(true);
  const [isCalculatorsAndTools, setCalculatorsAndTools] = useState(true);
  const [isCostOfCapitalAndValuation, setCostOfCapitalAndValuation] = useState(true);

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
          source={require('../../assets/Finance1.jpeg')}
           resizeMode="stretch"
        />

        {/* Unit Views */}
        <Text style={tw`border border-slate-100 rounded-2xl mt-2 mt-2 ml-2 mt-2 text-zinc-50 text-xl font-bold p-2 bg-current`}>
          FINANCE
        </Text>

        {/* Common Dropdown Button */}
        <View style={tw`flex-row items-center mt-5 ml-4`}>
          <Image
            style={tw`w-10 h-10 mr-4`}
            source={require('../../assets/InvestmentAndReturns.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setInvestmentAndReturns(!isInvestmentAndReturns)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Investment and Returns</Text>
            <Icon name={isInvestmentAndReturns ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isInvestmentAndReturns && (
          <View style={tw`bg-grey rounded-lg mt-1 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {InvestmentAndReturns.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-28 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
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
            source={require('../../assets/FinancialRatios.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setFinancialRatios(!isFinancialRatios)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Financial Ratios</Text>
            <Icon name={isFinancialRatios ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isFinancialRatios && (
          <View style={tw`bg-grey rounded-lg mt-4 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {FinancialRatios.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-30 w-26 p-4 mb-3 rounded flex-col items-center p-3 ml-2 border-b border-gray-200`}
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
            source={require('../../assets/BankingAndLoans.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setBankingAndLoans(!isBankingAndLoans)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Banking and Loans</Text>
            <Icon name={isBankingAndLoans ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isBankingAndLoans && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg  p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {BankingAndLoans.map((item, index) => (
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
            source={require('../../assets/InterestAndTimeValueOfMoney.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setInterestAndTimeValueOfMoney(!isInterestAndTimeValueOfMoney)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Interest and Time Value</Text>
            <Icon name={isInterestAndTimeValueOfMoney ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isInterestAndTimeValueOfMoney && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {InterestAndTimeValueOfMoney.map((item, index) => (
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
            source={require('../../assets/FinancialPlanningAndManagement.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setFinancialPlanningAndManagement(!isFinancialPlanningAndManagement)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Financial Planning</Text>
            <Icon name={isFinancialPlanningAndManagement ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isFinancialPlanningAndManagement && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {FinancialPlanningAndManagement.map((item, index) => (
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
            source={require('../../assets/StockMarketAndTrading.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setStockMarketAndTrading(!isStockMarketAndTrading)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Stock Market and Trading</Text>
            <Icon name={isStockMarketAndTrading ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isStockMarketAndTrading && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {StockMarketAndTrading.map((item, index) => (
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
            source={require('../../assets/TaxationAndCharges.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setTaxationAndCharges(!isTaxationAndCharges)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Taxation and Charges</Text>
            <Icon name={isTaxationAndCharges ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isTaxationAndCharges && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {TaxationAndCharges.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-25 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
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
            source={require('../../assets/CalculatorsAndTools.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setCalculatorsAndTools(!isCalculatorsAndTools)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Calculators and Tools</Text>
            <Icon name={isCalculatorsAndTools ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isCalculatorsAndTools && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {CalculatorsAndTools.map((item, index) => (
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
            source={require('../../assets/CostOfCapitalAndValuation.jpeg')}
          />
          <TouchableOpacity
            onPress={() => setCostOfCapitalAndValuation(!isCostOfCapitalAndValuation)}
            style={tw`flex-row items-center`}
          >
            <Text style={tw`text-zinc-50 text-xl font-bold mr-2`}>Cost of Capital</Text>
            <Icon name={isCostOfCapitalAndValuation ? 'chevron-up' : 'chevron-down'} size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Dropdown Content */}
        {isCostOfCapitalAndValuation && (
          <View style={tw`bg-grey rounded-lg mt-2 shadow-lg p-2`}>
            <ScrollView contentContainerStyle={tw`pb-4 flex-row flex-wrap`}>
              {CostOfCapitalAndValuation.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(item.screen)}
                  style={tw`border border-slate-100 bg-current h-38 w-26 p-4 rounded mt-2 flex-col items-center p-3 ml-2 border-b border-gray-200`}
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

export default Finance;

