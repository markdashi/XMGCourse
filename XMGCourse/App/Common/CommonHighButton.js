
/**
 * @providesModule CommonHighButton
 *
 */
import React, {Component,PropTypes} from 'react'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
    TouchableOpacity,
    Image
}from 'react-native'

var screenW = Dimensions.get('window').width;


// 3.自定义 程序入口组件([[UIView alloc] init])
export default class CommonHighButton extends Component {

    static propTypes = {
        // 正常
        // 标题
        title:PropTypes.string,

        // 图片
        image:PropTypes.string,

        // 样式
        imageStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number]),
        titleStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number]),
        buttonStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number]),
        highlightedTitleStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number]),

        // 高亮
        highlightedImage:PropTypes.string,

        // 监听事件
        onPress:PropTypes.func
    };

    constructor(props){
        super(props);

        this.state = {
            highlighted:false
        }
    }

    render(){
        return (
            <TouchableOpacity style={[styles.buttonStyle,this.props.buttonStyle]}
                              onPressIn={()=>{
                                  this.setState({
                                      highlighted:true
                                  })
                                  if (this.props.onPress){
                                      this.props.onPress(this);
                                  }
                              }}
                              onPressOut={()=>{
                                  this.setState({
                                      highlighted:false
                                  })
                              }}
                              activeOpacity={this.props.highlightedImage?1:0.5}
            >

                {/*标题*/}
                {this.props.title?<Text style={this.state.highlighted && this.props.highlightedTitleStyle?this.props.highlightedTitleStyle:this.props.titleStyle}>{this.props.title}</Text>:null}

                {/*图片*/}
                {this.props.image?<Image source={{uri:this.state.highlighted && this.props.highlightedImage?this.props.highlightedImage : this.props.image}} style={[{marginLeft:3},this.props.imageStyle]}/>:null}

            </TouchableOpacity>
        )

    }

}

/*
 *

 * */

// 4.样式表 组件外观 尺寸,颜色
var styles = StyleSheet.create({
    buttonStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
});

