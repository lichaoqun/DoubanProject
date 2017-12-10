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
import MovieItem from '../Movie/MovieItem';
import {StackNavigator} from "react-navigation";

export default class Book extends Component{

    state = {
        dataSource :  new ListView.DataSource({
            rowHasChanged : (r1, r2) =>r1 != r2
        }),
        show : false,
        keywords : '钢铁侠',
    }

    static navigationOptions = {
        title: '首页',    //设置navigator的title
        header : null
    }

    render(){
        return (
            <ScrollView>
                <SearchBar
                    placeholder     =   {'请输入电影名称'}
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

        var url = DoubanApis.movice_search + '?count=20&q=' + this.state.keywords;
        Util.getRequest(url, (respone)=>{
            console.log(respone);
            if (!respone.subjects || respone.subjects.length == 0){
                Alert.alert('未查询到相关电影');
                return;
            };

            this.setState({
                show : true,
                dataSource : this.state.dataSource.cloneWithRows(respone.subjects)
            });
            return;

        },(error)=>{
            console.log(error);
            Alert.alert('请求失败');
            return;
        });
    }

    _renderRow = (movie)=>{
        return (
            <MovieItem
                movie = {movie}
                onPress = {() => {
                    this._showDetail(movie);
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

    _showDetail = (movie)=>{
        const { navigate } = this.props.navigation;
        navigate('CustomWebView', {backName : '电影', title: movie.title, url : movie.alt});
    }
}

const styles = StyleSheet.create({

});