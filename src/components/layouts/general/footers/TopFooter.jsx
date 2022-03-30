import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class TopFooter extends Component {
    render() {
        return (
            <div className="widget-infomation">
                <ul className="infomation-footer">
                    <li><i className="fa fa-envelope" aria-hidden="true"></i><Link to="#" title="">cranestarm.co.ug@gmail.com</Link></li>
                    <li><i className="fa fa-phone" aria-hidden="true"></i><Link to="#" title="">+256 39 3224668</Link></li>
                    <li><i className="fa fa-map-marker" aria-hidden="true"></i><Link to="#" title="">P.O Box 84, Kampala. Banda along wakalimira Lane, zig zag club</Link></li>
                </ul>
                {/* <!-- /.infomation-footer --> */}
            </div>
        /* <!-- /.widget-infomation --> */
        );
    }
}

export default TopFooter;