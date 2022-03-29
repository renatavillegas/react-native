import * as React from "react";
import { Button, Text, View, StyleSheet, Image, ScrollView, ActivityIndicator, ImageBackground,
        TextInput, TouchableOpacity, FlatList} from 'react-native';
import MyFlatList from "../components/MyFlatList";
import { Axios } from "axios";
import gotApi from '../services/gotApi'
import pokeApi from "../services/pokeApi";
import dayjs from 'dayjs';
const DATA = [
    {
        id:1, 
        name: 'Pride and Prejudice',
        author: 'Jane Austen',
        date: dayjs('2020-03').format("MM/YYYY") ,
        pages: '405',
        rating: 10,
        image:require('../assets/images/books/pride.jpg')
    },
    {
        id:2, 
        name: 'Things Fall Apart',
        author: 'Chinua Achebe',
        date: dayjs('2019-02').format("MM/YYYY"),
        pages: '169',
        rating: '8',
        image:require('../assets/images/books/thingsFall.jpg')
    },
    {
        id:3, 
        name: 'To Kill a Mockingbird',
        author:' Harper Lee ',
        date: dayjs('2020-05').format("MM/YYYY"),
        pages: '784',
        rating: '10',
        image: require('../assets/images/books/ToKillA.jpg')
    },
    {
        id:4, 
        name: 'The Brothers Karamazov',
        author:' Fiódor Dostoiévski ',
        date: dayjs('2020-12').format("MM/YYYY"),
        pages: '896',
        rating: '8',
        image:require('../assets/images/books/TheBrothers.jpg')

    },
    {
        id:5, 
        name: 'Jane Eyre',
        author:' Charlotte Bronte ',
        date: dayjs('2022-05').format("MM/YYYY"),
        pages: '465',
        rating: '0',
        image: require('../assets/images/books/JaneEyre.jpg')
    },
    {
        id:6, 
        name: 'The Most Important Thing',
        author:' Howard Marks ',
        date: dayjs('2021-03').format("MM/YYYY"),
        pages: '196',
        rating: '6',
        image: require('../assets/images/books/TheMost.jpg')
    },
    {
        id:7, 
        name: 'One Hundred Years of Solitude',
        author:'Gabriel García Márquez',
        date: dayjs('2021-04').format("MM/YYYY"),
        pages: '505',
        rating: '8',
        image: require('../assets/images/books/100years.jpg')
    },
    {
        id:8, 
        name: 'Atlas Shrugged',
        author:'Ayn Rand',
        date: dayjs('2021-09').format("MM/YYYY"),
        pages: '659',
        rating: '9',
        image: require('../assets/images/books/Atlas.jpg')
    },
    {
        id:9, 
        name: 'Women Who Run With The Wolves',
        author:'Clarisa Pincola Estes',
        date: dayjs('2021-11').format("MM/YYYY"),
        pages: '361',
        rating: '10',
        image: require('../assets/images/books/WomanWho.jpg')
    },
    {
        id:10, 
        name: 'Incidents in the Life of a Slave Girl',
        author:'Harriet Jacobs',
        date: dayjs('2021-06').format("MM/YYYY"),
        pages: '186',
        rating: '10',
        image: require('../assets/images/books/Incidents.jpg')
    },
    {
        id:11, 
        name: 'The Push',
        author:'Ashley Audrain',
        date: dayjs('2021-08').format("MM/YYYY"),
        pages: '303',
        rating: '8',
        image:require('../assets/images/books/ThePush.jpg')
    },
    {
        id:12, 
        name: 'Arrow of God',
        author:'Chinua Achebe',
        date: dayjs('2021-09').format("MM/YYYY"),
        pages: '505',
        rating: '7',
        image: require('../assets/images/books/Arrow.jpg')
    },
    {
        id:13, 
        name: 'No longer at Ease',
        author:'Chinua Achebe',
        date: dayjs('2021-03').format("MM/YYYY"),
        pages: '128',
        rating: '8',
        image: require('../assets/images/books/NoLonger.jpg')
    },
    {
        id:14, 
        name: 'Morte e vida severina',
        author:'João Cabral de Melo Neto',
        date: dayjs('2021-05').format("MM/YYYY"),
        pages: '128',
        rating: '9',
        image: require('../assets/images/books/MorteEVida.jpg')
    },
    {
        id:15, 
        name: 'The Great Gatsby',
        author:'F. Scott Fitzgerald',
        date: dayjs('2021-08').format("MM/YYYY"),
        pages: '193',
        rating: '7',
        image: require('../assets/images/books/TheGreat.jpg')
    },
]
export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            background: require('../assets/images/background.png'),
            selectedCharacter: {},
            gotData:[], 
            randomNumber: Math.floor(Math.random()*44), 
            pokeData:[]
        }
    }
    componentDidMount = () =>{
        this.getData();
        this.getPokemonData();
    }
    goToDetails = (item) =>{
        const {navigation} = this.props;
        this.props.navigation.navigate('Details', {screen:'Details', item:item})
    }
    getData = () =>{
        const  params = {
            page:this.state.randomNumber,
            pageSize: 50
        }
        gotApi.get("/characters?page="+params.page+"&pageSize="+params.pageSize).then(result => {
            this.setState({
                gotData: result.data
            })
            console.log("CHARACTERS: ", result.data)
        })
    }
    getPokemonData = () =>{
        const  params = {
            offset:0,
            limit: 50
        }
        pokeApi.get("/pokemon?offset="+params.offset+"&limit="+params.limit).then(result => {
            this.setState({
                pokeData: result.data.results
            })
            console.log("CHARACTERS: ", result.data.result)
        })
    }
    renderItem =({item}) =>{
        return(
            <View style={styles.itemView}>
                <TouchableOpacity onPress={()=> this.goToDetails(item)}>
                    <Text style={styles.bookTitleText}>
                        {`Name: ${item.name}`}
                    </Text>
                    <Text style={styles.descriptionText}> {`PlayedBy: ${item.playedBy}`} </Text>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.homeView}>
                <ImageBackground source={this.state.background}  
                                  style={styles.imageBackground}
                                  resizeMode="cover">      
                    <Text style={styles.hometitle}>
                        {"Books"}
                    </Text>
                    <MyFlatList myData = {DATA.sort((a,b) => a.name.localeCompare(b.name))} navigation = {this.props.navigation}/>  
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                    </View>                    
                </ImageBackground>     
            </View>
        );
    }
}
//a.date.localeCompare(b.date)
const styles = StyleSheet.create({
    homeView:{
        backgroundColor: 'black',  
        flex:1,
    }, 
    imageBackground: {
        flex:1
    },
    hometitle: 
    {
        color:"#115566", 
        fontSize:64,
        fontWeight: 'normal', 
        textAlign: 'center',
        marginVertical: 32, 
        fontFamily: "sans-serif-medium",   
        alignContent:'center',
    }, 
    itemView:
    {
       margin:16,
       backgroundColor:"#CCCCCC"
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
