
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
        
        <View  style={styles.loginprofile}>
          <ImageBackground
          style={styles.loginimage}
          source={imagePath.loginImage}>

           <Text
           style={styles.heading}>
             E-COMMERCE</Text>
             <Text
           style={styles.caption}>
             A Fresh Approach to Shopping</Text>
            </ImageBackground>
        </View>
        <View   style={styles.emailview}>
        <View 
       style={styles.passworddetails}>
          <TextInput style ={styles.emailinput} placeholder="Enter Email" keyboardType='numeric'/>
          </View>
        </View>
        <View style={styles.passwordview}>
        <View 
       style={styles.passworddetails}>
          <TextInput style ={styles.passwordinput} placeholder="Enter Password" keyboardType='numeric'/>
        </View>
        </View>
         
           <View style={styles.btnlogin}>
           <Text style ={styles.btn}>Login</Text>
           </View>
           <View style={styles.signup}>
             <TouchableOpacity>
           <Text style={styles.newaccount}>create new account?</Text>
           </TouchableOpacity>

           <TouchableOpacity>
           <Text style={styles.passwordbtn}>forget password?</Text>
           </TouchableOpacity>
           </View>
         </View>
         
      
    </WrapperContainer>
  );
}
