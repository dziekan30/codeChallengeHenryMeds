import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeBottomTabNavigator from '../navigation/HomeBottomTabNaviagtor';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeBottomTabNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: -35,
  },
});
