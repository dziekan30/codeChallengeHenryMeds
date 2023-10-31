import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { time } from '../data/data';
import { Picker } from '@react-native-picker/picker';

export default function ProvidersScreen() {
  const [schedule, setSchedule] = useState([
    { day: 'Sunday', startTime: '', endTime: '' },
    { day: 'Monday', startTime: '', endTime: '' },
    { day: 'Tuesday', startTime: '', endTime: '' },
    { day: 'Wednesday', startTime: '', endTime: '' },
    { day: 'Thursday', startTime: '', endTime: '' },
    { day: 'Friday', startTime: '', endTime: '' },
    { day: 'Saturday', startTime: '', endTime: '' },
  ]);

  const handleTimeChange = (value, id, name) => {
    if (value === 'Select') return;
    const list = [...schedule];
    list[id][name] = value;
    setSchedule(list);
  };

  const handleSaveSchedules = () => {
    console.warn('Data submit!!!');
  };

  return (
    <View>
      <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>Providers Dashboard</Text>
      <ScrollView>
        {schedule.map((sch, id) => (
          <View style={styles.form} key={id}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{sch.day}</Text>
            <View>
              <Text>Start Time</Text>
              <Picker
                selectedValue={sch.startTime}
                onValueChange={(itemValue) => handleTimeChange(itemValue, id, 'startTime')}
              >
                {time.map((t) => (
                  <Picker.Item key={t.id} label={t.t} value={t.t} />
                ))}
              </Picker>
            </View>
            <View>
              <Text>End Time</Text>
              <Picker
                selectedValue={sch.endTime}
                onValueChange={(itemValue) => handleTimeChange(itemValue, id, 'endTime')}
              >
                {time.map((t) => (
                  <Picker.Item key={t.id} label={t.t} value={t.t} />
                ))}
              </Picker>
            </View>
          </View>
        ))}
        <View style={styles.saveBtnContainer}>
          <TouchableOpacity style={{ padding: 20, alignSelf: 'center' }} onPress={() => handleSaveSchedules()}>
            <Text style={{ fontSize: 20, fontWeight: 300 }}>Save schedule</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {},
  saveBtnContainer: { backgroundColor: '#007762', marginVertical: '12%' },
});
