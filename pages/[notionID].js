import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { NotionRenderer } from 'react-notion-x'
import { NotionAPI } from 'notion-client'
import LayoutMasterVer02 from "../layouts/master_ver2"

export async function getServerSideProps({ params: { notionID } }) {
    const notion = new NotionAPI()
    const recordMap = await notion.getPage(notionID)
    const data = await fetch(`https://notion-api.splitbee.io/v1/page/ec7b2027584846b2b50ab5ebbe7ff770`).then(res => res.json());
    console.log(data)    

    return {
      props: {
        recordMap : recordMap,
        notionData : data,
      }
    }
}

export default function NotionPage({recordMap, notionData}) {    
    const [pageCover, setPageCover] = useState();
    const [pageTitle, setPageTitle] = useState("CabinEat | Utopia For FoodCommerce");
    useEffect(()=>{
        console.log("page content", recordMap)
        if (notionData) {
            let cover_url = notionData[Object.keys(notionData)[0]].value.format.page_cover
            let page_title = notionData[Object.keys(notionData)[0]].value.properties.title[0]
            if (cover_url) setPageCover(cover_url)
            if (page_title) setPageTitle(page_title)
        }
        console.log("notion data", notionData[Object.keys(notionData)[0]])
        
    },[])
    return (
        <div className="app home-page">
            <Head>
                <meta charSet="utf-8" />
                <title>{pageTitle}</title>
                <meta name="description" content="Giải pháp giúp nhà hàng kinh doanh delivery trực tiếp đến khách hàng quen, không tốn phí hoa hồng" />
                <meta name="keywords" content="cabineat,nha hang so, online restaurant, delivery" />
                <meta property="og:title" content={pageTitle}></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:locale" content="vi_VN"></meta>
                {/* <meta property="og:url" content="https://cabineat.vn"></meta> */}
                <meta property="og:image" content={notionData[Object.keys(notionData)[0]].value.format.page_cover}></meta>                
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