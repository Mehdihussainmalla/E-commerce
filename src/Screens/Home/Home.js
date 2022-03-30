import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Listitems from '../../Components/Listitems';
import HeaderCustom from '../../Components/HeaderCustom';
import WrapperContainer from '../../Components/WrapperContainer';
import { styles } from './styles';

const Home = ({navigation}) => {
  return (
    <WrapperContainer>
      <HeaderCustom  navigation={navigation}/>
      <ScrollView>
        <Listitems />
      </ScrollView>
    </WrapperContainer>
  );
};

export default Home;

