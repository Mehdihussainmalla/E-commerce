import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    FlatList,SafeAreaView
  } from 'react-native';
  
  import React from 'react';
  import imagePath from '../../constants/imagePath';
import WrapperContainer from '../../Components/WrapperContainer';
import { styles } from './style';
import { useNavigation } from '@react-navigation/core';
import navigationStrings from '../../navigation/navigationStrings';
  const MyOrders = () => {
    const navigation =useNavigation()
    return(
  
      <WrapperContainer>
        <View>
         <TouchableOpacity  onPress={()=> navigation.navigate(navigationStrings.HOME) }>
        <Text  style={{fontSize:25,color:'blue'}}> welcome back</Text>
        </TouchableOpacity>
        <Image style={styles.myorders}
          source={imagePath.ic_Profile_Image}/>
    
        </View>
          
      </WrapperContainer>
    )
  }
  
  export default MyOrders;