import React from "react";
import cx from "classnames";

import css from "./style/index.module.scss";

function isEven(number) {
  return number % 2 === 0;
}

const Pick = (props) => (
  <div
    className={cx("w-[160px] h-[250px] relative", {
      "bg-neutral-950": isEven(props.index),
      "bg-black": !isEven(props.index),
    })}
  >
    {props.isActive && (
      <div
        className={cx(
          { "bg-blue-700": props.id < 5 },
          { "bg-red-600": props.id >= 5 },
          " w-full h-full absolute top-0 left-0 animate-pulse-transparent"
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

export default Pick;
