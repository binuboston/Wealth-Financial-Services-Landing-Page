/**
 * Investment Calculator Utilities
 * Calculation logic and formatting functions
 */

export interface CalculatorResults {
  futureValue: number;
  totalInvestment: number;
  totalReturns: number;
  returnPercentage: number;
}

/**
 * Calculate SIP (Systematic Investment Plan) returns
 * Formula: FV = P * [((1 + r)^n - 1) / r] * (1 + r)
 * where:
 * - P = Monthly investment
 * - r = Monthly rate of return (annual rate / 12 / 100)
 * - n = Number of months
 */
export function calculateSIP(
  monthlyInvestment: number,
  expectedReturn: number,
  timePeriod: number
): CalculatorResults {
  if (monthlyInvestment <= 0 || expectedReturn <= 0 || timePeriod <= 0) {
    return {
      futureValue: 0,
      totalInvestment: 0,
      totalReturns: 0,
      returnPercentage: 0,
    };
  }

  const monthlyRate = expectedReturn / 12 / 100;
  const months = timePeriod * 12;

  // Future Value calculation with monthly compounding
  const futureValue =
    monthlyInvestment *
    (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate));

  const totalInvestment = monthlyInvestment * months;
  const totalReturns = futureValue - totalInvestment;
  const returnPercentage = totalInvestment > 0 
    ? (totalReturns / totalInvestment) * 100 
    : 0;

  return {
    futureValue: Math.round(futureValue),
    totalInvestment: Math.round(totalInvestment),
    totalReturns: Math.round(totalReturns),
    returnPercentage: Math.round(returnPercentage * 100) / 100,
  };
}

/**
 * Calculate Lumpsum investment returns
 * Formula: FV = PV * (1 + r)^n
 * where:
 * - PV = Present Value (lumpsum amount)
 * - r = Annual rate of return (as decimal)
 * - n = Number of years
 */
export function calculateLumpsum(
  lumpsumAmount: number,
  expectedReturn: number,
  timePeriod: number
): CalculatorResults {
  if (lumpsumAmount <= 0 || expectedReturn <= 0 || timePeriod <= 0) {
    return {
      futureValue: 0,
      totalInvestment: 0,
      totalReturns: 0,
      returnPercentage: 0,
    };
  }

  const annualRate = expectedReturn / 100;
  const futureValue = lumpsumAmount * Math.pow(1 + annualRate, timePeriod);
  const totalReturns = futureValue - lumpsumAmount;
  const returnPercentage = lumpsumAmount > 0 
    ? (totalReturns / lumpsumAmount) * 100 
    : 0;

  return {
    futureValue: Math.round(futureValue),
    totalInvestment: lumpsumAmount,
    totalReturns: Math.round(totalReturns),
    returnPercentage: Math.round(returnPercentage * 100) / 100,
  };
}

/**
 * Format currency value with Indian numbering system
 * Examples: ₹1.2L, ₹50K, ₹1.5Cr
 */
export function formatCurrency(
  value: number,
  options?: {
    currency?: string;
    locale?: string;
    compact?: boolean;
  }
): string {
  const {
    currency = '₹',
    locale = 'en-IN',
    compact = true,
  } = options || {};

  if (value === 0) return `${currency}0`;

  if (compact) {
    // Indian numbering system
    if (value >= 10000000) {
      return `${currency}${(value / 10000000).toFixed(2)}Cr`;
    } else if (value >= 100000) {
      return `${currency}${(value / 100000).toFixed(2)}L`;
    } else if (value >= 1000) {
      return `${currency}${(value / 1000).toFixed(1)}K`;
    }
    return `${currency}${value.toLocaleString(locale)}`;
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Format percentage value
 */
export function formatPercentage(value: number, decimals: number = 1): string {
  return `${value.toFixed(decimals)}%`;
}

/**
 * Clamp value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * Round value to nearest step
 */
export function roundToStep(value: number, step: number): number {
  return Math.round(value / step) * step;
}





