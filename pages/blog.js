import Head from 'next/head'
import FooterNew from '../components/footer-new';
import Nav from '../components/nav-new'
const NOTION_BLOG_ID = '90ad638172fd4481806c9106d9ce8287'

export const getAllPosts = async () => {
	return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts
    },
  };
}

export default function BlogPage({ posts }) {
    console.log("blog list: ", posts)
    return (
        <div className="app">
            <Head>
                <title>CabinEat - Blog</title>
            </Head>
            <Nav />
            <div className="container-cabin">             
                <div className="content-wrapper grid">
                    {posts && posts.length>0 && posts.map((post, id)=> (
                            <div className={`article-item grid ${!post.published ? "d-none" : ""}`} key={id}>
                                <div className="article-cover cover-fit rounded" style={{backgroundImage:`url("${post.cover ? post.cover[0].url : ""}")`, backgroundColor: "#1F4DF5", height: "200px"}}></div>
                                <a className="title py-2 text-primary font-weight-bold mt-2" href={`/${post.id}`}>{post.title}</a>     
                                <p className="small mb-2 pb-2 border-bottom">
                                    inspirator: <span className="text-primary mr-2">{post.author}</span>
                                    ngày: <span className="text-primary">{post.date}</span>
                                </p>
                                <p className="small text-gray">{post.preview}</p>
                            </div>
                    ))}
                </div>                
            </div>
            <hr />
            <FooterNew />
            <style jsx>{`
            
            .content-wrapper {
                margin: 24px 0px;
                grid-template-columns: 1fr;
                grid-gap: 24px 16px;
            }
            .article-item {
                grid-template-rows: 1fr;
            }

            @media (min-width:768px){
                .content-wrapper {
                    grid-template-columns: repeat(auto-fill, minmax(250px,1fr)) !important;
                }                
            }
            `}</style>
        </div>
    );
}
