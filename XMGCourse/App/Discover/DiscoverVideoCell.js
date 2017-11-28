
/**
 * @providesModule DiscoverVideoCell
 */
import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
}from 'react-native'

import Common from 'Common'

// 3.自定义 程序入口组件([[UIView alloc] init])
export default class DiscoverVideoCell extends Component {

    render(){

        return (
            <TouchableOpacity onPress={()=>{
                var route = this.props.rowData.route;
                route.navigator = this.props.navigator;
                this.props.navigator.push(route);
            }}>
                <Image source={{uri:this.props.rowData.customData.img}} style={{height:200,width:Common.screenW}}
                       defaultSource={{uri:'placeholder'}}
                />
            </TouchableOpacity>
        )

    }

}

/*
 *

 * */

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

