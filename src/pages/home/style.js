import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`

export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    margin-top: 90px;
    float: left;
    .banner-img{
        width: 625px;
        height: 270px;
        border-radius: 6px;
    }
`

export const HomeReturn = styled.div`
    position: fixed; 
    width: 50px;
    height: 50px;
    border: 1px solid #dcdcdc
    right: 50px;
    bottom: 50px;
    font-size: 12px;
    text-align: center;
    line-height: 50px;
    opacity: 1;
    transition: all 1s ease-out;
    &.return-show{
        height: 0;
        opacity: 0;
    }
`

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;

`
export const TopicItem = styled.a`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    &:last-child{
        border-bottom: none;
    }
    .list-pic{
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #333
    }
    .desc{
        font-size: 13px;
        line-height: 24px;
        color: #999
    }
`

export const LoadMroe = styled.a`\
    display: block;
    width: 625px;
    height: 40px;
    margin: 30px 0;
    line-height: 40px;
    text-align: center;
    box-sizing: border-box;
    background-color: #a5a5a5;
    border-radius: 20px;
    color: #fff;
    font-size: 15px;
`

export const RecommendWrapper = styled.div`
    position: relative;
    width: 280px;
    margin-top: 90px;
`

export const RecommendItem = styled.a`
    display: block;
    width: 280px;
    height: 50px;
    padding-top: 6px;
    &:first-child{
        padding-top: 0;
    }
    .recommend-pic{
        width: 280px;
        height: 50px;
        margin-bottom: 6px;
    }
`
export const RecommendTwo = styled.a`
    float: left;
    width: 234px;
    height: 60px;
    padding: 10px 22px;
    border: 1px solid #f0f0f0;
    margin-bottom: 30px; 
    margin-top: 10px;
    .two-pic{
        width: 60px;
        height: 60px;
    }
`

export const RecommendTwoRight = styled.div`
    float: right;
    width: 144px;
    padding-right: 20px;
    &:
    .title{
        padding-top: 10px;
        padding-bottom: 6px;
    }
    .desc{
        font-size: 13px;
        color: #999;
        margin-top: 4px;
    }
`

export const RecommendClass = styled.div`
    position: absolute;
    top: 32px;
    left: 48px;
    width: 184px;
    height: 184px;
    padding: 10px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 6px;
    border: 1px solid #999;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    opacity: 1;
    transition: all 1s ease-out;
    .two-pic{
        width: 164px;
        height: 164px;
    }
    &.show{
        height: 0;
        opacity: 0;
    }
    &:before{
        position: absolute;
        content: '';
        left: 82px;
        bottom: -19px;
        width: 0;
        height: 0;
        border: 10px solid;
        border-color: #fff transparent transparent transparent;
    }
`

export const WriterWrapper = styled.div`
    width: 280px;
`
export const WriterTitle = styled.div`
    width: 280px;
    overflow: hidden;
    .writer-title{
        float: left;
        font-size: 14px;
        color: #969696;
    }
    .writer-new{
        float: right;
        font-size: 14px;
        color: #969696;
    }
`

export const WriterItem = styled.div`
    margin-top: 25px;
    overflow: hidden;
    cursor:pointer
`

export const WriterItemLeft = styled.div`
    float: left;
    width: 240px;
    .user-pic{
        float: left;
        margin-right: 10px;
        width: 46px;
        height: 46px;
        border-radius: 50%
    }
    .writer-name{
        line-height: 20px;
        padding-top: 5px;
    }
    .writer-num{
        font-size: 12px;
        color: #969696;
        line-height: 20px;
        margin-top: 5px;
    }
    .writer-font{
        margin-right: 20px;
    }
    .writer-font,.writer-like{
        display: inline-block
    }
    .writer-name{
        font-size: 14px;
        color: #2f2f2f;
    }
`

export const WriterItemRight = styled.div`
    float: right;
    margin-top: 10px;
    font-size: 13px;
    color: #42c02e;
`

export const WriterBtn = styled.div`
    width: 280px;
    height: 30px;
    margin-top: 20px;
    line-height: 30px;
    text-align: center;
    background: #f7f7f7;
    color: #787878;
    font-size: 13px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    cursor:pointer
`