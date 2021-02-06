import Head from 'next/head'
import FooterNew from '../components/footer-new';
import Nav from '../components/nav-new'
import React, { useState, useEffect } from 'react';
import { NotionRenderer } from "react-notion";
import { getAllPosts } from './blog'

export async function getServerSideProps({ params: { notionID } }) {
  // Get all posts again
  const posts = await getAllPosts();
  // Find the current blogpost by slug
  const post = posts.find((t) => t.id === notionID);
  const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then((res) => res.json());
  
  return {
    props: {
     blocks,
     post,
    },
  };
}
export default function NotionDetail({blocks, post}) {

  useEffect(()=>{
    const ReactPixel =  require('react-facebook-pixel');
    ReactPixel.default.init('962321430930011');
  },[])

  return (
    <div className="app">
      <Head>
          <title>CabinEat - Blog</title>
          <meta property="og:title" content={post.title}></meta>
          <meta property="og:type" content="article"></meta>
          <meta property="og:url" content={`https://cabineat.vn/${post.id}`}></meta>
          <meta property="og:imgage" content={`${post.cover ? post.cover[0].url : ""}`}></meta>
      </Head>
      <Nav />
      <div className="container-cabin">             
        <div className="content-wrapper">
          <div className="article-detail-wrapper">
            <div className="acticle-detail-top">
              <p className="caption font-weight-bold text-primary">{post.title}</p>
              <p className="small">inspirator: <span className="text-primary">{post.author}</span></p>
            </div>                
            <div className="article-cover cover-fit rounded" style={{backgroundImage:`url("${post.cover ? post.cover[0].url : ""}")`, backgroundColor: "#1F4DF5"}}></div>
            <div className="container-cabin padding-x-0">
              <NotionRenderer blockMap={blocks} />
            </div>                
          </div>
        </div>                
      </div>
      <hr />
      <FooterNew />
      <style jsx>{`
      .content-wrapper {
        margin: 24px 0px;
        display: grid;
        grid-template-columns: 1fr;
      }
      .article-detail-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 300px 1fr;
        grid-gap: 24px 16px;
      }
      @media (min-width:768px){
        .content-wrapper {
          margin: 24px 0px;
          display: grid;
          grid-template-columns: 1fr minmax(250px, 30%);
        } 
      }
      `}</style>
    </div>
  )
}