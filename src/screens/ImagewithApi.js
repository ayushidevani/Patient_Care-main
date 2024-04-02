import {FlatList, ScrollView, StyleSheet, Text, View,Image} from 'react-native';
import React, {useEffect, useState} from 'react';

const ImagewithApi = () => {
  const [data, setData] = useState([]);

  //Api Calling Functions
  const getApiCall = async () => {
    //Api Call
    const api = 'https://jsonplaceholder.typicode.com/photos';
    let result = await fetch(api);
    result = await result.json();
    // console.log(result);
    setData(result);
  };

  useEffect(() => {
    getApiCall();
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Text
          style={{
            alignSelf: 'center',
            marginVertical: 20,
            fontSize: 30,
            color: 'black',
            fontWeight: '700',
          }}>
          ListWithApiCall
        </Text>
        {data.length ? (
          <FlatList
            data={data}
            scrollEnabled={true}
            renderItem={({item}) => (
              <View
                style={{
                  marginHorizontal: 30,
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  marginTop: 10,
                  backgroundColor: 'blue',
                }}>
                <Text style={styles.IdText1}>
                  User Id : <Text style={{color: 'red'}}>{item.albumId}</Text>
                </Text>
                <Text style={styles.IdText1}>
                  Title : <Text style={{color: 'red'}}>{item.title}</Text>
                </Text>
                <Image source={{uri: item.thumbnailUrl}} style={styles.img} />
              </View>
            )}
          />
        ) : null}
      </ScrollView>
    </View>
  );
};

export default ImagewithApi;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SimpleCallText: {
    color: 'black',
    fontWeight: '700',
    marginTop: -30,
    marginBottom: 10,
  },
  IdText: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: 5,
  },
  IdText1: {
    backgroundColor: 'lightgrey',
    paddingVertical: 5,
    color: 'green',
    fontWeight: 'bold',
    marginTop: 5,
  },
  img:{
    height:100,
    width:100
  }
});
