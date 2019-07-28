import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actionCreators'
import { Link } from 'react-router-dom'
import { 
    ListItem,
    ListInfo,
    LoadMroe
} from '../style'
class List extends PureComponent{
    render(){
        const { list, getMoreList, articlePage } = this.props;
        return(
            <div>
            {
                list.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            to={'/detail/' + item.get('id')}
                        >
                            <ListItem>
                                <img
                                    title="图片"
                                    alt="加载失败"
                                    className="list-pic"
                                    src={item.get('imgUrl')} />
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    )
                })
            }
            <LoadMroe onClick={ () => {getMoreList(articlePage)}}>阅读更多</LoadMroe>
            </div>
        )
    }
}

 const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage'])
 })

 const mapDispatch = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page));
    }
 })
export default connect(mapState, mapDispatch)(List)