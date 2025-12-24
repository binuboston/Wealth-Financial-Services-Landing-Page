'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, PiggyBank, Wallet } from 'lucide-react';
import { motion } from 'motion/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

// ============================================================================
// Types & Interfaces
// ============================================================================

interface CalculatorResults {
  futureValue: number;
  totalInvestment: number;
  totalReturns: number;
}

interface SliderInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  unit: string;
  color: string;
}

// ============================================================================
// Utility Functions
// ============================================================================

const formatCurrency = (value: number): string => {
  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(2)}Cr`;
  } else if (value >= 100000) {
    return `₹${(value / 100000).toFixed(2)}L`;
  }
  return `₹${(value / 1000).toFixed(0)}K`;
};

// ============================================================================
// Calculator Logic
// ============================================================================

const calculateSIP = (
  monthlyInvestment: number,
  expectedReturn: number,
  timePeriod: number
): CalculatorResults => {
  const monthlyRate = expectedReturn / 12 / 100;
  const months = timePeriod * 12;
  
  const futureValue = monthlyInvestment * 
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * 
    (1 + monthlyRate);
  
  const totalInvestment = monthlyInvestment * months;
  const totalReturns = futureValue - totalInvestment;
  
  return {
    futureValue: Math.round(futureValue),
    totalInvestment: Math.round(totalInvestment),
    totalReturns: Math.round(totalReturns),
  };
};

const calculateLumpsum = (
  lumpsumAmount: number,
  expectedReturn: number,
  timePeriod: number
): CalculatorResults => {
  const futureValue = lumpsumAmount * Math.pow(1 + expectedReturn / 100, timePeriod);
  const totalReturns = futureValue - lumpsumAmount;
  
  return {
    futureValue: Math.round(futureValue),
    totalInvestment: lumpsumAmount,
    totalReturns: Math.round(totalReturns),
  };
};

// ============================================================================
// Reusable Components
// ============================================================================

interface SliderInputPropsExtended extends SliderInputProps {
  isHero?: boolean;
}

function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  unit,
  color,
  isHero = false,
}: SliderInputPropsExtended) {
  const percentage = ((value - min) / (max - min)) * 100;
  
  return (
    <div className={`p-3 rounded-xl ${isHero ? 'bg-white/10 backdrop-blur-sm border-white/20' : 'bg-white border border-[#003448]/10'}`}>
      <div className="flex items-center justify-between mb-2">
        <label className={`text-xs ${isHero ? 'text-white/70' : 'text-[#003448]/60'}`}>{label}</label>
        <span className={`text-sm ${isHero ? 'text-white' : ''}`} style={isHero ? {} : { color }}>
          {label === 'Expected Return' ? `${value}% p.a.` : 
           label === 'Time Period' ? `${value} Years` : 
           `₹${value.toLocaleString()}`}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full h-1 rounded-lg appearance-none cursor-pointer ${isHero ? 'bg-white/20' : 'bg-[#f0f9f6]'}`}
        style={{
          background: isHero 
            ? `linear-gradient(to right, ${color} 0%, ${color} ${percentage}%, rgba(255,255,255,0.2) ${percentage}%, rgba(255,255,255,0.2) 100%)`
            : `linear-gradient(to right, ${color} 0%, ${color} ${percentage}%, #f0f9f6 ${percentage}%, #f0f9f6 100%)`
        }}
      />
    </div>
  );
}

interface ResultsDisplayProps {
  results: CalculatorResults;
  formatCurrency: (value: number) => string;
  isHero?: boolean;
}

