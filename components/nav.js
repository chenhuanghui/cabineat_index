import React from 'react';
import Router from 'next/router';
import Link from 'next/link'

export default class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount() {    
    }

    render() {
        return(
            <div className="PublicWebNav svelte-1hvfxdz">                
                <header role="banner" className="Header svelte-8z8xuo">
                    <nav role="navigation" className="Nav desktop align-center svelte-i0996t navbar-light">
                        <div className="left-slot svelte-i0996t">
                            <img src={this.props.brand.logo} />
                        </div>
                        <div className="middle-slot svelte-i0996t d-none d-sm-flex">
                            <ul className="NavList align-center svelte-x5qcbk">
                                <li className="category-item svelte-x5qcbk">
                                    <div id="7K0EQKuz1yrzhXQBCtPSmw" className="Category svelte-56sb18">
                                        <button className="toggle svelte-56sb18" aria-haspopup="true" aria-expanded="false"><span className="title svelte-56sb18">Payments</span>
                                        </button>
                                    </div>
                                </li>
                                <li className="category-item svelte-x5qcbk">
                                    <div id="1lRHwraS40HnzlgoDD8XPw" className="Category svelte-56sb18">
                                        <button className="toggle svelte-56sb18" aria-haspopup="true" aria-expanded="false"><span className="title svelte-56sb18">Point of Sale</span>
                                        </button>
                                    </div>
                                </li>
                                <li className="category-item svelte-x5qcbk">
                                    <div id="73k2f6kKdYBn7GQJeBUCCU" className="Category svelte-56sb18">
                                        <button className="toggle svelte-56sb18" aria-haspopup="true" aria-expanded="false"><span className="title svelte-56sb18">eCommerce</span>
                                        </button>
                                    </div>
                                </li>
                                <li className="category-item svelte-x5qcbk">
                                    <div id="7s6oPlD9Hn7B2kUGXoTEPG" className="Category svelte-56sb18">
                                        <button className="toggle svelte-56sb18" aria-haspopup="true" aria-expanded="false"><span className="title svelte-56sb18">More Tools</span>
                                        </button>
                                    </div>
                                </li>
                                <li className="category-item svelte-x5qcbk">
                                    <div id="dFmVXRaTcdh69deoJmUo3" className="Category svelte-56sb18">
                                        <button className="toggle svelte-56sb18" aria-haspopup="true" aria-expanded="false"><span className="title svelte-56sb18">Resources</span>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <button className="ml-auto navbar-toggler d-flex d-sm-none" style={{paddingTop: "0.6rem"}}>
                            <span className="navbar-toggler-icon"></span>
                        </button>                
                    </nav>                
                </header>
            </div>
        )
    }

}