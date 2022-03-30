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
  const MyOrders = ({navigation}) => {
    return(
  
      <WrapperContainer>
        <View>
         <TouchableOpacity  onPress={()=> navigation.navigate('Home')}>
        <Text  style={{fontSize:25,color:'blue'}}> welcome back</Text>

        <Image style={styles.myorders}
          source={imagePath.ic_Profile_Image}/>
        </TouchableOpacity>
        </View>
          
      </WrapperContainer>
    )
  }
  
  export default MyOrders;