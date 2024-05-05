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
          <div className={cx(css.infoBox, "text-red-600")}>
            Not connected to backend service!
          </div>
        )}

        {/* Connected to backend */}
        {Object.keys(state).length !== 0 && (
          <>
            <div className="">
              {!state.leagueConnected && (
                // Client Status
                <div className={cx(css.infoBox, "text-red-600")}>
                  Not connected to client!
                </div>
              )}
            </div>

            {/* ------------------- Overlay start ------------------ */}
            <div className="flex flex-row">
              {/* Blue Team Column */}
              <div>
                {/* Bans */}
                <div className="flex flex-row-reverse px-2.5 ml-[320px] h-[150px] justify-around items-center">
                  {state.blueTeam.bans.map((ban, index) => (
                    <Ban key={`ban-${index}`} {...ban} id={1} index={index} />
                  ))}
                </div>
                {/* Picks */}
                <div className="flex flex-row">
                  {state.blueTeam.picks.map((pick, index) => (
                    <Pick key={`pick-${index}`} {...pick} index={index} />
                  ))}
                </div>
              </div>
              {/* Middle Panel */}
              <div className="w-[160px]"></div>
              {/* Red Team Column */}
              <div>
                {/* Bans */}
                <div className="flex flex-row px-2.5 mr-[320px] h-[150px] justify-around items-center">
                  {state.redTeam.bans.map((ban, index) => (
                    <Ban key={`ban-${index}`} {...ban} id={5} index={index} />
                  ))}
                </div>
                {/* Picks */}
                <div className="flex flex-row">
                  {state.redTeam.picks.map((pick, index) => (
                    <Pick key={`pick-${index}`} {...pick} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
