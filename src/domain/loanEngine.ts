import { Loan } from '@/types/finance';

export interface LoanSummary {
  totalBalance: number;
  totalInterest: number;
  payoffDateLabel: string;
}

function amortizedMonths(balance: number, apr: number, payment: number): number {
  const monthlyRate = apr / 100 / 12;
  if (monthlyRate <= 0) return Math.ceil(balance / payment);
  const ratio = 1 - (balance * monthlyRate) / payment;
  if (ratio <= 0) return 600;
  return Math.ceil(-Math.log(ratio) / Math.log(1 + monthlyRate));
}

export function summarizeLoans(loans: Loan[], now: Date = new Date()): LoanSummary {
  const totalBalance = loans.reduce((sum, loan) => sum + loan.balance, 0);
  const months = Math.max(
    ...loans.map((loan) => amortizedMonths(loan.balance, loan.apr, loan.minimumPayment))
  );
  const totalInterest = loans.reduce((sum, loan) => {
    const m = amortizedMonths(loan.balance, loan.apr, loan.minimumPayment);
    return sum + loan.minimumPayment * m - loan.balance;
  }, 0);

  const payoffDate = new Date(now);
  payoffDate.setMonth(payoffDate.getMonth() + months);

  return {
    totalBalance,
    totalInterest,
    payoffDateLabel: payoffDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  };
}
