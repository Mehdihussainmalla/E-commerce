import React, {useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import {
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  Button,
} from 'react-native';
import {styles} from './styles';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../navigation/navigationStrings';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Login({navigation}) {
  const emailRegex = /^[\w-\.\_\$]{2,}@([\w]{3,5}\.)[\w]{2,4}$/;
  const passRegex =/^[0-9]{4,8} $/.test(password);

  const [email, setemail] = useState('');
  const [emailerror, setemailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passError, setPassError] = useState(false);

  const handleText = () => {
    // if (email != '') {
    //   setemailError(false);

      if (emailRegex.test(email)) {
        setemailError(false);

        if (password.length >= 8) {
          setPassError(false);
        // if(passRegex.test(password)){
        //   setPassError(false)
        

          navigation.navigate(navigationStrings.HOME);
        } else {
          setPassError(true);
        }
      // } else {
      //   setemailError(true);
      }
    // } else {
    //   setemailError(true);
    // }
  };

  return (
    <WrapperContainer>
      <View style={{flex: 1, height: '100%', width: '100%', padding: 16}}>
        <View style={styles.loginview}>
          <Text style={styles.label1}>Welcome To</Text>
          <Text style={styles.label2}>E-Commerce</Text>
        </View>
        <View style={styles.emailview}>
          <Image style={styles.emailicon} source={imagePath.emailLogo} />
          <TextInput
            style={styles.input1}
            placeholder=" enter your email"
            onChangeText={event => setemail(event)}
          />
        </View>
        {emailerror?
          <View style={{paddingBottom: 4}}>
          <Text
            style={{
              textAlign: 'center',
              color: 'red',
              fontWeight: '300',
              fontSize: 12,
            }}>
            Invalid Email
          </Text>
        </View>
        :null
        }
        
        <View style={styles.passwordview}>
          <Image style={styles.passwordicon} source={imagePath.passwordIcon} />
          <TextInput
            style={styles.input2}
            // secureTextEntry={true}
            placeholder="Password"
            onChangeText={event => setPassword(event)}
          />
        </View>{
          passError?
           <View style={{paddingBottom: 4}}>
           <Text
             style={{
               textAlign: 'center',
               color: 'red',
               fontWeight: '300',
               fontSize: 12,
             }}>
             Invalid Password
           </Text>
         </View>:null
        }
       

        <View style={styles.btnview}>
          <TouchableOpacity activeOpacity={0.3} onPress={handleText}>
            <Text style={styles.btn}> Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottontext}>
          <Text style={styles.text1}>You already have an account?</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.SIGNUP)}>
            <Text style={styles.signinbtn}>Create Account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.privacyterms}>
          <Text style={styles.terms}>Terms & Conditions</Text>
          <Text> Privacy & Policy</Text>
        </View>
      </View>
    </WrapperContainer>
  );
}
