import Head from 'next/head'
import Nav from '../../components/nav-new'
import CasoureSlider from '../../components/corsousel-new'
import Footer from '../../components/footer-new'
import Intro from '../../components/cabinverse/intro'

import ReactMarkdown from "react-markdown";
import $ from 'jquery';

import BackgroundSlider from 'react-background-slider'
import Link from 'next/link';
// https://github.com/u2ix/react-background-slider

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


const AirtablePlus = require('airtable-plus');
const airtable = new AirtablePlus({
    baseID: 'appCZGNOFg53FFSE4',
    apiKey: 'keyLNupG6zOmmokND'
});

var mixpanel = require('mixpanel-browser');
mixpanel.init("eb9876c08581cc2c1ab8c3e4a94b50fb");

const contentful = require("contentful");
const client = contentful.createClient({
  space: "0s01bkenrjm9",
  accessToken: "n9oDwlvUxgwxjQPXKEl0TepabVC7zjC-ZuwO5yCf9Ls"
});

// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
async function fetchEntries(query) {
    const entries = await client.getEntries(query)
    if (entries.items) {
        console.log('entries:',entries.items);
        return entries.items
    }
    console.log(`Error getting Entries for ${contentType.name}.`)
}

const contentfulOptions = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
            `<img src="${fields.file.url}" height="auto" width="${fields.file.details.image.width}" alt="${fields.description}"/>`,
    },
}

export default class Cabinverse extends React.Component {
    constructor(props){
        super(props);
        this.state = {            
            mHeight : 0,
            hero: null,
            sharing: null,
            courseList : []
        }
    }

    componentDidMount() { 
        // tracking
        mixpanel.track("visit",{"page":"cabineat.vn/cabinverse"})

        // fetching data
        let currentComponent = this

        // const allPosts = await fetchEntries({content_type: 'document'})  // query posts only
        // currentComponent.setState({posts:[...allPosts]})

        client
        .getEntries({content_type: 'courseItem'})
        .then(entry => {
            // console.log(entry)
            currentComponent.setState({courseList: [...entry.items]})
            console.log(currentComponent.state.courseList)
        })
        .catch(err => console.log(err));

        let clientHeight = window.innerHeight
        currentComponent.setState({mHeight: clientHeight})
                    
    }   

    toggleSubNav = () => {
        if ($("#sub-nav").hasClass("show")) {
            $("#sub-nav").removeClass("show")
        } else {
            $("#sub-nav").addClass("show")
        }        
    }

    render() {
        const {mHeight, courseList} = this.state
        return (
            <>
                <Head>
                    <title>Cabinverse - Học viện kinh doanh nhà hàng online</title>
                </Head>
                <Nav />
                <div className="main-container pt-5" style={{backgroundColor: "white", minHeight: mHeight}}>
                    <Intro />

                    <nav className="navbar navbar-expand-lg  navbar-light" id="topnav">
                        <div className="container">                                      
                            <div className="navbar-collapse collapse mr-auto order-last" id="sub-nav" >
                                <ul className="navbar-nav mr-lg-auto">
                                    <li className="nav-item">
                                        <a className="nav-link disable" href="#">Mới nhất</a>
                                    </li>  
                                    <li className="nav-item">
                                        <a className="nav-link disable" href="#">Tìm kiếm ý tưởng</a>
                                    </li>  
                                    <li className="nav-item">
                                        <a className="nav-link disable" href="#">Thiết lập nhà hàng</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disable" href="#">Kinh doanh & Truyền thông</a>
                                    </li>
                                </ul>
                            </div>   
                            <div className="navbar-toggler" onClick={this.toggleSubNav} style={{width: "100%"}}>
                                <div className="row pl-3 pr-3">
                                    <span className="mr-auto mt-2">Chọn chủ đề</span>
                                    <span className="fe fe-chevron-down "></span>
                                </div>
                            </div>                               
                        </div>                        
                    </nav>

                    <div className="section " id="">
                        <div className="container py-4 py-md-6">
                            <div className="row">
                                <div className="col-12 col-md-9">
                                    <div className="container">

                                        <div className="row">
                                            <div className="col-12 article-item">
                                                <img className="img-fluid" src="https://cdn.shopify.com/shopifycloud/brochure/assets/content-marketing/blog/blog_header/get-started-large-a46ee8d7c314de2b8faa5fdcd910ca5041420267f8efaea623e473eecd15f41c.jpg?quality=50" />
                                                <p className="py-4">There are many successful businesses that aren’t born from unique ideas. There’s still value in looking for tried-and-true business ideas as there are many ways to make a business stand out beyond the products you sell. It’s how you use your desire to turn an idea into action that can make you a successful independent business owner. Today is a great day to start a business.</p>
                                            </div>
                                        </div>

                                        {/* course list space listing start */}
                                        <div className="row">
                                            {courseList && courseList.length>0 && courseList.map((item, id)=>(
                                                <div className="col-12 col-md-6 article-item mb-4" key={id}>
                                                    <img className="img-fluid" src={item.fields.cover.fields.file.url} />
                                                    <p className="pt-3 mb-2 text-primary">{item.fields.collection.fields.name}</p>
                                                    <Link href="cabinverse/[slug]" as={`cabinverse/${item.sys.id}`}>
                                                        <a className="h3 py-2 text-dark">
                                                            {item.fields.title}
                                                        </a>
                                                    </Link>                                                    
                                                    <p className="small">
                                                        by <span className="text-primary">{item.fields.author.fields.name}</span>, {new Date().toDateString(item.fields.createdDate)}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        {/* course list space listing end */}
                                    </div>
                                </div>
                                
                                <div className="col-12 col-md-3 mt-md-0 mt-5 ml-0 mr-0 pl-0 pr-0">
                                    <div className="bg-dark">         
                                        <div className="container">
                                            <div className="row align-items-center justify-content-center py-6 ">
                                                <div className="col-11">
                                                    <h1 className="fe fe-file-text text-center"></h1>
                                                    <h2 className="text-center">Join 446,005 <br />entrepreneurs who already have a head start.</h2>
                                                    <p className="text-center small">Get free online marketing tips and resources delivered directly to your inbox.</p>
                                                    <div className="">
                                                        <input type="text" className="col-12 form-control form-control-appended" placeholder="Địa chỉ email"/>
                                                        <button className="col-12 mt-3 btn btn-primary">Nhận thông báo</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="releated" className="mt-5 container">
                                        <h5 className="pre-title"> <span className="fe fe-briefcase mr-2"></span> QUICKSTART GUIDES</h5>
                                        <ul className="list-none-style pt-2">
                                            <li className="border-bottom py-3 related-item">
                                                <h4 className="font-weight-normal "><a href="#" className="text-dark mb-2">Trending Products</a></h4>
                                                <a href="#" className="">Start a business selling in-demand products</a>
                                            </li>
                                            <li className="border-bottom py-3 related-item">
                                                <h4 className="font-weight-normal "><a href="#" className="text-dark mb-2">Trending Products</a></h4>
                                                <a href="#" className="">Start a business selling in-demand products</a>
                                            </li>
                                            <li className="border-bottom py-3 related-item">
                                                <h4 className="font-weight-normal "><a href="#" className="text-dark mb-2">Trending Products</a></h4>
                                                <a href="#" className="">Start a business selling in-demand products</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <Footer />
                
                
                <style jsx>{`
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
        )
    }
}