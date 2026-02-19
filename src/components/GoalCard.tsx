import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/theme/colors';

export function GoalCard({
  name,
  progressPercent,
  freedomDate,
  monthlyRequired
}: {
  name: string;
  progressPercent: number;
  freedomDate: string;
  monthlyRequired: number;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Closest Freedom Goal</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.meta}>{progressPercent.toFixed(0)}% complete</Text>
      <Text style={styles.meta}>Freedom Date: {freedomDate}</Text>
      <Text style={styles.meta}>Needed monthly: ${monthlyRequired.toFixed(0)}</Text>
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
  name: { fontSize: 22, fontWeight: '700', color: colors.textPrimary, marginTop: 6 },
  meta: { marginTop: 6, fontSize: 14, color: colors.textSecondary }
});
