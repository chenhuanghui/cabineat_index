import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Hero(props) {
    const [windowHeight, setWindowHeight] = useState()

    useEffect(() => {
        setWindowHeight(window.innerHeight)
    },[]);

    return (
        <div className="pt-md-8 pt-8 hero" style={{minHeight: windowHeight}}>
            <div className="row align-items-center justify-content-center no-gutters">
                <div className="col-10 col-md-8 text-center">
                    <h1 className="text-white">{props.hero_message}</h1>
                    <h3 className="text-white font-weight-normal">{props.sub_message}</h3>
                    
                    <div className="justify-content-center row mb-4">
                        <span className="btn btn-success py-3 px-4">{props.btn_title}</span>
                    </div>
                    <Link href={props.btn_href}>
                        <a className="text-white small">
                            <div className="row justify-content-center">
                            {props.hint} <i className="fe fe-chevron-right pt-1 ml-0"></i>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
            
            <style jsx> {`
                .hero {
                    background-image: url("https://images.ctfassets.net/2d5q1td6cyxq/7f6XqhsyczPk0I9GWXXCVK/577a9b8f3c8474f002de9eaaa38028ee/Square_15s_Online_3200x1800_NoTitles.00_00_03_10.Still005_VR_01.jpg?w=3200&h=1800&fm=webp&q=85&fit=scale");
                    background-size: cover;
                    background-position: center;
                }
                .hero a:hover {
                    cursor: pointer;
                    color: #fff !important;
                    text-decoration: underline;
                }                
            `}
            </style>
        </div>
    )
}
