import { StyleSheet, Text, View } from 'react-native';
import { SafetyStatus } from '@/types/finance';
import { colors } from '@/theme/colors';

const mapStatusColor: Record<SafetyStatus, string> = {
  green: colors.safeGreen,
  yellow: colors.cautionAmber,
  red: colors.dangerRed
};

export function SafetyCard({
  safeDays,
  status,
  forecast
}: {
  safeDays: number;
  status: SafetyStatus;
  forecast: string;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Safety Engine</Text>
      <Text style={styles.safeDays}>{safeDays} Safe Days</Text>
      <Text style={[styles.status, { color: mapStatusColor[status] }]}>{status.toUpperCase()}</Text>
      <Text style={styles.forecast}>{forecast}</Text>
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
  safeDays: { fontSize: 34, fontWeight: '800', color: colors.textPrimary, marginTop: 4 },
  status: { marginTop: 8, fontSize: 14, fontWeight: '700' },
  forecast: { marginTop: 8, fontSize: 14, color: colors.textSecondary, lineHeight: 20 }
});
