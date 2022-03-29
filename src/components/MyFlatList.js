import * as React from "react";
import {View,Text, StyleSheet, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Rating} from 'react-native-ratings';

export default class MyFlatList extends React.Component{
    constructor(props){
        super(props);
    }
    goToDetails = (item) =>{
        const {navigation} = this.props;
        this.props.navigation.navigate('Details', {screen:'Details', item:item})
    }
    renderItem =({item}) =>{
        console.log("Item: ", item)
        return(
            <View style={styles.itemView}>
                <TouchableOpacity onPress={()=> this.goToDetails(item)}>
                    <Text style={styles.bookTitleText}>
                        {item.name}
                    </Text>
                    <Text style={styles.descriptionText}>
                       {`Author: ${item.author} `}
                    </Text>
                    <Text style={styles.descriptionText}>
                        {`Date: ${item.date} `}
                    </Text>
                </TouchableOpacity>
                <Rating
                        ratingCount={10}
                        startingValue={item.rating}     
                        style={styles.rating}
                        readonly={true}
                        showRating={false}
                        imageSize={15}/> 
            </View>
        )
    }

    render(){
        const {myData, item} = this.props;
        return(
            <View style={styles.listView}>
                <FlatList data = {myData} renderItem={item=>this.renderItem(item)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    itemView:
    {
       margin:16,
       backgroundColor:"#CBCBCB"
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
    },
    listView: 
    {
        //height: Dimensions.get('window').height -250,
        margin:16, 
        flex:1
    }, 
    rating:{
        paddingVertical: 10
    }
})

