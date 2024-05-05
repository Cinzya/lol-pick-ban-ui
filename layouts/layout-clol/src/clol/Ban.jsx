import React from "react";
import cx from "classnames";

import css from "./style/index.module.scss";

const Bans = (props) => (
  <div
    className={cx("h-[120px] w-[70px] bg-necc border-2 border-piss relative", {
      "mr-6": props.index === 1 && props.id === 5,
      "ml-6": props.index === 1 && props.id === 1,
    })}
  >
    {props.isActive && (
      <div
        className={cx(
          { "bg-blue-700": props.id < 5 },
          { "bg-red-600": props.id >= 5 },
          "  w-full h-full absolute top-0 left-0 animate-pulse"
        )}
      ></div>
    )}
    {props.champion.id && (
      <img
        src={props.champion.splashCenteredImg}
        className="h-full object-cover"
        alt=""
      />
    )}
  </div>
);

export default Bans;
