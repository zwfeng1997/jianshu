import React, { PureComponent } from 'react'
import { DetailWrapper, Content } from './style'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'

class Detail extends PureComponent{
    render(){
        const { title, content, imgUrl } = this.props
        return(
            <DetailWrapper>
                <h1>{title}</h1>
                <img
                    alt="图片加载失败"
                    className="detail-pic"
                    src={imgUrl}
                />
                <Content dangerouslySetInnerHTML={{__html: content}} />
                   
            </DetailWrapper>
        )
    }
    componentDidMount(){
        let id = this.props.match.params.id
        this.props.getData(id)
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
    imgUrl: state.getIn(['detail', 'imgUrl']),
})

const mapDispath = (dsipath) => ({
    getData(id){
        dsipath(actionCreators.getData(id))
    }
})
export default connect(mapState, mapDispath)(Detail)