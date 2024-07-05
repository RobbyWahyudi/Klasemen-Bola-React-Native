import React, {useEffect, useState} from 'react';
import {Card} from 'react-native-paper';
import {StyleSheet, Text, View, Alert, Image, ScrollView} from 'react-native';

const Berita = () => {
  const [dataBerita, setDataBerita] = useState([]); // state atau penampung data

  const ambilData = async () => {
    try {
      const response = await fetch(
        'https://ligaindonesia-api.vercel.app/api/v1/news',
      ); // Ambil Data
      const json = await response.json(); // Ubah data ke JSON
      // console.log(json);
      return setDataBerita(json.data);
    } catch (error) {
      Alert.alert('info', 'koneksi bermasalah'); // menampilkan error
    }
  };

  useEffect(() => {
    ambilData();
  }, []);

  return (
    <ScrollView>
      <View style={{padding: 15, gap: 12}}>
        {dataBerita &&
          dataBerita.map((item, i) => {
            return (
              <Card
                style={{
                  borderRadius: 0,
                }}
                key={i}>
                <Card.Content
                  style={{
                    flexDirection: 'row-reverse',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 90, height: 80, borderRadius: 10}}
                    source={{
                      uri: item.thumbnail,
                    }}
                  />

                  <Text
                    style={{
                      color: '#09051C',
                      flexWrap: 'wrap',
                      width: '70%',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    {item.title}
                  </Text>
                </Card.Content>
              </Card>
            );
          })}
      </View>
    </ScrollView>
  );
};

export default Berita;

const styles = StyleSheet.create({});
