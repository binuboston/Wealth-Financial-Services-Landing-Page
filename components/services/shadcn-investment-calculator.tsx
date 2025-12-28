'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { Calculator, TrendingUp, PiggyBank, Wallet, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { calculatorConfig } from '@/lib/config/calculator.config';
import {
  calculateSIP,
  calculateLumpsum,
  formatCurrency,
  clamp,
  roundToStep,
  type CalculatorResults,
} from '@/lib/utils/calculator.utils';
import { cn } from '@/components/ui/utils';

// ============================================================================
// Types
// ============================================================================

type CalculatorType = 'sip' | 'lumpsum';
type Variant = 'default' | 'minimal';

interface SliderInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  unit: string;
  suffix?: string;
  color: string;
  variant?: Variant;
}

interface ResultCardProps {
  results: CalculatorResults;
  variant?: Variant;
}

// ============================================================================
// Slider Input Component
// ============================================================================

function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  unit,
  suffix,
  color,
  variant = 'default',
}: SliderInputProps) {
  const [localValue, setLocalValue] = useState(value);
  const [inputValue, setInputValue] = useState(value.toString());
  const [isInputFocused, setIsInputFocused] = useState(false);

  // Sync local value when prop changes
  useEffect(() => {
    if (!isInputFocused) {
      setLocalValue(value);
      setInputValue(value.toString());
    }
  }, [value, isInputFocused]);

  // Handle slider change with smooth updates
  const handleSliderChange = useCallback((values: number[]) => {
    const newValue = clamp(values[0], min, max);
    setLocalValue(newValue);
    setInputValue(newValue.toString());
    onChange(newValue);
  }, [min, max, onChange]);

  // Handle input change
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);

    if (val === '' || val === '-') return;

    const numValue = parseFloat(val);
    if (!isNaN(numValue)) {
      const clamped = clamp(numValue, min, max);
      setLocalValue(clamped);
      onChange(clamped);
    }
  }, [min, max, onChange]);

  // Handle input blur - validate and round
  const handleInputBlur = useCallback(() => {
    setIsInputFocused(false);
    const numValue = parseFloat(inputValue);
    
    if (isNaN(numValue) || numValue < min) {
      const rounded = roundToStep(min, step);
      setInputValue(rounded.toString());
      setLocalValue(rounded);
      onChange(rounded);
    } else if (numValue > max) {
      const rounded = roundToStep(max, step);
      setInputValue(rounded.toString());
      setLocalValue(rounded);
      onChange(rounded);
    } else {
      const rounded = roundToStep(numValue, step);
      setInputValue(rounded.toString());
      setLocalValue(rounded);
      onChange(rounded);
    }
  }, [inputValue, min, max, step, onChange]);

  const handleInputFocus = useCallback(() => {
    setIsInputFocused(true);
  }, []);

  const clampedValue = clamp(localValue, min, max);
  const isMinimal = variant === 'minimal';

  // Styling based on variant
  const containerStyles = isMinimal
    ? 'bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20'
    : 'bg-white p-4 rounded-xl border border-gray-200 shadow-sm';

  const labelStyles = isMinimal
    ? 'text-white/90 text-sm font-medium'
    : 'text-gray-900 text-sm font-medium';

  const inputStyles = isMinimal
    ? 'w-24 h-9 px-3 text-sm text-white bg-white/10 border-white/20 focus:border-white/40 focus:ring-white/20 placeholder:text-white/40'
    : 'w-28 h-9 px-3 text-sm text-gray-900 bg-gray-50 border-gray-300 focus:border-primary focus:ring-primary/20';

  const unitStyles = isMinimal ? 'text-xs text-white/70' : 'text-xs text-gray-500';
  const rangeStyles = isMinimal ? 'text-xs text-white/60' : 'text-xs text-gray-400';

  const trackColor = isMinimal ? 'rgba(255, 255, 255, 0.2)' : '#e5e7eb';
  const thumbColor = '#ffffff';
  const thumbBorderColor = isMinimal ? 'rgba(255, 255, 255, 0.5)' : color;

  return (
    <div className={containerStyles}>
      <div className="flex items-center justify-between mb-3">
        <Label className={labelStyles}>{label}</Label>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            min={min}
            max={max}
            step={step}
            className={cn(
              inputStyles,
              '[&::-webkit-inner-spin-button]:appearance-none',
              '[&::-webkit-outer-spin-button]:appearance-none'
            )}
          />
          <span className={unitStyles}>
            {unit}
            {suffix && suffix}
          </span>
        </div>
      </div>
      <Slider
        value={[clampedValue]}
        onValueChange={handleSliderChange}
        min={min}
        max={max}
        step={step}
        trackColor={trackColor}
        rangeColor={color}
        thumbColor={thumbColor}
        thumbBorderColor={thumbBorderColor}
        className="w-full"
      />
      <div className={cn('mt-2 flex justify-between', rangeStyles)}>
        <span>{min}{unit === '%' ? '%' : ''}</span>
        <span>{max}{unit === '%' ? '%' : ''}</span>
      </div>
    </div>
  );
}

