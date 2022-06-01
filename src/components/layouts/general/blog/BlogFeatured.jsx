import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class BlogFeatured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datanewBox: [
                {
                    id: 1,
                    srcimg: 'images/news/image-large-04.jpeg',
                    classname:'post style2',
                    title: 'Why Do I Need To Use Financial ?',
                    description: 'The primary purpose of financial information is to allow managers to make informed financial decisions regarding the allocation of resources.',
                    day: '11',
                    month: 'APRIL'
                },
                {
                    id: 3,
                    srcimg: 'images/news/image-large-08.jpeg',
                    classname:'post style2',
                    title: 'Tip to retain your top sales talent',
                    description:"Re-examine your compensation package on an annual basis, taking into account what's being offered at competing organizations.",
                    day: '11',
                    month: 'APRIL'
                },
                {
                    id: 2,
                    srcimg: 'images/news/image-large-01.jpeg',
                    classname:'post style2',
                    title: 'Why your sales forecast is off',
                    description:"Your CRM is more riddled with holes than a wool sweater in a moth infestation. Some of your data is missing, or it’s outdated, or it’s simply inaccurate.",
                    day: '11',
                    month: 'APRIL'
                },
            ]
        }
    }
    
    render() {
        return (
            <div>
             {
                this.state.datanewBox.map(data => (
                    <div className="col-md-4" key={data.id}>
                        <article className="post style2" >
                            <div className="featured-post">
                                <Link to="blog-single" onClick={() => {window.location.href="/blog-single"}} title="" className="post-image">
                                    <img src={data.srcimg} alt="financial" />
                                </Link>
                            </div>
                            {/* <!-- /.featured-post --> */}
                            <div className="content-post">
                                <h4 className="title-post">
                                    <Link to="blog-single" onClick={() => {window.location.href="/blog-single"}} title="">{data.title}</Link>
                                </h4>
                                <div className="entry-post">
                                    <p>{data.description}</p>
                                </div>      
                            </div>
                            {/* <!-- /.content-post --> */}
                        </article>
                {/* <!-- /.post --> */}
            </div>
                ))
                }
            </div>
            
                               
        );
    }
}

export default BlogFeatured;