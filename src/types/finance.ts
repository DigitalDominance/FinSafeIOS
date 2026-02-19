export type SafetyStatus = 'green' | 'yellow' | 'red';

export interface RunwayInput {
  totalCash: number;
  avgDailySpend: number;
  monthlyIncome: number;
  monthlyFixedCosts: number;
}

export interface Goal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string;
  monthlyContribution: number;
}

export interface Loan {
  id: string;
  name: string;
  balance: number;
  apr: number;
  minimumPayment: number;
}

export interface FinancialProfile {
  runway: RunwayInput;
  goals: Goal[];
  loans: Loan[];
}
