import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    head:
        {height: '100%', 
        width: '100%',
    
    },
    cartview: {
        height: 50,
        flexDirection: 'row',
        //justifyContent: 'space-between',
        backgroundColor: '#87CEEB',
      },
      imageview: {
        paddingTop: 8,
        margin: 2,
        marginLeft: 10,
        width: 50,
      },
      arrowimage: {
        height: 30,
        justifyContent: 'center',
        width: 28,
      },
      textview: {
        height: 50,
        justifyContent: 'center',
        width: 200,
        padding: 5,
      },
      carttext: {
        color: '#ffff',
        fontSize: 17,
        margin: 2,
      },
      View: {
        height: '100%',
        width: '100%',
        backgroundColor: '#ffff',
        //justifyContent:'center',
        alignItems: 'center',
      },
      cartimage: {
        height: 290,
        width: '90%',
        margin: 25,
        paddingBottom: 20,
      },
      text: {
        fontSize: 20,
        paddingTop: 10,
        color: 'black',
        fontWeight: 'bold',
      },
      description: {
        fontSize: 15,
        paddingTop: 15,
        fontWeight: '200',
        textAlign: 'center',
      },
      buttonview: {
        borderRadius: 20,
        height: 50,
        width: 148,
        margin: 25,
        paddingTop: 15,
        backgroundColor: '#87CEEB',
      },
      buttontext: {
        fontSize: 15,
        color: '#ffff',
        textAlign: 'center',
      },


});