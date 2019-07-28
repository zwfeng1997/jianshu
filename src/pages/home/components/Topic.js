import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    TopicWrapper,
    TopicItem
} from '../style'
 
class Topic extends Component{
    render(){
        return(
            <TopicWrapper>
            {
                this.props.list.map((item) => {
                    return (
                        <TopicItem key={item.get('id')}>
                            <img
                                title="图片"
                                alt="加载失败"
                                className="topic-pic"
                                src= {item.get('imgUrl')}/>
                            {item.get('title')}
                        </TopicItem>
                    )
                })
            }
            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'topicList']),
})
export default connect(mapState)(Topic)