import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Appbar, Card, Text, Searchbar, Divider} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Beranda = ({navigation}) => {
  const [dataBerita, setDataBerita] = useState([]); // state atau penampung data

  const ambilData = async () => {
    try {
      // Ambil Data
      const response = await fetch(
        'https://ligaindonesia-api.vercel.app/api/v1/news',
      );
      const json = await response.json(); // Ubah data ke JSON
      return setDataBerita(json.data[0]);
    } catch (error) {
      Alert.alert('info', 'koneksi bermasalah'); // menampilkan error
    }
  };

  useEffect(() => {
    ambilData();
  }, []);

  const DataPertandingan = [{id: 1}, {id: 2}, {id: 3}];

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      {/* Bagian Header */}
      <Appbar.Header style={styles.appBar}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Halo, Robby Wahyudi</Text>

          <MaterialCommunityIcons
            name="bell-outline"
            size={30}
            color="white"
            onPress={() => setModalVisible(true)}
          />
        </View>

        <Searchbar
          inputStyle={{padding: 0, marginTop: -6}}
          placeholderTextColor={'grey'}
          placeholder="cari berita tentang liga 1"
          style={{borderRadius: 10, height: 45}}
        />
      </Appbar.Header>

      {/* Bagian Konten */}
      <View style={{paddingVertical: 20}}>
        <Text style={[styles.judulKonten, styles.judulPertandingan]}>
          Pertandingan Liga 1
        </Text>
        <ScrollView horizontal style={{}}>
          <View style={{flexDirection: 'row', gap: 15, paddingHorizontal: 25}}>
            {DataPertandingan &&
              DataPertandingan.map((item, i) => {
                return (
                  <Card style={styles.cardPertandingan} key={i}>
                    <Card.Content>
                      <View style={styles.kontenPertandingan}>
                        <Text style={styles.tim}>Madura United</Text>

                        <Text
                          style={{
                            color: '#9B222F',
                            fontSize: 25,
                            fontWeight: 'bold',
                          }}>
                          VS
                        </Text>

                        <Text style={styles.tim}>Persib</Text>
                      </View>

                      <View style={styles.waktuPertandingan}>
                        <Text style={{color: 'grey'}}>02/08/24</Text>
                        <Text style={{color: 'grey'}}>19.00 WIB</Text>
                      </View>
                    </Card.Content>
                  </Card>
                );
              })}
          </View>
        </ScrollView>

        <View style={{paddingHorizontal: 25}}>
          <Card
            style={{backgroundColor: 'white', marginBottom: 20}}
            onPress={() => navigation.navigate('BRI Liga 1')}>
            <Card.Content>
              <Text
                style={{fontWeight: 'bold', fontSize: 23, color: '#9B222F'}}>
                Dapatkan informasi tentang BRI Liga 1 Indonesia
              </Text>
              <Text style={{marginTop: 15, color: 'grey'}}>Klik di sini</Text>
            </Card.Content>
          </Card>

          <Text style={styles.judulKonten}>Berita</Text>

          <Card style={{backgroundColor: 'white', marginBottom: 10}}>
            <Card.Content
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                style={styles.thumbnailBerita}
                source={{
                  uri: dataBerita.thumbnail,
                }}
              />

              <Text style={styles.judulBerita}>{dataBerita.title}</Text>
            </Card.Content>
          </Card>

          <Card style={{backgroundColor: 'white'}}>
            <Card.Content
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                style={styles.thumbnailBerita}
                source={{
                  uri: dataBerita.thumbnail,
                }}
              />

              <Text style={styles.judulBerita}>{dataBerita.title}</Text>
            </Card.Content>
          </Card>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Notifikasi</Text>
            <View style={{marginTop: 15, width: '100%', gap: 10}}>
              <Text style={styles.notifikasi}>Notifikasi 1</Text>
              <Divider />
              <Text style={styles.notifikasi}>Notifikasi 2</Text>
              <Divider />
              <Text style={styles.notifikasi}>Notifikasi 3</Text>
              <Divider />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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

  judulPertandingan: {
    marginLeft: 25,
  },

  cardPertandingan: {
    backgroundColor: '#09051C',
    marginBottom: 30,
    width: 280,
  },

  kontenPertandingan: {
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 2,
    marginBottom: 15,
  },

  tim: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  waktuPertandingan: {flexDirection: 'row', justifyContent: 'space-between'},

  thumbnailBerita: {width: '45%', height: 135, borderRadius: 10},

  judulBerita: {
    color: '#09051C',
    flexWrap: 'wrap',
    width: '50%',
    fontSize: 17,
    fontWeight: 'bold',
  },

  centeredView: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
  },

  modalView: {
    width: '80%',
    height: 400,
    marginTop: 150,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 35,
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  button: {
    position: 'absolute',
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 20,
    elevation: 2,
    backgroundColor: '#9B222F',
    bottom: 20,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  notifikasi: {fontSize: 18},
});
