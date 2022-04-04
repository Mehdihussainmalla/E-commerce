import {StyleSheet, Dimensions} from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  loginview: {
    height: '25%',
    width: '100%',
    justifyContent: 'center',


},
  emailview: {
    margin:10,
    padding:1,
  flexDirection:'row',
  justifyContent:'flex-start',
  height:50,
  width:'100%'
  
},
emailicon:{
  paddingTop :10,
  height:20,
  width:'6%',
  margin:8,
  marginLeft:10,
},
input1:{
  borderRadius:10,
  height:35,
  width:'80%',
  color:'black',
  backgroundColor:'lightgrey',
  padding:moderateVerticalScale(8)
},

passwordview: {
  padding:1,
margin:10,
  flexDirection:'row',
  justifyContent:'flex-start',
  height:50,
  width:'100%'
  
},
passwordicon:{
  height:27,
  width:'6%',
  margin:8,
  marginTop:5,
 marginLeft:10,
  },
input2:{
  borderRadius:10,
  height:35,
  width:'80%',
  color:'black',
  backgroundColor:'lightgrey',
  padding:moderateVerticalScale(8)
 
},

btnview:{
  marginLeft:80,
  borderRadius:8,
  margin:35,
  height:45,
  width:'60%',
  //paddingLeft:10,
  alignContent:'center',
  justifyContent:'center',
  backgroundColor:'skyblue',
} ,
btn:{
  fontSize:20,
  textAlign:'center',
  paddingTop:1,
  color:'#ffff'
} ,

bottontext:{
  justifyContent:'space-between',
  flexDirection:'row',
  paddingTop:15,
},
text1:{
  fontWeight:'300',
  marginLeft:10,
},

signinbtn:{
  fontSize:15,
  fontWeight:'500',
  marginRight:10,
  color:'red'
},
privacyterms:{
  justifyContent:'center',
  alignContent:'center',
  margin:20,
  paddingTop:10,
  flexDirection:'column',
  alignItems:'center'
},
terms:{
  
}





  })
