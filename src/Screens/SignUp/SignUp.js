import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import {View, Text,Image,TextInput, ImageBackground,} from 'react-native';
import imagePath from '../../constants/imagePath';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './style';


const SignUp = () => {
  return (
      <WrapperContainer>
        <View  style={{flex:1,}}>

          <View style={styles.signupview}>
            <ImageBackground 
            style={styles.bgc}            
            source={imagePath.bgc}/>
          </View>

          <View  style={styles.emailview}>
              
            <Image source={imagePath.emailLogo}  style={styles.emaillogo}/>
            <TextInput style={styles.TextInput} placeholder='enter your mail' />
        
            </View>
            <View  style={styles.passwordview}>
              
            <Image source={imagePath.passwordIcon}  style={styles.passwordlogo}/>
            <TextInput style={styles.TextInput2} placeholder='enter password' secureTextEntry={true}/>
        
            </View>
            <View  style={styles.cnfmpassView}>
              
            <Image source={imagePath.passwordIcon}  style={styles.confmpasswordlogo}/>
            <TextInput style={styles.TextInput3} placeholder='enter password' secureTextEntry={true}/>
        
            </View>
            <View style={styles.btnview}>
    
              <Text style={styles.signupbtn}>Sign Up</Text>
      
            </View>
            <View style={styles.signtext}>
              
              <Text style ={styles.text1}>already have an account? </Text>
              <TouchableOpacity>
               <Text style={styles.text2}>signup</Text>
               </TouchableOpacity>
            </View>


            </View>
            
            
    </WrapperContainer>
  )
}

export default SignUp

