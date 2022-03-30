import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class OfferBox1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataEvents: [
                {
                    id: 1,
                    classicon: 'icon-rounded clipboard',
                    title: 'SME Loans',
                    description: 'SME Loans is for business people. It deals with mainly small and medium enterprise economy,is both retail and wholesale shops,bars, restaurants,market vendors etc. ', 
                },
                {
                    id: 2,
                    classicon: 'icon-rounded line-chart',
                    title: 'Salary Loans',
                    description: 'This form of loan products is specifically for those clients who expect to receive money at the end of the month( salary earners).There4 their repayment is expected at the end of the month.',
                },
                {
                    id: 3,
                    classicon: 'icon-rounded clock',
                    title: 'Emergency Loans',
                    description: 'This kind of loans products is quick ,secure and instant. IT is disbursed depending on the nature of emergency one has experienced.  It is the quickest form.',
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
                            <div className="iconbox-item">
                                <div className="iconbox style2">
                                    <div className="box-header">
                                        <div className={data.classicon}>
                                            
                                        </div>
                                        {/* <!-- /.icon-rounded --> */}
                                        <div className="box-title">
                                            <Link to="#" title="">{data.title}</Link>
                                        </div>
                                        {/* <!-- /.box-title --> */}
                                        </div>
                                        {/* <!-- /.box-header --> */}
                                    <div className="box-content">{data.description}</div>
                                    {/* <!-- /.box-content --> */}
                                </div>
                                 {/* <!-- /.iconbox --> */}
						    </div>
                            {/* <!-- /.iconbox-item --> */}
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default OfferBox1;