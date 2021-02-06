import Link from 'next/link';
import Head from 'next/head'
import Nav from '../../components/nav-new'

import Footer from '../../components/footer-new'
import Intro from '../../components/events/intro'

import ReactMarkdown from "react-markdown";
import $ from 'jquery';

import BackgroundSlider from 'react-background-slider'

const AirtablePlus = require('airtable-plus');
const airtable = new AirtablePlus({
    baseID: 'appCZGNOFg53FFSE4',
    apiKey: 'keyLNupG6zOmmokND'
});

var mixpanel = require('mixpanel-browser');
mixpanel.init("eb9876c08581cc2c1ab8c3e4a94b50fb");

// contentful setting start

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const contentful = require("contentful");
const client = contentful.createClient({
  space: "0s01bkenrjm9",
  accessToken: "n9oDwlvUxgwxjQPXKEl0TepabVC7zjC-ZuwO5yCf9Ls"
});

const contentfulOptions = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
            `<img src="${fields.file.url}" height="auto" width="${fields.file.details.image.width}" alt="${fields.description}"/>`,
    },
}
// contentful setting end

export default class Event extends React.Component {
    constructor(props){
        super(props);
        this.state = {            
            mHeight : 0,
            hero: null,
            sharing: null,
            eventList : []
        }
    }

    componentDidMount() { 
        // tracking
        // mixpanel.track("visit",{"page":"cabineat.vn/events"})

        // fetching data
        let currentComponent = this

        client
        .getEntries({content_type: 'event'})
        .then(entry => {
            // console.log(entry)
            currentComponent.setState({eventList: [...entry.items]})
            console.log(currentComponent.state.eventList)
        })
        .catch(err => console.log(err));

        currentComponent.setState({mHeight: window.innerHeight})
                    
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
        const {mHeight, eventList} = this.state
        return (
            <>
                <Head>
                    <title>Events</title>
                </Head>
                <Nav />
                <div className="main-container" style={{backgroundColor: "white", minHeight: mHeight}}>
                    <Intro />

                    <div className="section " id="">
                        <div className="container py-4 py-md-6">
                            <div className="row">
                                <div className="col-12">
                                    <div className="container">

                                        {/* <div className="row">
                                            <div className="col-12 article-item">
                                                <img className="img-fluid" src="https://cdn.shopify.com/shopifycloud/brochure/assets/content-marketing/blog/blog_header/get-started-large-a46ee8d7c314de2b8faa5fdcd910ca5041420267f8efaea623e473eecd15f41c.jpg?quality=50" />
                                                <p className="py-4">Chúng tôi ở đây để đồng hành cùng bạn, và lan truyền cảm hứng kinh doanh </p>
                                            </div>
                                        </div> */}

                                        {/* event list space listing start */}
                                        <div className="row">
                                            {eventList && eventList.length>0 && eventList.map((item, id)=>(
                                                <div className="col-12 col-md-4 article-item mb-4" key={id}>
                                                    <div className="py-2">
                                                        <Link href="events/[slug]" as={`events/${item.sys.id}`} className="py-3">
                                                            <a>
                                                                <img className="img-fluid rounded" src={item.fields.cover.fields.file.url} />
                                                                {this.isPassed(item.fields.date)
                                                                ? <span className="badge badge-success mt-n6 ml-3 py-2 px-3 font-weight-bold">Sắp diễn ra</span>
                                                                : <span className="badge badge-secondary mt-n6 ml-3 py-2 px-3 font-weight-bold">Đã tổ chức</span>
                                                                }
                                                            </a>
                                                        </Link>    
                                                    </div>
                                                    
                                                    <div className="">
                                                        <h6 className="text-uppercase mb-3 font-weight-bold">Chủ đề</h6>
                                                        <Link href="events/[slug]" as={`events/${item.sys.id}`} className="py-3">
                                                            <a className="h2 py-3 text-dark">
                                                                {item.fields.title}
                                                            </a>
                                                        </Link>              
                                                        <p className="mb-2 text-dark border-bottom py-2 pb-3">{item.fields.intro}</p>
                                                    </div>

                                                    <div className="pt-2">
                                                        <p className="small text-secondary mb-2">
                                                            Ngày: {this.formatDate(item.fields.date)}
                                                        </p>
                                                        <p className="small text-secondary mb-2 col-10 px-0">
                                                            Tại: {item.fields.address}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        {/* event list space listing end */}
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