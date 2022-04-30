import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ListBlogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datablog: [
                {
                    id: 1,
                    srcimg: 'images/blog/blog-post-01.jpeg',
                    title: 'WHY SHOULD YOU SAVE MONEY?',
                    time: '',
                    author: 'admin',
                    category: 'Business',
                    comments: 'No comment',
                    description: 'The importance of saving money is simple: It allows you to enjoy greater security in your life. If you have cash set aside for emergencies, you have a fallback should something unexpected happen. And, if you have savings set aside for discretionary expenses, you may be able to take risks or try new things. Pretty good reasons to save money, right?'
                }
            ],
               list: [
                {
                    id: 1,
                    text: 'Customer experience, which includes the impression the homepage and overall design style give the customers their satisfaction when they interact with the site and perform tasks.'

                },
                {
                    id: 2,
                    text: 'Service-level, which looks at responsiveness and reliability of websites – scores them on how quickly they respond to user commands and such factors as average downtime.'
                },
                {
                    id: 3,
                    text: 'Best practices, such as ease of use, quality, availability and security – site managers must be compliant with data laws requiring them to protect customer information and the integrity of customer accounts.'
                }
            ]
            
        }
    }
    render() {
        return (
            <div className="col-md-8">
						<div className="post-wrap">
                            {
                                this.state.datablog.map(data =>(
                                    <article className="main-post" key={data.id} >
                                        <div className="entry-post-title">
                                            <h2 style={{color:'#000000'}} className="post-title">{data.title}</h2>
                                            <ul className="entry-meta">
                                                <li className="author"><Link to="#" title="">{data.author}</Link></li>
                                                <li className="categories"><Link to="#" title="">{data.category}</Link></li>
                                                <li className="comment"><Link to="#" title="">{data.comments}</Link></li>
                                            </ul>
                                        </div>
                                        <div className="featured-post">
                                            <Link to="#"  title="">
                                                <img src={data.srcimg} alt="financial" />
                                            </Link>
                                        </div>
                                        <div className="entry-content">
                                            <p style={{textAlign:'justify'}}> {data.description}
                                            </p>
                                        </div>
							        </article>
                                ))
                            }
						</div>
						
					</div>        
        );
    }
}

export default ListBlogComponent;