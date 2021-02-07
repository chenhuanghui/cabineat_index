import Link from 'next/link';
import Head from 'next/head'
import Nav from '../components/nav-new'

import Footer from '../components/footer-new'
import Intro from '../components/cabinverse/intro'
import Subscribe from '../components/cabinverse/subscribe'
import NavCabinverse from '../components/cabinverse/nav-cabinverse'
import { useEffect, useState } from 'react';
import LastestCourse from '../components/cabinverse/lastedCourse';
import CardBlogItem from '../components/card/card-blog-item';

const NOTION_BLOG_ID = '90ad638172fd4481806c9106d9ce8287'

export const getAllPosts = async () => {
	return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
}

export default function Cabinverse() {
    const [posts, setPosts] = useState()
    useEffect(()=>{
        const ReactPixel =  require('react-facebook-pixel');
        ReactPixel.default.init('962321430930011');

        async function fectData() {
            const posts = await getAllPosts()
            setPosts(posts)
        }
        fectData()

        
    },[])

    console.log(posts)
    return(
        <>
            <Head>
                <title>Cabinverse - Học viện kinh doanh nhà hàng số</title>
            </Head>
            <Nav />
            <div className="container-cabin-fluid">
                <Intro />

                <NavCabinverse />
                
                <div className="cabinverse-body-wrapper">
                    <div className="cabinverse-body container-cabin padding-y grid grid-gap-24-16">
                        <div className="">
                            <div className="">
                                <img className="img-fluid" src="https://cdn.shopify.com/shopifycloud/brochure/assets/content-marketing/blog/blog_header/get-started-large-a46ee8d7c314de2b8faa5fdcd910ca5041420267f8efaea623e473eecd15f41c.jpg?quality=50" />
                                <p className="py-4">Có rất nhiều doanh nghiệp thành công không được sinh ra từ những ý tưởng độc đáo. Vẫn có giá trị khi tìm kiếm những ý tưởng kinh doanh đã thử và đúng vì có nhiều cách để làm cho một doanh nghiệp nổi bật ngoài các món ăn, thức uống mà bạn bán. Đó là cách bạn sử dụng mong muốn của mình để biến một ý tưởng thành hành động có thể khiến bạn trở thành chủ doanh nghiệp độc lập thành công. <span className="font-weight-bold text-primary">Hôm nay là một ngày tuyệt vời để bắt đầu kinh doanh!</span> </p>
                            </div>
                            <hr/>
                            <div className="content-wrapper grid grid-gap-24-16">
                                {posts && posts.length>0 && posts.map((post, id)=> (
                                    // <div className={`article-item grid ${!post.published ? "d-none" : ""}`} key={id}>
                                    //     <div className="article-cover cover-fit rounded" style={{backgroundImage:`url("${post.cover ? post.cover[0].url : ""}")`, backgroundColor: "#1F4DF5", height: "200px"}}></div>
                                    //     <a className="title py-2 text-primary font-weight-bold" href={`/${post.id}`}>{post.title}</a>
                                    //     <p className="small mb-2 pb-2 border-bottom">
                                    //         inspirator: <span className="text-primary mr-2">{post.author}</span>
                                    //         ngày: <span className="text-primary">{post.date}</span>
                                    //     </p>
                                    //     <p className="small text-gray">{post.preview}</p>
                                    // </div>
                                    <CardBlogItem post = {post} key={id}/>
                                ))}
                            </div>                                        
                        </div>
                        <div className="cabinverse-nav-related">
                            <Subscribe />                            
                            <LastestCourse notionPageID = "90ad638172fd4481806c9106d9ce8287" />
                            
                        </div>
                    </div>
                    
                </div>

                
            </div>
            <Footer />
            
            
            <style jsx>{`
            .article-item {
                align-items: start;
                grid-template-rows: min-content;
            }
            
            @media (min-width:768px){
                .cabinverse-body{
                    grid-template-columns: 1fr minmax(250px,300px);
                    grid-template-rows: 1fr;
                    grid-gap: 24px 16px;
                }

                .content-wrapper {
                    grid-template-columns: repeat(auto-fill, minmax(250px,1fr)) !important;
                }
            }

            .box-gallery {
                z-index: 0 !important
            }
            #hero {
                background-size: cover;
                background-position: center;
                background-image: url("https://cdn.shopify.com/shopifycloud/brochure/assets/content-marketing/blog/merchant-banner-2x-310b87bbea07ac946017cc4a6fc8bbc54dba7212d319c34bd15e5a173ac79415.jpg")
            }
            
            .related-item a:hover {
                text-decoration: underline;
            }
        
            `}</style>
        </>
    );
}