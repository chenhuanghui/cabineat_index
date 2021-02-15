import Head from 'next/head'
import FooterNew from '../components/footer-new';
import Nav from '../components/nav-new'
import React, { useState, useEffect } from 'react';
// import { NotionRenderer } from "react-notion";
import { getAllPosts } from './cabinverse'
import Subscribe from '../components/cabinverse/subscribe';
import LastestCourse from '../components/cabinverse/lastedCourse';

import { NotionRenderer } from 'react-notion-x'
import { NotionAPI } from 'notion-client'
import { getPageTitle, getAllPagesInSpace } from 'notion-utils'

export async function getServerSideProps({ params: { notionID } }) {
  
  const posts = await getAllPosts();
  const post = posts.find((t) => t.id === notionID);
  // const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then((res) => res.json());

  // return {
  //   props: {
  //     blocks,
  //     post
  //   },
  // };

  const api = new NotionAPI()
  const recordMap = await api.getPage(notionID)
  return {
    props: {
      recordMap,
      post
    }
  }

  
}
export default function NotionDetail({blocks, post, recordMap}) {

  useEffect(()=>{
    const ReactPixel =  require('react-facebook-pixel');
    ReactPixel.default.init('962321430930011');
  },[])

  console.log("blocks: ", blocks)

  return (
    <div className="app">
      <Head>
          <title>{ post && post.title} | Cabinverse Sharing</title>
          { post ? <meta property="og:title" content={post.title}></meta> : null }
          { post ? <meta property="og:type" content="article"></meta> : null }
          { post ? <meta property="og:url" content={`https://cabineat.vn/${post.id}`}></meta> : null }
          { post ? <meta property="og:image" content={`${post.cover ? post.cover[0].url : ""}`}></meta> : null }
          { post ? <meta property="og:description" content={`${post.preview ? post.preview : "Cabineat - Giải pháp chủ động kinh doanh delivery cho nhà hàng của bạn"}`}></meta> : null }
          <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <Nav />
      <div className="container-cabin">   
        <div className="content-wrapper grid">          
          <div className="article-detail-wrapper grid grid-gap-24-16">
            <div className="acticle-detail-header padding-bottom border-bottom">
              <p className="caption font-weight-bold text-primary">{getPageTitle(recordMap)}</p>              
            </div>                

            <div className="d-block">
              <NotionRenderer
                recordMap={recordMap}
                fullPage={false}
                darkMode={false}
              />
            </div>
          </div>

          <div className="nav-wrapper">
            <Subscribe />
            <LastestCourse notionPageID="90ad638172fd4481806c9106d9ce8287"/>
          </div>
          
        </div>    
        
      </div>
      
      <hr />
      <FooterNew />
      <style jsx>{`
      .content-wrapper {
        margin: 24px 0px;
        grid-gap: 24px 16px;
      }

      .article-detail-wrapper {
      }

      @media (min-width:768px){
        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr minmax(250px,300px);
          grid-template-rows: 1fr;
        } 
      }
      `}</style>
    </div>
  )
}