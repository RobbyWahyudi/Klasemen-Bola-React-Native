import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

const Klasemen = () => {
  const [data, setData] = useState([]); // state atau penampung data

  const ambilData = async () => {
    try {
      const response = await fetch(
        'https://api-football-standings.azharimm.dev/leagues',
      ); // Ambil Data
      const json = await response.json(); // Ubah data ke JSON
      // console.log(json);
      return setData(json.data);
    } catch (error) {
      console.log(error); // menampilkan error
      Alert.alert('info', 'koneksi bermasalah');
    }
  };

  useEffect(() => {
    ambilData();
  }, []);

  return (
    <View style={{padding: 10}}>
      <FlatList
        data={data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              backgroundColor: '#FBC112',
              marginBottom: 10,
              padding: 10,
              borderRadius: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            key={item.id}>
            <Image
              style={{width: 50, height: 50}}
              source={{
                uri: `${item.logos.light}`,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
                paddingHorizontal: 10,
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Klasemen;

const styles = StyleSheet.create({});
