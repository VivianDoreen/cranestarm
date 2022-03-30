import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class EventBoxs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataEvents: [
                {
                    id: 1,
                    srcimg: 'images/imagebox/loan02.jpeg',
                    title: 'LOANS',
                    description: "100% Trusted Solution. Safe, Secure, Reliable. No Hidden Fees. Don't Wait Get Started Now!  Free service that will never affect your credit.", 
                },
                {
                    id: 2,
                    srcimg: 'images/imagebox/loan03.jpg',
                    title: 'SAVINGS',
                    description: 'Do Your Investments Align with Your Goals? Find a Dedicated Financial Advisor Now. New Goals. New Look At Your Financial Strategy.',
                },
                {
                    id: 3,
                    srcimg: 'images/imagebox/loan09.png',
                    title: 'FINANCIAL LITERANCY',
                    description: 'Life is about living, and achieving your financial goals lets you do that on your terms. A dedicated financial partner can help bring you closer to the future.',
                },
            ]
        }
    }
    
    render() {
        return (
            <div className="row">
                {
                    this.state.dataEvents.map(data => (
                        <div className="col-md-4" key={data.id}>
                            <div className="imagebox-item">
                                <div className="imagebox style1">
                                    <div className="imagebox-image">
                                        <img src={data.srcimg} alt="financial" />
                                    </div>
                                    {/* <!-- /.imagebox-image --> */}
                                    
                                    <div className="imagebox-title">
                                        <h3><Link to="/blog" onClick={() => {window.location.href="/blog"}} title="">{data.title}</Link></h3>
                                    </div>
                                    {/* <!-- /.iamgebox-title --> */}
                                    <div className="imagebox-content">
                                        <div className="imagebox-desc">{data.description}</div>
                                        <div className="imagebox-button">
                                            <Link to="/blog" onClick={() => {window.location.href="/blog"}} title="">read more</Link>
                                        </div>
                                    </div>
                                    {/* <!-- /.imagebox-content --> */}
                                </div>
                                {/* <!-- /.imagebox --> */}
                            </div>
                            {/* <!-- /.imagebox-item --> */}
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default EventBoxs;