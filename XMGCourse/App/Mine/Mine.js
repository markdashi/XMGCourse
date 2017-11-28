
/**
 * @providesModule Mine
 */
import React, {Component} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image

}from 'react-native'

import CommonGroupListViewHeader from 'CommonGroupListViewHeader'

import Common from 'Common'

import Setting from 'Setting'

// 3.自定义 程序入口组件([[UIView alloc] init])
export default class Mine extends Component {

    constructor(props){
        super(props);

        var groups = [];

        // 搭建数据

        // 加载第0组
        this.setupGroup0(groups);

        // 加载第1组
        this.setupGroup1(groups);

        this.state = {
            groups:groups
        }
    }

    // 加载第0组
    setupGroup0(groups){
        // 创建行模型
        var item0 = new CommonGroupListViewHeader.CommonArrowRowItem('icon_mine_myAccount_address','小码哥','年薪100W');
        var item1 = new CommonGroupListViewHeader.CommonArrowRowItem('icon_mine_myAccount_livingCity','到过的公园','5个');
        var item2 = new CommonGroupListViewHeader.CommonArrowRowItem('icon_mine_myAccount_password','阅历','');
        var item3 = new CommonGroupListViewHeader.CommonSwitchRowItem('icon_mine_myAccount_phone','笔记','');
        // item3.clickCell = function () {
        //     alert('点了笔记');
        // };
        var group0 = new CommonGroupListViewHeader.CommonGroupItem([item0,item1,item2,item3],0);
        groups.push(group0);
    }

    // 加载第0组
    setupGroup1(groups){
               // 创建行模型
        var item0 = new CommonGroupListViewHeader.CommonArrowRowItem('icon_mine_myAccount_securityQuestion','收藏');
        var item1 = new CommonGroupListViewHeader.CommonSwitchRowItem('icon_mine_myAccount_setBirthday','用户指南');
        var item2 = new CommonGroupListViewHeader.CommonArrowRowItem('icon_mine_myAccount_username','我','');
        var item3 = new CommonGroupListViewHeader.CommonArrowRowItem('icon_mine_member_instructions','设置','');
        item3.route = {
            component:Setting,
        }

        var group1 = new CommonGroupListViewHeader.CommonGroupItem([item0,item1,item2,item3],20);
        groups.push(group1);
    }

    render(){

        return (
            <CommonGroupListViewHeader.CommonGroupListView groups={this.state.groups}
                                 groupListViewStyle={{backgroundColor:Common.bgColor}}
                                 subTitleStyle={{position:'absolute',right:20}}
                                 navigator={this.props.navigator}
                                 renderHeader={this._renderHeader.bind(this)}
            />
        )

    }

    // 渲染头部视图
    _renderHeader(){
        return (
            <Image source={{uri:'mine'}} style={{width:Common.screenW,height:300,justifyContent:'center',alignItems:'center'}}>
                <Image source={{uri:'person'}} style={{width:100,height:100}}/>
            </Image>
        )
    }
}

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

