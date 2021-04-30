import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { NotionRenderer } from 'react-notion-x'
import { NotionAPI } from 'notion-client'

export async function getServerSideProps({ params: { notionID } }) {
    const notion = new NotionAPI()
    const recordMap = await notion.getPage(notionID)
    
    return {
      props: {
        recordMap,
      }
    }
}

export default function NotionPage({recordMap}) {    
    useEffect(()=>{
        
    },[])
    return (
        <div className="app home-page">
            <Head>
                <meta charSet="utf-8" />
                <title>CabinEat</title>
                <meta name="description" content="Giải pháp giúp nhà hàng kinh doanh delivery trực tiếp đến khách hàng quen, không tốn phí hoa hồng" />
                <meta name="keywords" content="cabineat,nha hang so, online restaurant, delivery" />
                <meta property="og:title" content="CabinEat"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:locale" content="vi_VN"></meta>
                <meta property="og:url" content="https://cabineat.vn"></meta>
                <meta property="og:description" content="Giải pháp giúp nhà hàng kinh doanh delivery trực tiếp đến khách hàng quen, không tốn phí hoa hồng"></meta>
            </Head>
                        
            <div className="main-container">
                {recordMap 
                ? <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
                : null
                }
            </div>
            

            <style jsx>{`
            
            `}</style>
        </div>
    )
}