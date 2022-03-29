import * as React from "react";
import { Button, Text, View, StyleSheet, Image, ScrollView, ActivityIndicator, ImageBackground,
    TextInput, TouchableOpacity, FlatList} from 'react-native';
import {Rating} from 'react-native-ratings';
import MyDetails from "../components/MyDetails";
export default class Details extends React.Component{
    constructor(props){
        super(props);
        this.state={
            background: require('../assets/images/background.png')
        }
    }
    render(){
        const{item} = this.props.route.params;
        return(
            <View style={styles.detailsView}>
                 <ImageBackground source={this.state.background}  
                                  style={styles.imageBackground}
                                  resizeMode="cover"> 
                <MyDetails myItem={item} navigation = {this.props.navigation}></MyDetails>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({

detailsView:{
    height:'100%', 
    backgroundColor: 'black',  
    flex:1
}, 
imageBackground: {
    height:'100%', 
},
})