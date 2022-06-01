import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class UsefulLink extends Component {
    render() {
        return (
            <div className="widget widget-services">
                <ul className="one-half first">
                    <li><Link to="/company" onClick={() => {window.location.href="/company"}} title="">About Us</Link></li>
                    <li><Link to="/team" onClick={() => {window.location.href="/team"}} title="">Team</Link></li>
                    <li><Link to="/services-loans" onClick={() => {window.location.href="/services-loans"}} title="">Services</Link></li>
                </ul>
                {/* <!-- /.one-half --> */}
                <ul className="one-half">
                    <li><Link to="/" onClick={() => {window.location.href="/"}} title="">Home</Link></li>
                    <li><Link to="/contact-v1" onClick={() => {window.location.href="/contact-v1"}} title="">Contact</Link></li>
                </ul>
                {/* <!-- /.one-half --> */}
            </div>
        /* <!-- /.widget-services --> */
        );
    }
}

export default UsefulLink;