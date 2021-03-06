import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class BlogFeatured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datanewBox: [
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
                    description: 'Life is about living, and achieving your financial goals lets you do that on your terms. A dedicated financial partner can help bring you closer to the future',
                },
            ]
        }
    }
    
    render() {
        return (
            <div>
             {
                this.state.datanewBox.map(data => (
                    <div className="col-md-4" key={data.id} >
                        <div className="imagebox-item">
                            <div className="imagebox style2">
                                <div className="imagebox-image">
                                    <img src={data.srcimg} alt="" />
                                </div>
                                <div className="imagebox-title">
                                    <h3><Link to="/blog" onClick={() => {window.location.href="/blog"}} title="">{data.title}</Link></h3>
                                </div>
                                <div className="imagebox-content">
                                    <div className="imagebox-desc">
                                        {data.description}
                                    </div>
                                    <div className="imagebox-button">
                                        <Link to="/blog" onClick={() => {window.location.href="/blog"}} title="">read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
            
                               
        );
    }
}

export default BlogFeatured;