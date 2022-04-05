import React, {useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import {View, Text, Image, TextInput, ImageBackground} from 'react-native';
import imagePath from '../../constants/imagePath';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';
import navigationStrings from '../../navigation/navigationStrings';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const [cnfmPassword, setCnfmPassword] = useState('');
  const [cnfmPassError, setcnfmPassError] = useState(false);

  const emailRegex = /^[\w-\.\_\$]{2,20}@([\w]{3,5}\.)[\w]{2,4}$/;
  const nameRegex =/^[\w] $/;


  const handleText = () => {
    console.log(name);
    if (name != '') {
      setNameError(false);
      // if (email != '') {
      //   setEmailError(false);

        if (emailRegex.test(email)) {
         setEmailError(false)
          if (password.length >= 8) {
            setPasswordError(false);

            if (cnfmPassword.length >= 8) {
              setcnfmPassError(false);
              if (password === cnfmPassword) {
                setcnfmPassError(false);
                navigation.navigate(navigationStrings.LOGIN);
              } 
              else {
                setcnfmPassError(true);
              }
            } else {
              setcnfmPassError(true);
            }
          } else {
            setPasswordError(true);
          }
        }
        else{
          setEmailError(true)
        }
      // } else {
      //   setEmailError(true);
      // }
    } else {
      setNameError(true);
    }
  };

  return (
    <WrapperContainer>
      <View style={{flex: 1, height: '100%', width: '100%', padding: 16}}>
        <View style={styles.signupview}>
          {/* <ImageBackground 
            style={styles.bgc}            
            source={imagePath.bgc}/> */}

          <Text
            style={{
              fontSize: 25,
              alignContent: 'center',
              textAlign: 'center',
              fontWeight: '500',
            }}>
            Create
          </Text>
          <Text
            style={{
              fontSize: 25,
              alignContent: 'center',
              textAlign: 'center',
              fontWeight: '500',
            }}>
            Account
          </Text>
        </View>
        <View>
          <View style={styles.usernameview}>
            <Image style={styles.usericon} source={imagePath.profileImage} />
            <TextInput
              style={styles.input1}
              placeholder="your name"
              onChangeText={event => setName(event)}
            />
          </View>
          {nameError ? (
            <View style={{paddingBottom: 6}}>
              <Text style={{textAlign: 'center', color: 'red'}}>
                Enter name
              </Text>
            </View>
          ) : null}
        </View>
        <View>
          <View style={styles.emailview}>
            <Image style={styles.emailicon} source={imagePath.emailLogo} />
            <TextInput
              style={styles.input2}
              placeholder=" enter your email"
              onChangeText={event => setEmail(event)}
            />
          </View>

          {emailError ? (
            <View style={{paddingBottom: 6}}>
              <Text style={{textAlign: 'center', color: 'red'}}>
                Enter email
              </Text>
            </View>
          ) : null}
        </View>
        <View>
          <View style={styles.passwordview}>
            <Image
              style={styles.passwordicon}
              source={imagePath.passwordIcon}
            />
            <TextInput
              style={styles.input3}
              secureTextEntry={false}
              placeholder=" Create Password"
              keyboardType="ascii-capable"
              onChangeText={event => setPassword(event)}
            />
          </View>
          {passwordError ? (
            <View style={{paddingBottom: 6}}>
              <Text style={{textAlign: 'center', color: 'red'}}>
                Enter password
              </Text>
            </View>
          ) : null}
        </View>
        <View>
          <View style={styles.createpasswordview}>
            <Image
              style={styles.createpasswordicon}
              source={imagePath.passwordIcon}
            />
            <TextInput
              style={styles.input4}
              secureTextEntry={false}
              placeholder="Confirm Password"
              keyboardType="ascii-capable"
              onChangeText={event => setCnfmPassword(event)}
            />
          </View>

          {cnfmPassError ? (
            <View style={{paddingBottom: 6}}>
              <Text style={{textAlign: 'center', color: 'red'}}>
                Confirm Password
              </Text>
            </View>
          ) : null}
        </View>
        <TouchableOpacity activeOpacity={0.9} onPress={handleText}>
          <View style={styles.btnview}>
            <Text style={styles.btn}>SignUp</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.bottontext}>
          <Text style={styles.text1}>You already have an account?</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.LOGIN)}>
            <Text style={styles.signinbtn}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </WrapperContainer>
  );
};

export default SignUp;
