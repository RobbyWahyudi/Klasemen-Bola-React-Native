import React, {useEffect, useState} from 'react';
import {Card} from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';

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
    <ScrollView
      style={{
        backgroundColor: 'white',
      }}>
      <View style={{}}>
        {dataBerita &&
          dataBerita.map((item, i) => {
            return (
              // <View
              //   style={{
              //     borderBottomWidth: 1,
              //     borderColor: '#9B222F',
              //     flexDirection: 'row',
              //     alignItems: 'center',
              //     gap: 10,
              //     width: 300,
              //   }}
              //   key={i}>
              //   <Image
              //     style={{width: 80, height: 50}}
              //     source={{
              //       uri: item.thumbnail,
              //     }}
              //   />
              //   <Text
              //     style={{
              //       color: '#09051C',
              //       fontSize: 16,
              //       fontWeight: 'bold',
              //       flexWrap: 'wrap',
              //     }}>
              //     {item.title}
              //   </Text>
              // </View>

              <Card
                style={{
                  backgroundColor: 'white',
                  marginHorizontal: 25,
                  marginVertical: 10,
                }}
                key={i}>
                <Card.Content>
                  <Image
                    style={{width: 80, height: 50}}
                    source={{
                      uri: item.thumbnail,
                    }}
                  />
                  <Text style={{marginTop: 10, color: 'grey'}}>
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
