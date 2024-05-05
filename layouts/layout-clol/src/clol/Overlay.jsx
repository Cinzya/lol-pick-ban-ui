import React from "react";
import cx from "classnames";
import Pick from "./Pick";

import css from "./style/index.module.scss";
import Ban from "./Ban";

import logo from "../assets/Logo_Itemania_2019.png";

export default class Overlay extends React.Component {
  render() {
    const { state, config } = this.props;

    console.log(state);

    return (
      <div
        className="w-screen h-screen flex flex-col justify-between items-center"
        style={{
          "--color-red": config.frontend.redTeam.color,
          "--color-blue": config.frontend.blueTeam.color,
        }}
      >
        {/* Connection to backend? */}
        {Object.keys(state).length === 0 && (
          <div className={cx(css.infoBox)}>
            Not connected to backend service!
          </div>
        )}

        {/* Connected to backend */}
        {Object.keys(state).length !== 0 && (
          <>
            <div className="">
              {!state.leagueConnected && (
                // Client Status
                <div className={cx(css.infoBox)}>Not connected to client!</div>
              )}
            </div>
            <div className="">Hallo!</div>
          </>
        )}
      </div>
    );
  }
}
