import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreators'
import { 
    RecommendWrapper,
    RecommendItem,
    RecommendTwo,
    RecommendTwoRight,
    RecommendClass
} from '../style'
class Recommend extends Component{
    render(){
        const { handleMouseEnter, handleMouseLeave, show, recommendList, two } = this.props
        return(
            <RecommendWrapper>
                {
                    recommendList.map((item) => {
                        return (
                            <RecommendItem key={item.get('id')}>
                                <img
                                    alt="加载失败"
                                    className="recommend-pic"
                                    src={item.get('imgUrl')}
                                />
                            </RecommendItem>
                        )
                    })
                }
                <RecommendTwo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img 
                        alt="加载失败"
                        className="two-pic"
                        src={two.get('imgUrl')}
                    />
                    <RecommendTwoRight>
                        <div className="title">下载简书手机App</div>
                        <div className="desc">随时随地发现和创作内容</div>
                    </RecommendTwoRight>
                    <RecommendClass
                        className={show ? '': 'show'}
                    >
                        <img 
                            alt="加载失败"
                            className="two-pic"
                            src={two.get('imgUrl')}
                        />
                    </RecommendClass>
                </RecommendTwo>
            </RecommendWrapper>
        )
    }
}

const mapState = (state) => ({
    show: state.getIn(['home', 'show']),
    recommendList: state.getIn(['home', 'recommendList']),
    two: state.getIn(['home', 'two'])
})

const mapDipath = (dispath) => ({
    handleMouseEnter(){
        dispath(actionCreators.mouseEnter())
    },
    handleMouseLeave(){
        dispath(actionCreators.mouseLeave())
    }
})
export default connect(mapState,mapDipath)(Recommend)