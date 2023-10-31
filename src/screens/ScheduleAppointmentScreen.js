import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { userTime } from '../data/userTimeSlot';
import { Picker } from '@react-native-picker/picker';

export default function ScheduleAppointmentScreen({ route }) {
  const { id, name } = route.params;
  const [schedule, setSchedule] = useState([
    { day: 'Sunday', startTime: '' },
    { day: 'Monday', startTime: '' },
    { day: 'Tuesday', startTime: '' },
    { day: 'Wednesday', startTime: '' },
    { day: 'Thursday', startTime: '' },
    { day: 'Friday', startTime: '' },
    { day: 'Saturday', startTime: '' },
  ]);

  const handleTimeChange = (value, id, name) => {
    if (value === 'Select') return;
    const list = [...schedule];
    list[id][name] = value;
    setSchedule(list);
  };

  const handleSaveSchedules = () => {
    console.warn('Email confirmation was send!!!');
  };

  return (
    <View>
      <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>Book a session with</Text>
      <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>{name}</Text>
      <ScrollView>
        {schedule.map((sch, id) => (
          <View style={styles.form} key={id}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{sch.day}</Text>
            <View>
              <Text>Time</Text>
              <Picker
                selectedValue={sch.startTime}
                onValueChange={(itemValue) => handleTimeChange(itemValue, id, 'startTime')}
              >
                {userTime.map((t) => (
                  <Picker.Item key={t.id} label={t.t} value={t.t} />
                ))}
              </Picker>
            </View>
          </View>
        ))}
        <View style={styles.saveBtnContainer}>
          <TouchableOpacity style={{ padding: 20, alignSelf: 'center' }} onPress={() => handleSaveSchedules()}>
            <Text style={{ fontSize: 20, fontWeight: 300 }}>Book an appointment</Text>
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
