/**
 * Created by QG on 2017/12/10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    WebView
} from 'react-native';

import Header from './../CustomView/Header'

export default class CustomWebView extends Component{
    static navigationOptions = {
        header : null
    }

    render(){
        return (
            <View style = {{backgroundColor : 'white', flex : 1}}>
                <Header
                    initObj = {{
                        backName : this.props.navigation.state.params.backName,
                        batTitle : this.props.navigation.state.params.title
                    }}
                    onPress = {()=> {this._pop()}}
                />
                <WebView
                    startInLoadingState = {true}
                    contentInset = {{top : -44, bottom : -120}}
                    source = {{url : this.props.navigation.state.params.url}}
                />
            </View>
        );
    }

    _pop = () =>{
        this.props.navigation.goBack();
    }

}