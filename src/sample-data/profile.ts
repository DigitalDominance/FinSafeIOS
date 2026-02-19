import { FinancialProfile } from '@/types/finance';

export const sampleFinancialProfile: FinancialProfile = {
  runway: {
    totalCash: 9200,
    avgDailySpend: 80,
    monthlyIncome: 4100,
    monthlyFixedCosts: 900
  },
  goals: [
    {
      id: 'goal-emergency',
      name: 'Emergency Fund',
      targetAmount: 15000,
      currentAmount: 5200,
      targetDate: '2027-02-01',
      monthlyContribution: 300
    }
  ],
  loans: [
    {
      id: 'loan-card-1',
      name: 'Credit Card',
      balance: 6200,
      apr: 19.99,
      minimumPayment: 220
    }
  ]
};
