import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'

const Home = () => {

    const homeData=[
        {
            img:require('../assets/images/HelpCenter.png'),
            name:'Help Tracker'
        },
        {
            img:require('../assets/images/OnMyMind.png'),
            name:'On My Mind'
        },
        {
            img:require('../assets/images/messages.png'),
            name:'Messages'
        },
        {
            img:require('../assets/images/wishlist.png'),
            name:'Wishlist'
        },
        {
            img:require('../assets/images/notification.jpg'),
            name:'Notifications'
        },
        
    ]
  return (
    <View style={styles.container}>
    <StatusBar
    backgroundColor={'#504A57'}

    ></StatusBar>
      <View style={styles.profileView}>
        <TouchableOpacity style={styles.useView}>
        <Image source={require('../assets/images/user2.png')} style={{height:35,width:35,marginLeft:5,marginTop:5}}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backBtnView}>
            <Image source={require('../assets/images/forward1.png')} style={{marginLeft:3}}></Image>
        </TouchableOpacity>
        <Image source={require('../assets/images/logo1.png')} style={styles.logoImg}></Image>
        <TouchableOpacity style={styles.plusImg}>
        <Image source={require('../assets/images/plus1.png')} ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingImg}>
        <Image source={require('../assets/images/Setting.png')} ></Image>
        </TouchableOpacity>
    
        
      </View>
      <View style={styles.morningView}>
        <View style={styles.redView}>
            <Text style={styles.morningTxt}>Good Morning</Text>
            <Text style={styles.nameTxt}>ayushi!</Text>
        </View>
        <TouchableOpacity style={styles.thoughtView}>
            <Text style={styles.thoughtTxt}>Never Give Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.requestView}>
        <View style={styles.helpView}>
          
            <TouchableOpacity style={{alignItems:'center'}}>
            <Image source={require('../assets/images/hand.png')} ></Image>
            <Text style={styles.requestTxt}>Request</Text>
             </TouchableOpacity>
             <View style={{height:70,backgroundColor:'#EAE3E5',width:2,marginTop:5}}></View>
             <TouchableOpacity style={{alignItems:'center'}}>
            <Image source={require('../assets/images/helpOffers.png')} ></Image>
            <Text style={styles.requestTxt}>Accept</Text>
             </TouchableOpacity>
            
        </View>
        <FlatList
        style={{marginBottom:10}}
        data={homeData}
        renderItem={({item,index})=>(
            <View style={[styles.dataView,{marginTop:index===0?40:25}]}>
            <Image source={item.img}></Image>
            <Text style={styles.itemNameTxt}>{item.name}</Text>
            </View>
        )}
        ></FlatList>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#504A57'
    },
    profileView:{
        flexDirection:'row',
        marginHorizontal:15,
         justifyContent:'center',
        marginTop:5,
      

    },
    helpView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
        
        marginHorizontal:70,
    },
    useView:{
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#E5E9EC',
        borderRadius:100,
        position:"absolute",
        left:2,
        height:45,
        width:45,
       
        
    },
    dataView:{
        flexDirection:'row',
        marginHorizontal:20,
        borderBottomWidth:1,
        borderBottomColor:'#EAE3E5',
        paddingBottom:10,
        
        
    },
    requestView:{
        height:500,
        backgroundColor:'#F0E8EB'
    },
    morningView:{
        flexDirection:'row',
        marginTop:20,
       

    },
    redView:{
        flex:0.6,
        paddingVertical:30,
         paddingLeft:20,
        // paddingRight:100,
         backgroundColor:'#FE3E51',
 
 
     },
     thoughtView:{
        flex:0.4,
         backgroundColor:'#FF5C70',
         paddingVertical:30,
        //  paddingHorizontal:30,
         justifyContent:'center',
         alignItems:'center',
     },
    backBtnView:{
        height:25,
        width:25,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
        backgroundColor:'#B88098',
        position:'absolute',
        left:30,
        top:8
    },
    logoImg:{
        marginTop:8
    },
    settingImg:{
        position:'absolute',
        right:4,
        top:3
    },
    plusImg:{
        position:'absolute',
        right:40,
        top:7

    },
    itemNameTxt:{
        fontSize:17,
        color:'#544A56',
        textAlign:'center',
        fontWeight:'600',
        marginLeft:15,
        alignSelf:'center'

    },
    morningTxt:{
        color:'white',
        
        fontSize:20,
        letterSpacing:0.8,
    },
    nameTxt:{
        color:'white',
        fontWeight:'500',
        fontSize:18,
        paddingTop:3
    },
    thoughtTxt:{
        fontSize:30,
        textAlign:'center',
        width:110,
        lineHeight:30,
        color:'white',
    },
    requestTxt:{
        color:'#463D48',
        fontWeight:'700',
        fontSize:20,
        marginTop:8,
        
    },
    
    
})

export default Home