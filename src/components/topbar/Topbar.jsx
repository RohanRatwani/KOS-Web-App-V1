import React from "react";
import "./topbar.css";
import Logo from '../../images/logo.png'
import { NotificationsNone, Settings  } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img src={Logo} alt="logo" className="logo1"></img>
          <span className="logo1">KOS Technologies</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          {/* <img src="https://www.freepnglogos.com/uploads/doctor-png/doctor-bulk-billing-doctors-chapel-hill-health-care-medical-3.png" alt="" className="topAvatar" /> */}
        </div>
      </div>
    </div>
  );
}
