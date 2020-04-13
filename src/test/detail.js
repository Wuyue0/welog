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
                <Link to="home">回到home</Link>
                 detail
            </div>
        )
    }
}