import React from 'react';
import { Link } from 'react-router-dom';
function SideBar() {
  return <>
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0"/>

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
        <Link to="/">
            <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider"/>

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">
            Student Details
        </div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
<Link to="/allstudents">
    <span className="nav-link collapsed">
        <i className="fas fa-fw fa-cog"></i>
        <span>All Student</span>
    </span>
    </Link>
</li>
        <li className="nav-item">
        <Link to="/addstudent">
            <span className="nav-link collapsed">
                <i className="fas fa-fw fa-cog"></i>
                <span>Add Student</span>
            </span>
            </Link>
        </li>
        <li className="nav-item">
<Link to="/editstudents">
    <span className="nav-link collapsed">
        <i className="fas fa-fw fa-cog"></i>
        <span>Edit Student</span>
    </span>
    </Link>
</li>
        </ul>
  </>
}

export default SideBar