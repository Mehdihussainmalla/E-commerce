
import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import {View, Text,Image,TextInput, ImageBackground,} from 'react-native';
import { styles } from './styles';
import imagePath from '../../constants/imagePath';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Login() {
  return (
    <WrapperContainer>
      <View style={styles.loginpage}>

        <View style={{height:'20%', width:'100%',
      justifyContent:'center'}}>
          <Text style={styles.headingtext}>Welcome To E-Commerce</Text>
        </View>
        <View>
          <Text style={styles.login}>Login</Text>
        </View>
        {/* <View> */}
        <View  style={styles.emailview}> 
        
  
          <TextInput style ={styles.emailinput} placeholder="Enter Email" />
          {/* </View> */}
        </View>
        <View style={styles.passwordview}>
        <View>
          <TextInput style ={styles.passwordinput} placeholder="Enter Password" secureTextEntry={true} />
        </View>
        </View>
        <TouchableOpacity>  
           <View style={styles.btnlogin}>
             
           <Text style ={styles.btn}>Login</Text>
           
           </View>
           </TouchableOpacity>
           <View style={styles.signup}>
             <TouchableOpacity>
           <Text style={styles.newaccount}>Create new account?</Text>
           </TouchableOpacity>

           <TouchableOpacity>
           <Text style={styles.passwordbtn}>Forget password?</Text>
           </TouchableOpacity>
           </View>
         </View>
         
      
    </WrapperContainer>
  );
}
