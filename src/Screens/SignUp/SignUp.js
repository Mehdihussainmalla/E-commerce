import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import {View, Text,Image,TextInput, ImageBackground,} from 'react-native';
import imagePath from '../../constants/imagePath';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './style';
import navigationStrings from '../../navigation/navigationStrings';


const SignUp = ({navigation}) => {
  return (
      <WrapperContainer>
        <View
          style={{flex:1,height:'100%',width:'100%',padding:16}}>

           <View style={styles.signupview}>
            {/* <ImageBackground 
            style={styles.bgc}            
            source={imagePath.bgc}/> */}

            <Text style={{fontSize:25,alignContent:'center',textAlign:'center',fontWeight:'500'}}>
              Create
            </Text>
            <Text style={{fontSize:25,alignContent:'center',textAlign:'center',fontWeight:'500'}}>
               Account
            </Text>
          </View> 
          <View  style={styles.usernameview}>
           
             <Image  style={styles.usericon}  
             source={ imagePath.profileImage}/>
          <TextInput  style={styles.input1} placeholder="your name"/>
            </View>

            <View  style={styles.emailview}>
           
             <Image  style={styles.emailicon}  
             source={ imagePath.emailLogo}/>
          <TextInput  style={styles.input2} placeholder=" enter your email"/>
            </View>
            <View  style={styles.passwordview}>
           
             <Image  style={styles.passwordicon}  
             source={ imagePath.passwordIcon}/>
          <TextInput  style={styles.input3} secureTextEntry={true} placeholder=" Create Password"/>
            </View>
            <View  style={styles.createpasswordview}>
           
           <Image  style={styles.createpasswordicon}  
           source={ imagePath.passwordIcon}/>
        <TextInput  style={styles.input4} secureTextEntry={true} placeholder="Confirm Password"/>
          </View>
          
          <View  style={styles.btnview}>
            <Text style={styles.btn}>SignUp</Text>
          </View>

          <View style={styles.bottontext}>
            <Text style={styles.text1}>You already have an account?</Text>

            <TouchableOpacity  onPress={()=> navigation.navigate(navigationStrings.LOGIN)}>
            <Text style={styles.signinbtn}>Sign In</Text>
            </TouchableOpacity>
          </View>
          
           

          </View>
        

      
            
            
    </WrapperContainer>
  )
}

export default SignUp

