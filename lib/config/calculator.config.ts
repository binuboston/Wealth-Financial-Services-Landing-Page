/**
 * Investment Calculator Configuration
 * Centralized configuration for SIP and Lumpsum calculators
 */

export interface CalculatorFieldConfig {
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  unit: string;
  suffix?: string;
  color: string;
}

export interface CalculatorTypeConfig {
  monthlyInvestment?: CalculatorFieldConfig;
  lumpsumAmount?: CalculatorFieldConfig;
  expectedReturn: CalculatorFieldConfig;
  timePeriod: CalculatorFieldConfig;
}

export interface CalculatorConfig {
  sip: CalculatorTypeConfig;
  lumpsum: CalculatorTypeConfig;
  display: {
    currency: string;
    locale: string;
    showBreakdown: boolean;
  };
  formatting: {
    currencySymbol: string;
    thousandSeparator: boolean;
    decimalPlaces: number;
  };
}

export const calculatorConfig: CalculatorConfig = {
  sip: {
    monthlyInvestment: {
      label: 'Monthly Investment',
      min: 1000,
      max: 100000,
      step: 500,
      defaultValue: 5000,
      unit: '₹',
      suffix: '/month',
      color: '#68c0ae',
    },
    expectedReturn: {
      label: 'Expected Return',
      min: 1,
      max: 25,
      step: 0.5,
      defaultValue: 12,
      unit: '%',
      suffix: ' p.a.',
      color: '#68c0ae',
    },
    timePeriod: {
      label: 'Time Period',
      min: 1,
      max: 30,
      step: 1,
      defaultValue: 10,
      unit: 'Years',
      color: '#9ece6c',
    },
  },
  lumpsum: {
    lumpsumAmount: {
      label: 'Lumpsum Amount',
      min: 10000,
      max: 10000000,
      step: 10000,
      defaultValue: 100000,
      unit: '₹',
      color: '#68c0ae',
    },
    expectedReturn: {
      label: 'Expected Return',
      min: 1,
      max: 25,
      step: 0.5,
      defaultValue: 12,
      unit: '%',
      suffix: ' p.a.',
      color: '#68c0ae',
    },
    timePeriod: {
      label: 'Time Period',
      min: 1,
      max: 30,
      step: 1,
      defaultValue: 10,
      unit: 'Years',
      color: '#9ece6c',
    },
  },
  display: {
    currency: 'INR',
    locale: 'en-IN',
    showBreakdown: true,
  },
  formatting: {
    currencySymbol: '₹',
    thousandSeparator: true,
    decimalPlaces: 2,
  },
};





