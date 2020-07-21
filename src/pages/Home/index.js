import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import style from  './style.module.less';


const imgBacUrl = require('@/assets/home_bg.jpg');

class  Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            switchMenu: false
        }
        this.clickMenu = this.clickMenu.bind(this)
    }


    componentDidMount(){
        this.menu.addEventListener('click',this.clickMenu)
    }


    clickMenu(){
        this.setState((state)=>{
            return {
                switchMenu: !state.switchMenu
            }
        })
    }


    componentWillUnmount(){
        this.menu.removeEventListener('click',this.clickMenu)
    }

    render(){
        const { switchMenu } = this.state
        return (
            <div>
                <div id={style.menu} className={`hover_animation ${switchMenu ? style.menu_close: style.menu_open}`} data-mark={ switchMenu }  ref = { menu => this.menu = menu }>
                    <span></span>
                    <span></span>
                    <span></span>  
                </div>

                <div id="navgation" className={`${style.navgation} ${switchMenu ? style.navgation_open: style.navgation_close}`}>
                    <ul className={style.point}>
                        <li><Link to="/home">博客</Link></li>
                        <li><Link to="/leavemsg">留言</Link></li>
                        <li><Link to="/login">登录</Link></li>
                    </ul>

                    <div className={style.logo}>
                        <Link to="/home">Mr.Yss</Link>
                    </div>
                </div>

                <div className={style.section} id={style.section1} style={{backgroundImage:`url(${imgBacUrl})`}}>
                    <div className={style.tablecell}>
                        <div className={style.page1}>
                            <div className={style.nav}>
                                <h1>燕 十 三</h1>
                                <p> 剑气纵横三万里,一剑光寒十九洲</p>
                                <Link to="/home" style={{marginTop: '20px'}} className={`${style.layuiBtn} ${style.layuiBtnNormal}`}>Enter Blog</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default Home;