import React, { Component } from 'react';
class BoxView  extends Component {
	constructor(props) {
        super(props);
        this.state = {
            imgslide: [
                {
                    id: '1',
                    srcimg: 'images/about/s01.jpg'
                },
                {
                    id: '2',
                    srcimg: 'images/about/s01.jpg'
                }
            ],
            content: [
                {
                    id: '1',
                    title: 'Want to know more about Finance Plus?',
                    description: 'In your life, you may have many times facing financial issues. It’s good if you know how to handle it by yourself and have enough time to take care of it. In other cases, it’s time you get a financial consulting service. And the article below will show you those cases.quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
                }
            ],
            blogtimeline: [
                {
                    id: '1',
                    year: 'BACKGROUND',
                    title: 'Start with a small service',
                    description: 'The idea of building the company started in March, 2019 when I was operating a mobile money business.  I sold the idea of Micro lending to a friend who bought it. On 15th April, 2019, we started the lending business which was registered in the name of MUYINDA RICHARD FINANCIAL SERVICES, though later on, we abbreviated it as “MR. FINANCIAL SERVICES”. In September 2021, the company name was changed from The MR FINANCIAL SERVICES to CRANESTARM CO LTD. Currently we have served 200+ happy customers in areas of Kampala, Wakiso and Mukono. The company’s major focus under the financial literacy is to empower the income earners through financial awareness. The company targets the young generation in schools starting from primary level to tertiary/university since we realize that in the education system, the students are not taught about financial matters and how they can save the little they have to accumulate the huge they want to have. ',
                },
                {
                    id: '2',
                    year: 'VISION STATEMENT',
                    title: 'Start with a small service',
                    description: 'To be the most trusted, competent and reliable company iin the country and the whole world',
                },
                {
                    id: '3',
                    year: 'MISSION STATEMENT',
                    title: 'Website Design, Seo Makerting Online',
                    description: 'To promote financial inclusion in the country so that even the low income earners/unbankable persons have access to financial services',
                },
                {
                    id: '4',
                    year: 'VALUES',
                    title: 'Developer WordPress Themeforest.net',
                    description: 'Honesty, Accountability, Trustworthy, Team work, Fairness, Innovation and creativity, Inclusiveness, Environment, Corporate social responsibilityProfessionalism',
                }
            ]
            
        }
    }
    render() {
        return (
            <div>
                    {
                        this.state.blogtimeline.map(data =>(
                            <div className="flat-text-block-timeline" key={data.id} >
                                <div className="year">{data.year}</div>
                                <div className="flat-timeline-content">
                                <div className="box-content">
                                    <p style={{textAlign:'justify'}}>{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
								
        )
                                
    }
}

export default BoxView;