import React, { Component } from 'react';

import {TopBar,Slider,  Footer,  Loader, HeaderTransparent} from '../layouts/general';
import { Featured } from '../layouts/general/featured';
import { Services } from '../layouts/general/services';
import { Project } from '../layouts/general/projects';
import { Callback } from '../layouts/general/callback';
import { Blog } from '../layouts/general/blog';

class Home04 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    names: 'Home'
                }
            ],
        }
    }
    
    render() {
        return (
            <div className="bg-body2">
                <div className="boxed">
                    <Loader />
                    <TopBar />
                    {
                        this.state.headers.map(data => (
                            <HeaderTransparent data={data} key={data.id}/>
                        ))
                    }
                    <Slider />
                    <Featured />
                    <Services />
                    <Project />
                    <Callback />

                    <Blog />

                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home04;