import { StyleSheet, } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
export const styles = StyleSheet.create({

    signupview: {
        height: '25%',
        width: '100%',
        justifyContent: 'center',


    },
    usernameview: {
        flexDirection:'row',
        justifyContent:'flex-start',
        height:40,
        width:'100%'
        
    },
    usericon:{
        height:20,
        width:'8%',
        margin:8,
        marginTop:5,
        marginLeft:4,
    },
    input1:{
        borderRadius:10,
        height:35,
        width:'80%',
        color:'black',
        backgroundColor:'lightgrey',
        padding:moderateVerticalScale(8),
        borderWidth:0.5
    },
    emailview:{
        flexDirection:'row',
        justifyContent:'flex-start',
        height:40,
        width:'100%'

    },
    emailicon:{
        height:20,
        width:'6%',
        margin:8,
        marginLeft:10,
    },
    input2:{
        borderRadius:10,
        height:35,
        width:'80%',
        color:'black',
        backgroundColor:'lightgrey',
        padding: moderateVerticalScale(8) ,
        borderWidth:0.5
       },

    passwordview:{
        flexDirection:'row',
        justifyContent:'flex-start',
        height:40,
        width:'100%'


    },
        passwordicon:{
            height:27,
            width:'6%',
            margin:8,
            marginTop:5,
            marginLeft:10,

    },
    input3:{
        borderRadius:10,
        height:35,
        width:'80%',
        color:'black',
        backgroundColor:'lightgrey',
        padding:moderateVerticalScale(8),
        borderWidth:0.5
        


    }  ,
    createpasswordview:{
        flexDirection:'row',
        justifyContent:'flex-start',
        height:40,
        width:'100%'


    },
        createpasswordicon:{
            height:27,
            width:'6%',
            margin:8,
            marginTop:5,
            marginLeft:10,

    },
    input4:{
        borderRadius:10,
        height:35,
        width:'80%',
        color:'black',
        backgroundColor:'lightgrey',
        padding:moderateVerticalScale(8),
        borderWidth:0.5
        


    },
    btnview:{
        marginLeft:80,
        borderRadius:8,
        margin:20,
        height:45,
        width:'60%',
        //paddingLeft:10,
        alignContent:'center',
        justifyContent:'center',
        backgroundColor:'skyblue',borderWidth:0.5
    } ,
    btn:{
        fontSize:20,
        textAlign:'center',
        paddingTop:1,
        color:'#ffff'
    } ,
    bottontext:{
        justifyContent:'space-between',
        flexDirection:'row'
    },
    text1:{
        fontWeight:'300',
        marginLeft:10,
    },

    signinbtn:{
        fontSize:15,
        fontWeight:'500',
        marginRight:10,
        color:'red'
    },

})

