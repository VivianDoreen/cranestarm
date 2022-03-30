import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import menus from '../menu';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linklogo: '/'
        }
    }
    
    render() {
        const { location } = this.props;
        return (
            <div id="header" className="header bg-color">
			<div className="container">
				<div className="row">
					<div className="header-wrap">
						<div className="col-md-4">
							<div id="logo" className="logo">
                                <Link to="/" onClick={() => {window.location.href=this.state.linklogo}}><img src="images/logo@2x.png" alt="financial"
                                    data-retina="images/logo@2x.png" /></Link>
							</div>
                            {/* logo*/}
						</div>
                        {/* .col-md-2  */}
						<div className="col-md-8">	
                            <div className="flat-show-search">
    							<div className="show-search">
    		                        <Link to="#"><i className="fa fa-search"></i></Link>                                             
    		                    </div>
                                <div className="top-search">                        
                                    <form action="#" id="searchform-all" method="get">
                                        <div>
                                            <input type="text" id="s" className="sss" placeholder="Search..." />
                                            <input type="submit" value="" id="searchsubmit" />
                                        </div>
                                    </form>
                                </div> 
                                {/* <!-- /.top-search --> */}
                            </div>
                            	{/* <!-- /.flat-show-search -->*/}
							<div className="nav-wrap">
                                <div className="btn-menu">
                                    <span></span>
                                </div>
                                {/* <!-- //mobile menu button -->*/}
								<nav id="mainnav" className="mainnav">
									<ul className="menu">
										{
											menus.map(data =>(
												
												<li className={data.name === this.props.data.names ? "active" : ""} key={data.id}>
													{console.log(data.namesub.length !==0? data.namesub:'NAMESUB')}
													<Link to={data.linkmenu} onClick={() => {window.location.href=data.linkmenu}}>{data.name} {data.namesub.length !==0 ? <i className="fa fa-angle-down" aria-hidden="true"></i>:''}</Link>
													{
														data.namesub === undefined ? "" : 
														<ul className="sub-menu">
															{
																data.namesub.map(submenus =>(
																	<li className={location.pathname === submenus.links || submenus.sub === this.props.data.names02 ? "active" : ""} key={submenus.id}><Link to={submenus.links} onClick={() => {window.location.href=submenus.links}}>{submenus.sub}</Link>
																		{
																			submenus.submenu === undefined ? "" :
																			<ul className="sub-menu">
																				{
																					submenus.submenu.map(menusub => (
																						<li className={location.pathname === menusub.linksub ? "active" : ""} key={menusub.id}><Link to= {menusub.linksub} onClick={() => {window.location.href=menusub.linksub}}>{menusub.titlesub}</Link></li>
																					))
																				}
																			</ul>
																		}
																	</li>
																))
															}
														</ul>
													}
												</li>
											))
										}			
									</ul>
                                    {/* <!-- /.menu -->*/}
								</nav>
                                {/* <!-- /#mainnav -->*/}
							</div>
                            {/* <!-- /.nav-wrap --> */}
						</div>
                        {/* <!-- /.col-md-9 --> */}
					</div>
                    {/* <!-- /.header-wrap --> */}
				</div>
                {/* <!-- /.row --> */}
			</div>
            {/* <!-- /.container --> */}
		</div>
        // {/* <!-- /header --> */}
    
    

        );   
    }
}

export default withRouter(Header);