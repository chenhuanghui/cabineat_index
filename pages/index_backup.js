import Head from 'next/head'
import Nav from '../components/nav-new'
import CasoureSlider from '../components/corsousel-new'
import Footer from '../components/footer-new'
import { Helmet } from "react-helmet";

import ReactMarkdown from "react-markdown";
import $ from 'jquery';

// Setup tracking Segment follow guideline here
// https://www.npmjs.com/package/@analytics/segment
import Analytics from 'analytics'
import segmentPlugin from '@analytics/segment'

const analytics = Analytics({
    app: 'cabineat.vn',
    plugins: [
      segmentPlugin({
        writeKey: 'gKEHwr0ikjhiUSENPqXBkTnlPP84V6CV'
      })
    ]
})

// *** end

const AirtablePlus = require('airtable-plus');
const airtable = new AirtablePlus({
    baseID: 'appCZGNOFg53FFSE4',
    apiKey: 'keyLNupG6zOmmokND'
});

// var mixpanel = require('mixpanel-browser');
// mixpanel.init("eb9876c08581cc2c1ab8c3e4a94b50fb");


export default class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            brand   :   null, 
            hero    :   null, 
            feature :   null, 
            message :   null, 
            benefit :   null, 
            pricing :   null, 
            more    :   null, 
            solution:   null, 
            call2action:null, 
            stepready4sale:null,
            mHeight : 0
        }
    }

    async componentDidMount() { 
        // tracking
        // mixpanel.track("visit",{"page":"cabineat.vn"})
        /* Identify a visitor */
        // analytics.identify('090123123', {
        //     firstName: 'lala1',
        //     lastName: "aloha1",
        //     tel: '090123123'
        // })

        // const ReactPixel =  require('react-facebook-pixel');
        // ReactPixel.default.init('962321430930011');

        // fetching data
        let currentComponent = this

        let clientHeight = window.innerHeight
        currentComponent.setState({mHeight: clientHeight})
        
        
        // start get data of brand
        const logoRes = await airtable.read({
            filterByFormula: `AND(type = "logo", isActive = "1")`,
            maxRecords : 1
        },{tableName:"brand"});
        const menuRes = await airtable.read({
            filterByFormula: `AND(type = "menu-item", isActive = "1")`,
            sort: [{field: 'sort', direction: 'asc'}]
        },{tableName:"brand"});
    
        var brandRes
        if (logoRes.length > 0 && menuRes.length > 0) {
            brandRes = {
                logo: logoRes[0].fields.img[0].url,
                menuitem: menuRes
            }
        }
        
        // console.log("brand: ", brandRes)
        currentComponent.setState({brand: brandRes})
        // end get data of brand
        
        
        // start get data of hero
        const heroRes = await airtable.read({
            filterByFormula: `isActive = "1"`,
            maxRecords: 1
        },{tableName:"hero"});
        // console.log("hero: ", heroRes)
        currentComponent.setState({hero: heroRes[0]})
        // end get data of brand
    
        // start get data of feature
        const featureRes = await airtable.read({
            filterByFormula: `isActive = "1"`,
            sort: [{field: 'sort', direction: 'asc'}]
        },{tableName:"feature"});
        // console.log("feature: ", featureRes)
        currentComponent.setState({feature: featureRes})
        // end get data of hero
    
        // start get data of message
        const messageRes = await airtable.read({
            filterByFormula: `isActive = "1"`,
            maxRecords: 1
        },{tableName:"message"});    
        // console.log(messageRes)
        currentComponent.setState({message: messageRes[0]})
        // end get data of feature
    
        // start get data of stepready4saleRes
        const stepready4saleStep = await airtable.read({
            filterByFormula: `AND(type="step", isActive = "1")`,
            sort: [{field: 'step', direction: 'asc'}]
        },{tableName:"stepready4sale"});

        const stepready4saleTitle = await airtable.read({
            filterByFormula: `AND(type="title", isActive = "1")`,
            maxRecords: 1
        },{tableName:"stepready4sale"});

        const stepready4saleDesc = await airtable.read({
            filterByFormula: `AND(type="desc", isActive = "1")`,
            maxRecords: 1
        },{tableName:"stepready4sale"});
        
        var stepready4saleRes = {
            title : stepready4saleTitle[0].fields.title,
            desc : stepready4saleDesc[0].fields.title,
            step : stepready4saleStep,
        }

        // console.log(stepready4saleRes)
        currentComponent.setState({stepready4sale: stepready4saleRes})
        // end get data of benefitRes

        // end get data of pricing
        const pricingRes = await airtable.read({
            filterByFormula: `isActive = "1"`,
            maxRecords: 1
        },{tableName:"pricing"});
        // console.log(pricingRes)
        currentComponent.setState({pricing: pricingRes[0]})
                
        
    }   

    wantToSignUpHero() {
        mixpanel.track("signup_wish",{"source_btn": "btn_hero"});
    }

    wantToSignUpPricing() {
        mixpanel.track("signup_wish",{"source_btn": "btn_pricing"});
    }

    render() {
        const {brand, hero, feature, message, benefit, pricing, more, solution, call2action, stepready4sale, mHeight} = this.state
        return (
            <>
                 <Helmet>
                    <meta charSet="utf-8" />
                    <title>CabinEat - Trang chủ</title>
                    <meta name="description" content="CabinEat - Trang chủ" />
                    <meta name="keywords" content="cabineat,nha hang so, online restaurant, delivery" />
                    <script async src="https://cdn.splitbee.io/sb.js"></script>
                </Helmet>
                <Nav />
                <div className="main-container" style={{backgroundColor: "white", minHeight: mHeight}}>                    
                    {hero 
                    ?
                        <section className="bg-dark custom">
                            <div className="container-fluid py-6">                            
                                <p className="text-center pre-title text-uppercase font-weight-lighter title mb-0" style={{letterSpacing: "2px"}}>{hero.fields.pre_title}</p>                                
                                <ReactMarkdown source={hero.fields.title} className="mt-0 mb-0 text-center caption font-weight-bold"/> 
                                <ReactMarkdown source={hero.fields.sub_title} className="text-center mt-5 small mb-3"/>
                                <div className="row align-items-center justify-content-center">
                                    <a className="btn btn-primary btn-lg font-weight-bold" href={hero.fields.call2action_href} target="_blank" onClick={this.wantToSignUpHero}>{hero.fields.call2action}</a>
                                </div>
                            </div>
                        </section> 
                    : null
                    }

                    <section className="bg-invert-to-white">
                        <div className="container mt-n2">
                            <div className="row align-items-center justify-content-center">
                                <div className="pl-5 pr-5 pt-0 pb-0">
                                    <img className="img-fluid rounded d-none d-md-block"  src={hero && hero.fields.imgDesktop && hero.fields.imgDesktop[0].url}/>
                                    <img className="img-fluid rounded d-block d-md-none"  src={hero && hero.fields.imgMobile && hero.fields.imgMobile[0].url}/>
                                </div>
                            </div>
                        </div>
                    </section>

                    {feature
                    ? 
                    <section className="container my-5">
                        <div className="row align-items-center justify-content-center ml-2 mr-2">
                            {feature.map((item, index)=>(
                                <div className="col-12 col-md-4 align-items-center mb-4 mb-md-0" key={item.id}>
                                    <div className="avatar avatar-xxl card-avatar">
                                        <img className="avatar-img rounded-circle border border-4 border-card" src={item.fields.img[0].url}/>
                                    </div>
                                    <div className="mb-0">
                                    <h2 className="card-title text-center title font-weight-bold">{item.fields.title}</h2>
                                        <p className="small text-center mb-1 mt-1">{item.fields.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr className="mt-6"/>
                    </section>
                    : null
                    }

                    { message
                    ? 
                    <section className="container my-2 my-md-5 custom">
                        <div className="row mt-0 mt-md-6">
                            <div className="col-12 col-md-6 d-block d-md-none">
                                <div className="align-items-center justify-content-center">
                                    <img className="img-fluid rounded" src={message.fields.img[0].url}/>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 card-body">
                                <ReactMarkdown source={message.fields.title} className="header-title mb-3 caption font-weight-bold"/>
                                <p className="mb-1">{message.fields.desc}</p>
                                <ul className="check-list list-none-style ml-md-4" style={{paddingLeft: "calc(5px + 1.75em)"}}>
                                    <li className="mb-3">
                                        <span className="fe fe-check mr-2 text-primary"></span>
                                        <span className="p">Có ngay trang đặt món cho khách hàng được thiết kế tối ưu cho các loại thiết bị</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fe fe-check mr-2 text-primary"></span>
                                        <span className="p">Kênh xử lý đơn hàng chuyên biệt từ delivery, và đồng bộ các dịch vụ vận chuyển COD</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fe fe-check mr-2 text-primary"></span>
                                        <span className="p">Quản lý đơn hàng, khách hàng, sản phẩm và các dữ liệu quan trọng chỉ trong một hệ thống</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fe fe-check mr-2 text-primary"></span>
                                        <span className="p">Chủ động xây dựng các chương trình khuyến mãi, tiếp cận khách hàng bằng các công cụ và khuôn mẫu marketing được tích hợp sẵn</span>
                                    </li>
                                </ul>
                                <a href={message.fields.btn_href} className="text-primary card-title font-weight-bold"> {message.fields.btn_title} <span className="fe fe-chevrons-right ml-2"></span></a>
                            </div>
                            <div className="col-12 col-md-6 d-none d-md-block">
                                <div className="align-items-center justify-content-center">
                                    <img className="img-fluid rounded" src={message.fields.img[0].url}/>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-6"/>
                        
                    </section>
                    : null
                    }
                
                    {stepready4sale
                    ?
                        <section className="container custom py-3">
                            <div className="pl-3 row">
                                <div className="col-12 col-md-8">
                                    <ReactMarkdown source={stepready4sale.title} className="header-title mb-3 caption font-weight-bold"/>
                                    <p className="mb-1">{stepready4sale.desc}</p>
                                </div>
                            </div>
                            {stepready4sale && stepready4sale.step.length > 0
                                ? <CasoureSlider data = {stepready4sale.step}/>
                                : null
                            }
                        </section>
                    
                    :null

                    }
                    
                    {pricing
                    ?
                        <section className="container custom pt-5 pb-6 pt-md-6">
                            <hr className="mt-2"/>
                            <ReactMarkdown source={pricing.fields.headline} className="text-center markdown-custom h2"/>
                            
                            <div className="row mt-0 mt-md-6 align-items-center justify-content-center">
                                <div className="col-12 col-md-3 card-body border ml-4 mr-4 mb-4 pt-5 pb-5">
                                    <h3 className="text-center"> {pricing.fields.packtitle1}</h3>
                                    <div className="mb-1 mt-3">
                                        <h1 className="text-center text-primary " style={{letterSpacing:"-2px"}}> {pricing.fields.packprice1}
                                            <span className="small font-weight-normal ml-2" style={{letterSpacing:"0px"}}>vnđ</span>
                                        </h1>
                                    </div>
                                    <p className="text-center mb-0 mt-n4 text-muted">{pricing.fields.packdesc1}</p>
                                </div>
                                
                                <div className="col-12 col-md-3 card-body border ml-4 mr-4 mb-4 pt-5 pb-5">
                                    <h3 className="text-center"> {pricing.fields.packtitle2}</h3>
                                    <div className="mb-1 mt-3">
                                        <h1 className="text-center text-primary " style={{letterSpacing:"-2px"}}> {pricing.fields.packprice2}
                                            <span className="small font-weight-normal ml-2" style={{letterSpacing:"0px"}}>vnđ</span>
                                        </h1>
                                    </div>
                                    <p className="text-center mb-0 mt-n4 text-muted">{pricing.fields.packdesc2}</p>
                                </div>
                                <div className="col-12 col-md-3 card-body border ml-4 mr-4 mb-4 pt-5 pb-5">
                                    <h3 className="text-center"> {pricing.fields.packtitle3}</h3>
                                    <div className="mb-1 mt-3">
                                        <h1 className="text-center text-primary" style={{letterSpacing:"-2px"}}> {pricing.fields.packprice3}
                                            <span className="small font-weight-normal ml-2" style={{letterSpacing:"0px"}}>vnđ</span>
                                        </h1>
                                    </div>
                                    <p className="text-center mb-0 mt-n4 text-muted">{pricing.fields.packdesc3}</p>
                                </div>
                            </div>

                            <p className="text-center mt-5"> {pricing.fields.hint}</p>

                            <div className="row align-items-center justify-content-center mt-3">                            
                                <a href={pricing.fields.btn_href} className="btn btn-primary btn-lg font-weight-bold" target="_blank" onClick={this.wantToSignUpPricing}>{pricing.fields.btn_title}</a>
                            </div>
                        </section>
                    : null
                    }                    
                </div>
                <Footer />
                
                
                <style jsx>{`
                
                

                `}</style>
            </>
        )
    }
}