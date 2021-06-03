import React, { useState, useEffect } from 'react';
import { NotionRenderer } from "react-notion";

export default function FooterNotion() {    
    const [footerData, setFooterData] = useState()

    useEffect(()=>{
        async function fetchData() {
            const data = await fetch(`https://notion-api.splitbee.io/v1/page/5855a4c6b9494e3cbad9afd4609c7b5d`).then(res => res.json());
            console.log(data)
            setFooterData(data)
        }
        
        fetchData()
    },[])

    return (
        <div className="footer-notion-wrapper container">
            {footerData
                ? <NotionRenderer blockMap={footerData} />
                : null
            }
            <div className="footer-low pb-4">
                <p className="mb-0 small" style={{justifySelf: "start", alignSelf: "center"}}>Copyright © 2021 CabinEat. All rights reserved.</p>
                <a href="http://online.gov.vn/Home/WebDetails/79384" target="_blank">
                    <img className="img-fluid" src="/assets/img/bct-logo.png"/>
                </a>
            </div>
           
           <style jsx>{`           
                .footer-low {
                    display: grid;
                    grid-template-columns: 5fr 2fr;
                    grid-gap: 15px 15px;
                    display: relative;
                    z-index: 99999999;
                }
                @media (min-width:768px){
                    .footer-low {
                        display: grid;
                        grid-template-columns: 10fr 2fr;
                        grid-gap: 15px 15px;
                    }
                }
           `}</style>
        </div>
    )
}