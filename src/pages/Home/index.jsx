import React , { Component } from 'react';
import styles from './style.module.less'
class Home extends Component{






    render(){
        return (
            <div className={styles.test}>
                <div id="menu" class="hover_animation menu_open" data-mark="false">
                    <span></span>
                    <span></span>
                    <span></span>  
                </div>

                <div id="navgation" class="navgation navgation_close">
                    <ul class="point">
                        <li><a href="#">首页</a></li>
                        <li><a href="#">博客</a></li>
                        <li><a href="#">留言</a></li>
                    </ul>

                    <div class="logo">
                        <a href="#">Mr.Yss</a>
                    </div>
                </div>

                <div class="section" id="section1">
                    <div class="fp-tablecell">
                        <div class="page1">
                            <div class="nav">
                                <h1>燕 十 三</h1>
                                <p> 剑气纵横三万里,一剑光寒十九洲</p>
                                <a href="#" style="margin-top:20px" class="layui-btn layui-btn-normal">Enter Blog</a>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }



}


export default Home;



