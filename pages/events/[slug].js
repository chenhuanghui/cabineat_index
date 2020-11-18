import Head from 'next/head'
import Nav from '../../components/nav-new'
import Footer from '../../components/footer-new'
import Intro from '../../components/events/intro'

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

export default class EventDetail extends React.Component {
    static async getInitialProps({req, query}) {
        console.log("query id:", query)
        const entryRes = await client.getEntry(query.slug)
        return {eventDetail: entryRes}
    }

    constructor(props){
        super(props);
        this.state = {            
            mHeight : 0
        }
    }

    componentDidMount() { 
        // tracking
        // mixpanel.track("visit",{"page":"cabineat.vn/cabinverse"})
        
        // fetching data
        let currentComponent = this
        console.log("eventDetail prop: ", currentComponent.props.eventDetail)

        let clientHeight = window.innerHeight
        currentComponent.setState({mHeight: clientHeight})                    
    }

    formatDate(dateStr){
        var d = new Date(dateStr)
        var temp = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear()
        return temp
    }    

    isPassed(dateStr) {
        var d = new Date(dateStr);
        var today = new Date()
        if (d < today) return false
        return true
    }

    render() {
        const {mHeight} = this.state
        return (
            <>
                <Head>
                    <title>Event - {this.props.eventDetail.fields.title}</title>
                </Head>
                <Nav />
                <div className="main-container pt-5" style={{backgroundColor: "white", minHeight: mHeight}}>
                    <Intro />

                    <div className="section mt-md-5 mt-3" id="">
                        <div className="container py-4">
                            <div className="row">
                                <div className="col-12 col-md-9">
                                    <div className="container">

                                        <div className="row">
                                            <div className="col-12 article-item">
                                                
                                                <p className="small">
                                                    {/* by <span className="text-primary">{this.props.eventDetail.fields.author.fields.name}</span>, {new Date().toDateString(this.props.eventDetail.fields.createdDate)} */}
                                                </p>
                                                {/* <hr className="my-4"/> */}
                                                <div className="">
                                                    <img className="img-fluid rounded" src={this.props.eventDetail.fields.cover.fields.file.url} />
                                                    {this.isPassed(this.props.eventDetail.fields.date)
                                                    ? <span className="badge badge-success mt-n6 ml-3 py-2 px-3 font-weight-bold">Sắp diễn ra</span>
                                                    : <span className="badge badge-secondary mt-n6 ml-3 py-2 px-3 font-weight-bold">Đã tổ chức</span>
                                                    }
                                                </div>
                                                <div className="mt-3">
                                                    <h1 className="mb-3">{this.props.eventDetail.fields.title}</h1>                                                    
                                                    <p className="small text-secondary mb-2">Ngày: {this.formatDate(this.props.eventDetail.fields.date)}</p>
                                                    <p className="small text-secondary mb-2 col-10 px-0">Tại: {this.props.eventDetail.fields.address}</p>
                                                </div>

                                                <hr />
                                                <div className='event-description py-3' dangerouslySetInnerHTML={{__html: documentToHtmlString(this.props.eventDetail.fields.description,contentfulOptions)}} />
                                                
                                            </div>
                                        </div>
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

                .event-description p {
                    margin-bottom: 0.5rem !important;
                }
            
                `}</style>
            </>
        )
    }
}