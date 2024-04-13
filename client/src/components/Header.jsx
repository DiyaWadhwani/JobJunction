import React from "react";
import jobJunctionLogo from "../assets/jjs-logo-black.png";
import { IoBriefcase } from "react-icons/io5";
import { IoBookmarks } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import "../styling/styles.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="header container-fluid d-flex justify-content-between align-items-center">
          <div className="logo-and-text">
            <a className="navbar-brand" href="/">
              <img src={jobJunctionLogo} alt="Logo" width="70" height="70" />
            </a>
            <h1 className="app-name">JobJunction</h1>
          </div>
          <div className="nav-icons">
            <a href="/jobList" className="nav-link">
              <IoBriefcase className="icon" />
            </a>
            <a href="/savedJobs" className="nav-link">
              <IoBookmarks className="icon" />
            </a>
            <a href="/profile" className="nav-link">
              <FaUserAlt className="icon" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
