import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  loginpage: {flex: 1, height: '100%', width: '100%'},
  loginprofile: {
    paddingTop: 10,
    justifyContent: 'center',
    width: '100%',
    //backgroundColor:'yellow',
    justifyContent: 'center',
  },
  loginimage: {
    paddingTop: 10,
    height: Dimensions.get('window').height / 4,
    // width:'80%',
    marginTop: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  heading: {
    fontSize: 30,
    paddingTop: 20,
    marginLeft: 20,
    textAlign: 'center',
    fontWeight: '500',
    color: 'blue',
  },
  caption: {
    fontSize: 18,
    paddingTop: 30,
    textAlign: 'center',
    fontWeight: '200',
    fontStyle: 'italic',
    color: 'blue',
  },
  emailview:
   {
       height: '10%', 
       width: '100%',
        marginTop: 10,
   },
   emailinput: {
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
       width: '100%',
        marginTop: 10,
    
    
    },

  passwordview:{
 height:'15%',
  width:'100%',
  
},
  passwordinput: {
    height: 10,
    padding: 20,
    marginRight: 12,
    fontSize: 18,
    margin:8,
    backgroundColor: 'lightgrey',
  },

  btnlogin: {
    height: 42,
    width: '70%',
    backgroundColor: '#87CEEB',
    justifyContent: 'center',
    borderRadius: 22,
    marginLeft: 61,
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 18,
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
