import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ClientStackNavigator } from '../navigation/ClientStackNavigator';

export default function ClientsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ClientStackNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: -35,
  },
});
