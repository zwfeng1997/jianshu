import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    WriterWrapper,
    WriterTitle,
    WriterItem,
    WriterItemLeft,
    WriterItemRight,
    WriterBtn
} from '../style'
class Writer extends Component{
    render(){
        return(
            <WriterWrapper>
                <WriterTitle>
                    <div className="writer-title">推荐作者</div>
                    <div className="writer-new">换一换</div>
                </WriterTitle>
                {
                    this.props.list.map((item) => {
                        return (
                            <WriterItem key={item.get('id')}>
                                <WriterItemLeft>
                                    <img
                                        className="user-pic"
                                        alt="图片加载失败"
                                        src={item.get('imgUrl')}
                                    />
                                    <div className="left-wrapper">
                                        <div className="writer-name">{item.get('name')}</div>
                                        <div className="writer-num">
                                            <div className="writer-font">
                                                写了{item.get('font')}K
                                            </div>
                                            <div className="writer-like">
                                            {item.get('like')}喜欢
                                            </div>
                                        </div>
                                    </div>
                                </WriterItemLeft>
                                <WriterItemRight>
                                    关注
                                </WriterItemRight>
                            </WriterItem>
                        )
                    })
                }
                <WriterBtn>
                    加载更多
                </WriterBtn>
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'user']),
})
export default connect(mapState,null)(Writer)