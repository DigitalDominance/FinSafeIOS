import { calculateRunway } from '@/domain/runwayEngine';
import { getClosestGoal } from '@/domain/goalsEngine';
import { summarizeLoans } from '@/domain/loanEngine';
import { FinancialProfile } from '@/types/finance';

export function createDashboardViewModel(profile: FinancialProfile) {
  const runway = calculateRunway(profile.runway);
  const closestGoal = getClosestGoal(profile.goals);
  const loanSummary = summarizeLoans(profile.loans);

  return {
    safeDays: runway.safeDays,
    safetyStatus: runway.status,
    riskProjection: `You enter yellow in ${runway.projectedYellowDay} days if spending continues.`,
    closestGoal,
    loanSummary
  };
}
