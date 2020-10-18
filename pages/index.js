import Head from 'next/head'
import Nav from '../components/nav-new'
import CasoureSlider from '../components/corsousel-new'
import Footer from '../components/footer-new'

import ReactMarkdown from "react-markdown";

const AirtablePlus = require('airtable-plus');
const airtable = new AirtablePlus({
    baseID: 'appCZGNOFg53FFSE4',
    apiKey: 'keyLNupG6zOmmokND'
});

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
            stepready4sale:null
        }
    }

    async componentDidMount() { 
        let currentComponent = this
        
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
        const stepready4saleRes = await airtable.read({
            filterByFormula: `isActive = "1"`,
            sort: [{field: 'step', direction: 'asc'}]
        },{tableName:"stepready4sale"});
        
        // console.log(stepready4saleRes)
        currentComponent.setState({stepready4sale: stepready4saleRes})
        // end get data of stepready4saleRes
    
        // start get data of benefitRes

        {/*
        const benefitHeadlineRes = await airtable.read({
            filterByFormula: `AND(type="headline", isActive = "1")`,
            maxRecords: 1
        },{tableName:"benefit"});

        const benefitItemRes = await airtable.read({
            filterByFormula: `AND(type="item", isActive = "1")`,
            sort: [{field: 'sort', direction: 'asc'}]
        },{tableName:"benefit"});
        
        var benefitRes
        if (benefitHeadlineRes.length > 0 && benefitItemRes.length > 0) {
            benefitRes = {
                headline: benefitHeadlineRes[0].fields.title,
                item: benefitItemRes
            }    
        }
        currentComponent.setState({benefit: benefitRes})
        */}

        // end get data of benefitRes

        // end get data of pricing
        const pricingRes = await airtable.read({
            filterByFormula: `isActive = "1"`,
            maxRecords: 1
        },{tableName:"pricing"});
        // console.log(pricingRes)
        currentComponent.setState({pricing: pricingRes[0]})
        // end get data of pricing
    
        // start get data of more
        {/*
        const moreRes1 = await airtable.read({
            filterByFormula: `AND(type = "headline", isActive = "1")`,
            maxRecords: 1
        },{tableName:"more"});
        const moreRes2 = await airtable.read({
            filterByFormula: `AND(type = "list-item", isActive = "1")`,
        },{tableName:"more"});
    
        var moreRes
        if (moreRes1.length > 0 && moreRes2.length > 0) {
            moreRes = {
                headline: moreRes1[0].fields,
                listitem: moreRes2
            }   
        }    
    
        // console.log("more res: ", moreRes)
        currentComponent.setState({more: moreRes})

        */}
        // end get data of more

        // start get data of solution
        {/*
        const solutionRes = await airtable.read({
            filterByFormula: `isActive = "1"`,
            maxRecords: 1
        },{tableName:"solution"});
        
        // console.log("solution res: ", solutionRes)
        currentComponent.setState({solution: solutionRes[0]})

        */}
        // end get data from solution

        // start get data of call2action
        {/*
        const call2actionRes = await airtable.read({
            filterByFormula: `isActive = "1"`,
            maxRecords: 1
        },{tableName:"call2action"});
        // console.log("call2action res: ", call2actionRes)
        currentComponent.setState({call2action: call2actionRes[0]})
        */}
        // end get data of call2action
        
    }   
    render() {
        const {brand, hero, feature, message, benefit, pricing, more, solution, call2action, stepready4sale} = this.state
        return (
            <>
                <Head>
                    <title>CabinEat - Trang chủ</title>
                </Head>
                <Nav />
                <div className="main-container pt-5" style={{backgroundColor: "white"}}>                    
                    {hero 
                    ?
                        <section className="bg-dark custom">
                            <div className="container-fluid py-6">                            
                                <p className="text-center pre-title text-uppercase font-weight-bold small" style={{letterSpacing: "2px"}}>{hero.fields.pre_title}</p>
                                <ReactMarkdown source={hero.fields.title} className="mt-0 mb-0 text-center markdown-custom h1"/> 
                                <ReactMarkdown source={hero.fields.sub_title} className="text-center my-5 markdown-custom"/>
                                <div className="row align-items-center justify-content-center">
                                    <a className="btn btn-primary btn-lg font-weight-bold" href={hero.fields.call2action_href} target="_blank">{hero.fields.call2action}</a>
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
                                    <h2 className="card-title text-center mb-0">{item.fields.title}</h2>
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
                                <ReactMarkdown source={message.fields.title} className="header-title mb-3 markdown-custom h2"/>
                                <p>{message.fields.desc}</p>
                                <a href={message.fields.btn_href} className="text-primary card-title"> {message.fields.btn_title} <span className="fe fe-chevrons-right ml-2"></span></a>
                            </div>
                            <div className="col-12 col-md-6 d-none d-md-block">
                                <div className="align-items-center justify-content-center">
                                    <img className="img-fluid rounded" src={message.fields.img[0].url}/>
                                </div>
                            </div>
                        </div>
                        
                    </section>
                    : null
                    }
                

                    <section className="container">
                        {stepready4sale && stepready4sale.length > 0
                        ? <CasoureSlider data = {stepready4sale}/>
                        : null
                        }
                        <hr className="mt-2"/>
                    </section>
                    
                    {pricing
                    ?
                        <section className="container custom pt-5 pb-6 pt-md-6">
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
                                        <h1 className="text-center text-primary " style={{letterSpacing:"-2px"}}> {pricing.fields.packprice3}
                                            <span className="small font-weight-normal ml-2" style={{letterSpacing:"0px"}}>vnđ</span>
                                        </h1>
                                    </div>
                                    <p className="text-center mb-0 mt-n4 text-muted">{pricing.fields.packdesc3}</p>
                                </div>
                            </div>

                            <p className="text-center mt-5"> {pricing.fields.hint}</p>

                            <div className="row align-items-center justify-content-center mt-3">                            
                                <a href={pricing.fields.btn_href} className="btn btn-primary btn-lg font-weight-bold" target="_blank">{pricing.fields.btn_title}</a>
                            </div>
                        </section>
                    : null
                    }                    
                </div>
                <Footer />
                
                
                <style jsx>{`
                // .bg-dark {
                //     background-color: #030303 !important;
                // }
                // .bg-dark p, .bg-dark h1, .bg-dark h2, .bg-dark h3 {
                //     color: white !important;
                // }
                // .bg-invert-to-white, .bg-theme-to-white {
                //     background-image: linear-gradient(to bottom, #030303 0%, #030303 50%, #fff 50%, #fff 100%);
                // }
                

                `}</style>
            </>
        )
    }
}