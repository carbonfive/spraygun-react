import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./ToggleSwitch.scss";

export default function ToggleSwitch({ onClick, isOn }) {
  const classes = cx("ToggleSwitch", {
    "ToggleSwitch--on": isOn,
    "ToggleSwitch--off": !isOn
  });

  return (
    <div className={classes} onClick={onClick}>
      <div className="ToggleSwitch__knob" />
    </div>
  );
}

ToggleSwitch.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOn: PropTypes.bool.isRequired
};
