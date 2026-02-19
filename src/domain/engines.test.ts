import { describe, expect, it } from 'vitest';
import { calculateRunway } from '@/domain/runwayEngine';
import { getClosestGoal } from '@/domain/goalsEngine';
import { summarizeLoans } from '@/domain/loanEngine';

describe('finance engines', () => {
  it('calculates runway with status', () => {
    const result = calculateRunway({
      totalCash: 9000,
      avgDailySpend: 75,
      monthlyIncome: 3000,
      monthlyFixedCosts: 1000
    });

    expect(result.safeDays).toBeGreaterThan(0);
    expect(['green', 'yellow', 'red']).toContain(result.status);
  });

  it('returns closest goal progress', () => {
    const goal = getClosestGoal(
      [
        {
          id: 'g1',
          name: 'Emergency Fund',
          targetAmount: 10000,
          currentAmount: 2000,
          targetDate: '2026-12-01',
          monthlyContribution: 200
        }
      ],
      new Date('2026-01-01')
    );

    expect(goal.name).toBe('Emergency Fund');
    expect(goal.progressPercent).toBe(20);
  });

  it('summarizes loans', () => {
    const summary = summarizeLoans(
      [
        {
          id: 'l1',
          name: 'Card',
          balance: 5000,
          apr: 20,
          minimumPayment: 200
        }
      ],
      new Date('2025-01-01')
    );

    expect(summary.totalBalance).toBe(5000);
    expect(summary.totalInterest).toBeGreaterThan(0);
  });
});
