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
    render() {
        const {mHeight, hero, sharing} = this.state
        return (
            <>
                <Head>
                    <title>CabinEat - Giới thiệu CabinEat</title>
                </Head>
                <Nav />
                <div className="main-container pt-5" style={{backgroundColor: "white", minHeight: mHeight}}>
                    {hero
                    ?    
                        <section className="bg-dark custom" id="hero" style={{minHeight: mHeight}}>
                            <div className="container-fluid py-6 align-items-center justify-content-center row">
                                <div className="col-12 col-md-6 custom">
                                    <p className="text-center pre-title text-uppercase font-weight-bold small" style={{letterSpacing: "2px"}}>{hero.pre_title}</p>
                                    <ReactMarkdown source={hero.message} className="h1 text-center"/>
                                </div>
                            </div>
                        </section> 
                    : null
                    }
                    {sharing
                    ? 
                    <section className="bg-dark" id="message">
                        <div className="container py-6">
                            <div className="col-md-9 col-12 custom">
                                <h2 className="header-title mb-4"> {sharing.title}</h2>
                                <div className="">
                                    <ReactMarkdown source={sharing.desc} />
                                    {/* <p className="">So we’re building easy tools to empower and enrich people. Tools that shorten the distance between having an idea and making a living from it—because we believe in fair and square </p>
                                    <p>We started with a little white card reader but haven’t stopped there. Our new reader helps our sellers accept chip cards and NFC payments, and we have tools for customers too, like our Cash App, which lets people send money to friends and family instantly.</p>
                                    <p>We’re empowering the electrician to send invoices, setting up the food truck with a delivery option, helping the clothing boutique pay its employees, and giving the coffee chain capital for a second, third, and fourth location.</p>
                                    <p>We’re here to help sellers of all sizes start, run, and grow their business—and helping them grow their business is good business for everyone.</p> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    : null

                    }

                    <section className="container py-6 custom" id="company-info">
                        <h1 className="text-center header-title">Thông tin</h1>
                        <div className="py-4 ">
                            <h2 className="text-center">Văn phòng làm việc</h2>
                            <ul className="list-none-style text-center">
                                <li className="mb-2"><p className="mb-0">Việt Nam: <span className="font-weight-bold"> 126 Nguyễn Thị Minh Khai, Quận 3, Hồ Chí Minh</span></p></li>
                                <li className="mb-2"><p className="mb-0">Singapore: <span className="font-weight-bold"> 10 Marina Boulevard 018983, Singapore</span></p></li>
                            </ul>
                        </div>
                        <div className="py-4 ">
                            <h2 className="text-center">Email</h2>
                            <ul className="list-none-style text-center">
                                <li className="mb-2"><p className="mb-0"> Hỗ trợ: <span className="font-weight-bold"> hello@cabineat.vn</span></p></li>
                            </ul>
                        </div>
                    <hr />
                    </section>

                    
                </div>
                <Footer />
                
                
                <style jsx>{`
                .box-gallery {
                    z-index: 0 !important
                }
                #hero {
                    background-size: cover;
                    background-position: center;
                    background-image: url(${hero && hero.bgImages ? hero.bgImages[0] : ''})                
                }
                
            
                `}</style>
            </>
        )
    }
}