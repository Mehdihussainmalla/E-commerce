
import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import {View, Text,Image,TextInput, ImageBackground,} from 'react-native';
import { styles } from './styles';
import imagePath from '../../constants/imagePath';
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


          {/* <Text
           style={styles.heading}>
             E-COMMERCE</Text>
             <Text
           style={styles.caption}>
             A Fresh Approach to Shopping</Text> */}
        </View>
        <View style={styles.logindetails}  >
          <TextInput style ={styles.logininput} placeholder="Email Address" keyboardType='default'/>
        </View>
        <View 
       style={styles.passworddetails} 
         >
          <TextInput style ={styles.passwordinput} placeholder="Enter Password" keyboardType='numeric'/>
        </View>
         <View style={styles.btnstyle} >
           <Text style ={styles.btn}>Login</Text>
         </View>


      </View>
    </WrapperContainer>
  );
}
