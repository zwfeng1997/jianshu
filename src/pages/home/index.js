import React, { Component } from 'react'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import * as actionCreators from './store/actionCreators'
import { connect } from 'react-redux'
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
    HomeReturn

} from './style'

class Home extends Component{
    returnHome(){
        window.scroll(0,0)
    }
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img 
                        title="图片"
                        alt="加载失败" 
                        className="banner-img" 
                        src="//upload.jianshu.io/admin_banners/web_images/4674/674a8ac2283f0ff81f3fb4e37fce606cc474f129.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                <HomeReturn 
                    onClick={this.returnHome}
                    className={this.props.returnShow ? '' : 'return-show'}
                >顶部</HomeReturn>
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.getData();
        this.bindEvent()
    }
    bindEvent(){
        window.addEventListener('scroll', this.props.showScroll)
    }
}

const mapState = (state) => ({
    returnShow: state.getIn(['home', 'returnShow'])
})
const mapDipath = (dispath) => ({
    getData(){
       const action = actionCreators.getData();
       dispath(action)
    },
    showScroll(){
        if(document.documentElement.scrollTop > 400){
            dispath(actionCreators.show())
        }else{
            dispath(actionCreators.no_show())
        }   
    }
})
export default connect(mapState,mapDipath)(Home)
