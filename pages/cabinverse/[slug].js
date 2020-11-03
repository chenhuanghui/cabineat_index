import Head from 'next/head'
import Nav from '../../components/nav-new'
import Footer from '../../components/footer-new'
import Intro from '../../components/cabinverse/intro'
import LastedCourse from '../../components/cabinverse/lastedCourse'
import SubscribeEmail from '../../components/cabinverse/subscribeEmail'
import NavCabinverse from '../../components/cabinverse/nav-cabinverse'

import ReactMarkdown from "react-markdown";
import $ from 'jquery';


import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const AirtablePlus = require('airtable-plus');
const airtable = new AirtablePlus({
    baseID: 'appCZGNOFg53FFSE4',
    apiKey: 'keyLNupG6zOmmokND'
});

var mixpanel = require('mixpanel-browser');
mixpanel.init("eb9876c08581cc2c1ab8c3e4a94b50fb");

// contentful setting start
const contentful = require("contentful");
const client = contentful.createClient({
  space: "0s01bkenrjm9",
  accessToken: "n9oDwlvUxgwxjQPXKEl0TepabVC7zjC-ZuwO5yCf9Ls"
});

const contentfulOptions = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
            `<img class="img-fluid" src="${fields.file.url}" height="auto" width="${fields.file.details.image.width}" alt="${fields.description}"/>`,
    },
}
// contentful setting end

export default class CourseItem extends React.Component {
    static async getInitialProps({req, query}) {
        console.log("query id:", query)
        const entryRes = await client.getEntry(query.slug)
        return {course: entryRes}
    }

    constructor(props){
        super(props);
        this.state = {            
            mHeight : 0
        }
    }

    componentDidMount() { 
        // tracking
        mixpanel.track("visit",{"page":"cabineat.vn/cabinverse"})
        
        // fetching data
        let currentComponent = this
        console.log("course prop: ", currentComponent.props.course)

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
        const {mHeight} = this.state
        return (
            <>
                <Head>
                    <title>Cabinverse - Học viện kinh doanh nhà hàng online</title>
                </Head>
                <Nav />
                <div className="main-container pt-5" style={{backgroundColor: "white", minHeight: mHeight}}>
                    <Intro />

                    <NavCabinverse />

                    <div className="section " id="">
                        <div className="container py-4">
                            <div className="row">
                                <div className="col-12 col-md-9">
                                    <div className="container">

                                        <div className="row">
                                            <div className="col-12 article-item custom">
                                                <h1 className="mb-2">{this.props.course.fields.title}</h1>
                                                <p className="small">
                                                    by <span className="text-primary">{this.props.course.fields.author.fields.name}</span>, {new Date().toDateString(this.props.course.fields.createdDate)}
                                                </p>
                                                <hr className="my-4"/>

                                                <img className="img-fluid" src={this.props.course.fields.cover.fields.file.url} />
                                                <div className='py-4' dangerouslySetInnerHTML={{__html: documentToHtmlString(this.props.course.fields.desc,contentfulOptions)}} />
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-12 col-md-3 mt-md-0 mt-5 ml-0 mr-0 pl-0 pr-0">
                                    <SubscribeEmail />
                                    <LastedCourse />
                                    {/* <div id="releated" className="mt-5 container">
                                        <h5 className="pre-title"> <span className="fe fe-briefcase mr-2"></span> Mới nhất</h5>
                                        <ul className="list-none-style pt-2">
                                            {this.props.listEntries && this.props.listEntries.map((item, index)=>(
                                                <li className="border-bottom py-3 related-item" key={index}>
                                                    <h4 className="font-weight-normal "><a href="#" className="text-dark mb-2">{item.fields.collection.fields.name}</a></h4>
                                                    <a href="#" className="">{item.fields.title}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div> */}
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