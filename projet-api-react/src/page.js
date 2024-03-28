import React, {Component} from "react";
import HeroComponent from './hero';
import NavComponent from './nav';

class Page extends Component {
    render () {
        return (
            <div className="full_page">
                <head>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" type="text/css"/>
                </head>
                <div className="page_wrapper">
                    <NavComponent/>
                    <HeroComponent/>
                </div>
            </div>
        );
    }
}

export default Page;