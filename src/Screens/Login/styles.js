import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  loginpage: {flex: 1, height: '100%', width: '100%'},

  headingtext:{
    color:'blue',
    fontSize:25,
    fontWeight:'bold',
  
    marginTop:15,
  },
  login:{
    fontSize:25,
   paddingLeft:20,
    marginBottom:20,
    fontWeight:'bold'
  },


  // loginprofile: {
  //   paddingTop: 10,
  //   justifyContent: 'center',
  //   width: '100%',
  //   //backgroundColor:'yellow',
  //   justifyContent: 'center',
  // },
  // loginimage: {
  //   paddingTop: 10,
  //   height: Dimensions.get('window').height / 4,
  //   // width:'80%',
  //   marginTop: 10,
  //   justifyContent: 'center',
  //   alignContent: 'center',
  // },
  // heading: {
  //   fontSize: 30,
  //   paddingTop: 20,
  //   marginLeft: 20,
  //   textAlign: 'center',
  //   fontWeight: '500',
  //   color: 'blue',
  // },
  // caption: {
  //   fontSize: 18,
  //   paddingTop: 30,
  //   textAlign: 'center',
  //   fontWeight: '200',
  //   fontStyle: 'italic',
  //   color: 'blue',
  // },
  emailview:
   {  
       height: '10%', 
       width: '80%',
        marginBottom: 10,
   },
   emailinput: {
    
     borderRadius:10,
    height: 10,
    padding: 20,
    marginRight: 12,
    fontSize: 18,
    margin:8,
    backgroundColor: 'lightgrey',
    
  },

  passwordview:
   {
     
       height: '15%', 
       width: '80%',
        marginBottom: 10,
    
    
    },

  passwordview:{
 height:'15%',
  width:'80%',
  
},
  passwordinput: {
    height: 10,
    padding: 20,
    marginRight: 12,
    fontSize: 18,
    //margin:8,
    marginLeft:10,
    borderRadius:10,
    backgroundColor: 'lightgrey',
  },

  btnlogin: {
    height: 42,
    width: '70%',
    backgroundColor: '#87CEEB',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 15,
    paddingLeft: 10,
  },
  btn: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffff',
    fontWeight: '600',
  },
  signup: {
    height: 20,
    width: '70%',
    //justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20,
  },
  newaccount: {
    color: 'blue',
    marginRight: 45,
  },
  passwordbtn: {
    color: 'blue',
    marginLeft: 50,
  },
});
