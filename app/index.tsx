import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { GoalCard } from '@/components/GoalCard';
import { LoanSummaryCard } from '@/components/LoanSummaryCard';
import { SafetyCard } from '@/components/SafetyCard';
import { createDashboardViewModel } from '@/viewmodels/dashboardViewModel';
import { colors } from '@/theme/colors';
import { sampleFinancialProfile } from '@/sample-data/profile';

const vm = createDashboardViewModel(sampleFinancialProfile);

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>FinSafe</Text>
        <Text style={styles.subtitle}>Know You&apos;re Safe. Know When You&apos;re Free.</Text>

        <SafetyCard safeDays={vm.safeDays} status={vm.safetyStatus} forecast={vm.riskProjection} />
        <GoalCard
          name={vm.closestGoal.name}
          progressPercent={vm.closestGoal.progressPercent}
          freedomDate={vm.closestGoal.freedomDateLabel}
          monthlyRequired={vm.closestGoal.requiredMonthly}
        />
        <LoanSummaryCard
          totalBalance={vm.loanSummary.totalBalance}
          totalInterest={vm.loanSummary.totalInterest}
          payoffDate={vm.loanSummary.payoffDateLabel}
        />

        <View style={styles.callout}>
          <Text style={styles.calloutTitle}>What-if Simulator</Text>
          <Text style={styles.calloutText}>
            Next step: wire sliders to run instant simulations for spending, savings, and extra loan
            payments.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, gap: 16 },
  title: { fontSize: 34, fontWeight: '800', color: colors.textPrimary },
  subtitle: { fontSize: 15, color: colors.textSecondary, marginBottom: 6 },
  callout: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E7EAEF'
  },
  calloutTitle: { fontSize: 18, fontWeight: '700', color: colors.textPrimary, marginBottom: 8 },
  calloutText: { fontSize: 14, color: colors.textSecondary, lineHeight: 20 }
});
