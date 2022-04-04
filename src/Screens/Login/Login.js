
import React, { useState } from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import { View, Text, Image, TextInput, ImageBackground, } from 'react-native';
import { styles } from './styles';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../navigation/navigationStrings'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  return (
    <WrapperContainer>

      <View
        style={{ flex: 1, height: '100%', width: '100%', padding: 16, }}>

        <View style={styles.loginview}>
          <Text style={{ fontSize: 25, alignContent: 'center', textAlign: 'center', fontWeight: '500' }}>
            Welcome To
          </Text>
          <Text style={{ fontSize: 25, alignContent: 'center', textAlign: 'center', fontWeight: '500' }}>
            E-Commerce
          </Text>
        </View>
        <View style={styles.emailview}>

          <Image style={styles.emailicon}
            source={imagePath.emailLogo} />
          <TextInput style={styles.input1} placeholder=" enter your email" />
        </View>
        <View style={styles.passwordview}>

          <Image style={styles.passwordicon}
            source={imagePath.emailLogo} />
          <TextInput style={styles.input2} secureTextEntry={true} placeholder="Password" />
        </View>
        <View style={styles.btnview}>
          <Text style={styles.btn}>SignIn</Text>
        </View>
        <View style={styles.bottontext}>
          <Text style={styles.text1}>You already have an account?</Text>

          <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SIGNUP)}>
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
