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

import Util from '../CustomView/Tools';
import SearchBar from '../CustomView/SearchBar';
import DoubanApis from '../CustomView/Serviece';
import BookItem from './BookItem';
import BookDetail from './BookDetail';
import {StackNavigator} from "react-navigation";

export default class Book extends Component{

    state = {
        dataSource :  new ListView.DataSource({
            rowHasChanged : (r1, r2) =>r1 != r2
        }),
        show : false,
        keywords : 'React',
    }

    static navigationOptions = {
        title: '首页',    //设置navigator的title
        header : null
    }

    render(){
        return (
            <ScrollView>
                <SearchBar
                    placeholder     =   {'请输入图书名称'}
                    onPress         =   {() => {this._searchClick()}}
                    onChangeText    =   {(e)=> {this._changeText(e)}}
                />
                {this.state.show ?
                    <ListView
                        dataSource = {this.state.dataSource}
                        renderRow = {this._renderRow}
                        renderSeparator = {this._renderSeparator}
                    /> :
                    Util.loading}
            </ScrollView>
        );
    }

    componentDidMount(){
        this._getData();
    }

    _changeText = (keyword) => {
        this.setState({
            keywords : keyword,
        });
        console.log(this.state.keywords);
    }

    _searchClick(){
        this._getData();
    }

    _getData = () => {

        // - 开始 loading
        this.setState({
            show : false
        })

        var url = DoubanApis.book_search + '?count=20&q=' + this.state.keywords;
        Util.getRequest(url, (respone)=>{
            console.log(respone);
            if (!respone.books || respone.books.length == 0){
                Alert.alert('未查询到相关书籍');
                return;
            };

            this.setState({
                show : true,
                dataSource : this.state.dataSource.cloneWithRows(respone.books)
            });
            return;

        },(error)=>{
            console.log(error);
            Alert.alert('请求失败');
            return;
        });
    }

    _renderRow = (book)=>{
        return (
            <BookItem
                book = {book}
                onPress = {() => {
                    this._showDetail(book.id);
                }}
            />
        );
    }

    _renderSeparator = (sectionID:number, rowID:number) => {
         var style = {
             height : 1,
             backgroundColor : '#CCCCCC'
         }

        return(
          <View style = {style}></View>
        );
    }

    _showDetail = (bookId)=>{
        const { navigate } = this.props.navigation;
        console.log(navigate);
        navigate('BookDetail', {bookID : bookId});

    }
}

const styles = StyleSheet.create({

});