import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, Modal, FlatList } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

class countryName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCode: '',
      modalVisible: false,
      countryCodes: [], // to store country codes
    };
  }

  componentDidMount() {
    // Initialize country codes in the state
    const allCountryCodes = CountryPicker.getAllCountries().map(country => ({
      name: country.name,
      callingCode: country.callingCode[0],
    }));
    this.setState({ countryCodes: allCountryCodes });
  }

  selectCountryCode = (code) => {
    this.setState({ selectedCode: code.callingCode, modalVisible: false });
  };

  render() {
    const { selectedCode, modalVisible, countryCodes } = this.state;

    return (
      <View>
        <TextInput
          placeholder="Phone code"
          value={selectedCode}
          onChangeText={(text) => this.setState({ selectedCode: text })}
        />
        <TouchableOpacity onPress={() => this.setState({ modalVisible: true })}>
          <Text>▼</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => this.setState({ modalVisible: false })}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
              <FlatList
                data={countryCodes}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => this.selectCountryCode(item)}>
                    <Text>{item.callingCode}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.callingCode}
              />
              <TouchableOpacity onPress={() => this.setState({modalVisible: false })}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default countryName;
