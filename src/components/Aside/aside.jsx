import React , { Component } from 'react';
import author from '@/assets/author.jpg'

console.log(111111111111111,author)


class Aside extends Component {

    constructor(props){
        super(props)
        this.state = {
            collapsed: false
        }
    }
    

    render(){
        return (
            <>
              <aside id="aside" className="app-aside hidden-xs bg-white">
                <div className="aside-wrap">
                  <div className="navi-wrap scroll-y scroll-hide">
                      {/* user */}
                    <div className="clearfix hidden-xs text-center hide  show">
                        用户图像部分
                    </div>
                    <nav className="navi clearfix">
                      <ul className="nav">
                        <div className="line dk hidden-folded"></div>
                        <li className="hidden-folded padder m-t m-b-sm text-muted text-xs" id="aside-user">
                          
                          <div className="dropdown wrapper vertical-wrapper">
                              {/* 图片部分 */}
                              <div>
                                <a href="https://www.guitu18.com/cross.html">
                                  <span className="thumb-lg w-auto-folded avatar m-t-sm  vertical-avatar">
                                    <img src={author} className="img-full img-circle normal-shadow"/>
                                  </span>
                                </a>
                              </div>

                              {/* 链接部分 */}

                              <div>

                              </div>

                                {/* 下拉菜单部分 */}
                          </div>

















                        </li>
                      </ul>
                    </nav>
                      {/* nav */}
                  </div>
                </div>
              </aside>
            </>
        )
    }
}

export default Aside;