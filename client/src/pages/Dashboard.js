import React, { Component } from "react";
import DashboardBackground from "../components/DashboardBackground";
import { Redirect } from "react-router-dom";
// import MyMapComponent from "../components/Map";
// import MyFancyMapComponent from "../components/Map";
import Map from "../components/Map";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      fireRedirect: false
    };
  }
  render() {
    return (
      <DashboardBackground>
        <div className="dashboard">
          <a id="saved-trips" href="#">
            Saved Trips
          </a>
          <Map />
        </div>
      </DashboardBackground>
    );
  }
}

export default Dashboard;