function ResultsDisplay({ results, formatCurrency, isHero = false }: ResultsDisplayProps) {
  return (
    <>
      <div className="space-y-2 mb-3">
        <motion.div
          key={results.futureValue}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className={`p-4 rounded-xl text-white ${isHero ? 'bg-white/20 backdrop-blur-sm' : 'bg-gradient-to-br from-[#003448] to-[#004d6b]'}`}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white/70 text-xs mb-1">Future Value</div>
              <div className="text-xl">{formatCurrency(results.futureValue)}</div>
            </div>
            <TrendingUp className="w-8 h-8 opacity-80" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-2">
          <div className={`p-3 rounded-lg ${isHero ? 'bg-white/10 border-white/20 text-white' : 'bg-[#f0f9f6] border border-[#003448]/10'}`}>
            <div className={`text-xs mb-1 ${isHero ? 'text-white/70' : 'text-[#003448]/60'}`}>Invested</div>
            <div className={`text-sm ${isHero ? 'text-white' : 'text-[#003448]'}`}>{formatCurrency(results.totalInvestment)}</div>
          </div>
          <div className={`p-3 rounded-lg ${isHero ? 'bg-white/10 border-white/20 text-white' : 'bg-[#9ece6c]/20 border border-[#9ece6c]/30'}`}>
            <div className={`text-xs mb-1 ${isHero ? 'text-white/70' : 'text-[#003448]/60'}`}>Returns</div>
            <div className={`text-sm ${isHero ? 'text-white' : 'text-[#003448]'}`}>{formatCurrency(results.totalReturns)}</div>
          </div>
        </div>
      </div>

      {/* Visual Breakdown */}
      <div className={`p-3 rounded-xl ${isHero ? 'bg-white/10 backdrop-blur-sm border-white/20' : 'bg-white border border-[#003448]/10'}`}>
        <div className={`text-xs mb-2 ${isHero ? 'text-white/70' : 'text-[#003448]/60'}`}>Investment Breakdown</div>
        <div className={`h-2 rounded-full overflow-hidden flex ${isHero ? 'bg-white/20' : 'bg-[#f0f9f6]'}`}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(results.totalInvestment / results.futureValue) * 100}%` }}
            transition={{ duration: 0.8 }}
            className={isHero ? 'bg-white/40' : 'bg-[#003448]'}
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(results.totalReturns / results.futureValue) * 100}%` }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={isHero ? 'bg-white/60' : 'bg-[#68c0ae]'}
          />
        </div>
      </div>
    </>
  );
}

// ============================================================================
// Main Component
// ============================================================================

interface PhoneMockupWithCalculatorProps {
  variant?: 'default' | 'hero';
}

