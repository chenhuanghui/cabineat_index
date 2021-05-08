import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { NotionRenderer } from 'react-notion-x'
import { NotionAPI } from 'notion-client'
import LayoutMasterVer02 from "../layouts/master_ver2"

export async function getServerSideProps() {
    const notion = new NotionAPI()
    const recordMap = await notion.getPage('c49324e163f94b62a79d2836dfb055fa')
    
    return {
      props: {
        recordMap,
      }
    }
}

export default function Index({recordMap}) {    

    useEffect(()=>{
        
    },[])

    return (
        <div className="app home-page">
            <Head>
                <meta charSet="utf-8" />
                <title>CabinEat - Trang chủ</title>
                <meta name="description" content="Giải pháp giúp nhà hàng kinh doanh delivery trực tiếp đến khách hàng quen, không tốn phí hoa hồng" />
                <meta name="keywords" content="cabineat,nha hang so, online restaurant, delivery" />
                <meta property="og:title" content="CabinEat"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:locale" content="vi_VN"></meta>
                <meta property="og:url" content="https://cabineat.vn"></meta>
                <meta property="og:description" content="Giải pháp giúp nhà hàng kinh doanh delivery trực tiếp đến khách hàng quen, không tốn phí hoa hồng"></meta>
            </Head>
                        
            <LayoutMasterVer02>
                <div className="main-container">
                    {recordMap 
                    ? <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
                    : null
                    }
                </div>
            </LayoutMasterVer02>

            <style jsx>{`
            
            `}</style>
        </div>
    )
}