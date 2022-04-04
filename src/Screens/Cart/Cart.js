import { useNavigation } from '@react-navigation/core';
import React from 'react';

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Title } from 'react-native-paper';

import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../navigation/navigationStrings';
import { styles } from './style';

const Cart = () => {
  const navigation =useNavigation()
  return (
    <WrapperContainer>
      <View style={styles.head}>
         <View style={styles.cartview}>
           <TouchableOpacity  
          onPress={()=> navigation.navigate(navigationStrings.HOME,
          //  {title:'welcome back'}
            )}
           >
            <View style={styles.imageview}> 
              <Image
                source={imagePath.icBackIcon}
               style={styles.arrowimage}
                ></Image>
            </View>
            </TouchableOpacity>
        


          
          <View style={styles.textview}>
            <Text style={styles.carttext}>My Cart</Text>
          </View>
         
        </View>
     
        <View style={styles.View}>
          <Image
            style={styles.cartimage}
            source={imagePath.cartBasket}></Image>
            
          <Text style={styles.text}>your cart is empty !</Text>
          <Text style={styles.description}>
            Don't hesitate and bowse out catalog to find something beautiful for
            you !
          </Text>

          <TouchableOpacity onPress={() => navigation.goBack(navigationStrings.HOME)}>
          <View style={styles.buttonview}>
            
              <Text style={styles.buttontext}>START SHOPPING</Text>
           
          </View>

          </TouchableOpacity> 
        </View> 
      </View>
    </WrapperContainer>
  );
};

export default Cart;
