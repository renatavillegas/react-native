import * as React from "react";
import { Button, Text, View, StyleSheet, Image, ScrollView, ActivityIndicator, ImageBackground,
    TextInput, TouchableOpacity, FlatList} from 'react-native';

export default class AddBook extends React.Component{
    constructor(props){
        super(props);
        this.state={
            background: require('../assets/images/background.png')
        }
    }
    render(){
        return(
            <View>
                    <TextInput style={styles.textInput}  placeholder={'BookTitle'}/>
                    <TextInput style={styles.textInput} placeholder={'Author'}/>
                    <TextInput style={styles.textInput} placeholder={'Date'}/>
                    <TextInput style={styles.textInput} placeholder={'Pages'}/>
                    <TextInput style={styles.textInput} placeholder={'Rating'}/>
            </View>
        )
    }

    
}

const styles = StyleSheet.create({
    homeView:{
        height:'100%', 
        backgroundColor: 'black',  
    }, 
    imageBackground: {
        height:'100%', 
    },
    hometitle: 
    {
        color:"#115566", 
        fontSize:32,
        fontWeight: 'normal', 
        textAlign: 'center',
        marginVertical: 64, 
        fontFamily: "sans-serif-medium",   
        alignContent:'center',
    }, 
    itemView:
    {
       margin:16,
       backgroundColor:"#BBBBBB"
    },

    bookTitleText:
    {
        color:"#115566",
        fontSize:18,
        fontFamily: "sans-serif-medium", 
    }, 
    descriptionText:{
        fontSize: 16,
        fontFamily: "sans-serif-medium", 
    }

})
