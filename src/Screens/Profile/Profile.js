import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import imagePath from '../../constants/imagePath';
import WrapperContainer from '../../Components/WrapperContainer';
import {styles} from './style';
import navigationStrings from '../../navigation/navigationStrings';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

const Profile = () => {
  const navigation= useNavigation()
  return (
    <WrapperContainer>
      <View style={styles.mainview}>
        <View style={styles.profilehead}>
          <TouchableOpacity  onPress={()=> navigation.navigate(navigationStrings.CART)}>
            <Image
              source={imagePath.icBackIcon}
              style={styles.backlogo}></Image>
          </TouchableOpacity>

          <Text style={styles.profilename}>My Profile</Text>

          <View>
            <Image
              source={imagePath.profileIcon}
              style={styles.profileiconn}></Image>
          </View>
        </View>

        <View style={styles.pageview}>
          <View style={styles.iconview}>
            <Image
              source={imagePath.ic_Profile_Image}
              style={styles.profileimage}></Image>
          </View>

          <Text style={styles.name}>Mehdi Hussain Malla</Text>
          <Text style={styles.email}>mehdihussainmalla@gmail.com</Text>

          <View style={styles.btn}>
            <Text style={styles.btntxt}> Account Details</Text>
          </View>
          <View style={styles.privacy}>
            <Image
              source={imagePath.privacyIcon}
              style={styles.profileicon}></Image>
            <Text style={styles.privacytext}>Privacy</Text>
            <Image
              source={imagePath.rightArrow}
              style={styles.privacyimage}></Image>
          </View>

          <View style={styles.purchase}>
            <Image
              source={imagePath.historyIcon}
              style={styles.purchasehistory}></Image>
            <Text style={styles.purchasetext}>History</Text>
            <Image
              source={imagePath.rightArrow}
              style={styles.purchaseimage}></Image>
          </View>

          <View style={styles.helpsupport}>
            <Image
              source={imagePath.helpSupport}
              style={styles.support}></Image>
            <Text style={styles.helpetext}>Support</Text>
            <Image
              source={imagePath.rightArrow}
              style={styles.helpsupportimage}></Image>
          </View>

          <View style={styles.settings}>
            <Image
              source={imagePath.setting_icon}
              style={styles.settinglogo}></Image>
            <Text style={styles.settingtext}>Settings</Text>
            <Image
              source={imagePath.rightArrow}
              style={styles.settingdirection}></Image>
          </View>

          <View style={styles.invite}>
            <Image
              source={imagePath.invite_icon}
              style={styles.invitelogo}></Image>
            <Text style={styles.invitetext}>Invite friends</Text>
            <Image
              source={imagePath.rightArrow}
              style={styles.invitereference}></Image>
          </View>

          <View style={styles.logout}>
            <Image
              source={imagePath.logoutIcon}
              style={styles.logoutlogo} />
              <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.MYORDERS)}>
            <Text style={styles.logouttext}>Logout</Text>
            </TouchableOpacity>
          </View>
          </View>
      </View>
    </WrapperContainer>
  );
};

export default Profile;
