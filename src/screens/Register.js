import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      checkedBox: false,
      showPwd: false,
      txtEmail: '',
      txtPhone: '', 
      txtCreatePw: '',
      txtConfirmPw: '',
      isFocused: true,
      modalVisible: false,
      selectedCode: '',

      // Manually create an array of country codes and calling codes
      countryCodes: [
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 340',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 670',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 671',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 684',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 787/939',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 242',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 246',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 264',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 268',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 284',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 345',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 441',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 473',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 649',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 664',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 721',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 758',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 767',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 784',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 809 / 829 / 849',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 868',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 869',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+1 876',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+20',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+210',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+211',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+212',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+212 5288 / 5289',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+213',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+214',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+215',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+216',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+217',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+218',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+219',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+220',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+221',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+222',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+223',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+224',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+225',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+226',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+227',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+228',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+229',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+230',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+231',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+232',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+233',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+234',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+235',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+236',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+237',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+238',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+239',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+240',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+241',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+242',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+243',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+244',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+245',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+246',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+247',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+248',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+249',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+250',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+251',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+252',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+253',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+254',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+255',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+255 24',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+256',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+257',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+258',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+259',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+260',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+261',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+262',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+262 269 / 639',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+263',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+264',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+265',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+266',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+267',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+268',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+269',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+27',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+28x',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+290',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+290 8',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+291',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+292',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+293',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+294',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+295',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+296',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+297',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+298',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+299',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+30',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+31',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+32',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+33',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+34',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+350',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+351',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+352',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+353',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+354',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+355',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+356',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+357',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+358',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+358 18',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+359',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+36',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+37',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+370',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+371',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+372',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+373',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+373 2 / 5',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+374',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+374 47 / 97',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+375',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+376',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+377',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+377 44 / 45',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+378',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+379',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+38',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+380',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+381',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+381 28 / 29 / 38 / 39',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+382',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+383',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+384',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+385',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+386',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+386 43 / 49',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+387',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+388',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+389',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+39',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+39 06 698',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+40',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+41',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+42',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+420',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+421',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+422',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+423',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+424',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+425',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+426',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+427',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+428',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+429',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+43',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+44',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+44 1481',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+44 1534',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+44 1624',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+45',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+46',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+47',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+47 79',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+47 79',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+48',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+49',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+500',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+500 x',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+501',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+502',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+503',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+504',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+505',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+506',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+507',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+508',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+509',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+51',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+52',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+53',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+54',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+55',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+56',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+56 32',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+57',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+58',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+590',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+591',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+592',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+593',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+594',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+595',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+596',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+597',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+598',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+599',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+599 3',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+599 4',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+599 5',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+599 7',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+599 9',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+60',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+61',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+61 8 9162',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+61 8 9164',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+62',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+63',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+64',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+64 xx',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+65',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+66',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+670',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+671',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+672',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+672 1x',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+672 3',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+673',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+674',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+675',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+676',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+677',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+678',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+679',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+680',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+681',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+682',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+683',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+684',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+685',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+686',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+687',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+688',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+689',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+690',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+691',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+692',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+693',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+694',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+695',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+696',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+697',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+698',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+699',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+7',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+7 6xx / 7xx',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+7 840 / 940',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+800',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+801',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+802',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+803',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+804',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+805',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+806',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+807',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+808',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+809',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+81',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+82',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+83x',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+84',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+850',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+851',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+852',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+853',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+854',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+855',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+856',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+857',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+858',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+859',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+86',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+870',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+871',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+872',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+873',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+874',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+875',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+876',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+877',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+878',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+879',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+880',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+881',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+882',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+883',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+884',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+885',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+886',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+887',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+888',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+889',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+89x',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+90',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+90 392',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+91',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+92',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+93',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+94',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+95',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+960',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+961',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+962',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+963',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+964',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+965',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+966',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+967',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+968',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+969',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+970',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+971',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+972',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+973',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+974',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+975',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+976',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+977',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+978',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+979',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+98',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+990',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+991',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+992',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+993',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+994',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+995',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+995 44',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+995 xx',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+996',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+997',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+998',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          calling_code: '+999',
        },
      ],
    };
    // this.onChange = this.onChange.bind(this)
  }
  handleCheck = () => {
    this.setState({
      checkedBox: !this.state.checkedBox,
    });
  };
  handleConfirmPassword = () => {
    this.setState({
      showPwd: !this.state.showPwd,
    });
  };
  //function to check email
  handleEmailValidation = txt => {
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return regexEmail.test(String(txt).toLowerCase());
  };
  //to give email border
  handleFocus = () => this.setState({isFocused: true});
  handleBlur = () => this.setState({isFocused: false});
  //function to check phone number
  handlePhoneNumber = txt => {
    // {/^[^0-9]*$/.test ? '' : this.setState({txtPhone:txt})}
    let regexPhone = /^[0-9]*$/;

    return regexPhone.test(String(txt));
  };
  // handleNumber = ({currentTarget},key) => {
  //     let regexNumber = /^[0-9]|\.$/;
  // // const re='/^[0-9]|\.$/'

  // //     // return regexNumber.test(null)
  // }

  //function to check email
  handlePasswordValidation = txt => {
    let regexPw =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    return regexPw.test(String(txt));
  };
  handleCodeSelection = code => {
    this.setState({selectedCode: code, modalVisible: false});
  };
  handleSelectCode = code => {
    const updatedCodes = this.state.countryCodes.map((item, i) => ({
      ...item,
      isSelect: item.calling_code === code && !item.isSelect,
    }));
    this.setState({
      countryCodes: updatedCodes,
      selectedCode: code,
      // modalVisible: false,
    });
  };
  render() {
    const {modalVisible, selectedCode} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'#504A57'} barStyle="#FFFFFF"></StatusBar>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={require('../assets/images/back.png')}
            style={styles.backBtnImg}></Image>
          <Image
            source={require('../assets/images/login_logo.png')}
            style={styles.logoImg}></Image>
        </View>

        <View style={styles.registerView}>
          <Text style={styles.welcomeText}>Please Register</Text>

          <View style={[styles.emailView, styles.emailShadow]}>
            {/* <View style={{justifyContent:'space-between',flexDirection:'row'}}> */}
            <TextInput
              placeholder="Email"
              placeholderTextColor={'#504956'}
              style={styles.emailTextInput}
              keyboardType="email-address"
              // multiline={true}
              onChangeText={txt => {
                this.setState({txtEmail: txt});
              }}></TextInput>
            <Image
              source={require('../assets/images/login_mail.png')}
              style={styles.mailImage}></Image>
            {/* </View> */}
          </View>

          {this.state.txtEmail == '' ? null : this.handleEmailValidation(
              this.state.txtEmail,
            ) ? (
            <Text style={{color: 'green', marginLeft: 20}}>
              Valid Email!!!!
            </Text>
          ) : (
            <Text style={{color: 'red', marginLeft: 20}}>
              Invalid Email!!!!
            </Text>
          )}

          <View style={[styles.phoneView, styles.phoneNumShadow]}>
            <TouchableOpacity
              onPress={() => this.setState({modalVisible: true})}
              style={styles.inputContainer}>
              <TextInput
                value={selectedCode}
                placeholder="Code"
                placeholderTextColor="#251E1F"
                editable={false}
                style={[
                  styles.input,
                  {color: selectedCode ? '#323237' : '#929094'},
                ]}
              />
              <Image source={require('../assets/images/down.png')}></Image>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => this.setState({modalVisible: false})}>
              <View style={styles.modalContainer}>
                <TouchableOpacity
                  onPress={() => this.setState({modalVisible: false})}
                  style={{flex: 0.5}}></TouchableOpacity>
                <View style={styles.modalContent}>
                <Text style={styles.SelectCodeText}>Select Country Code</Text>
                  <FlatList
                  style={{flex:0.5,backgroundColor: 'white',borderRadius:20,marginHorizontal:20,paddingHorizontal:20}}
                    data={this.state.countryCodes}
                    renderItem={({item, index}) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.modalItem}
                        onPress={() =>  
                          this.handleSelectCode(item.calling_code)
                        }>
                        <Image
                          source={
                            item.isSelect ? item.selctedimage : item.blankimage
                          }
                          style={{
                            marginRight: 10,
                            marginVertical: 15,
                          }}></Image>
                        <Text style={styles.modalText}>
                          {item.calling_code}
                        </Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                  <TouchableOpacity
                    style={styles.CancelButton}
                    onPress={() => this.setState({modalVisible: false})}>
                    <Text style={styles.CancelText}>OK</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor={'#504956'}
              style={styles.phoneNumTextInput}
              keyboardType="number-pad"
              // maxLength={10}
              inputMode="numeric"
              onChangeText={txt => {
                this.setState({txtPhone: txt});
              }}></TextInput>
            <Image
              source={require('../assets/images/sign_up_call.png')}
              style={styles.phoneNumImage}></Image>
          </View>
          {this.state.txtPhone == '' ? null : this.handlePhoneNumber(
              this.state.txtPhone,
            ) ? (
            <Text style={{color: 'green', marginLeft: 20, marginTop: -16}}>
              {/* Valid Phone Number!!!! */}
            </Text>
          ) : (
            <Text style={{color: 'red', marginLeft: 20}}>
              Number must only 10 digit!!!!
            </Text>
          )}

          <View style={[styles.createPwdView, styles.createPwdShadow]}>
            <TextInput
              placeholder="Create Password"
              placeholderTextColor={'#504956'}
              style={styles.createPwdTextInput}
              keyboardType="default"
              onChangeText={txt => {
                this.setState({txtCreatePw: txt});
              }}
            />

            <Image
              source={require('../assets/images/sign_up_pw.png')}
              style={styles.createPwdImage}></Image>
          </View>
          {this.state.txtCreatePw == '' ? null : this.handlePasswordValidation(
              this.state.txtCreatePw,
            ) ? (
            <Text style={{color: 'green', marginLeft: 20}}>
              Valid Password!!!!
            </Text>
          ) : (
            <Text style={{color: 'red', marginLeft: 20}}>
              Minimum Eight Characters!!!!
            </Text>
          )}

          {/* Confirm Password */}
          <View style={[styles.confirmPwdView, styles.confirmPwdShadow]}>
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={'#504956'}
              style={styles.confirmPwdTextInput}
              keyboardType="default"
              secureTextEntry={this.state.showPwd == true ? true : false}
              onChangeText={txt => {
                this.setState({txtConfirmPw: txt});
              }}></TextInput>
            <TouchableOpacity onPress={this.handleConfirmPassword}>
              <Image
                source={
                  this.state.showPwd == false
                    ? require('../assets/images/sign_up_show_pw.png')
                    : require('../assets/images/sign_up_hide_pw.png')
                }
                style={
                  this.state.showPwd == true
                    ? styles.confirmPwdGrayImage
                    : styles.confirmPwdRedImage
                }
              />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={this.handleCheck}>
              <Image
                source={
                  this.state.checkedBox == false
                    ? require('../assets/images/Rectangle_16190.png')
                    : require('../assets/images/sign_up_sel_chk.png')
                }
                style={styles.termsPrivacyImg}
              />
            </TouchableOpacity>
            <Text style={styles.termsPrivacyText}>
              By signing-up you accept our{' '}
              <TouchableOpacity style={{marginTop: 20}}>
                <Text style={styles.termsPrivacyText1}>Terms of</Text>
              </TouchableOpacity>
              {'\n'}
              <TouchableOpacity style={{marginTop: 20}}>
                <Text style={styles.termsPrivacyText1}>Services</Text>
              </TouchableOpacity>{' '}
              <Text>and </Text>
              <TouchableOpacity style={{marginTop: 20}}>
                <Text style={styles.termsPrivacyText1}>Privacy Policy</Text>
              </TouchableOpacity>
              .
            </Text>
          </View>
          <TouchableOpacity style={styles.continueBtn}>
            <Text style={styles.continueBtnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#504A57',
  },
  backBtnImg: {
    marginTop: 17,
    position: 'absolute',
    left: 20,
  },
  logoImg: {
    marginTop: 18,
    width: 40,
    height: 25.08,
  },
  innerView: {
    backgroundColor: '#B78097',
    marginTop: 43.96,
    height: 606,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  registerView: {
    backgroundColor: '#F1E9EC',
    height: 667,
    marginTop: 23,
    borderRadius: 20,
    // box-shadow: 0px 3px 6px 0px #0000000D;
  },
  welcomeText: {
    fontSize: 24,
    lineHeight: 27.6,
    fontWeight: '400',
    color: '#333333',
    textAlign: 'left',
    marginTop: 26,
    marginLeft: 20,
  },
  //for Email View
  emailView: {
    //i changed it by myself bcuz of phone
    height: 54,
    borderRadius: 12,
    borderColor: '#FFFFFF',
    borderWidth: 0.3,
    marginTop: 21,
    marginHorizontal: 20,
    // box-shadow: 0px 3px 6px 0px #00000012;
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emailShadow: {
    shadowColor: 'gray',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowOffset: {width: 6, height: 6},
    elevation: 5,
    backgroundColor: '#FFFFFF',
  },
  //for textInput
  emailTextInput: {
    fontSize: 18,
    fontWeight: '500',
    // width:330,
    lineHeight: 20.7,
    paddingTop: 12,
    paddingLeft: 19,
    color: '#504956',
    flex: 1,
    // justifyContent:'flex-start'
    // paddingRight:60
  },
  mailImage: {
    marginTop: 18,
    marginEnd: 22,
    alignItems: 'flex-end',
    // marginLeft:325,
    // position:'absolute'
  },
  inputContainer: {
    // padding: 10,
    paddingLeft: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    color: '#323237',
    fontSize: 18,
    marginRight: 8,
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  SelectCodeText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
    marginTop:20
  },
  modalContent: {
    backgroundColor: 'rgba(241, 233, 236, 1)',
    // padding: 20,
    borderRadius: 20,
    flexGrow: 1,
    flex: 0.5,
    // justifyContent: 'center',
    // alignItems:'center'
  },
  modalItem: {
    borderBottomColor: '#251E1F',
    // borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalText: {
    color: '#251E1F',
    fontSize: 18,
  },
  CancelButton: {
    backgroundColor: '#FF3D52',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 14,
    marginHorizontal: 40,
    borderRadius: 100,
    marginTop: 20,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 2,
    marginBottom:20
  },
  CancelText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  borderView: {
    height: 8,
    borderColor: '#E5E5E5',
    borderWidth: 0.6,
    width: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //for Password
  phoneView: {
    //i changed it by myself bcuz of phone
    height: 54,
    borderRadius: 12,
    borderColor: '#FFFFFF',
    borderWidth: 0.3,
    marginTop: 15,
    marginHorizontal: 20,
    // box-shadow: 0px 3px 6px 0px #00000012;
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  phoneNumShadow: {
    shadowColor: 'gray',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowOffset: {width: 6, height: 6},
    elevation: 5,
    backgroundColor: '#FFFFFF',
  },
  //for textInput
  phoneNumTextInput: {
    fontSize: 18,
    lineHeight: 20.7,
    // fontWeight: '400',
    fontWeight: '500',
    paddingTop: 12, //
    paddingLeft: 19,
    color: '#504956',
    flex: 1,
  },
  phoneNumImage: {
    // marginTop: 16,
    marginRight: 20,
  },
  //Create Password
  createPwdView: {
    //i changed it by myself bcuz of phone
    height: 54,
    borderRadius: 12,
    borderColor: '#FFFFFF',
    borderWidth: 0.3,
    marginTop: 15,
    marginHorizontal: 20,
    // box-shadow: 0px 3px 6px 0px #00000012;
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  createPwdShadow: {
    shadowColor: 'gray',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowOffset: {width: 6, height: 6},
    elevation: 5,
    backgroundColor: '#FFFFFF',
  },
  //for textInput
  createPwdTextInput: {
    fontSize: 18,
    lineHeight: 20.7,
    fontWeight: '500',
    paddingTop: 12, //
    paddingLeft: 19,
    color: '#504956',
    flex: 1,
  },
  createPwdImage: {
    marginTop: 16,
    marginRight: 20,
  },
  //Confirm Password
  confirmPwdView: {
    //i changed it by myself bcuz of phone
    height: 54,
    borderRadius: 12,
    borderColor: '#FFFFFF',
    borderWidth: 0.3,
    marginTop: 15,
    marginHorizontal: 20,
    // box-shadow: 0px 3px 6px 0px #00000012;
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirmPwdShadow: {
    shadowColor: 'gray',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowOffset: {width: 6, height: 6},
    elevation: 5,
    backgroundColor: '#FFFFFF',
  },
  //for textInput
  confirmPwdTextInput: {
    fontSize: 18,
    lineHeight: 20.7,
    fontWeight: '500',
    paddingTop: 12, //
    paddingLeft: 19,
    color: '#504956',
    flex: 1,
  },
  confirmPwdGrayImage: {
    marginTop: 16,
    marginRight: 18,
    marginLeft: 10,
  },
  confirmPwdRedImage: {
    marginTop: 14,
    marginRight: 18,
  },
  //Referal code
  referralCodeView: {
    //i changed it by myself bcuz of phone
    height: 54,
    borderRadius: 12,
    borderColor: '#FFFFFF',
    borderWidth: 0.3,
    marginTop: 15,
    marginHorizontal: 20,
    // box-shadow: 0px 3px 6px 0px #00000012;
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  referralCodeShadow: {
    shadowColor: 'gray',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowOffset: {width: 6, height: 6},
    elevation: 5,
    backgroundColor: '#FFFFFF',
  },
  //for textInput
  referralCodeTextInput: {
    fontSize: 18,
    lineHeight: 20.7,
    fontWeight: '400',
    paddingTop: 12, //
    paddingLeft: 19,
    color: '#504956',
  },
  //signin button
  continueBtn: {
    marginTop: 41,
    height: 54,
    marginLeft: 20,
    marginRight: 17,
    backgroundColor: '#FF3D52',
    borderRadius: 30,
  },
  continueBtnText: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 20.7,
    color: '#FFFFFF',
    marginTop: 16,
    textAlign: 'center', //bcuz margin diff as phone vise
  },
  termsPrivacyImg: {
    marginTop: 17,
    marginLeft: 20,
  },
  termsPrivacyText: {
    marginTop: 14,
    marginLeft: 13,
    marginRight: 60,
    color: '#504956',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18.4, //bcuz margin diff as phone vise
  },
  termsPrivacyText1: {
    textDecorationLine: 'underline',
    fontWeight: '600',
    // marginRight: 140,
    color: '#504956',
    fontSize: 16,
    lineHeight: 18.4, //bcuz margin diff as phone vise
  },
});
