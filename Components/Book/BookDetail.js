/**
 * Created by QG on 2017/12/10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Alert,
    View,
    Text,
    ListView,
    ScrollView
} from 'react-native';

import Serviece from '../CustomView/Serviece';
import Util from '../CustomView/Tools';
import Header from '../CustomView/Header';
import BookItem from './BookItem';

export default class BookDetail extends Component{

    state = {
        bookData : null,
    }

    static navigationOptions = {
        header : null
    }

    render(){
        return (
            <ScrollView style = {styles.container}>
                {this._renderShowView()}
            </ScrollView>

        );
    }

    _renderShowView = () => {
        if(this.state.bookData){
            return (
                <View>
                    <Header
                        initObj = {{backName : '图书', barTitle : this.state.bookData.title}}
                        onPress = {()=> {this._pop()}}
                    />
                    <BookItem
                        book = {this.state.bookData}
                    />
                    <View>
                        <Text  style = {styles.title}>图书简介</Text>
                        <Text style = {styles.text}>{this.state.bookData.summary}</Text>
                    </View>
                    <View style = {{marginTop : 10}}>
                        <Text  style = {styles.title}> 作者简介</Text>
                        <Text  style = {styles.text}>{this.state.bookData.author_intro}</Text>
                    </View>
                    <View style = {{height : 55}}></View>
                </View>
            );
        }else {
            return Util.loading;
        }
    }

    componentDidMount(){
        this._getData();
    }

    _getData = () => {
        var url = Serviece.book_detail + this.props.navigation.state.params.bookID;
        Util.getRequest(url, (resopone) => {
            console.log(resopone);
            this.setState({
                bookData : resopone,
            })
        }, (error) => {
            console.log(error);
        })

    }

    _pop = () =>{
        this.props.navigation.goBack();
    }

}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
    },

    title : {
        fontSize : 16,
        marginTop : 10,
        marginLeft : 10,
        marginBottom : 10,
        fontWeight : 'bold',
    },

    text : {
        marginLeft : 10,
        marginRight : 10,
        color : '#000D22'
    }
});