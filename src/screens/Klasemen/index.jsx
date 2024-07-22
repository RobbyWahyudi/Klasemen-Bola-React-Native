import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Alert, Image, ScrollView} from 'react-native';

const Klasemen = () => {
  const [dataLiga, setDataLiga] = useState([]); // state atau penampung data

  const ambilData = async () => {
    try {
      const response = await fetch(
        'https://api-football-standings.azharimm.dev/leagues',
      ); // Ambil Data
      const json = await response.json(); // Ubah data ke JSON
      // console.log(json);
      return setDataLiga(json.data);
    } catch (error) {
      Alert.alert('info', 'koneksi bermasalah'); // menampilkan error
    }
  };

  useEffect(() => {
    ambilData();
  }, []);

  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
      }}>
      {dataLiga &&
        dataLiga.map((item, i) => {
          return (
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: '#9B222F',
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}
              key={i}>
              <Image
                style={{width: 40, height: 40}}
                source={{
                  uri: item.logos.light,
                }}
              />
              <Text
                style={{color: '#09051C', fontSize: 16, fontWeight: 'bold'}}>
                {item.name}
              </Text>
            </View>
          );
        })}
    </ScrollView>
  );
};

export default Klasemen;

const styles = StyleSheet.create({});
