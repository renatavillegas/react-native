import * as React from "react";
import {Text, StyleSheet, Pressable} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class MyButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            animationType:"pulse"
        }
    }
    animatedPress = () => {
        const {screen, navigation} = this.props;
        navigation.navigate(screen, {screen: screen})
        this.setState({
            animationType:"shake"
        })
    }
    render(){
        const {title} = this.props
        return(
            <Animatable.View animation={this.state.animationType}>
                <Pressable
                animation = {this.state.animationType}
                easing = "ease-out"
                interationCount="infinite"
                style={styles.mainTheme}
                onPress={()=>this.animatedPress()}>
                    <Text style={styles.textButton}>
                        {`${title}`}
                    </Text>
                </Pressable>
            </Animatable.View>

        )
    }
}

const styles = StyleSheet.create({
    
    mainTheme : {
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
    textButton:{
//        textTransform: 'uppercase', 
        fontSize:18, 
        fontWeight: '800', 
        textAlign: 'center',        
    }
})
