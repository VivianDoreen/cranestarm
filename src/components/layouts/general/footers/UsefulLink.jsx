import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class UsefulLink extends Component {
    render() {
        return (
            <div className="widget widget-services">
                <ul className="one-half first">
                    <li><Link to="/about-v1" onClick={() => {window.location.href="/about-v3"}} title="">About Us</Link></li>
                    <li><Link to="/about-v2" onClick={() => {window.location.href="/about-v2"}} title="">Team</Link></li>
                    <li><Link to="/services-v1" onClick={() => {window.location.href="/services-v1"}} title="">Services</Link></li>
                </ul>
                {/* <!-- /.one-half --> */}
                <ul className="one-half">
                    <li><Link to="/" onClick={() => {window.location.href="/"}} title="">Home</Link></li>
                    <li><Link to="/blog" onClick={() => {window.location.href="/blog"}} title="">Blog</Link></li>
                    <li><Link to="/contact-v1" onClick={() => {window.location.href="/contact-v1"}} title="">Contact</Link></li>
                </ul>
                {/* <!-- /.one-half --> */}
            </div>
        /* <!-- /.widget-services --> */
        );
    }
}

export default UsefulLink;