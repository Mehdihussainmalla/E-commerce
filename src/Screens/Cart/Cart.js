import React from 'react';

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import { styles } from './style';

const Cart = ({navigation}) => {
  return (
    <WrapperContainer>
      <View style={styles.head}>
         <View style={styles.cartview}>
           <TouchableOpacity  
          onPress={()=> navigation.navigate('Home')}
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

          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
