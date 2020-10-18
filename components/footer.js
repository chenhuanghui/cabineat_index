import React from 'react';
import Router from 'next/router';
import Link from 'next/link'
import ReactMarkdown from "react-markdown";

const AirtablePlus = require('airtable-plus');
const airtable = new AirtablePlus({
    baseID: 'appCZGNOFg53FFSE4',
    apiKey: 'keyLNupG6zOmmokND'
});

export default class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            intro : ""
        }
    }

    async componentDidMount() { 
        let currentComponent = this
        const brandIntro = await airtable.read({
            filterByFormula: `type = "intro"`,
            maxRecords : 1
        },{tableName:"brand"});
        
        if (brandIntro.length > 0)
            currentComponent.setState({intro: brandIntro[0].fields.title})

        
    }    

    render() {
        const {intro} = this.state
        return(
            <>
                <footer className="page-footer">
                    <div className="container pad-vert-medium">
                        <nav className="primary text-align-left">
                            <div className="h6 gap-bottom-base">
                                <a className="" href="#"><span className="arrow no-wrap">Về CabinEat</span></a>
                            </div>
                            <p className="mt-0 markdown-custom" style={{color: "white"}}>
                                <ReactMarkdown source={intro} />
                            </p>
                        
                        </nav>
                        <nav className="tertiary" role="navigation">
                            <div className="grid-flex-at-extra-small grid-space-line grid-align-justify">
                                <div className="column no-shrink">
                                    <div className="grid-auto-at-extra-small grid-col-space-base grid-row-space-line align-center">
                                        <div className="column">
                                            <div className="avatar avatar-4by3 avatar-xs">
                                                <img className="" src="/assets/img/vn-flag.png" className="avatar-img rounded"/>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="popup-menu popup-menu-align-center popup-menu-align-left-at-extra-small">
                                                <a href="#" role="button">Tiếng Việt</a>                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <nav className="grid-auto grid-space-base grid-align-center" role="navigation">
                                        <div className="column">
                                            <a href="#" title="Twitter">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                                                    <path fill="#2E3B4E" d="M16.4 6.6v.5c0 4.8-3.3 10.1-9.3 10.1-1.9 0-3.6-.4-5-1.4.3 0 .5.1.8.1 1.5 0 3-.6 4.1-1.6-1.4 0-2.6-1.1-3.1-2.5.2 0 .4.1.6.1.3 0 .7 0 1-.1C3.9 11.4 3 9.9 3 8.1c0 .3.7.4 1.2.5-.9-.7-1.4-1.8-1.4-3 0-.7.1-1.3.4-1.8C4.8 6 7.1 7.4 9.8 7.6v-.9c0-2 1.5-3.9 3.3-3.9.9 0 1.8.7 2.4 1.4.7-.2 1.4-.5 2.1-.9-.2.8-.8 1.6-1.4 2 .6-.1 1.2-.3 1.8-.6-.4.8-1 1.4-1.6 1.9z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="column">
                                            <a href="#" title="Facebook">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                                                    <path fill="#2E3B4E" d="M14.2 11l.4-3H11V6.3c0-.9.9-1.3 2.1-1.3h.9V2.1S12.7 2 11.6 2C9.3 2 8 3.4 8 6v2H5v3h3v7h3v-7h3.2z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="column">
                                            <a href="#" title="Instagram">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                                                    <path fill="#2F3C4E" d="M17.8 6.7c0-.9-.2-1.4-.4-1.9-.2-.6-.5-1-1-1.4-.5-.5-.9-.7-1.4-1-.5-.2-1.1-.3-1.9-.4H10c-2.1 0-2.5 0-3.3.1-.9 0-1.4.2-1.9.4-.6.2-1 .4-1.4.9-.5.4-.7.9-1 1.4-.2.6-.3 1.1-.3 2-.1.7-.1 1-.1 3.2s0 2.5.1 3.3c0 .9.2 1.4.4 1.9.2.6.5 1 1 1.4s.9.7 1.4 1c.4.2 1.1.3 1.9.4H10c2.1 0 2.4 0 3.2-.1.9 0 1.4-.2 1.9-.4.6-.2 1-.5 1.4-1 .5-.5.7-.9 1-1.4.2-.5.3-1.1.4-1.9 0-.9.1-1 .1-3.2-.1-2.1-.1-2.5-.2-3.3zm-1.4 6.5c0 .8-.2 1.2-.2 1.5-.2.4-.3.6-.6.9-.2.2-.6.5-.9.6-.3.1-.7.2-1.5.2-.9 0-1.1.1-3.2.1s-2.4 0-3.2-.1c-.8 0-1.2-.2-1.5-.2-.5-.1-.7-.2-1-.6-.2-.2-.5-.6-.6-.9-.2-.3-.3-.7-.3-1.5 0-.9-.1-1.1-.1-3.2 0-2.2 0-2.4.1-3.2 0-.8.2-1.2.2-1.5.2-.4.3-.6.6-.9.2-.2.6-.5.9-.6.5-.1.9-.3 1.7-.3.9 0 1.2-.1 3.2-.1s2.3 0 3.1.1c.8 0 1.2.2 1.5.2.4.2.6.3.9.6.3.3.5.7.6 1 .2.3.3.7.3 1.5 0 .9.1 1.1.1 3.2 0 2.2 0 2.4-.1 3.2zM10 5.9c-2.2 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1 4-1.9 4-4.1-1.8-4.1-4-4.1m0 6.7c-1.4 0-2.6-1.2-2.6-2.6S8.5 7.4 10 7.4s2.6 1.2 2.6 2.6-1.2 2.6-2.6 2.6m5.1-6.8c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </nav>
                        <div className="grid-flex-at-medium">
                            <div className="column expand align-center align-left-at-medium">
                                <p className="copyright">© 2020 CabinEat Pte. Ltd.</p>
                            </div>
                            {/* <div className="column align-center align-right-at-medium">
                                <nav>
                                    <ul className="destination-links reset grid-space-base">
                                        <li><a href="#">Privacy Notice</a></li>
                                        <li><a href="#">Terms of Service</a></li>
                                        <li><a href="#">Government</a></li>
                                        <li><a href="#">Square Financial Services Guide</a></li>
                                    </ul>
                                </nav>
                            </div> */}
                        </div>
                    </div>
                </footer>
                <style jsx>{`
                .page-footer {
                    position: relative;
                    background-color: #030303;
                    color: #737373;
                    font-size: 14px;
                    line-height: 24px;
                }
                .pad-vert-medium {
                    padding-top: 60px !important;
                    padding-bottom: 60px !important;
                }
                @media (min-width: 1292px){
                    .content {
                        width: 1016px;
                    }
                }
                    
                `}</style>
            </>
        )
    }

}