import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class TopBar extends Component {
    render() {
        return (
            <div className="top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="flat-infomation">
                                <li className="phone">Call us: <Link to="+256 702129777 or 0774 262237" title="phone">+256 702129777 or 0774 262237</Link></li>
                                <li className="email">Email: <Link to="mailto:cranestarm.co.ug@gmail.com" title="email">cranestarm.co.ug@gmail.com</Link></li>
                            </ul>
                            <div className="flat-questions">
                                <Link to="#" title="" className="questions">Have any questions?</Link>
                                <Link to="#" title="" className="appointment">GET AN APPOINTMENT</Link>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
		    </div>
        );
    }
}

export default TopBar;