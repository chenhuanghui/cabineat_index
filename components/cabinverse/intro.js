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
    
    async addScubscribe() {
        // const res = await airtable.create({ firstName: 'foo' });
        var emailVal = $("#email_address").val()
        
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailVal))
        {
            const res = await airtable.create({ email: emailVal},{tableName:"Email"});
            if (res) {
                $("#email_address").hide()
                $('.btn-subscribe').hide()
                $('.valid-feedback').show()
                $('.remind-msg').hide()
            }
        } else {
            $('.invalid-feedback').show()
        }
    }

    render() {
        return (
            <>            
                <div className="custom section bg-dark" id="hero">
                    <div className="container-fluid pt-7 row align-items-center justify-content-center ml-0 pl-0 mr-0 pr-0">
                        <div className="col-12 col-md-7 pb-6">
                            <h1 className="text-center">Cabinverse</h1>
                            <p className="text-center font-weight-lighter"><strong>Học viện kinh doanh nhà hàng số</strong> được lập ra từ mong muốn được giúp đỡ, chia sẻ kiến thức, kinh nghiệm, nguồn cảm hứng để giúp bạn bắt đầu và phát triển nhà hàng số thành công.</p>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-11 col-md-12 mt-5 ">
                                    <div className="row align-items-center justify-content-center">
                                        <input 
                                            type="text" 
                                            id="email_address"
                                            className="col-12 col-md-5 form-control form-control-appended py-4" 
                                            placeholder="Địa chỉ email"
                                            onKeyPress={()=>{$('.invalid-feedback').hide()}}
                                        />
                                        <button className="col-12 col-md-3 mt-3 mt-md-0 btn btn-primary ml-2 py-3 btn-subscribe" onClick={this.addScubscribe}>Nhận thông tin</button>
                                        <div className="invalid-feedback text-center">Địa chỉ email chưa chính xác</div>
                                        <div className="valid-feedback text-center">Chúng tôi sẽ gởi cập nhật thông tin đến email của bạn vừa đăng ký.</div>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 text-center small remind-msg">Thông tin mới sẽ được thông báo đến bạn qua email.</p>
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