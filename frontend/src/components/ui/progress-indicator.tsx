import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: Spacing.four,
    },
    step: {
      width: 48,
      height: 48,
      borderRadius: 24,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: Spacing.two,
    },
    stepActive: {
      backgroundColor: theme.primary,
    },
    stepCompleted: {
      backgroundColor: theme.accent,
    },
    stepInactive: {
      backgroundColor: theme.border,
      borderWidth: 2,
      borderColor: theme.textSecondary,
    },
    stepText: {
      fontWeight: '700',
      fontSize: 18,
    },
    stepTextActive: {
      color: '#FFFFFF',
    },
    stepTextInactive: {
      color: theme.textSecondary,
    },
    line: {
      width: 40,
      height: 2,
      marginHorizontal: -Spacing.one,
      marginBottom: Spacing.one,
    },
    lineActive: {
      backgroundColor: theme.accent,
    },
    lineInactive: {
      backgroundColor: theme.border,
    },
  });

  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <View key={index}>
            <View
              style={[
                styles.step,
                isActive && styles.stepActive,
                isCompleted && styles.stepCompleted,
                !isActive && !isCompleted && styles.stepInactive,
              ]}
            >
              {isCompleted ? (
                <Text style={[styles.stepText, styles.stepTextActive]}>✓</Text>
              ) : (
                <Text
                  style={[
                    styles.stepText,
                    isActive ? styles.stepTextActive : styles.stepTextInactive,
                  ]}
                >
                  {stepNumber}
                </Text>
              )}
            </View>
            {stepNumber < totalSteps && (
              <View
                style={[
                  styles.line,
                  stepNumber < currentStep ? styles.lineActive : styles.lineInactive,
                ]}
              />
            )}
          </View>
        );
      })}
    </View>
  );
};
