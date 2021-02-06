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
                {posts.map((post, index) => (
                    <a href= {`/${post.id}`} key={index}>
                        {post.title}
                    </a>
                ))}
            </div>
            <FooterNew />
        </div>
    );
}