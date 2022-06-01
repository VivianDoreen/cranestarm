import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MainGrid extends Component {
	constructor(props) {
        super(props);
        this.state = {
            titlegird: [
                {
                    id: 1,
					title: 'Company profile - Our team',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />incididunt ut labore et dolore magna aliqua.',
				},
			],
			boxgrid: [
				{
					id: '1',
					srcimg: 'images/about/team01.jpeg',
					subtitle: 'CEO',
					title: 'RICHARD',
					listsocial: [
						{
							id: '1',
							datatitle:'Facebook',
							classtitle: 'facebook',
							classicon: 'fa fa-facebook'
						},
						{
							id: '2',
							datatitle:'LinkedIn',
							classtitle: 'linkedin',
							classicon: 'fa fa-linkedin'
						},{
							id: '3',
							datatitle:'Google Plus',
							classtitle: 'google-plus',
							classicon: 'fa fa-google-plus'
						}
					]
				},
				{
					id: '2',
					srcimg: 'images/about/team02.jpg',
					subtitle: 'Cashier',
					title: 'nansubuga Rebecca'
				},
				{
					id: '3',
					srcimg: 'images/about/team03.jpg',
					subtitle: 'Loans officer',
					title: 'Derick'
				},
				
			],
			
        }
    }
    render() {
        return (
			<section className="flat-row pd-about-team">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
								{
									this.state.titlegird.map(data =>(
										<div className="title-section center s1" key={data.id} >
											<p className="sub-title-section">Meet the team that are here to help you get a loan and maximize your savings</p>
										</div>		
									))
								}
							<div className="dividers dividers-about-team"></div>
						</div>
					</div>

					<div className="row">
						{
							this.state.boxgrid.map(data =>(
								<div className="col-md-3" key={data.id} >
									<div className="flat-team team-grid has-image">			
										<div className="team-image">
											<img src={data.srcimg} alt="img" />
										</div>										
										<div className="team-info">	
											<div className="team-subtitle">{data.subtitle}</div>
											<div className="team-name">{data.title}</div>			
											<div className="team-desc"></div>
										</div>
									</div> 
								</div> 
							))
						}
					</div>				
				</div>
			</section>
            //   flat-row-iconbox
        );
    }
}

export default MainGrid;