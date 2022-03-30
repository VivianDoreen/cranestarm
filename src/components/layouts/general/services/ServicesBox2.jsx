import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class EventBoxs2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataEvents: [
                {
                    id: 4,
                    classicon: 'icon-rounded magic',
                    title: 'Group Loans',
                    description: 'This is given to members in a group. Here, members self select themselves and form a group of 5_10 members and it is also paid in a group.',
                },
                {
                    id: 5,
                    classicon: 'icon-rounded artboard',
                    title: 'Home Improvement Loans',
                    description: 'This deals with home repairs and maintenance,i.e when one wants to construct a house or make a repair or buy house holds.',
                },
                {
                    id:6,
                    classicon:'icon-rounded artboard',
                    title:'School fees loan',
                    description:'This is basically to help your child have a bright future. It is secure sine it gives chance to every parent to achieve the best of his or her children ever'
                }
              
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
                                <div className="iconbox style1">
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

export default EventBoxs2;