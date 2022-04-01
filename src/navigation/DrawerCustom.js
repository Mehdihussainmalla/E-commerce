import React from 'react';
import {View, Text, StyleSheet, Image,ImageBackground} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import imagePath from '../constants/imagePath';
import { TouchableOpacity } from 'react-native-gesture-handler';


export function DrawerCustom(props,{navigation}) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} >
        <View style={style.headingview}>
         
          <Image style={style.imageicon} source={imagePath.ic_Profile_Image} />

          <Text style={style.headingtext}>Mehdi Hussain Malla</Text>
          <Caption style={style.caption}>@mehdihussainmalla</Caption>
          
        </View>
    <TouchableOpacity 
   // onPress={()=> navigation.navigate('Cart')}
    >  
        <View style={style.home}>
          <Image style={style.homeimage} source={imagePath.helpSupport}>
        
                  </Image>

           <Text style={style.hometext}> HOME </Text>
           

        </View>
        </TouchableOpacity>

        <TouchableOpacity  
        //onPress={()=> navigation.navigate('cart')}
        >

        <View style={style.home}>
          <Image style={style.homeimage} source={imagePath.cartItemImage}>
        
                  </Image>

           <Text style={style.hometext}> CART</Text>

        </View>
        </TouchableOpacity>


        <TouchableOpacity  
        //onPress={()=> navigation.navigate('cart')}
        >
        <View style={style.profile}>
          <Image style={style.profileimage} 
          source={imagePath.profileImage}>
        
                  </Image>

           <Text style={style.profiletext}> PROFILE</Text>

        </View>
        </TouchableOpacity>


        {/* <View style={style.home}>
          <Image style={style.homeimage} source={imagePath.ic_Profile_Image}>
        
                  </Image>

           <Text style={style.hometext}> Cart</Text>

        </View> */}

        <Drawer.Section
          style={{
            flex: 1,
            marginTop: 10,
            
            justifyContent: 'center',
          }}>
          {/* <DrawerItem
            label="Home"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          /> */}
          {/* <DrawerItem
            label="Cart"
            onPress={() => {
              props.navigation.navigate('Cart');
            }}
          />
          <DrawerItem
            label="Profile"
            onPress={() => {
              props.navigation.navigate('Profile');
            }}
          /> */}
          {/* <DrawerItem
            label="Banner"
            onPress={() => {
              props.navigation.navigate('Banner');
            }}
          /> */}
        </Drawer.Section>
      </DrawerContentScrollView>
      <View
        style={{
          height: 2,
          flex: 0.1,
          width: '90%',
          justifyContent: 'center',
          alignContent: 'space-between',
          flexDirection: 'row',
        }}>
          <TouchableOpacity>
          <View style={style.logoutview}>
        <Image
          style={style.logouticon}
          source={imagePath.logoutIcon}></Image>
        <Text style={style.logouttext}>Logout</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  headingview: {
    marginTop: 20,
    justifyContent: 'center',
    paddingRight: 25,
    margin: 10,
    paddingTop: 10,
    backgroundColor:'#87CEEB'
  },
  headingtext: {
    fontSize: 20,
    alignContent: 'center',
    paddingLeft: 14,
  },
  imageicon: {justifyContent: 'center', height: 100, width: 100},
  caption: {
    paddingLeft: 14,
  },
  logoutview:
  {
    justifyContent:'center',
  flexDirection:'row',
  paddingRight:70
},
  logouttext:{
    fontSize: 15,
     padding: 10,
      paddingLeft: 30
    },
    logouticon:{
      height: 27,
       margin: 8,
        width: 26 
      },
      home:{
        height:25,
        margin:5,
        width:"100%",
        flexDirection:'row',
        justifyContent:'flex-start',
        //backgroundColor:'#87CEEB'
      },
      homeimage:{
        height:20,
        width:20,
        padding:10,
        marginLeft:23
               
      },
      hometext:{
        marginLeft:20
      },
      profile:{
        height:25,
        //backgroundColor:'#87CEEB',
        margin:5,
        paddingTop:5,
        width:"100%",
        flexDirection:'row',
        justifyContent:'flex-start',
      },
      profileimage:{
        height:20,
        width:20,
        padding:10,
        marginLeft:23,
        paddingTop:5
               
      },
      profiletext:{
        marginLeft:20
      }
});
