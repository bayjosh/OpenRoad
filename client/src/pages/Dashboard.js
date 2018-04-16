import React, { Component } from "react";
import DashboardBackground from "../components/DashboardBackground";
import { Redirect } from "react-router-dom";
// import MyMapComponent from "../components/Map";
// import MyFancyMapComponent from "../components/Map";
import Map from "../components/Map";
import NOAAWeather from "../components/NOAAWeather";
import Dockwa from "../components/Dockwa";
import AirWeather from "../components/AirWeather";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      fireRedirect: false
    };
  }

  render() {
    return (
      <div>
        <div>
          <DashboardBackground />
          <div id="header-background"> </div>
          <h1
            style={{
              margin: `0`,
              opacity: `1`,
              textAlign: `center`,
              marginBottom: `40px`,
              padding: `10px 0 10px 0`
            }}
          >
            Dashboard
          </h1>

          <div className="dashboard">
            <div
              id="weather-map"
              style={{
                display: `flex`,
                flexDirection: `row`,
                alignItems: `center`,
                justifyContent: `space-evenly`,
                marginBottom: `45px`
              }}
            >
              <div
                id="map-card"
                style={{
                  width: `45vw`,
                  alignSelf: `flex-start`,
                  height: `66vh`,
                  margin: `0`,
                  borderRadius: `25px`,
                  backgroundColor: `rgba(145, 174, 194, 0.952)`
                }}
                class="card darken-1"
              >
                <div class="card-content white-text" style={{ height: `100%` }}>
                  <span class="card-title" style={{ textAlign: `center` }}>
                    Map
                  </span>
                  <div
                    id="map-card-content"
                    style={{
                      display: `flex`,
                      justifyContent: `center`,
                      alignItems: `center`,
                      marginTop: `20px`
                    }}
                  >
                    <Map />
                  </div>
                </div>
              </div>

<<<<<<< HEAD

              <div style={{
                display: `flex`, width: `45vw`, flexWrap: `wrap`
              }}>
                <div id="weather" style={{ width: `45vw`, alignSelf: `flex-start`, margin: `0`, borderRadius: `25px`, height: `100%`, backgroundColor: `rgba(145, 174, 194, 0.952)` }} class="card darken-1" >
=======
              <div
                style={{
                  display: `flex`,
                  width: `45vw`,
                  flexWrap: `wrap`
                }}
              >
                <div
                  id="weather"
                  style={{
                    width: `45vw`,
                    alignSelf: `flex-start`,
                    margin: `0`,
                    borderRadius: `25px`,
                    height: `100%`,
                    backgroundColor: `rgba(145, 174, 194, 0.952)`
                  }}
                  class="card darken-1"
                >
>>>>>>> 2ce06f86bbd88e5b1d788fc79859be2251add79e
                  <div class="card-content white-text">
                    <span
                      class="card-title"
                      style={{ textAlign: `center`, color: `white` }}
                    >
                      Marine Forecast
                    </span>{" "}
                    <hr />
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                    <NOAAWeather />
                  </div>
                </div>

                <span>
                  <button
                    class="btn waves-effect waves-light"
                    style={{ width: `42vh`, margin: `0 10px 0 20px` }}
                  >
                    Make a Log
                  </button>
                </span>
                <span>
                  <button
                    style={{ width: `42vh` }}
                    class="btn waves-effect waves-light"
                  >
                    View Logs
                  </button>
                </span>
              </div>
            </div>

            <div
              id="air-weather"
              style={{
                width: `45vw`,
                alignSelf: `flex-start`,
                margin: `0`,
                borderRadius: `25px`,
                height: `100%`,
                backgroundColor: `rgba(145, 174, 194, 0.952)`
              }}
              class="card darken-1"
            >
              <div class="card-content white-text">
                <span
                  class="card-title"
                  style={{ textAlign: `center`, color: `white` }}
                >
                  Air Forecast
                </span>{" "}
                <hr />
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
                <AirWeather />
              </div>
            </div>

            <div id="docking-area">
              <h3 style={{ color: `white`, padding: `35px 0 20px 0` }}>
                DOCKING AREA
              </h3>
              <div
                id="Dockwa"
                style={{
                  width: `100%`,
                  alignSelf: `flex-start`,
                  margin: `0`,
                  borderRadius: `25px`,
                  justifyContent: `center`
                }}
              >
                <Dockwa />
              </div>
              <div
                className="card-action"
                style={{
                  borderRadius: `25px`,
                  textAlign: `center`
                }}
              />
            </div>
          </div>
          <footer
            id="dashboard-footer"
            style={{
              textAlign: `center`,
              color: `black`,
              height: `125px`,
              paddingTop: `55px`
            }}
          >
            Open Water
          </footer>
        </div>
      </div>
    );
  }
}

export default Dashboard;
