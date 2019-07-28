import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Font } from '../../statics/iconfont/iconfont'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from '../header/store/index'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    HeaderPosition
} from './style'

class Header extends Component {
    getListArea = () => {
        const { list, focused, page, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage, totalPage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if (newList.length) {
            for (let i = (page * 10); i < (page + 1) * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                                <SearchInfoSwitch onClick={() => handleChangePage(page,totalPage,this.spinIcon)}>
                                    <i 
                                        ref={(icon) => {this.spinIcon = icon}}
                                    className="iconfont spin">&#xe851;</i>
                                    换一批
                                </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {pageList}
                    </div>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
    render() {
        const { focused, handleInputBlur, handleInputFocus, list} = this.props
        return (
            <HeaderPosition>
            <HeaderWrapper>
                <Font />
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={500}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i
                            className={focused ? 'iconfont focused zoom' : ' zoom iconfont'}
                        >&#xe614;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                    <Addition>
                        <Button className="writting">
                            <i className="iconfont">&#xe615;</i>
                            写文章
                            </Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
            </HeaderPosition>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
    }
}

const mapDispathToProps = (dispath) => {
    return {
        handleInputFocus(list) {
            if(list.size === 0){
                dispath(actionCreators.getList())
            }
            dispath(actionCreators.onFocused());
        },
        handleInputBlur() {
            const action = actionCreators.onBlur();
            dispath(action);
        },
        handleMouseEnter(){
            dispath(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispath(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage,spinIcon){
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle){
                originAngle = parseInt(originAngle, 10);
            }else{
                originAngle = 0;
            }
            spinIcon.style.transform = 'rotate('+(originAngle + 90)+'deg)'
            if(page === totalPage-1){
                page = 0
            }else{
                page++
            }
            dispath(actionCreators.changePage(page));
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)