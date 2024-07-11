import {StyleSheet, View, ScrollView, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Divider, Text, DataTable} from 'react-native-paper';

const Liga1 = () => {
  const [dataGoal, setDataGoal] = useState([]); // state atau penampung data
  const [dataRedCard, setDataRedCard] = useState([]);
  const [dataYellowCard, setDataYellowCard] = useState([]);

  const ambilData = async () => {
    try {
      // Ambil Data
      const response = await fetch(
        'https://ligaindonesia-api.vercel.app/api/v1/statistics/topscorer',
      );
      const responseRedCard = await fetch(
        'https://ligaindonesia-api.vercel.app/api/v1/statistics/red_card',
      );
      const responseYellowCard = await fetch(
        'https://ligaindonesia-api.vercel.app/api/v1/statistics/yellow_card',
      );

      const json = await response.json(); // Ubah data ke JSON
      const jsonRedCard = await responseRedCard.json();
      const jsonYellowCard = await responseYellowCard.json();

      setDataGoal(json.data);
      setDataRedCard(jsonRedCard.data);
      setDataYellowCard(jsonYellowCard.data);
    } catch (error) {
      Alert.alert('info', 'koneksi bermasalah'); // menampilkan error
    }
  };

  useEffect(() => {
    ambilData();
  }, []);
  return (
    <ScrollView>
      <Text style={styles.judul}>Goals</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Player</DataTable.Title>
          <DataTable.Title numeric>Goal</DataTable.Title>
        </DataTable.Header>

        {dataGoal &&
          dataGoal.map((item, i) => {
            return (
              <DataTable.Row key={i}>
                <DataTable.Cell textStyle={{width: 300}}>
                  {i + 1}. {item.name}
                </DataTable.Cell>
                <DataTable.Cell numeric>{item.goals}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
      </DataTable>

      <Text style={styles.judul}>Red Cards</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Player</DataTable.Title>
          <DataTable.Title numeric>Red Cards</DataTable.Title>
        </DataTable.Header>

        {dataRedCard &&
          dataRedCard.map((item, i) => {
            return (
              <DataTable.Row key={i}>
                <DataTable.Cell textStyle={{width: 300}}>
                  {i + 1}. {item.name}
                </DataTable.Cell>
                <DataTable.Cell numeric>{item.total}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
      </DataTable>

      <Text style={styles.judul}>Yellow Cards</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Player</DataTable.Title>
          <DataTable.Title numeric>Yellow Cards</DataTable.Title>
        </DataTable.Header>

        {dataYellowCard &&
          dataYellowCard.map((item, i) => {
            return (
              <DataTable.Row key={i}>
                <DataTable.Cell textStyle={{width: 300}}>
                  {i + 1}. {item.name}
                </DataTable.Cell>
                <DataTable.Cell numeric>{item.total}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
      </DataTable>
    </ScrollView>
  );
};

export default Liga1;

const styles = StyleSheet.create({
  judul: {
    marginLeft: 15,
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
