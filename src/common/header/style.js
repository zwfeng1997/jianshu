import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderPosition = styled.div`
    position: fixed; 
    left: 0;
    top: 0;
    width: 100%;
    background: #fff;
    z-index: 100;
`
export const HeaderWrapper = styled.div`
    position: relative; 
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    background: #fff;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
`
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left{
        float: left
    }
    &.right{
        float: right;
        color: #969696
    }
    &.active{
        color: #ea6f5a;
    }
`

export const SearchWrapper = styled.div`
    position: relative; 
    float: left;
    .zoom{
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused{
            color: #fff;
            background: #777
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 240px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 320px;
    }
    &.slide-enter{
        width: 240px;
        transition: all 0.5s ease-out;
    }
    &.slide-enter-active{
        width: 320px;
    }
    &.slide-exit{
        width: 320px;
        transition: all 0.5s ease-out;
    }
    &.slide-exit-active{
        width: 240px;
    }
    
`

export const SearchInfo = styled.div`
    dispaly: block;
    opacity: 1;
    position: absolute;
    top: 56px;
    z-index: 10;
    left: 0;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #fff;
    &:before{
        position: absolute;
        content: '';
        left: 40px;
        top: -18px;
        width: 0;
        height: 0;
        border: 10px solid;
        border-color: transparent transparent #fff;
    }
`
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
    .spin{
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`

export const SearchInfoSwitch = styled.div`
    float: right;
    font-size: 13px;
    cursor:pointer;
`
export const Addition = styled.div`
    position: absolute;
    right: 70px;
    top: 0;
    height: 56px;
    background: #fff;

`

export const SearchInfoItem = styled.a`
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`
export const SearchInfoList = styled.div`

`

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg{
        color: #ec6149
    }
    &.writting{
        color: #fff;
        background: #ec6149;
    }
    .iconfont{
        margin-right: 7px;
    }
`