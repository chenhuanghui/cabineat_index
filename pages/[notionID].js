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
    <>
      <div style={{ maxWidth: 768 }}>
        <h1>{post.title}</h1>
          <NotionRenderer blockMap={blocks} />
      </div>
    </>
  )
}