// ============================================================================
// Results Card Component
// ============================================================================

function ResultCard({ results, variant = 'default' }: ResultCardProps) {
  const isMinimal = variant === 'minimal';

  const investedPercentage = results.futureValue > 0
    ? (results.totalInvestment / results.futureValue) * 100
    : 0;
  
  const returnsPercentage = results.futureValue > 0
    ? (results.totalReturns / results.futureValue) * 100
    : 0;

  if (isMinimal) {
    return (
      <div className="space-y-3">
        {/* Future Value Card */}
        <motion.div
          key={results.futureValue}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white/70 text-xs mb-1">Future Value</div>
              <div className="text-2xl text-white font-bold">
                {formatCurrency(results.futureValue)}
              </div>
            </div>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <TrendingUp className="w-7 h-7 text-white/80" />
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-3">
              <div className="text-white/70 text-xs mb-1">Invested</div>
              <div className="text-white text-base font-semibold">
                {formatCurrency(results.totalInvestment)}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-green-500/30 backdrop-blur-sm border-green-400/40">
            <CardContent className="p-3">
              <div className="text-white/70 text-xs mb-1">Returns</div>
              <div className="text-white text-base font-semibold">
                {formatCurrency(results.totalReturns)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Breakdown Chart */}
        {calculatorConfig.display.showBreakdown && (
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-3">
              <div className="text-white/70 text-xs mb-2">Investment Breakdown</div>
              <div className="h-3 bg-white/20 rounded-full overflow-hidden flex">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${investedPercentage}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="bg-white/50"
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${returnsPercentage}%` }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                  className="bg-green-400"
                />
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Future Value Card */}
      <motion.div
        key={results.futureValue}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-[#003448] to-[#004d6b] p-5 rounded-xl text-white shadow-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white/80 text-xs mb-1 uppercase tracking-wide">Future Value</div>
            <div className="text-3xl font-bold">{formatCurrency(results.futureValue)}</div>
          </div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <TrendingUp className="w-9 h-9 opacity-90" />
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="bg-gray-50 border-gray-200">
          <CardContent className="p-4">
            <div className="text-gray-600 text-xs mb-1 uppercase tracking-wide">Invested</div>
            <div className="text-gray-900 text-lg font-semibold">
              {formatCurrency(results.totalInvestment)}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4">
            <div className="text-green-700 text-xs mb-1 uppercase tracking-wide">Returns</div>
            <div className="text-green-900 text-lg font-semibold">
              {formatCurrency(results.totalReturns)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Breakdown Chart */}
      {calculatorConfig.display.showBreakdown && (
        <Card className="bg-white border-gray-200">
          <CardContent className="p-4">
            <div className="text-gray-600 text-xs mb-2 uppercase tracking-wide">Investment Breakdown</div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden flex">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${investedPercentage}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-[#003448]"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${returnsPercentage}%` }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="bg-green-500"
              />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// ============================================================================
// Main Calculator Component
// ============================================================================

export function ShadcnInvestmentCalculator({ variant = 'default' }: { variant?: Variant }) {
  const [activeTab, setActiveTab] = useState<CalculatorType>('sip');

  // SIP State
  const [sipState, setSipState] = useState({
    monthlyInvestment: calculatorConfig.sip.monthlyInvestment!.defaultValue,
    expectedReturn: calculatorConfig.sip.expectedReturn.defaultValue,
    timePeriod: calculatorConfig.sip.timePeriod.defaultValue,
  });

  // Lumpsum State
  const [lumpsumState, setLumpsumState] = useState({
    lumpsumAmount: calculatorConfig.lumpsum.lumpsumAmount!.defaultValue,
    expectedReturn: calculatorConfig.lumpsum.expectedReturn.defaultValue,
    timePeriod: calculatorConfig.lumpsum.timePeriod.defaultValue,
  });

  // Calculate results
  const sipResults = useMemo(
    () => calculateSIP(sipState.monthlyInvestment, sipState.expectedReturn, sipState.timePeriod),
    [sipState.monthlyInvestment, sipState.expectedReturn, sipState.timePeriod]
  );

  const lumpsumResults = useMemo(
    () => calculateLumpsum(lumpsumState.lumpsumAmount, lumpsumState.expectedReturn, lumpsumState.timePeriod),
    [lumpsumState.lumpsumAmount, lumpsumState.expectedReturn, lumpsumState.timePeriod]
  );

  const isMinimal = variant === 'minimal';

  return (
    <div className={cn('w-full', isMinimal ? 'p-4' : 'p-4 lg:p-6 bg-gradient-to-b from-gray-50 to-white rounded-2xl')}>
      {/* Header */}
      {!isMinimal && (
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-[#003448] to-[#004d6b] rounded-lg flex items-center justify-center shadow-md">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <div>
            <CardTitle className="text-xl text-gray-900">Investment Calculator</CardTitle>
            <CardDescription className="text-sm text-gray-600">Plan your wealth journey</CardDescription>
          </div>
        </div>
      )}

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as CalculatorType)}
        className="w-full"
      >
        <TabsList
          className={cn(
            'w-full grid grid-cols-2 mb-6',
            isMinimal
              ? 'bg-white/10 backdrop-blur-sm border border-white/20'
              : 'bg-gray-100 border border-gray-200'
          )}
        >
          <TabsTrigger
            value="sip"
            className={cn(
              'text-sm font-medium',
              isMinimal
                ? 'data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/80'
                : 'data-[state=active]:bg-white data-[state=active]:text-gray-900 text-gray-600 data-[state=active]:shadow-sm'
            )}
          >
            <PiggyBank className="w-4 h-4 mr-2" />
            SIP
          </TabsTrigger>
          <TabsTrigger
            value="lumpsum"
            className={cn(
              'text-sm font-medium',
              isMinimal
                ? 'data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/80'
                : 'data-[state=active]:bg-white data-[state=active]:text-gray-900 text-gray-600 data-[state=active]:shadow-sm'
            )}
          >
            <Wallet className="w-4 h-4 mr-2" />
            Lumpsum
          </TabsTrigger>
        </TabsList>

        {/* SIP Calculator */}
        <TabsContent value="sip" className="space-y-5 mt-0">
          <div className="space-y-4">
            <SliderInput
              label={calculatorConfig.sip.monthlyInvestment!.label}
              value={sipState.monthlyInvestment}
              onChange={(value) => setSipState(prev => ({ ...prev, monthlyInvestment: value }))}
              min={calculatorConfig.sip.monthlyInvestment!.min}
              max={calculatorConfig.sip.monthlyInvestment!.max}
              step={calculatorConfig.sip.monthlyInvestment!.step}
              unit={calculatorConfig.sip.monthlyInvestment!.unit}
              suffix={calculatorConfig.sip.monthlyInvestment!.suffix}
              color={calculatorConfig.sip.monthlyInvestment!.color}
              variant={variant}
            />
            <SliderInput
              label={calculatorConfig.sip.expectedReturn.label}
              value={sipState.expectedReturn}
              onChange={(value) => setSipState(prev => ({ ...prev, expectedReturn: value }))}
              min={calculatorConfig.sip.expectedReturn.min}
              max={calculatorConfig.sip.expectedReturn.max}
              step={calculatorConfig.sip.expectedReturn.step}
              unit={calculatorConfig.sip.expectedReturn.unit}
              suffix={calculatorConfig.sip.expectedReturn.suffix}
              color={calculatorConfig.sip.expectedReturn.color}
              variant={variant}
            />
            <SliderInput
              label={calculatorConfig.sip.timePeriod.label}
              value={sipState.timePeriod}
              onChange={(value) => setSipState(prev => ({ ...prev, timePeriod: value }))}
              min={calculatorConfig.sip.timePeriod.min}
              max={calculatorConfig.sip.timePeriod.max}
              step={calculatorConfig.sip.timePeriod.step}
              unit={calculatorConfig.sip.timePeriod.unit}
              color={calculatorConfig.sip.timePeriod.color}
              variant={variant}
            />
          </div>
          <ResultCard results={sipResults} variant={variant} />
        </TabsContent>

        {/* Lumpsum Calculator */}
        <TabsContent value="lumpsum" className="space-y-5 mt-0">
          <div className="space-y-4">
            <SliderInput
              label={calculatorConfig.lumpsum.lumpsumAmount!.label}
              value={lumpsumState.lumpsumAmount}
              onChange={(value) => setLumpsumState(prev => ({ ...prev, lumpsumAmount: value }))}
              min={calculatorConfig.lumpsum.lumpsumAmount!.min}
              max={calculatorConfig.lumpsum.lumpsumAmount!.max}
              step={calculatorConfig.lumpsum.lumpsumAmount!.step}
              unit={calculatorConfig.lumpsum.lumpsumAmount!.unit}
              color={calculatorConfig.lumpsum.lumpsumAmount!.color}
              variant={variant}
            />
            <SliderInput
              label={calculatorConfig.lumpsum.expectedReturn.label}
              value={lumpsumState.expectedReturn}
              onChange={(value) => setLumpsumState(prev => ({ ...prev, expectedReturn: value }))}
              min={calculatorConfig.lumpsum.expectedReturn.min}
              max={calculatorConfig.lumpsum.expectedReturn.max}
              step={calculatorConfig.lumpsum.expectedReturn.step}
              unit={calculatorConfig.lumpsum.expectedReturn.unit}
              suffix={calculatorConfig.lumpsum.expectedReturn.suffix}
              color={calculatorConfig.lumpsum.expectedReturn.color}
              variant={variant}
            />
            <SliderInput
              label={calculatorConfig.lumpsum.timePeriod.label}
              value={lumpsumState.timePeriod}
              onChange={(value) => setLumpsumState(prev => ({ ...prev, timePeriod: value }))}
              min={calculatorConfig.lumpsum.timePeriod.min}
              max={calculatorConfig.lumpsum.timePeriod.max}
              step={calculatorConfig.lumpsum.timePeriod.step}
              unit={calculatorConfig.lumpsum.timePeriod.unit}
              color={calculatorConfig.lumpsum.timePeriod.color}
              variant={variant}
            />
          </div>
          <ResultCard results={lumpsumResults} variant={variant} />
        </TabsContent>
      </Tabs>
    </div>
  );
}




