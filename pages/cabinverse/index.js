import Link from 'next/link';
import Head from 'next/head'
import Nav from '../../components/nav-new'

import Footer from '../../components/footer-new'
import Intro from '../../components/cabinverse/intro'
import LastedCourse from '../../components/cabinverse/lastedCourse'
import Subscribe from '../../components/cabinverse/subscribe'
import NavCabinverse from '../../components/cabinverse/nav-cabinverse'

import ReactMarkdown from "react-markdown";
import $ from 'jquery';

import BackgroundSlider from 'react-background-slider'

// https://github.com/u2ix/react-background-slider

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

    formatDate(dateStr){
        var d = new Date(dateStr)
        var temp = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear()
        return temp
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

                    <NavCabinverse />

                    <div className="section " id="">
                        <div className="container py-4 py-md-6">
                            <div className="row">
                                <div className="col-12 col-md-9">
                                    <div className="container">

                                        <div className="row">
                                            <div className="col-12 article-item">
                                                <img className="img-fluid" src="https://cdn.shopify.com/shopifycloud/brochure/assets/content-marketing/blog/blog_header/get-started-large-a46ee8d7c314de2b8faa5fdcd910ca5041420267f8efaea623e473eecd15f41c.jpg?quality=50" />
                                                <p className="py-4">Có rất nhiều doanh nghiệp thành công không được sinh ra từ những ý tưởng độc đáo. Vẫn có giá trị khi tìm kiếm những ý tưởng kinh doanh đã thử và đúng vì có nhiều cách để làm cho một doanh nghiệp nổi bật ngoài các món ăn, thức uống mà bạn bán. Đó là cách bạn sử dụng mong muốn của mình để biến một ý tưởng thành hành động có thể khiến bạn trở thành chủ doanh nghiệp độc lập thành công. <span className="font-weight-bold text-primary">Hôm nay là một ngày tuyệt vời để bắt đầu kinh doanh!</span> </p>
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
                                                        bởi <span className="text-primary">{item.fields.author.fields.name}</span>, {this.formatDate(item.fields.createdDate)}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        {/* course list space listing end */}
                                    </div>
                                </div>
                                
                                <div className="col-12 col-md-3 mt-md-0 mt-5 ml-0 mr-0 pl-0 pr-0">
                                    <Subscribe />
                                    <LastedCourse />
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