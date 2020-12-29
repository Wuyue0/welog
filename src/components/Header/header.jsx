import React, { Component } from 'react'
import { HomeFilled } from '@ant-design/icons';
import { NavLink, Link } from "react-router-dom";
import './header.less';
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPlayerList: false
    }
  }

  showApplyList(e) {
    e.preventDefault();
    this.setState((state) => ({
      showPlayerList: !state.showPlayerList
    }));
  }

  cacelDefaultEvent(e) {
    e.preventDefault();
  }

  render() {
    const { showPlayerList } = this.state
    return (
      <>
        {/* 头部导航栏 */}
        <header id="header" className="nav-bar box-shadow-bottom-lg">
          {/* logo */}
          <div className="nav-bar-left text-ellipsis bg-white">
            <NavLink to="/home" className="nav-bar-title navbar-brand text-lt">
              <HomeFilled />
              <span className="hidden-folded m-l-xs">guitu18.com</span>
            </NavLink>
          </div>
          {/* nav部分 */}
          <div className="nav-bar-right bg-white">
            {/* 搜索 */}
            <div className="nav-bar-search">
              <div className="input-group rounded bg-white-pure box-shadow-wrap-normal">
                <input
                  autoComplete="off"
                  type="text"
                  id="search_input"
                  className="transparent rounded form-control input-sm no-borders padder"
                  placeholder="输入关键词搜索…"
                />
                <span id="search_submit" className="transparent input-group-btn">
                  <button type="button" className="transparent btn btn-sm" >
                    <span className="feathericons" >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-search"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </span>
                  </button>
                </span>
              </div>
            </div>
            {/* 链接部分 */}
            <ul className="nav navbar-nav navbar-right">
              {/* 播放器 */}
              <li className="music-box hidden-xs hidden-sm">
                <div id="skPlayer" className={showPlayerList ? 'skPlayer-list-on' : null}>
                  <audio
                    className="skPlayer-source"
                    src="https://m7.music.126.net/20201228161404/ba92d3d6a624f2f0756c659f537fca51/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3058353562/b3f5/c60c/2c1e/5af571f454b5e60a050725ffb8c7edf0.mp3"
                    preload="preload"
                  ></audio>
                  {/* 歌曲图片 */}
                  <div className="skPlayer-picture">
                    <img
                      className="skPlayer-cover"
                      src="https://p3.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg?param=300y300" alt=""
                    />
                  </div>
                  {/* 歌曲内容区域 */}
                  <div className="skPlayer-control">
                    {/* 歌曲名字 */}
                    <p className="skPlayer-name">成都</p>
                    {/* 歌曲控制按钮 */}
                    <div className="playController bg-white">
                      {/* 后退按钮 */}
                      <div className="lastMusic  music-off ">
                        <span className="feathericons">
                          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                            <polygon points="11 19 2 12 11 5 11 19"></polygon>
                            <polygon points="22 19 13 12 22 5 22 19"></polygon>
                          </svg>
                        </span>
                      </div>
                        &nbsp;&nbsp;
                        {/* 播放按钮 */}
                      <div className="runMusic music-off skPlayer-play-btn">
                        <span className="runMusicIcon feathericons">
                          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </span>
                      </div>
                        &nbsp;&nbsp;
                        {/* 前进按钮 */}
                      <div className="nextMusic  music-off ">
                        <span className="feathericons">
                          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                            <polygon points="13 19 22 12 13 5 13 19"></polygon>
                            <polygon points="2 19 11 12 2 5 2 19"></polygon>
                          </svg>
                        </span>
                      </div>
                    </div>
                    {/* 作者 */}
                    <p className="skPlayer-author">赵雷</p>
                    {/* 进度条 */}
                    <div className="skPlayer-percent">
                      <div className="skPlayer-line-loading"></div>
                      <div className="skPlayer-line lter"></div>
                    </div>
                    {/* 时间进度 */}
                    <p className="skPlayer-time">
                      <span className="skPlayer-cur">00:49</span>/
                        <span className="skPlayer-total">05:28</span>
                    </p>

                    <div className="skPlayer-volume">
                      <span className="feathericons skPlayer-volume-icon">
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  {/* 控制列表 */}
                  <ul id="skplayer-list" className="skPlayer-list animated flipInX">
                    <li className="skPlayer-curMusic">
                      <i className="skPlayer-list-sign"></i>
                      <span className="skPlayer-list-index">1</span>
                      <span className="skPlayer-list-name" title="成都">成都</span>
                      <span className="skPlayer-list-author" title="赵雷">赵雷</span>
                    </li>
                    <li>
                      <i className="skPlayer-list-sign"></i>
                      <span className="skPlayer-list-index">2</span>
                      <span className="skPlayer-list-name" title="一直很安静">一直很安静</span>
                      <span className="skPlayer-list-author" title="阿桑">阿桑</span>
                    </li>
                    <li>
                      <i className="skPlayer-list-sign"></i>
                      <span className="skPlayer-list-index">3</span>
                      <span className="skPlayer-list-name" title="最美的期待">最美的期待</span>
                      <span className="skPlayer-list-author" title="周笔畅">周笔畅</span>
                    </li>
                  </ul>
                </div>
              </li>
              {/* 播放列表 */}
              <li className="dropdown">
                <NavLink to="" className="bg-white feathericons" onClick={(e) => this.showApplyList(e)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-disc">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </NavLink>
              </li>
              {/* 闲言碎语 */}
              <li className="dropdown">
                <NavLink to="" onClick={(e) => this.cacelDefaultEvent(e)} className="bg-white feathericons dropdown-toggle" data-toggle="dropdown">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitch"
                  >
                    <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
                  </svg>
                </NavLink>
                <div className="dropdown-menu  w-xl animated fadeInUp">
                  <div className="panel bg-white">
                    <div className="panel-heading b-light bg-light">
                      <strong>闲言碎语</strong>
                    </div>
                    <div className="list-group" id="smallRecording">
                      <NavLink to="/home" className="list-group-item" activeClassName="wuyue">
                        <span className="clear block m-b-none words_contents">
                          最近这雨是包月了啊，还是连续包月那种 <br />
                          <small className="text-muted">2020-7-5 20:06:35</small>
                        </span>
                      </NavLink>
                      <NavLink to="/home" className="list-group-item" activeClassName="wuyue">
                        <span className="clear block m-b-none words_contents">
                          端午节后的第一周比平常多了一天，不巧的是这一周的我还特别的闲，更加让我感觉这一周特别长。
                          上班又不能老划水以浪费时间，所以利用这段时间进行自我提升。
                          只是最近发生的事情比较多，又是刚收假，所以进入深度学习状态的速度比较慢，效率不高。
                              学习还是一件比较吃自制力的事情，加油吧。 <br />
                          <small className="text-muted">2020-7-2 09:56:01</small>
                        </span>
                      </NavLink>
                      <NavLink to="/home" className="list-group-item" activeClassName="wuyue">
                        <span className="clear block m-b-none words_contents">
                          最近这雨是包月了啊，还是连续包月那种 <br />
                          <small className="text-muted">2020-7-5 20:06:35</small>
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </li>
              {/* 登录部分 */}
              <li className="dropdown" id="easyLogin">
                <Link to="" onClick={(e) => this.cacelDefaultEvent(e)} className="bg-white feathericons dropdown-toggle clear" data-toggle="dropdown">
                  <span className="feathericons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-key"
                    >
                      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                    </svg>
                  </span>
                  <b className="caret"></b>
                </Link>
                {/* 登录部分界面 */}
                <div className="dropdown-menu w-lg wrapper bg-white animated fadeIn">
                  <form id="Login_form">
                    {/* 用户名 */}
                    <div className="form-group">
                      <label htmlFor="navbar-login-user">用户名</label>
                      <input type="text" name="name" id="navbar-login-user" className="form-control" placeholder="用户名或电子邮箱" />
                    </div>
                    {/* 密码 */}
                    <div className="form-group">
                      <label htmlFor="navbar-login-password">密码</label>
                      <input type="password" name="password" id="navbar-login-password" className="form-control" placeholder="密码" />
                    </div>

                    <button type="submit" style={{ width: '100%' }} id="login-submit" name="submitLogin" className="btn-rounded box-shadow-wrap-lg btn-gd-primary padder-lg">
                      <span>登录</span>
                      {/* <span className="text-active">登录中...</span>
                          <span className="banLogin_text">刷新页面后登录</span>
                          <i className="animate-spin  fontello fontello-spinner hide" id="spin-login"></i>
                          <i className="animate-spin fontello fontello-refresh hide" id="ban-login"></i> */}
                    </button>
                    {/* <input type="hidden" name="referer" value="https://www.guitu18.com" data-current-url="value"/> */}
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </header>
      </>
    )
  }
}

export default Header
