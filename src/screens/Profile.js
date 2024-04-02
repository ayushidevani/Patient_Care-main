import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import CountryPicker from 'react-native-country-picker-modal';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      //For selected Date
      selectedStartDate: null,
        //For calender Visible or not
          iscalenderModalVisible:false,
          currentDate: new Date(),
      

      //to print selected index,
      selectedIndex: null,

      //for round select and deselect
      isVisible: false,

      //to open gender view
      isGender: false,

      //to print gender
      selectedGenderPrint: null,

      //for country Name View
      countryModalVisible: false,

      //to select country name
      selectedCountry: null,

      //array for select role
      SelectRoleData: [
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          RoleText: 'Patient Actively Being Treated',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          RoleText: 'Patient Post Treatment',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          RoleText: 'Caregiver',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          RoleText: 'Family',
        },
        {
          isSelect: false,
          blankimage: require('../assets/images/Unfill.png'),
          selctedimage: require('../assets/images/Selected.png'),
          RoleText: 'Friend',
        },
      ],
      selectGender: [
        {
          isSelect1: false,
          genderText: 'Male',
        },
        {
          isSelect1: false,
          genderText: 'Female',
        },
      ],
    };
    vFirstName = fname => {
      const fn = /\D+[a-zA-Z]*$/;
      return fn.test(String(fname));
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
  handleFName = fname => {
    const regexName = /[a-zA-Z]+$/;

    console.log(fname);
    return regexName.test(String(fname));
  };
  handleLName = lname => {
    const regexName = /[a-zA-Z]+$/;

    return regexName.test(String(lname));
  };
  //   handleLikePress = index => {
  //     const post = this.state.SelectRoleData;
  //     post[index].isSelect = !post[index].isSelect;
  //     this.setState({SelectRoleData: post});
  //   };
  handleLikePress = index => {
    const updatedRoles = this.state.SelectRoleData.map((item, i) => ({
      ...item,
      isSelect: i === index && !item.isSelect,
    }));
    this.setState({
      SelectRoleData: updatedRoles,
      selectedIndex: index,
      isVisible: false,
    });
  };

  handleGenderSelect = index => {
    const updatedGender = this.state.selectGender.map((item, i) => ({
      ...item,
      isSelect1: i === index && !item.isSelect1,
    }));
    this.setState({
      selectGender: updatedGender,
      selectedGenderPrint: index,
      isGender: false,
    });
  };
  handleGender = () => {
    this.setState({
      isGender: !this.state.isGender,
    });
  };
  onDateChange(date) {
    const formattedDate = moment(date).format('DD/MM/YYYY');
    this.setState({
      selectedStartDate: formattedDate,
      iscalenderModalVisible: false,
    });
  }
  onmodalclose = () => {
    this.setState({iscalenderModalVisible: false});
  };
  checkEmpty = () => {
    if (this.state.firstName === '' || this.state.lastName === '') {
      Alert.alert('Please Fill Empty Fields.');
      return;
    }
    if (!this.handleFName(this.state.firstName)) {
      Alert.alert('Please Enter Valid First Name.');
      return;
    }
    if (!this.handleLName(this.state.lastName)) {
      Alert.alert('Please Enter Valid Last Name.');
      return;
    } else {
    }
  };
  //for country Name
  selectCountry = country => {
    this.setState({selectedCountry: country, countryModalVisible: false});
  };
  renderHeader = () => {
    const { currentDate} = this.state;
   
    return (
      <View>
      <View style={styles.header}>
       <Text style={{color:'#40474B',fontWeight:'600',fontSize:20,textAlign:'center',position:'absolute',left:15,top:8}}>{currentDate.toLocaleDateString('default', { month: 'long'})} , {currentDate.getFullYear()}</Text>
        <TouchableOpacity onPress={currentDate.getMonth()!==new Date().getMonth()?this.goToNextMonth:null} style={{position:'absolute',right:20,top:8,height:10,width:10}}>
          <Image source={currentDate.getMonth()!==new Date().getMonth()?require('../assets/images/forward.png'):null}></Image>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={this.goToPreviousMonth} style={{position:'absolute',right:60,top:8,}}>
        <Image source={require('../assets/images/backImg.png')}></Image>
        </TouchableOpacity>
       
        </View>
        
      </View>
    );
  };
  getDayOfWeek=(year,month,day)=>
{
const date=new Date(year,month,day)
const Day=["SU","MU","TU","WE","TH","FR","SA"];
const DayName=["suns","tues","wedn","thurs","frid","saturd"];
return Day[date.getDay()];
}
getDayOfweek2=(year,month,day)=>
{
const date=new Date(year,month,day)

// const Day=["SU","MU","TU","WE","TH","FR","SA"];
const DayfullName=["suns","mond","tues","wedn","thurs","frid","satu"];
return DayfullName[date.getDay()];
}


 


handleSelectDatetTime=(time)=>{
this.setState({
  selecteddatetime:time
})
 
}

changeSelectedDate=(day,currentdateName,selectedDate)=>{
const {currentDate,selectCurrentDate}=this.state;
const dayOfweek=this.getDayOfWeek(currentDate.getFullYear(),currentDate.getMonth(),day)
const dayOfweek2=this.getDayOfweek2(currentDate.getFullYear(),currentDate.getMonth(),day)
const time=currentDate.getMinutes();
const time1=currentDate.getHours();

if(currentDate.getMonth()!==currentDate.getMonth())
{
  this.setState({selectedDate:currentdate,dayName2:dayOfweek2,dayName:dayOfweek,timeM:time,timeH:time1});
}
else
{
  this.setState({selectedDate:day,dayName2:dayOfweek2,dayName:dayOfweek,timeM:time,timeH:time1});

}
  console.log(day);
const formattedDate=moment(day).format('DD/MM/YYYY');

//   // const currentMonth=currentDate.getMonth();
const currentdate=currentDate.getDate();

//const currentMonth=currentDate.getMonth();

this.setState({
selectedStartDate:formattedDate,
iscalenderModalVisible:false,
})

  this.setState({selectedDate:day,dayName2:dayOfweek2,dayName:dayOfweek,timeM:time,timeH:time1});

}

goToPreviousMonth = () => {
this.setState((prevState) => ({
  currentDate: new Date(prevState.currentDate.getFullYear(), prevState.currentDate.getMonth() - 1, 1),
}));
};

goToNextMonth = () => {
this.setState((prevState) => ({
  currentDate: new Date(prevState.currentDate.getFullYear(), prevState.currentDate.getMonth() + 1, 1),
}));
};
  render() {
    //for country Name
    const {selectedCountry, countryModalVisible} = this.state;
    //For birthday calender
    const Day=["SU","MO","TU","WE","TH","FR","SA"];
    const mintime=this.state.currentDate.getHours();
    const hourtime=this.state.currentDate.getMinutes();
    const dayname=["suns","mond","tues","wedn","thur","frid","satu"];
    const { currentDate,selectedDate,selectedDayName,selectCurrentDate} = this.state;

    // const monthCurrent=`${
    //  this.state.months[this.state.currentDate.getMonth()]
    // }`;
    
   

   const goToPreviousMonth = () => {
      this.setState((prevState) => ({
        currentDate: new Date(prevState.currentDate.getFullYear(), prevState.currentDate.getMonth() - 1, 1),
      }));
    };
  
   const  goToNextMonth = () => {
      this.setState((prevState) => ({
        currentDate: new Date(prevState.currentDate.getFullYear(), prevState.currentDate.getMonth() + 1, 1),
      }));
    };

    const daysInMonth=new Date(
      currentDate.getFullYear(),
      currentDate.getMonth()+1,0,
    ).getDate();

    const firstDayOfMonth=new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),1,
    ).getDay();

    const daysInPreviousMonth=new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),0,
    ).getDate();


    const days=Array.from({length:daysInMonth + firstDayOfMonth+(6 - new Date(
      currentDate.getFullYear(),currentDate.getMonth()+1,0).getDay())},
      (_,index)=>{
        if(index<firstDayOfMonth){
         return{
          day: daysInPreviousMonth -(firstDayOfMonth - index)+1,
          month : currentDate.getMonth()===0?11:currentDate.getMonth()-1,
          ispreviousMonth:true
         }

        }else if(index<daysInMonth + firstDayOfMonth){
          return {
            day:index - firstDayOfMonth+1,
            month:currentDate.getMonth(),
            isCurrentMonth:true,
            
          }
        }
        else{
          return {
            day:index - (daysInMonth+firstDayOfMonth)+1,
            month : currentDate.getMonth()===11?0:currentDate.getMonth()+1,
          
            isnextMonth:true,
            
          }
        }
      }
    );
    //For Birth Date
    const { selectedStartDate,iscalenderModalVisible } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    return (
      <View style={styles.container}>
        <View style={styles.logoView}>
          <View style={styles.backButtonView}>
            <Image source={require('../assets/images/back_img.png')}></Image>
          </View>
          <Image
            source={require('../assets/images/login_logo.png')}
            style={{marginTop: 17}}></Image>
        </View>
        <View style={styles.profileView}>
          <ScrollView>
            <Text style={styles.createProfileTxt}>
              Please Create Your Profile
            </Text>
            <View style={styles.firstNameView}>
              <View style={styles.firstNameTxtInput}>
                <TextInput
                  placeholder="First Name"
                  placeholderTextColor={'#251E1F'}
                  onChangeText={fname => {
                    this.setState({firstName: fname});
                  }}
                  style={{
                    flex: 0.8,
                    fontSize: 16,
                    fontWeight: this.state.firstName ? '700' : '400',
                  }}></TextInput>
                <Image
                  source={require('../assets/images/User.png')}
                  style={{position: 'absolute', right: 12, top: 15}}></Image>
              </View>
              <View style={styles.lastnameTextInput}>
                <TextInput
                  placeholder="Last Name"
                  placeholderTextColor={'#251E1F'}
                  onChangeText={lname => {
                    this.setState({lastName: lname});
                  }}
                  style={{
                    flex: 0.8,
                    fontSize: 16,
                    fontWeight: this.state.lastName.length != 0 ? '700' : '400',
                  }}></TextInput>
                <Image
                  source={require('../assets/images/User.png')}
                  style={{position: 'absolute', right: 12, top: 15}}></Image>
              </View>
            </View>
            <View style={styles.birthDateView}>
              <TextInput
                placeholder="Birth Date"
                placeholderTextColor={'#251E1F'}
                style={[
                  styles.birthDateInput,
                  {
                    color:
                      this.state.selectedStartDate !== null
                        ? '#323237'
                        : '#929094',
                    fontWeight:
                      this.state.selectedStartDate !== null ? '700' : '400',
                  },
                ]}
                value={this.state.selectedStartDate}></TextInput>

              <TouchableOpacity
                style={{position: 'absolute', right: 12, top: 17}}
                onPress={() => {
                  this.setState({iscalenderModalVisible: true});
                }}>
                <Image source={require('../assets/images/cal.png')}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.birthDateView}>
              <TextInput
                placeholder="Select Your Role"
                //display selcted role index
                style={{
                  fontSize: 16,
                  color:
                    this.state.selectedIndex !== null ? '#323237' : '#929094',
                  fontWeight: this.state.selectedIndex !== null ? '700' : '400',
                }}
                value={
                  this.state.selectedIndex != null
                    ? this.state.SelectRoleData[this.state.selectedIndex]
                        .RoleText
                    : ''
                }
                placeholderTextColor={'#251E1F'}></TextInput>
              <TouchableOpacity
                onPress={() => this.setState({isVisible: true})}
                style={{position: 'absolute', right: 12, top: 17}}>
                <Image source={require('../assets/images/down.png')}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.birthDateView}>
              <TextInput
                placeholder="Select Gender"
                style={[
                  styles.malefemaleText,
                  {
                    fontSize: 16,
                    color:
                      this.state.selectedGenderPrint !== null
                        ? '#504956'
                        : '#929094',
                    fontWeight:
                      this.state.selectedGenderPrint !== null ? '700' : '400',
                  },
                ]}
                value={
                  this.state.selectedGenderPrint != null
                    ? this.state.selectGender[this.state.selectedGenderPrint]
                        .genderText
                    : ''
                }
                placeholderTextColor={'#251E1F'}></TextInput>
              <TouchableOpacity
                onPress={this.handleGender}
                style={{position: 'absolute', right: 12, top: 17}}>
                <Image source={require('../assets/images/down.png')}></Image>
              </TouchableOpacity>
            </View>

            {this.state.isGender ? (
              <View style={[styles.genderView, {paddingLeft: 15}]}>
                <FlatList
                  data={this.state.selectGender}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      style={{paddingTop: 5}}
                      key={index}
                      onPress={() => this.handleGenderSelect(index)}>
                      <Text style={styles.malefemaleText}>
                        {item.genderText}
                      </Text>
                    </TouchableOpacity>
                  )}></FlatList>
              </View>
            ) : null}

            <View style={styles.selectCountryView}>
              <TextInput
                style={[
                  styles.malefemaleText,
                  {
                    fontSize: 16,
                    color: this.selectCountry !== null ? '#323237' : '#929094',
                    fontWeight: this.selectCountry !== null ? '400' : '700',
                  },
                ]}
                placeholderTextColor={'#251E1F'}
                value={selectedCountry ? selectedCountry.name : ''}
                placeholder="Select Country"
                editable={false} // Make the input non-editable
              />
              <TouchableOpacity
                onPress={() => this.setState({countryModalVisible: true})}
                style={{position: 'absolute', right: 12, top: 15}}>
                <Image source={require('../assets/images/down.png')}></Image>
              </TouchableOpacity>
              <CountryPicker
                visible={countryModalVisible}
                onClose={() => this.setState({countryModalVisible: false})}
                onSelect={country => this.selectCountry(country)}
                withFilter
                withFlag={false}
                withCountryNameButton
                modalProps={{onlyCode : true}}
              />
            </View>

            <TouchableOpacity
              style={styles.registerBtn}
              onPress={() => {
                this.checkEmpty();
              }}>
              <Text style={styles.registerTxt}>Register</Text>
            </TouchableOpacity>

            <Modal
              animationType={'fade'}
              transparent={true}
              visible={this.state.isVisible}>
              <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <View style={{flex: 0.4}}></View>
                <View
                  style={{
                    backgroundColor: 'rgba(241, 233, 236, 1)',
                    paddingBottom: 20,
                    height: 490,
                    flexBasis: 10,
                    flexGrow: 1,
                    flex: 0.6,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}>
                  <Image
                    source={require('../assets/images/person.png')}
                    style={styles.ModelProfile}></Image>
                  <Text style={styles.SelectYourRole}>Select Your Role</Text>

                  <FlatList
                    style={styles.FlatlistView}
                    data={this.state.SelectRoleData}
                    renderItem={({item, index}) => (
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                          key={index}
                          onPress={() => this.handleLikePress(index)}>
                          <Image
                            source={
                              item.isSelect
                                ? item.selctedimage
                                : item.blankimage
                            }
                            style={{
                              marginRight: 10,
                              marginVertical: 15,
                            }}></Image>
                        </TouchableOpacity>
                        <Text style={styles.RoleText}>{item.RoleText}</Text>
                      </View>
                    )}></FlatList>

                  <TouchableOpacity
                    style={styles.CancelButton}
                    onPress={() => this.setState({isVisible: false})}>
                    <Text style={styles.CancelText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            <Modal
              animationType="none"
              transparent={true}
              visible={iscalenderModalVisible}
              onRequestClose={() => {
                this.setState({iscalenderModalVisible: false});
              }}>
              
       
      <View style={{flex:0.35}}></View>
       <View style={{backgroundColor:'#F9F9F9',flex:0.68}}>
     {this.renderHeader()}
     <View>
     <View style={{flexDirection:'row',marginTop:40,justifyContent:'space-between',marginLeft:20,marginRight:30}}>
    {Day.map((day,index)=>(
     <Text key={day} style={[ styles.dayTxtColor,day===this.state.dayName&& styles.selectedDayColor]}>{day}</Text>
    ))}
       </View>
       <View style={{flexDirection:'row',flexWrap:'wrap',marginHorizontal:5}}>
     
         {days.map((dayInfo,index)=>(
           <TouchableOpacity
           key={index}
           style={[styles.dayButton,
           dayInfo.day === selectedDate && dayInfo.month===currentDate.getMonth()?styles.selecteday:styles.dayButton,
           //dayInfo.day===30&& dayInfo.month===currentDate.getMonth()-1 && styles.borderBtn,
           dayInfo.day===currentDate.getDate() && index>=firstDayOfMonth && index<=daysInMonth+firstDayOfMonth-1 && styles.borderColorTxt
          
          
           ]}
           onPress={()=>{if(dayInfo.month===currentDate.getMonth()){
             this.changeSelectedDate(new Date(currentDate.getFullYear(),currentDate.getMonth(),dayInfo.day));
           }
           }}
          
           >
           <Text style={[styles.dayTxt,

          ( (dayInfo.day===19 ||dayInfo.day===21||dayInfo.day===22||dayInfo.day===24)&& dayInfo.month===currentDate.getMonth()==7&&  styles.strikeTxt),
           dayInfo.day===selectedDate&& dayInfo.month===currentDate.getMonth()?styles.selectTxt:styles.dayTxt,
           dayInfo.ispreviousMonth||dayInfo.isnextMonth?styles.premonthTxt:null
           ]}>{dayInfo.day}</Text>
           </TouchableOpacity>
         ))
         }

       </View>
       </View>
     </View>
         
      
            </Modal>
          </ScrollView>
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
  logoView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  firstNameView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  birthDateView: {
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    elevation: 2,
    marginHorizontal: 15,
    marginTop: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  selectCountryView: {
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    elevation: 2,
    marginHorizontal: 15,
    height:55,
    marginTop: 15,
    // paddingVertical: 5,
    paddingHorizontal: 10,
  },
  genderView: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: 'rgba(241, 233, 236, 1)',
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    elevation: 2,
    marginTop: -10,
    marginHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 10,
  },
  malefemaleText: {
    fontSize: 18,
    color: '#504956',
    // fontWeight: '600',
  },
  selectedgenderText: {
    fontWeight: '600',
    color: '#504956',
    fontSize: 18,
  },
  backButtonView: {
    height: 29,
    width: 29,
    backgroundColor: '#6C6771',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 17,
    left: 12,
  },
  profileView: {
    backgroundColor: '#F1E9EC',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flex: 1,
    marginTop: 20,
  },
  createProfileTxt: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 20,
    color: '#251E1F',
    fontWeight: 'bold',
  },
  firstNameTxtInput: {
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    elevation: 2,
    marginHorizontal: 15,
    marginTop: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    flex: 1,
  },
  lastnameTextInput: {
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    elevation: 2,
    marginHorizontal: 15,
    marginTop: 20,
    paddingVertical: 5,
    marginLeft: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    flex: 1,
  },
  registerTxt: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 20.7,
    paddingVertical: 16,
    paddingHorizontal: 140,
  },
  registerBtn: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3D52',
    borderRadius: 100,
    marginTop: 100,
  },
  SelectRolePopUp: {
    marginTop: 30,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 30,
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  FlatlistView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 20,
    //paddingVertical:20,
    paddingHorizontal: 20,
    //   paddingRight:120,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 2,
  },
  CancelButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 14,
    marginHorizontal: 40,
    borderRadius: 100,
    marginTop: 20,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 2,
  },
  CancelText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
  RoleText: {
    color: 'rgb(86,83,82)',
    fontWeight: '700',
    fontSize: 15,
    marginVertical: 15,
  },
  ModelProfile: {
    alignSelf: 'center',
    marginTop: 30,
    // height: 40,
    // width: 40,
  },
  SelectYourRole: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
  },
  birthDateInput: {
    color: '#504956',
    fontSize: 16,
  },
  dayTxtColor:{
    color:'#8A8A8A',
    fontWeight:500,
    fontSize:13,
    lineHeight:22
  },
  selectedDayColor:{
    color:'#DE809A'
  },
  strikeTxt:{
    textDecorationLine:'line-through',
    color:'#9A9A9A'
  },
  selecteday:{
    backgroundColor:'pink',
  },
  dayButton:{
  //  flexGrow:1,
     width:40,
    height:40,
    // paddingHorizontal:10,
    marginVertical:5,
    //marginLeft:10,
   // marginRight:15,
    borderRadius:10,
    marginHorizontal:5,
    shadowColor:'black',
    elevation:3,
    marginTop:13,
    backgroundColor:'white',
    justifyContent:'center',
   alignItems:'center',
    color:'rgba(8,2,4,1)',
    shadowOpacity:0.5,
  },
  selectTxt:{
    color:'white'
  },
  borderColorTxt:{
   
    backgroundColor:'#F1E9EC',
  
  },
  premonthTxt:{
    color:'#9A9A9A'
  },
  dayTxt:{
    fontSize:16,
    color:'rgba(8,2,4,1)'
  },
  
});
