import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Pressable, Text } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import { providers } from '../data/providerdata';

export default function PickProviderScreen({ navigation }) {
  const [providerData, setProviderData] = useState([]);
  const [error, setError] = useState(false);

  const navigationRoute = async (p) => {
    navigation.navigate('ScheduleAppointment', {
      id: p.id,
      name: p.name,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {providers.map((p, index) => (
          <View key={p.id} style={{ marginLeft: 10, marginTop: '2%', color: '#000' }}>
            <TouchableOpacity
              onPress={() => {
                navigationRoute(p);
              }}
            >
              <Card.Title title={p.name} subtitle={p.id} />
              <Divider style={{ marginBottom: 0, marginTop: 5 }} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
