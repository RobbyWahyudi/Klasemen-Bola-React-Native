import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Appbar, Card, Text} from 'react-native-paper';

const Beranda = () => {
  return (
    <View>
      <Appbar.Header
        style={{
          height: 190,
          backgroundColor: '#15BE77',
          flexDirection: 'column',
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Appbar.Action icon="menu" color="white" />
          <Appbar.Action icon="bell-outline" color="white" />
        </View>
        <Appbar.Content
          title="Halo, Robby Wahyudi"
          style={{width: '100%', marginLeft: 10, paddingLeft: 25}}
          color="white"
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
      <Card style={{backgroundColor: '#15BE77', marginHorizontal: 25}}>
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
