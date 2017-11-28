
/**
 * @providesModule App
 */
import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AsyncStorage
}from 'react-native'

import Main from 'Main'

import Guide from 'Guide'

import Launch from 'Launch'

// react-native-deprecated-custom-components
import {Navigator} from 'react-native-deprecated-custom-components'

/*
* 程序启动的时候,如果是第一次,进入引导页 如果不是第一次,直接进入main
* RN获取不到版本号
* 本地存储: 第一次进入的时候,记录下
* 第二次,从本地存储中获取 有没有第一次进入信息,如果有,就直接显示main
*
*
* */

/*
* 解决引导页延迟加载问题
* 1.自己实现启动界面
* 2.等1秒执行引导页
* */

// 3.自定义 程序入口组件([[UIView alloc] init])
export default class App extends Component {

    guideApp(){
        // 1.读取本地数据
        var isFirst = null;

        AsyncStorage.getItem('isFirst',(error,result)=>{

                // 2.判断是否是第一次
                isFirst = result;

                // 3.第一次Guide,记录第一次
                if(isFirst){
                    this.navigator.replace({component:Main})

                } else {

                    // 记录
                    AsyncStorage.setItem('isFirst',"true",(error)=>{
                        if(error){
                            alert('保存失败');
                        }
                    });

                    this.navigator.replace({component:Guide})

                }
        });
    }

    componentDidMount() {
        setTimeout(this.guideApp.bind(this),500)
        // this.guideApp();
    }

    render(){

        return (
            <Navigator initialRoute={{
                component:Launch
            }}
                       renderScene={this.renderScene.bind(this)}
            />
        )

    }

    // 渲染组件
    renderScene(route, navigator){
        this.navigator = navigator;
        return (<route.component navigator={navigator} {...route} />)
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

