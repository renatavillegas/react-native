import * as React from "react";
import {View,Text, StyleSheet, ImageBackground, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Rating} from 'react-native-ratings';
import MyButton from "../components/MyButton";
export default class MyDetails extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {myItem} = this.props;
        return(
            <View style={styles.detailsView}>
                <Text style={styles.bookTitleText}> {`${myItem.name}`} </Text>
                <Text style={styles.authorText}> {`${myItem.author}`} </Text>
                <Text style={styles.detailsText}> {`Pages: ${myItem.pages}`} </Text>
                <Text style={styles.detailsText}> {`Date: ${myItem.date}`} </Text>
                <Rating showRating 
                        ratingCount={10}
                        startingValue={myItem.rating}
                        style={{ paddingVertical: 10}}/>
                <View style={styles.imageContainer}>
                    <Image source={myItem.image} style={styles.imageView}/>
                </View>
                <MyButton screen="Home" title = "Back" navigation = {this.props.navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    bookTitleText:{
        color:"#115566", 
        fontSize:32,
        fontWeight: 'bold', 
        textAlign: 'center',
        fontFamily: "sans-serif-medium",
        alignContent:'center',
    },
    authorText:{
        color:"#115566", 
        fontSize:24,
        fontWeight: 'bold', 
        textAlign: 'center',
        fontFamily: "sans-serif-medium",
        alignContent:'center',        
    },
    detailsText:{
        fontSize: 22,
        fontFamily: "sans-serif-medium", 
    },
    imageContainer:{
        flex:1,
        alignItems:'center',
        alignContaint:'center'
    }, 
    imageView:{
        flex: 1,
        width: 250,
        height: 250,
        resizeMode: 'contain'
    }
})
