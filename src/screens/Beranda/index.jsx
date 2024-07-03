import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {Appbar, Card, Text, Searchbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Beranda = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Appbar.Header style={styles.appBar}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Halo, Robby Wahyudi</Text>

          <MaterialCommunityIcons name="bell-outline" size={30} color="white" />
        </View>

        <Searchbar
          inputStyle={{padding: 0, marginTop: -6}}
          placeholderTextColor={'grey'}
          placeholder="cari berita tentang liga 1"
          style={{borderRadius: 10, height: 45}}
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
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              marginBottom: 15,
            }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              Madura United
            </Text>
            <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
              VS
            </Text>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              Persib
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'grey'}}>02/08/24</Text>
            <Text style={{color: 'grey'}}>19.00 WIB</Text>
          </View>
        </Card.Content>
      </Card>
      <Card
        style={{backgroundColor: '#FBC112', marginHorizontal: 25, height: 190}}>
        <Card.Content>
          <Text style={{fontWeight: 'bold', fontSize: 30, marginTop: 10}}>
            Dapatkan informasi
          </Text>
          <Text variant="titleLarge">tentang BRI Liga 1</Text>
          <Text variant="titleLarge">Indonesia</Text>
          <Text>Klik di sini</Text>
        </Card.Content>
      </Card>
      <Text
        style={{
          fontWeight: 'bold',
          paddingLeft: 25,
          fontSize: 18,
          marginTop: 20,
          marginBottom: 10,
        }}>
        Berita
      </Text>
      <Card
        style={{
          backgroundColor: '#FBC112',
          marginHorizontal: 25,
          height: 190,
          marginBottom: 30,
        }}>
        <Card.Content>
          <Text style={{fontWeight: 'bold', fontSize: 30, marginTop: 10}}>
            Dapatkan informasi
          </Text>
          <Text variant="titleLarge">tentang BRI Liga 1</Text>
          <Text variant="titleLarge">Indonesia</Text>
          <Text>Klik di sini</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  appBar: {
    height: 160,
    backgroundColor: '#9B222F',
    flexDirection: 'column',
    paddingHorizontal: 25,
    paddingTop: 30,
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  headerTitle: {
    textAlign: 'left',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
