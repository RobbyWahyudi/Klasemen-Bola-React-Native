import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Divider, Text, DataTable} from 'react-native-paper';

const Liga1 = () => {
  const [dataGoal, setDataGoal] = useState([]); // state atau penampung data
  const [dataRedCard, setDataRedCard] = useState([]);

  const ambilData = async () => {
    try {
      // Ambil Data
      const response = await fetch(
        'https://ligaindonesia-api.vercel.app/api/v1/statistics/topscorer',
      );
      const responseRedCard = await fetch(
        'https://ligaindonesia-api.vercel.app/api/v1/statistics/red_card',
      );
      const json = await response.json(); // Ubah data ke JSON
      const jsonRedCard = await responseRedCard.json();
      setDataGoal(json.data);
      setDataRedCard(jsonRedCard.data);
    } catch (error) {
      Alert.alert('info', 'koneksi bermasalah'); // menampilkan error
    }
  };

  useEffect(() => {
    ambilData();
  }, []);
  return (
    <View>
      <Text>Goals</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Player</DataTable.Title>
          <DataTable.Title numeric>Goal</DataTable.Title>
        </DataTable.Header>

        {dataGoal &&
          dataGoal.map((item, i) => {
            return (
              <DataTable.Row>
                <DataTable.Cell>
                  {i + 1}. {item.name}
                </DataTable.Cell>
                <DataTable.Cell numeric>{item.goals}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
      </DataTable>
      <Text>Red Card</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Player</DataTable.Title>
          <DataTable.Title numeric>Red Card</DataTable.Title>
        </DataTable.Header>

        {dataRedCard &&
          dataRedCard.map((item, i) => {
            return (
              <DataTable.Row>
                <DataTable.Cell>
                  {i + 1}. {item.name}
                </DataTable.Cell>
                <DataTable.Cell numeric>{item.total}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
      </DataTable>
    </View>
  );
};

export default Liga1;

const styles = StyleSheet.create({});
