import Head from 'next/head'
import FooterNew from '../components/footer-new';
import Nav from '../components/nav-new'
import React, { useState, useEffect } from 'react';
import { NotionRenderer } from "react-notion";
import { getAllPosts } from './blog'
import Subscribe from '../components/cabinverse/subscribe';
import LastestCourse from '../components/cabinverse/lastedCourse';

export async function getServerSideProps({ params: { notionID } }) {
  // term and condition
  if (notionID === "d67234052f56404b8d71166a143c51ab") {
    const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/d67234052f56404b8d71166a143c51ab`).then((res) => res.json());
    return {
      props: {
        blocks
      },
    }
  } else {
    // Get all posts again
    const posts = await getAllPosts();
    // Find the current blogpost by slug
    const post = posts.find((t) => t.id === notionID);
    const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then((res) => res.json());

    return {
      props: {
        blocks,
        post,
        posts
      },
    };
  }
}
export default function NotionDetail({blocks, post, posts}) {

  useEffect(()=>{
    const ReactPixel =  require('react-facebook-pixel');
    ReactPixel.default.init('962321430930011');
  },[])

  return (
    <div className="app">
      <Head>
          <title>CabinEat - Blog</title>
          { blocks && posts && post ? <meta property="og:title" content={post.title}></meta> : null }
          { blocks && posts && post ? <meta property="og:type" content="article"></meta> : null }
          { blocks && posts && post ? <meta property="og:url" content={`https://cabineat.vn/${post.id}`}></meta> : null }
          { blocks && posts && post ? <meta property="og:imgage" content={`${post.cover ? post.cover[0].url : ""}`}></meta> : null }
      </Head>
      <Nav />
      <div className="container-cabin">       
        { blocks && posts && post
          ?
          <div className="content-wrapper grid">          
            <div className="article-detail-wrapper grid grid-gap-24-16">
              <div className="acticle-detail-header padding-bottom">
                <p className="caption font-weight-bold text-primary">{post.title}</p>
                <p className="small">
                  inspirator: <span className="text-primary mr-2">{post.author}</span>
                  ngày: <span className="text-primary">{post.date}</span>
                </p>
              </div>                
              <div className="article-cover cover-fit rounded" style={{backgroundImage:`url("${post.cover ? post.cover[0].url : ""}")`, backgroundColor: "#1F4DF5", height: "250px"}}></div>
              <div className="d-block">
                <NotionRenderer blockMap={blocks} />
              </div>
            </div>

            <div className="nav-wrapper">
              <Subscribe />          
              {/* <div className="grid grid-gap-12-12">
                <p className="title font-weight-bold margin-top border-bottom padding-y grid-template-rows-auto">Các bài viết khác</p>
                <div className="article-listing">
                  {posts && posts.map((item, index)=>(
                    <a key={index} className="d-block py-1 font-weight-light" href={`/${item.id}`}>{item.title}</a>
                  ))}
                </div>
              </div> */}
              <LastestCourse notionPageID="90ad638172fd4481806c9106d9ce8287"/>
            </div>
            
          </div>
          :
          <div className="container-cabin">
            <NotionRenderer blockMap={blocks} />
          </div>

        }              
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