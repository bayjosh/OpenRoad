import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav"

class TrackVoyage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        //Allow page to scroll
        document.querySelector('body').style.overflow = "scroll"
    }

    render() {
        return (
            <div>
                <Nav loggedIn={this.props.loggedIn} handleLogOut={this.props.handleLogOut} userId={this.props.userId} />
                <div className="container">

                </div>
            </div>
        )
    }
}
export default TrackVoyage;