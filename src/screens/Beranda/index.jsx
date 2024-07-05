import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {Appbar, Card, Text, Searchbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Beranda = ({navigation}) => {
  return (
    <ScrollView>
      {/* Bagian Header */}
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

      {/* Bagian Konten */}
      <View style={{paddingHorizontal: 25, paddingVertical: 20}}>
        <Text style={styles.judulKonten}>Pertandingan Liga 1</Text>

        <Card
          style={{
            backgroundColor: '#09051C',
            marginBottom: 30,
            width: 280,
          }}>
          <Card.Content>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
                marginBottom: 15,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}>
                Madura United
              </Text>
              <Text
                style={{color: '#9B222F', fontSize: 25, fontWeight: 'bold'}}>
                VS
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}>
                Persib
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'grey'}}>02/08/24</Text>
              <Text style={{color: 'grey'}}>19.00 WIB</Text>
            </View>
          </Card.Content>
        </Card>

        <Card
          style={{backgroundColor: 'white', marginBottom: 20}}
          onPress={() => navigation.navigate('BRI Liga 1')}>
          <Card.Content>
            <Text style={{fontWeight: 'bold', fontSize: 23, color: '#9B222F'}}>
              Dapatkan informasi tentang BRI Liga 1 Indonesia
            </Text>
            <Text style={{marginTop: 10, color: 'grey'}}>Klik di sini</Text>
          </Card.Content>
        </Card>

        <Text style={styles.judulKonten}>Berita</Text>
        <Card
          style={{
            backgroundColor: 'white',
            height: 190,
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
      </View>
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

  judulKonten: {
    color: '#09051C',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
