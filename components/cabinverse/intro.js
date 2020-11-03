import Head from 'next/head'
import Nav from '../nav-new'
import Footer from '../footer-new'

import ReactMarkdown from "react-markdown";
import $ from 'jquery';

const AirtablePlus = require('airtable-plus');
const airtable = new AirtablePlus({
    baseID: 'app69z8vsFZto6tC8',
    apiKey: 'keyLNupG6zOmmokND'
});

export default class Intro extends React.Component {
    

    render() {
        return (
            <>            
                <div className="custom section bg-dark" id="hero">
                    <div className="container-fluid pt-7 row align-items-center justify-content-center ml-0 pl-0 mr-0 pr-0">
                        <div className="col-12 col-md-7 pb-6">
                            <h1 className="text-center">Bắt đầu từ đây</h1>
                            <p className="text-center">Chúng tôi ở đây để giúp đỡ, chia sẻ kiến thức, công thức, mẹo và nguồn cảm hứng để giúp bạn bắt đầu và phát triển một nhà hàng online thành công.</p>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-11 col-md-12 mt-5 ">
                                    <div className="row align-items-center justify-content-center">
                                        <input type="text" className="col-12 col-md-5 form-control form-control-appended py-4" placeholder="Địa chỉ email"/>
                                        <button className="col-12 col-md-3 mt-3 mt-md-0 btn btn-primary ml-2 py-3">Nhận thông báo</button>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 text-center small">Thông tin mới sẽ được thông báo đến bạn qua email.</p>
                        </div>
                    </div>
                </div>       

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