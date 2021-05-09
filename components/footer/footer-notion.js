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
           
        </div>
    )
}