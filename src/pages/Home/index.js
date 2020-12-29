import React, { Component } from 'react';
import Header from '@/components/Header/header.jsx';
import Aside from '@/components/Aside/aside'
import './layout.less';
class Home extends Component {
  render() {
    return (
      <div className="app-container app-header-fixed app-aside-fix">
        <Header></Header>
        <Aside></Aside>
      </div>
    )
  }
}

export default Home
