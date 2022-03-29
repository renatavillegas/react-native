import * as React from "react";
import { Button, Text, View, StyleSheet, Image, ScrollView, ActivityIndicator, ImageBackground,
        TextInput, TouchableOpacity} from 'react-native';
import MyButton from "../components/MyButton";

//const image = { uri: "https://reactjs.org/logo-og.png" }; <- load image from uri

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            background: require('../assets/images/background.png')
        }
    }

    backgroundChange = () => {
        this.setState({
            background : require('../assets/images/love1.jpg')
        })
        console.log("Logged in")
    }

    goToHome = () => {
        this.props.navigation.navigate("Home",{screen: "Home"});
        //console.warn("Go to Home");
    }

    render() {
        return (
            <View style={styles.mainView}>
                <ImageBackground source={this.state.background}  
                                  style={styles.imageBackground}
                                  resizeMode="cover">
                    <View style= {styles.titleTextView}>
                        <Text style={styles.titleText}>{'My library'}</Text>
                    </View>
                    <View style={styles.textInputView}>
                        <TextInput style={styles.textInput} keybordType ='email-address' placeholder={'EMAIL'}/>
                        <TextInput style={styles.textInput} placeholder={'PASSWORD'}/>
                        <View style = {styles.buttonView}>
                        <MyButton title="Login" screen = 'Home' navigation = {this.props.navigation}/>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    mainView:{
        height:'100%', 
        backgroundColor: 'black', 
        flex: 1, 
    },
    imageBackground: {
        height:'100%', 
    },
    titleTextView:{
        flex: 0.5, 
        
    },
    titleText:{
        color:"#115566", 
        fontSize:64,
        fontWeight: 'bold', 
        textAlign: 'center',
        marginVertical: 100, 
        fontFamily: "sans-serif-medium",
        alignContent:'center',
    }, 
    textInputView:{
        flex: 1, 
        marginHorizontal: 24
    }, 
    textInput:{
        borderColor: "#115566", 
        borderWidth: 3, 
        borderRadius: 16, 
        marginVertical: 16, 
        backgroundColor: 'rgba(190,190,190,5)'
    }, 
    buttonView:{
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',    
    }, 
    button:{
        backgroundColor: 'rgba(175,175,175,5)',
        borderColor: "#115566", 
        height: 40,
        width: 160,
        justifyContent: 'center',
        alignItens: 'center',
        margin: 12, 
        title: 'Login', 
        borderWidth: 3, 
        borderRadius: 12
    },
    loginText:{
        fontSize:18, 
        fontWeight: '800', 
        textAlign: 'center',        
    },
})
