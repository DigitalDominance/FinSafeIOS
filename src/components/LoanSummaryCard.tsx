import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/theme/colors';

export function LoanSummaryCard({
  totalBalance,
  totalInterest,
  payoffDate
}: {
  totalBalance: number;
  totalInterest: number;
  payoffDate: string;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Loan & Interest Optimizer</Text>
      <Text style={styles.metric}>Balance: ${totalBalance.toFixed(0)}</Text>
      <Text style={styles.metric}>Interest Remaining: ${totalInterest.toFixed(0)}</Text>
      <Text style={styles.metric}>Payoff Date: {payoffDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E7EAEF'
  },
  label: { fontSize: 14, color: colors.textSecondary },
  metric: { marginTop: 8, fontSize: 15, fontWeight: '600', color: colors.textPrimary }
});