export function PhoneMockupWithCalculator({ variant = 'default' }: PhoneMockupWithCalculatorProps) {
  const [activeTab, setActiveTab] = useState<'sip' | 'lumpsum'>('sip');
  
  // SIP Calculator State
  const [sipMonthlyInvestment, setSipMonthlyInvestment] = useState(5000);
  const [sipExpectedReturn, setSipExpectedReturn] = useState(12);
  const [sipTimePeriod, setSipTimePeriod] = useState(10);
  
  // Lumpsum Calculator State
  const [lumpsumAmount, setLumpsumAmount] = useState(100000);
  const [lumpsumExpectedReturn, setLumpsumExpectedReturn] = useState(12);
  const [lumpsumTimePeriod, setLumpsumTimePeriod] = useState(10);

  // Calculate Results
  const sipResults = calculateSIP(sipMonthlyInvestment, sipExpectedReturn, sipTimePeriod);
  const lumpsumResults = calculateLumpsum(lumpsumAmount, lumpsumExpectedReturn, lumpsumTimePeriod);

  // Calculator Content Component (reusable for both mobile and desktop)
  const CalculatorContent = ({ isHero = false }: { isHero?: boolean }) => (
    <div className={`p-4 lg:p-4 ${isHero ? 'bg-transparent' : 'bg-gradient-to-b from-[#f0f9f6] to-white'}`}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-8 h-8 ${isHero ? 'bg-white/20 backdrop-blur-sm' : 'bg-[#003448]'} rounded-lg flex items-center justify-center`}>
          <Calculator className={`w-4 h-4 ${isHero ? 'text-white' : 'text-white'}`} />
        </div>
        <div>
          <div className={`text-sm ${isHero ? 'text-white' : 'text-[#003448]'}`}>Investment Calculator</div>
          <div className={`text-xs ${isHero ? 'text-white/70' : 'text-[#003448]/60'}`}>Plan your wealth journey</div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs 
        defaultValue="sip" 
        value={activeTab} 
        onValueChange={(value) => setActiveTab(value as 'sip' | 'lumpsum')}
        className="mb-4"
      >
        <TabsList className={`w-full grid grid-cols-2 ${isHero ? 'bg-white/10 backdrop-blur-sm border-white/20' : 'bg-white border border-[#003448]/10'}`}>
          <TabsTrigger 
            value="sip"
            className={`text-xs ${isHero 
              ? 'data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70' 
              : 'data-[state=active]:bg-[#003448] data-[state=active]:text-white text-[#003448]/60'
            }`}
          >
            <PiggyBank className="w-3 h-3 mr-1" />
            SIP
          </TabsTrigger>
          <TabsTrigger 
            value="lumpsum"
            className={`text-xs ${isHero 
              ? 'data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70' 
              : 'data-[state=active]:bg-[#003448] data-[state=active]:text-white text-[#003448]/60'
            }`}
          >
            <Wallet className="w-3 h-3 mr-1" />
            Lumpsum
          </TabsTrigger>
        </TabsList>

        {/* SIP Calculator */}
        <TabsContent value="sip" className="space-y-4 mt-4">
          <div className="space-y-3">
            <SliderInput
              label="Monthly Investment"
              value={sipMonthlyInvestment}
              onChange={setSipMonthlyInvestment}
              min={1000}
              max={50000}
              step={1000}
              unit="₹"
              color={isHero ? "#68c0ae" : "#003448"}
              isHero={isHero}
            />
            
            <SliderInput
              label="Expected Return"
              value={sipExpectedReturn}
              onChange={setSipExpectedReturn}
              min={1}
              max={25}
              step={0.5}
              unit="% p.a."
              color={isHero ? "#9ece6c" : "#68c0ae"}
              isHero={isHero}
            />
            
            <SliderInput
              label="Time Period"
              value={sipTimePeriod}
              onChange={setSipTimePeriod}
              min={1}
              max={30}
              step={1}
              unit="Years"
              color={isHero ? "#68c0ae" : "#9ece6c"}
              isHero={isHero}
            />
          </div>

          <ResultsDisplay results={sipResults} formatCurrency={formatCurrency} isHero={isHero} />
        </TabsContent>

        {/* Lumpsum Calculator */}
        <TabsContent value="lumpsum" className="space-y-4 mt-4">
          <div className="space-y-3">
            <SliderInput
              label="Lumpsum Amount"
              value={lumpsumAmount}
              onChange={setLumpsumAmount}
              min={10000}
              max={1000000}
              step={10000}
              unit="₹"
              color={isHero ? "#68c0ae" : "#003448"}
              isHero={isHero}
            />
            
            <SliderInput
              label="Expected Return"
              value={lumpsumExpectedReturn}
              onChange={setLumpsumExpectedReturn}
              min={1}
              max={25}
              step={0.5}
              unit="% p.a."
              color={isHero ? "#9ece6c" : "#68c0ae"}
              isHero={isHero}
            />
            
            <SliderInput
              label="Time Period"
              value={lumpsumTimePeriod}
              onChange={setLumpsumTimePeriod}
              min={1}
              max={30}
              step={1}
              unit="Years"
              color={isHero ? "#68c0ae" : "#9ece6c"}
              isHero={isHero}
            />
          </div>

          <ResultsDisplay results={lumpsumResults} formatCurrency={formatCurrency} isHero={isHero} />
        </TabsContent>
      </Tabs>
    </div>
  );

  const isHero = variant === 'hero';

  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Mobile View - Minimal Calculator (no phone frame) */}
      <div className="lg:hidden">
        {isHero ? (
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden shadow-lg">
            <CalculatorContent isHero={true} />
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg border border-[#003448]/10 overflow-hidden">
            <CalculatorContent isHero={false} />
          </div>
        )}
      </div>

      {/* Desktop View - Phone Mockup (only for default variant) */}
      {!isHero && (
        <div className="hidden lg:block relative">
          <div className="relative bg-[#003448] rounded-[3rem] p-3 shadow-2xl">
            <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
              {/* Notch */}
              <div className="relative bg-[#003448] h-7 flex items-center justify-center">
                <div className="w-32 h-5 bg-[#003448] rounded-b-3xl" />
              </div>
              
              {/* App Screen Content */}
              <div className="h-full overflow-auto">
                <CalculatorContent isHero={false} />
              </div>
            </div>
          </div>
          
          {/* Floating elements - Desktop only */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-white/30 shadow-lg flex items-center justify-center"
          >
            <TrendingUp className="w-10 h-10 text-[#68c0ae] drop-shadow-lg" strokeWidth={2.5} />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-white/30 shadow-lg flex items-center justify-center"
          >
            <PiggyBank className="w-12 h-12 text-[#9ece6c] drop-shadow-lg" strokeWidth={2.5} />
          </motion.div>
        </div>
      )}

      {/* Desktop View - Hero variant (minimal, no phone frame) */}
      {isHero && (
        <div className="hidden lg:block">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden shadow-lg">
            <CalculatorContent isHero={true} />
          </div>
        </div>
      )}

      {/* Custom Slider Styles */}
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: 2px solid currentColor;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        input[type="range"]::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: 2px solid currentColor;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}
