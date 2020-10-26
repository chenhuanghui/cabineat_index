import Head from 'next/head'
import Nav from '../components/nav-new'
import CasoureSlider from '../components/corsousel-new'
import Footer from '../components/footer-new'

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

export default class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {            
            mHeight : 0,
            hero: null,
            sharing: null
        }
    }

    async componentDidMount() { 
        // tracking
        mixpanel.track("visit",{"page":"cabineat.vn"})

        // fetching data
        let currentComponent = this

        let clientHeight = window.innerHeight
        currentComponent.setState({mHeight: clientHeight})
        
        
        // start get data of brand
        const hero_res = await airtable.read({
            filterByFormula: `isActive = "1"`,
            maxRecords : 1
        },{tableName:"about_hero"});
        
        // console.log("hero", hero_res)
        if(hero_res.length > 0 ) {
            var temp = []
            for(var i=0; i<hero_res[0].fields.bgImages.length; i++) {
                temp.push(hero_res[0].fields.bgImages[i].url)
            }
            hero_res[0].fields.bgImages = temp;
            console.log(hero_res[0].fields)
            currentComponent.setState({hero: hero_res[0].fields})
        }

        const share_res = await airtable.read({
            filterByFormula: `isActive = "1"`,
            maxRecords : 1
        },{tableName:"about_sharing"});
        currentComponent.setState({sharing: share_res[0].fields})        
    }   

    toggleSubNav = () => {
        if ($("#sub-nav").hasClass("show")) {
            $("#sub-nav").removeClass("show")
        } else {
            $("#sub-nav").addClass("show")
        }        
    }

    render() {
        const {mHeight, hero, sharing} = this.state
        return (
            <>
                <Head>
                    <title>CabinEat - Giới thiệu CabinEat</title>
                </Head>
                <Nav />
                <div className="main-container pt-5" style={{backgroundColor: "white", minHeight: mHeight}}>
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

                    <nav className="navbar navbar-expand-lg  navbar-light" id="topnav">
                        <div className="container">                                      
                            <div className="navbar-collapse collapse mr-auto order-last" id="sub-nav" >
                                <ul className="navbar-nav mr-lg-auto">
                                    <li className="nav-item">
                                        <a className="nav-link disable" href="#">Bài viết mới nhất</a>
                                    </li>  
                                    <li className="nav-item">
                                        <a className="nav-link disable" href="#">Tìm kiếm sản phẩm</a>
                                    </li>  
                                    <li className="nav-item">
                                        <a className="nav-link disable" href="#">Thiết lập nhà hàng</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disable" href="#">Truyền thông hiệu quả</a>
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
                                        <div className="row">
                                            <div className="col-12 col-md-6 article-item mb-4">
                                                <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0070/7032/files/Shopify_makeup_line-header.jpg?v=1603138525&width=600" />
                                                <p className="pt-3 mb-2 text-primary">Business Ideas</p>
                                                <h3 className="mb-2">How to Launch a Makeup Brand and Sell Online: The Ultimate Guide</h3>
                                                <p className="small">
                                                    by <span className="text-primary">Dayna Winter</span>, Oct 20, 2020
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 article-item mb-4">
                                                <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0070/7032/files/Shopify_makeup_line-header.jpg?v=1603138525&width=600" />
                                                <p className="pt-3 mb-2 text-primary">Business Ideas</p>
                                                <h3 className="mb-2">How to Launch a Makeup Brand and Sell Online: The Ultimate Guide</h3>
                                                <p className="small">
                                                    by <span className="text-primary">Dayna Winter</span>, Oct 20, 2020
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 article-item mb-4">
                                                <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0070/7032/files/Shopify_makeup_line-header.jpg?v=1603138525&width=600" />
                                                <p className="pt-3 mb-2 text-primary">Business Ideas</p>
                                                <h3 className="mb-2">How to Launch a Makeup Brand and Sell Online: The Ultimate Guide</h3>
                                                <p className="small">
                                                    by <span className="text-primary">Dayna Winter</span>, Oct 20, 2020
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 article-item mb-4">
                                                <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0070/7032/files/Shopify_makeup_line-header.jpg?v=1603138525&width=600" />
                                                <p className="pt-3 mb-2 text-primary">Business Ideas</p>
                                                <h3 className="mb-2">How to Launch a Makeup Brand and Sell Online: The Ultimate Guide</h3>
                                                <p className="small">
                                                    by <span className="text-primary">Dayna Winter</span>, Oct 20, 2020
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 article-item mb-4">
                                                <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0070/7032/files/Shopify_makeup_line-header.jpg?v=1603138525&width=600" />
                                                <p className="pt-3 mb-2 text-primary">Business Ideas</p>
                                                <h3 className="mb-2">How to Launch a Makeup Brand and Sell Online: The Ultimate Guide</h3>
                                                <p className="small">
                                                    by <span className="text-primary">Dayna Winter</span>, Oct 20, 2020
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 article-item mb-4">
                                                <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0070/7032/files/Shopify_makeup_line-header.jpg?v=1603138525&width=600" />
                                                <p className="pt-3 mb-2 text-primary">Business Ideas</p>
                                                <h3 className="mb-2">How to Launch a Makeup Brand and Sell Online: The Ultimate Guide</h3>
                                                <p className="small">
                                                    by <span className="text-primary">Dayna Winter</span>, Oct 20, 2020
                                                </p>
                                            </div>
                                            
                                            
                                        </div>
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