import {StyleSheet,Dimensions} from 'react-native';

export const styles = StyleSheet.create({

    loginpage:
    { flex:1,
        height:'100%', 
    width:'100%',
   },
loginprofile:{
    paddingTop:10,
    justifyContent:'center',
    width:'100%',
    //backgroundColor:'yellow',
    justifyContent:'center',


},
loginimage:{
    paddingTop:10,
    height:Dimensions.get('window').height/4,
    // width:'80%',
    marginTop:10,

    justifyContent:'center',
    alignContent:'center',
    
},
heading:{
    fontSize:30,
    paddingTop:20,
    marginLeft:20,
    textAlign:'center',
    fontWeight:'500',
    color:'blue'
    
},
caption:{
    fontSize:18,
    paddingTop:30,
    textAlign:'center',
    fontWeight:'200',
    fontStyle:'italic',
    color:'blue'
},

logindetails:{
   // height:'65%',
    width:'100%',
    marginTop:25,
    paddingLeft:10,
   
       
},
logininput:{
    height: 40,
    padding:20,
    marginRight:16,
    backgroundColor: 'azure',
     fontSize: 18,
     backgroundColor:'lightgrey',
     

},
passworddetails:{
    height:'65%',
    width:'100%',
    marginTop:25,
    paddingLeft:10,
   
},
passwordinput:{
    height: 40,
    padding:20,
    marginRight:16,
    backgroundColor: 'azure',
     fontSize: 18,
     backgroundColor:'lightgrey',
     

},
btnstyle:{
    height:30,
    width:50,
    backgroundColor:'blue'

},
btn:{
    fontSize:20,
    margin:10,
    color:'red'
}
})

