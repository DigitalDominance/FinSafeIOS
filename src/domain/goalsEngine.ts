import { Goal } from '@/types/finance';

export interface GoalProgress {
  name: string;
  progressPercent: number;
  freedomDateLabel: string;
  requiredMonthly: number;
}

export function getClosestGoal(goals: Goal[], now: Date = new Date()): GoalProgress {
  const sorted = [...goals].sort(
    (a, b) => new Date(a.targetDate).getTime() - new Date(b.targetDate).getTime()
  );

  const goal = sorted[0];
  const targetDate = new Date(goal.targetDate);
  const monthsRemaining = Math.max(
    Math.ceil((targetDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24 * 30)),
    1
  );

  const amountRemaining = Math.max(goal.targetAmount - goal.currentAmount, 0);

  return {
    name: goal.name,
    progressPercent: Math.min((goal.currentAmount / goal.targetAmount) * 100, 100),
    freedomDateLabel: targetDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    requiredMonthly: amountRemaining / monthsRemaining
  };
}
