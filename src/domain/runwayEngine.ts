import { RunwayInput, SafetyStatus } from '@/types/finance';

export interface RunwayResult {
  safeDays: number;
  status: SafetyStatus;
  projectedYellowDay: number;
}

export function calculateRunway(input: RunwayInput): RunwayResult {
  const monthlyBurn = input.avgDailySpend * 30 + input.monthlyFixedCosts - input.monthlyIncome;
  const dailyBurn = Math.max(monthlyBurn / 30, 1);
  const safeDays = Math.max(Math.floor(input.totalCash / dailyBurn), 0);

  let status: SafetyStatus = 'green';
  if (safeDays < 30) status = 'red';
  else if (safeDays < 60) status = 'yellow';

  return {
    safeDays,
    status,
    projectedYellowDay: Math.max(safeDays - 30, 0)
  };
}
