import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Home extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                {/* <a href='#/detail'>去detail</a> */}
                <Link to="detail">去detail</Link>
                {/* <button onClick={() => this.props.history.push({
                        pathname: '/detail',
                        state: {
                            id: 3
                        }
                })}>通过函数跳转</button> */}
                home
            </div>
        )
    }
}