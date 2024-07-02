import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Appbar, Card, Text, TextInput, Searchbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Beranda = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Appbar.Header
        style={{
          height: 190,
          backgroundColor: '#9B222F',
          flexDirection: 'column',
          paddingHorizontal: 25,
          paddingTop: 30,
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <MaterialCommunityIcons name="menu" size={32} color="white" />
          <MaterialCommunityIcons name="bell-outline" size={30} color="white" />
        </View>
        <Text
          style={{
            textAlign: 'left',
            width: '100%',
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          Halo, Robby Wahyudi
        </Text>
        <Searchbar
          inputStyle={{padding: 0, marginTop: -6}}
          placeholder="Search"
          style={{
            borderRadius: 10,
            height: 45,
          }}
        />
      </Appbar.Header>
      <Text
        style={{
          color: '#09051C',
          fontSize: 18,
          fontWeight: 'bold',
          paddingLeft: 25,
          paddingTop: 20,
          marginBottom: 10,
        }}>
        Pertandingan Liga 1
      </Text>
      <Card
        style={{
          backgroundColor: '#09051C',
          marginHorizontal: 25,
          marginBottom: 30,
        }}>
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
      </Card>
      <Card style={{backgroundColor: '#FBC112', marginHorizontal: 25}}>
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
      </Card>
      <Text style={{fontWeight: 'bold', paddingLeft: 25, fontSize: 18}}>
        Berita
      </Text>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({});
