import Head from 'next/head'
import Nav from '../components/nav'
import CasoureSlider from '../components/carousel-slider'
import Footer from '../components/footer'

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
            filterByFormula: `type = "logo"`,
            maxRecords : 1
        },{tableName:"brand"});
        const menuRes = await airtable.read({
            filterByFormula: `type = "menu-item"`,
            sort: [{field: 'sort', direction: 'asc'}]
        },{tableName:"brand"});
    
        var brandRes = {
            logo: logoRes[0].fields.img[0].url,
            menuitem: menuRes
        }
        console.log("brand: ", brandRes)
        currentComponent.setState({brand: brandRes})
        // end get data of brand
        
        
        // start get data of hero
        const heroRes = await airtable.read({
            filterByFormula: `isActive = "1"`,
            maxRecords: 1
        },{tableName:"hero"});
        console.log("hero: ", heroRes)
        currentComponent.setState({hero: heroRes[0]})
        // end get data of brand
    
        // start get data of feature
        const featureRes = await airtable.read({
            filterByFormula: `isActive = "1"`,
            sort: [{field: 'sort', direction: 'asc'}]
        },{tableName:"feature"});
        console.log("feature: ", featureRes)
        currentComponent.setState({feature: featureRes})
        // end get data of hero
    
        // start get data of message
        const messageRes = await airtable.read({
            filterByFormula: `isActive = "1"`,
            maxRecords: 1
        },{tableName:"message"});    
        console.log(messageRes)
        currentComponent.setState({message: messageRes[0]})
        // end get data of feature
    
        // start get data of stepready4saleRes
        const stepready4saleRes = await airtable.read({
            filterByFormula: `isActive = "1"`,
            sort: [{field: 'step', direction: 'asc'}]
        },{tableName:"stepready4sale"});
        
        console.log(stepready4saleRes)
        currentComponent.setState({stepready4sale: stepready4saleRes})
        // end get data of stepready4saleRes
    
        // start get data of benefitRes
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

        // var benefitRes = {
        //     headline: benefitHeadlineRes[0].fields.title,
        //     item: benefitItemRes
        // }

        console.log("benefit: ", benefitRes)
        currentComponent.setState({benefit: benefitRes})
        // end get data of benefitRes

        // end get data of pricing
        const pricingRes = await airtable.read({
            filterByFormula: `isActive = "1"`,
            maxRecords: 1
        },{tableName:"pricing"});
        console.log(pricingRes)
        currentComponent.setState({pricing: pricingRes[0]})
        // end get data of pricing
    
        // start get data of more
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
    
        console.log("more res: ", moreRes)
        currentComponent.setState({more: moreRes})
        // end get data of more

        // start get data of solution
        const solutionRes = await airtable.read({
            filterByFormula: `isActive = "1"`,
            maxRecords: 1
        },{tableName:"solution"});
        
        console.log("solution res: ", solutionRes)
        currentComponent.setState({solution: solutionRes[0]})
        // end get data from solution

        // start get data of call2action
        const call2actionRes = await airtable.read({
            filterByFormula: `isActive = "1"`,
            maxRecords: 1
        },{tableName:"call2action"});
        console.log("call2action res: ", call2actionRes)
        currentComponent.setState({call2action: call2actionRes[0]})
        // end get data of call2action
        
    }   
    render() {
        const {brand, hero, feature, message, benefit, pricing, more, solution, call2action, stepready4sale} = this.state
        return (
            <>
                <Head>
                    <title>CabinEat - Trang chủ</title>
                </Head>
                {brand 
                ? <Nav brand = {brand}/>
                : null
                }
                
                    
                <main className="main-content theme-royal-blue" id="main-content" role="main">
                    <div className="auto-layout-collapse">
                        {hero 
                        ? 
                        <>
                            <section className="hero section-hero bg-invert">
                                <div className="content">
                                    <div className="content-wrapper">
                                        <div className="font-eyebrow-large">{hero.fields.pre_title}</div>
                                        <h1 className="balance-text markdown-custom">
                                            <ReactMarkdown source={hero.fields.title} />
                                        </h1>
                                        <p className="font-size-large balance-text" >
                                            <ReactMarkdown source={hero.fields.sub_title} />
                                        </p>
                                        <div className="grid grid-space-line font-size-small">
                                            <div className="column">
                                                <div className="display-inline-block">
                                                    <a className="button gap-none" href={hero.fields.call2action_href}>{hero.fields.call2action}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="section-screenshot bg-invert-to-white pad-bottom-small">
                                <div className="sticky-banner-waypoint-on" style={{position: "absolute", top: "0px"}}></div>
                                <div>
                                    <div className="apropos-entry position-relative">
                                        <div className="picture">
                                            <picture className="apropos apropos-fluid">
                                                <source media="(min-width: 1292px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1680&amp;h=888&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=3360&amp;h=1776&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1680&amp;h=888&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=3360&amp;h=1776&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
                                                    <source media="(min-width: 1292px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1680&amp;h=888&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=3360&amp;h=1776&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1680&amp;h=888&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=3360&amp;h=1776&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x"/>
                                                        <source media="(min-width: 1024px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1291&amp;h=682&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=2582&amp;h=1364&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1291&amp;h=682&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=2582&amp;h=1364&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
                                                            <source media="(min-width: 1024px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1291&amp;h=682&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=2582&amp;h=1364&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1291&amp;h=682&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=2582&amp;h=1364&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x"/>
                                                                <source media="(min-width: 718px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1023&amp;h=541&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=2046&amp;h=1082&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1023&amp;h=541&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=2046&amp;h=1082&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
                                                                    <source media="(min-width: 718px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1023&amp;h=541&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=2046&amp;h=1082&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1023&amp;h=541&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=2046&amp;h=1082&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x"/>
                                                                        <source media="(min-width: 480px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=717&amp;h=932&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=1434&amp;h=1864&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=717&amp;h=932&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=1434&amp;h=1864&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
                                                                            <source media="(min-width: 480px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=717&amp;h=932&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=1434&amp;h=1864&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=717&amp;h=932&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=1434&amp;h=1864&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x"/>
                                                                                <source media="(min-width: 374px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=479&amp;h=623&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=958&amp;h=1246&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=479&amp;h=623&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=958&amp;h=1246&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
                                                                                    <source media="(min-width: 374px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=479&amp;h=623&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=958&amp;h=1246&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=479&amp;h=623&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=958&amp;h=1246&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x"/>
                                                                                        <source type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=373&amp;h=485&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=746&amp;h=970&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=373&amp;h=485&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=746&amp;h=970&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
                                                                                            <img data-srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=373&amp;h=485&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=746&amp;h=970&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=373&amp;h=485&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=746&amp;h=970&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x" className="loaded" data-ll-status="loaded"/>
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                        : null
                        }

                        {feature
                        ?
                        <section className="section-multi-column bg-white auto-layout flex-valign-middle">
                            <div className="content">
                                <div className="grid-3-at-medium multi-column-grid align-center grid-space-small grid-align-center grid-valign-top grid-row-equal-heights">                                
                                    {feature.map((item, index)=> (
                                        <div className="column" key={item.id}>
                                            <div data-id={item.id}>
                                                <div className="grid grid-space-line">
                                                    <div className="column">
                                                        <div className="position-relative">
                                                            <img className="display-inline-block" src={item.fields.img[0].url}/>
                                                        </div>
                                                    </div>
                                                    <div className="column">
                                                        <div className="headings-compact font-size-small">
                                                            <h3 className="balance-text h6">{item.fields.title}</h3>
                                                            <p>{item.fields.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                        : null

                        }
                                                
                        <hr className="section-border content" data-entry-id="7e0qhknUVUEYcAgCAcaAgc"/>
                        
                        {message
                        ?
                        <section className="section-multi-column bg-white auto-layout flex-valign-middle">
                            <div className="content">
                                <div className="row">
                                    <div className="col-12 col-md-6 col-xl-6 d-block d-sm-none mb-5">
                                        <div className="position-relative mt-5 mt-md-0">
                                            <div id="uid-2AMupnetDch5e76zj9Wau7-f950d36e4b2ff51c61b9667412980e727858a9eac30c8d98cc50ebf2658e08a6" className="picture">
                                                <img src={message.fields.img[0].url}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-6">
                                        <div className="headings-compact font-size-large">
                                            <h3 className="balance-text h2 markdown-custom">
                                                <ReactMarkdown source={message.fields.title} />
                                            </h3>
                                            <p>{message.fields.desc}</p>
                                            {message.fields.btn_title
                                            ? <div className="grid grid-space-base">
                                                <div className="column">
                                                    <div className="display-inline-block">
                                                        <a className="" href={message.fields.btn_href}>{message.fields.btn_title}<span className=" ml-2 arrow no-wrap"></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            : null
                                            }
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-6 d-sm-block d-none">
                                        <div className="position-relative mt-5 mt-md-0">
                                            <div id="uid-2AMupnetDch5e76zj9Wau7-f950d36e4b2ff51c61b9667412980e727858a9eac30c8d98cc50ebf2658e08a6" className="picture">
                                                <img src={message.fields.img[0].url}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        : null
                        }
                        
                        {stepready4sale && stepready4sale.length > 0
                        ? <CasoureSlider data = {stepready4sale}/>
                        : null
                        }
                        
                        <hr className="section-border content"/> 
                        
                        { benefit && benefit.length > 0
                        ? 
                        <>
                            <section className="section-one-column bg-white auto-layout flex-valign-middle">
                                <div className="content pad-top-large">
                                    <div className="intro intro font-size-base">
                                        <h2 className="balance-text h2 markdown-custom">
                                            <ReactMarkdown source={benefit.headline} />
                                        </h2>
                                    </div>
                                </div>
                            </section>
                            <section className="section-multi-column bg-white auto-layout flex-valign-middle">
                                <div className="content">
                                    {benefit.item.map((item, index)=>{
                                        return index%2 === 0
                                        ? 
                                        <div className="row mb-5" key={index} data-id={item.id}>
                                            <div className="col-12 col-md-6 col-xl-6 mb-5 mb-md-0">
                                                <div className="picture">
                                                    <img src={item.fields.img[0].url} />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-6">
                                                <div className="headings-compact font-size-normal markdown-custom">
                                                    <h4 id="delivery">{item.fields.title}</h4>
                                                    <p><ReactMarkdown source={item.fields.desc} /></p>
                                                </div>
                                            </div>                                
                                        </div>
                                        : 
                                        <div className="row mb-5">
                                            <div className="col-12 col-md-6 col-xl-6 mb-5 mb-md-0 d-block d-sm-none">
                                                <div className="picture">
                                                    <img src={item.fields.img[0].url} />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-6 mt-auto">
                                                <div className="headings-compact font-size-normal markdown-custom">
                                                    <h4 id="in-house-delivery">{item.fields.title}</h4>
                                                    <p><ReactMarkdown source={item.fields.desc} /></p>
                                                </div>
                                            </div>         
                                            <div className="col-12 col-md-6 col-xl-6 mb-5 mb-md-0 d-none d-sm-block">
                                                <div className="picture">
                                                    <img src={item.fields.img[0].url} />
                                                </div>
                                            </div>                       
                                        </div>
                                    })}                                    
                                </div>
                            </section>
                        </>
                        : null                            
                        }
                        

                        {pricing
                        ? 
                        <>
                            <section className="section-multi-column bg-white auto-layout flex-valign-middle">
                                <div className="content">
                                    <div className="intro font-size-base">
                                        <h2 className="balance-text h2 markdown-custom">
                                            <ReactMarkdown source={pricing.fields.headline} />
                                        </h2>
                                    </div>
                                    <div className="grid-3-at-medium multi-column-grid align-center grid-space-small grid-align-center grid-valign-top grid-row-equal-heights">
                                        <div className="column">
                                            <a className="tile">
                                                <div className="tile-content">
                                                    <div className="grid-space-line">
                                                        <div className="column">
                                                            <div className="grid-space-base">
                                                                <div className="column">
                                                                    <h3 className="balance-text h6">{pricing.fields.packtitle1}</h3>
                                                                </div>
                                                                <div className="column tile-body font-size-normal">
                                                                    <h2 className="color-royal-blue">{pricing.fields.packprice1} <span className="small">vnđ</span></h2>
                                                                    <p>{pricing.fields.packdesc1}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="column">
                                            <a className="tile">
                                                <div className="tile-content">
                                                    <div className="grid-space-line">
                                                        <div className="column">
                                                            <div className="grid-space-base">
                                                                <div className="column">
                                                                    <h3 className="balance-text h6">{pricing.fields.packtitle2}</h3>
                                                                </div>
                                                                <div className="column tile-body font-size-normal">
                                                                    <h2 className="color-royal-blue">{pricing.fields.packprice2} <span className="small">vnđ</span></h2>
                                                                    <p>{pricing.fields.packdesc2}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="column">
                                            <a className="tile" data-entry-id="150lUUYLwaWQ675TRqPwlL">
                                                <div className="tile-content">
                                                    <div className="grid-space-line">
                                                        <div className="column">
                                                            <div className="grid-space-base">
                                                                <div className="column">
                                                                    <h3 className="balance-text h6">{pricing.fields.packtitle3}</h3>
                                                                </div>
                                                                <div className="column tile-body font-size-normal">
                                                                    <h2 className="color-royal-blue">{pricing.fields.packprice3} <span className="small">vnđ</span></h2>
                                                                    <p>{pricing.fields.packdesc3}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="section-one-column bg-white auto-layout flex-valign-middle">
                                <div className="content">
                                    <div className="intro intro font-size-base">
                                        <ReactMarkdown source={pricing.fields.hint} />
                                        <div className="grid grid-space-base">
                                            {pricing.fields.btn_title 
                                            ?
                                            <div className="column">
                                                {/* <div className="display-inline-block">
                                                    <a className="" href={pricing.fields.btn_href} target="_blank">
                                                    {pricing.fields.btn_title} <span className="arrow no-wrap"></span></a>
                                                </div> */}
                                                <div className="display-inline-block">
                                                    <a className="button gap-none" href={pricing.fields.btn_href} target="_blank">{pricing.fields.btn_title}</a>
                                                </div>
                                            </div>
                                            : null 

                                            }
                                        </div>
                                    </div>                                    
                                </div>
                            </section>
                        </>
                        : null
                        }
                                                
                        {more && more.length > 0
                        ? 
                        <>
                            <section className="section-screenshot bg-white">
                                <div className="picture">
                                    <img src={more.headline.img[0].url} />
                                </div>
                            </section>
                            
                            
                            <section className="section-one-column bg-white auto-layout flex-valign-middle">
                                <div className="content">
                                    <div className="intro intro font-size-base">
                                        <h2 className="balance-text h2">{more.headline.name}</h2>
                                    </div>
                                </div>
                            </section>


                            <section className="section-multi-column bg-white auto-layout flex-valign-middle">
                                <div className="content">
                                    <div className="grid-2-at-medium multi-column-grid align-left grid-space-small grid-align-center grid-valign-top grid-row-equal-heights">
                                        <div className="column">
                                            <div data-entry-id="6heGVf1aMGzBkcq0v2EfoB">
                                                <div className="grid grid-space-line">
                                                    <div className="column">
                                                        <div className="headings-compact font-size-normal">
                                                            <ul className="check-list grid-space-base">
                                                                {more.listitem.length > 0 && more.listitem.map((item, index) => {
                                                                    return index <= more.listitem.length /2
                                                                    ? <li><strong>{item.fields.name}:</strong> {item.fields.desc}</li>
                                                                    : ''
                                                                })}                                                        
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div data-entry-id="2EPHSkVQQKkonqmfJqoSkY">
                                                <div className="grid grid-space-line">
                                                    <div className="column">
                                                        <div className="headings-compact font-size-normal">
                                                            <ul className="check-list grid-space-base">
                                                                {more.listitem.length > 0 && more.listitem.map((item, index) => {
                                                                    return index > more.listitem.length /2
                                                                    ? <li><strong>{item.fields.name}:</strong> {item.fields.desc}</li>
                                                                    : ''
                                                                })}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                        : null
                        }
                        

                        {solution && solution.length > 0
                        ? <>
                            <hr className="section-border content"/> 
                            <section className="section-multi-column bg-white auto-layout flex-valign-middle">
                                <div className="content">
                                    <div className="intro font-size-base">
                                        <h2 className="balance-text h2">{solution.fields.headline}</h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-4 col-xl-4">
                                            <div className="column no-shrink icon-theme mb-3">
                                                <img src={solution.fields.img1[0].url} />
                                            </div>
                                            <div className="column">
                                                <div className="headings-compact font-size-small">
                                                    <h3 className="balance-text h6">{solution.fields.title1}</h3>
                                                    <ReactMarkdown source={solution.fields.desc1} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 col-xl-4  mt-5 mt-md-0">
                                            <div className="column no-shrink icon-theme mb-3">
                                                <img src={solution.fields.img2[0].url} />
                                            </div>
                                            <div className="column">
                                                <div className="headings-compact font-size-small">
                                                    <h3 className="balance-text h6">{solution.fields.title2}</h3>
                                                    <ReactMarkdown source={solution.fields.desc2} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 col-xl-4 mt-5 mt-md-0">
                                            <div className="column no-shrink icon-theme mb-3">
                                                <img src={solution.fields.img3[0].url} />
                                            </div>
                                            <div className="column">
                                                <div className="headings-compact font-size-small">
                                                    <h3 className="balance-text h6">{solution.fields.title3}</h3>
                                                    <ReactMarkdown source={solution.fields.desc3} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                        
                            </section>

                        </>
                        :null
                        }
                        
                        {call2action && call2action.length > 0
                        ?<>
                            <section className="section-one-column bg-accent auto-layout flex-valign-middle">
                                <div className="content pad-top-large">
                                    <div className="intro intro font-size-base">
                                        <h2 className="balance-text h2">{call2action.fields.headline}</h2>
                                        <p>{call2action.fields.desc}</p>
                                        <div className="grid grid-space-base">
                                            <div className="column">
                                                <div className="display-inline-block">
                                                    <a className="button gap-none" href={call2action.fields.btn_href} target="_blank">{call2action.fields.btn_title}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                        : null
                        }
                    </div>
                </main>
                
                <Footer />
                
                <style jsx>{`
                .navbar > ul li { 
                    list-style-type: none; 
                }
                `}</style>
            </>
        )
    }
}

// function HomePage({brand, hero, feature, message, benefit, pricing, more, solution, call2action, stepready4sale}) {
//     return <>
//         <Head>
//             <title>CabinEat - Trang chủ</title>
//         </Head>

//         <Nav 
//             brand = {brand}
//         />
            
//         <main className="main-content theme-royal-blue" id="main-content" role="main">
//             <div className="auto-layout-collapse">
//                 <section className="hero section-hero bg-invert">
//                     <div className="content">
//                         <div className="content-wrapper">
//                             <div className="font-eyebrow-large">{hero.fields.pre_title}</div>
//                             <h1 className="balance-text markdown-custom">
//                                 <ReactMarkdown source={hero.fields.title} />
//                             </h1>
//                             <p className="font-size-large balance-text" >
//                                 <ReactMarkdown source={hero.fields.sub_title} />
//                             </p>
//                             <div className="grid grid-space-line font-size-small">
//                                 <div className="column">
//                                     <div className="display-inline-block">
//                                         <a className="button gap-none" href={hero.fields.call2action_href}>{hero.fields.call2action}</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
                
//                 <section className="section-screenshot bg-invert-to-white pad-bottom-small">
//                     <div className="sticky-banner-waypoint-on" style={{position: "absolute", top: "0px"}}></div>
//                     <div>
//                         <div className="apropos-entry position-relative">
//                             <div className="picture">
//                                 <picture className="apropos apropos-fluid">
//                                     <source media="(min-width: 1292px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1680&amp;h=888&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=3360&amp;h=1776&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1680&amp;h=888&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=3360&amp;h=1776&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
//                                         <source media="(min-width: 1292px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1680&amp;h=888&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=3360&amp;h=1776&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1680&amp;h=888&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=3360&amp;h=1776&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x"/>
//                                             <source media="(min-width: 1024px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1291&amp;h=682&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=2582&amp;h=1364&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1291&amp;h=682&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=2582&amp;h=1364&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
//                                                 <source media="(min-width: 1024px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1291&amp;h=682&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=2582&amp;h=1364&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1291&amp;h=682&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=2582&amp;h=1364&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x"/>
//                                                     <source media="(min-width: 718px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1023&amp;h=541&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=2046&amp;h=1082&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1023&amp;h=541&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=2046&amp;h=1082&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
//                                                         <source media="(min-width: 718px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1023&amp;h=541&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=2046&amp;h=1082&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=1023&amp;h=541&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/1uv3b3FGHKlEtBX5cOlJyQ/9f7fdce796cb7c95fbdbf5b3be20eb82/XL-SOS-restaurants-subpage.png?w=2046&amp;h=1082&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x"/>
//                                                             <source media="(min-width: 480px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=717&amp;h=932&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=1434&amp;h=1864&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=717&amp;h=932&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=1434&amp;h=1864&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
//                                                                 <source media="(min-width: 480px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=717&amp;h=932&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=1434&amp;h=1864&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=717&amp;h=932&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=1434&amp;h=1864&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x"/>
//                                                                     <source media="(min-width: 374px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=479&amp;h=623&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=958&amp;h=1246&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=479&amp;h=623&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=958&amp;h=1246&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
//                                                                         <source media="(min-width: 374px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=479&amp;h=623&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=958&amp;h=1246&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=479&amp;h=623&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=958&amp;h=1246&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x"/>
//                                                                             <source type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=373&amp;h=485&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=746&amp;h=970&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=373&amp;h=485&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=746&amp;h=970&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
//                                                                                 <img data-srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=373&amp;h=485&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=746&amp;h=970&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=373&amp;h=485&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/4syx3nTSAbrCFey8TWcO5e/b8676e166ea3883dc73a99551b169dba/S-SOS-restaurants-subpage.png?w=746&amp;h=970&amp;fm=jpg&amp;q=85&amp;bg=rgb%3A030303&amp;fit=scale&amp;fl=progressive 2x" className="loaded" data-ll-status="loaded"/>
//                                 </picture>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="section-multi-column bg-white auto-layout flex-valign-middle">
//                     <div className="content">
//                         <div className="grid-3-at-medium multi-column-grid align-center grid-space-small grid-align-center grid-valign-top grid-row-equal-heights">                                
//                             <div className="column">
//                                 <div data-entry-id="7HMLEyeoNGqgmZ33D2R1BF">
//                                     <div className="grid grid-space-line">
//                                         <div className="column">
//                                             <div className="position-relative">
//                                                 <img className="display-inline-block" src={feature.fields.img1[0].url}/>
//                                             </div>
//                                         </div>
//                                         <div className="column">
//                                             <div className="headings-compact font-size-small">
//                                                 <h3 className="balance-text h6" data-title-for="7HMLEyeoNGqgmZ33D2R1BF" >{feature.fields.title1}</h3>
//                                                 <p>{feature.fields.desc1}</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="column">
//                                 <div data-entry-id="7e8qnUTyqWt19ik7VP5jkf">
//                                     <div className="grid grid-space-line">
//                                         <div className="column">
//                                             <div className="position-relative">
//                                                 <img className="display-inline-block" src={feature.fields.img2[0].url}/>
//                                             </div>
//                                         </div>
//                                         <div className="column">
//                                             <div className="headings-compact font-size-small">
//                                                 <h3 className="balance-text h6" data-title-for="7e8qnUTyqWt19ik7VP5jkf" >{feature.fields.title2}</h3>
//                                                 <p>{feature.fields.desc2}</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="column">
//                                 <div data-entry-id="5E2a3qwOyxNiOOFGCCN5ZS">
//                                     <div className="grid grid-space-line">
//                                         <div className="column">
//                                             <div className="position-relative">
//                                                 <img className="display-inline-block" src={feature.fields.img3[0].url}/>
//                                             </div>
//                                         </div>
//                                         <div className="column">
//                                             <div className="headings-compact font-size-small">
//                                                 <h3 className="balance-text h6">{feature.fields.title3}</h3>
//                                                 <p>{feature.fields.desc3}</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
                
//                 <hr className="section-border content" data-entry-id="7e0qhknUVUEYcAgCAcaAgc"/>
                
//                 <section className="section-multi-column bg-white auto-layout flex-valign-middle">
//                     <div className="content">
//                         <div className="row">
//                             <div className="col-12 col-md-6 col-xl-6 d-block d-sm-none mb-5">
//                                 <div className="position-relative mt-5 mt-md-0">
//                                     <div id="uid-2AMupnetDch5e76zj9Wau7-f950d36e4b2ff51c61b9667412980e727858a9eac30c8d98cc50ebf2658e08a6" className="picture">
//                                         <img src={message.fields.img[0].url}/>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-12 col-md-6 col-xl-6">
//                                 <div className="headings-compact font-size-large">
//                                     <h3 className="balance-text h2 markdown-custom">
//                                         <ReactMarkdown source={message.fields.title} />
//                                     </h3>
//                                     <p>{message.fields.desc}</p>
//                                     {message.fields.btn_title
//                                     ? <div className="grid grid-space-base">
//                                         <div className="column">
//                                             <div className="display-inline-block">
//                                                 <a className="" href={message.fields.btn_href}>{message.fields.btn_title}<span className=" ml-2 arrow no-wrap"></span></a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     : null

//                                     }
//                                 </div>
//                             </div>
//                             <div className="col-12 col-md-6 col-xl-6 d-sm-block d-none">
//                                 <div className="position-relative mt-5 mt-md-0">
//                                     <div id="uid-2AMupnetDch5e76zj9Wau7-f950d36e4b2ff51c61b9667412980e727858a9eac30c8d98cc50ebf2658e08a6" className="picture">
//                                         <img src={message.fields.img[0].url}/>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 <CasoureSlider 
//                     data = {stepready4sale}
//                 />

//                 <hr className="section-border content"/> 
                
//                 <section className="section-one-column bg-white auto-layout flex-valign-middle">
//                     <div className="content pad-top-large">
//                         <div className="intro intro font-size-base">
//                             <h2 className="balance-text h2 markdown-custom">
//                                 <ReactMarkdown source={benefit.fields.headline} />
//                             </h2>
//                         </div>
//                     </div>
//                 </section>


//                 <section className="section-multi-column bg-white auto-layout flex-valign-middle">
//                     <div className="content">
//                         <div className="row">
//                             <div className="col-12 col-md-6 col-xl-6 mb-5 mb-md-0">
//                                 <div className="picture">
//                                     <img src={benefit.fields.img1[0].url} />
//                                 </div>
//                             </div>
//                             <div className="col-12 col-md-6 col-xl-6">
//                                 <div className="headings-compact font-size-normal">
//                                     <h4 id="delivery">{benefit.fields.title1}</h4>
//                                     <p><ReactMarkdown source={benefit.fields.desc1} /></p>
//                                 </div>
//                             </div>                                
//                         </div>

//                         <div className="row mt-5">
//                             <div className="col-12 col-md-6 col-xl-6 mb-5 mb-md-0 d-block d-sm-none">
//                                 <div id="uid-6xr3DaitQccubioFlA4Oab-9dcbe964d494dd98ca16aaa2fc2d480e87a4cce18aa55c7f33c27e59190274dd" className="picture">
//                                     <img src={benefit.fields.img2[0].url} />
//                                 </div>
//                             </div>
//                             <div className="col-12 col-md-6 col-xl-6 mt-auto">
//                                 <div className="headings-compact font-size-normal">
//                                     <h6 id="in-house-delivery">{benefit.fields.title2}</h6>
//                                     <p><ReactMarkdown source={benefit.fields.desc2} /></p>
//                                 </div>
//                             </div>         
//                             <div className="col-12 col-md-6 col-xl-6 mb-5 mb-md-0 d-none d-sm-block">
//                                 <div id="uid-6xr3DaitQccubioFlA4Oab-9dcbe964d494dd98ca16aaa2fc2d480e87a4cce18aa55c7f33c27e59190274dd" className="picture">
//                                     <img src={benefit.fields.img2[0].url} />
//                                 </div>
//                             </div>                       
//                         </div>
//                     </div>
//                 </section>
                                                    
                
//                 <section className="section-multi-column bg-white auto-layout flex-valign-middle">
//                     <div className="content">
//                         <div className="intro font-size-base">
//                             <h2 className="balance-text h2 markdown-custom">
//                                 <ReactMarkdown source={pricing.fields.headline} />
//                             </h2>
//                         </div>
//                         <div className="grid-2-at-medium multi-column-grid align-center grid-space-small grid-align-center grid-valign-top grid-row-equal-heights">
//                             <div className="column">
//                                 <a className="tile">
//                                     <div className="tile-content">
//                                         <div className="grid-space-line">
//                                             <div className="column">
//                                                 <div className="grid-space-base">
//                                                     <div className="column">
//                                                         <h3 className="balance-text h6">{pricing.fields.packtitle1}</h3>
//                                                     </div>
//                                                     <div className="column tile-body font-size-normal">
//                                                         <h2 className="color-royal-blue">{pricing.fields.packprice1} <span className="small">vnđ</span></h2>
//                                                         <p>{pricing.fields.packdesc1}</p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </a>
//                             </div>
//                             <div className="column">
//                                 <a className="tile" data-entry-id="150lUUYLwaWQ675TRqPwlL">
//                                     <div className="tile-content">
//                                         <div className="grid-space-line">
//                                             <div className="column">
//                                                 <div className="grid-space-base">
//                                                     <div className="column">
//                                                         <h3 className="balance-text h6">{pricing.fields.packtitle2}</h3>
//                                                     </div>
//                                                     <div className="column tile-body font-size-normal">
//                                                         <h2 className="color-royal-blue">{pricing.fields.packprice2} <span className="small">vnđ</span></h2>
//                                                         <p>{pricing.fields.packdesc2}</p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
                
//                 <section className="section-one-column bg-white auto-layout flex-valign-middle">
//                     <div className="content">
//                         <div className="intro intro font-size-base">
//                             <ReactMarkdown source={pricing.fields.hint} />
//                             <div className="grid grid-space-base">
//                                 <div className="column">
//                                     <div className="display-inline-block">
//                                         <a className="" href={pricing.fields.btn_href} target="_blank">
//                                         {pricing.fields.btn_title} <span className="arrow no-wrap"></span></a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="section-screenshot bg-white">
//                     <div className="picture">
//                         <img src={more.headline.img[0].url} />
//                     </div>
//                 </section>
                
                
//                 <section className="section-one-column bg-white auto-layout flex-valign-middle">
//                     <div className="content">
//                         <div className="intro intro font-size-base">
//                             <h2 className="balance-text h2">{more.headline.name}</h2>
//                         </div>
//                     </div>
//                 </section>
                
//                 <section className="section-multi-column bg-white auto-layout flex-valign-middle">
//                     <div className="content">
//                         <div className="grid-2-at-medium multi-column-grid align-left grid-space-small grid-align-center grid-valign-top grid-row-equal-heights">
//                             <div className="column">
//                                 <div data-entry-id="6heGVf1aMGzBkcq0v2EfoB">
//                                     <div className="grid grid-space-line">
//                                         <div className="column">
//                                             <div className="headings-compact font-size-normal">
//                                                 <ul className="check-list grid-space-base">
//                                                     {more.listitem.length > 0 && more.listitem.map((item, index) => {
//                                                         return index <= more.listitem.length /2
//                                                         ? <li><strong>{item.fields.name}:</strong> {item.fields.desc}</li>
//                                                         : ''
//                                                     })}                                                        
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="column">
//                                 <div data-entry-id="2EPHSkVQQKkonqmfJqoSkY">
//                                     <div className="grid grid-space-line">
//                                         <div className="column">
//                                             <div className="headings-compact font-size-normal">
//                                                 <ul className="check-list grid-space-base">
//                                                     {more.listitem.length > 0 && more.listitem.map((item, index) => {
//                                                         return index > more.listitem.length /2
//                                                         ? <li><strong>{item.fields.name}:</strong> {item.fields.desc}</li>
//                                                         : ''
//                                                     })}
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 <hr className="section-border content"/> 

//                 <section className="section-multi-column bg-white auto-layout flex-valign-middle">
//                     <div className="content">
//                         <div className="intro font-size-base">
//                             <h2 className="balance-text h2">{solution.fields.headline}</h2>
//                         </div>
//                         <div className="row">
//                             <div className="col-12 col-md-4 col-xl-4">
//                                 <div className="column no-shrink icon-theme mb-3">
//                                     <img src={solution.fields.img1[0].url} />
//                                 </div>
//                                 <div className="column">
//                                     <div className="headings-compact font-size-small">
//                                         <h3 className="balance-text h6">{solution.fields.title1}</h3>
//                                         <ReactMarkdown source={solution.fields.desc1} />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-12 col-md-4 col-xl-4  mt-5 mt-md-0">
//                                 <div className="column no-shrink icon-theme mb-3">
//                                     <img src={solution.fields.img2[0].url} />
//                                 </div>
//                                 <div className="column">
//                                     <div className="headings-compact font-size-small">
//                                         <h3 className="balance-text h6">{solution.fields.title2}</h3>
//                                         <ReactMarkdown source={solution.fields.desc2} />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-12 col-md-4 col-xl-4 mt-5 mt-md-0">
//                                 <div className="column no-shrink icon-theme mb-3">
//                                     <img src={solution.fields.img3[0].url} />
//                                 </div>
//                                 <div className="column">
//                                     <div className="headings-compact font-size-small">
//                                         <h3 className="balance-text h6">{solution.fields.title3}</h3>
//                                         <ReactMarkdown source={solution.fields.desc3} />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>                        
//                 </section>

                
//                 <section className="section-one-column bg-accent auto-layout flex-valign-middle">
//                     <div className="content pad-top-large">
//                         <div className="intro intro font-size-base">
//                             <h2 className="balance-text h2">{call2action.fields.headline}</h2>
//                             <p>{call2action.fields.desc}</p>
//                             <div className="grid grid-space-base">
//                                 <div className="column">
//                                     <div className="display-inline-block">
//                                         <a className="button gap-none" href={call2action.fields.btn_href} target="_blank">{call2action.fields.btn_title}</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </main>
        
//         <Footer />
        
//         <style jsx>{`
//         .navbar > ul li { 
//             list-style-type: none; 
//         }
//         `}</style>
//     </>
// }

// HomePage.getInitialProps = async ({query}) => {        
//     const logoRes = await airtable.read({
//         filterByFormula: `type = "logo"`,
//         maxRecords : 1
//     },{tableName:"brand"});
//     const menuRes = await airtable.read({
//         filterByFormula: `type = "menu-item"`,
//         sort: [{field: 'sort', direction: 'asc'}]
//     },{tableName:"brand"});

//     var brandRes = {
//         logo: logoRes[0].fields.img[0].url,
//         menuitem: menuRes
//     }
    
    
//     console.log("brand: ", brandRes)

//     const heroRes = await airtable.read({
//         filterByFormula: `isActive = "1"`,
//         maxRecords: 1
//     },{tableName:"hero"});

//     console.log(heroRes)

//     const featureRes = await airtable.read({
//         filterByFormula: `isActive = "1"`,
//         maxRecords: 1
//     },{tableName:"feature"});

//     const messageRes = await airtable.read({
//         filterByFormula: `isActive = "1"`,
//         maxRecords: 1
//     },{tableName:"message"});

//     console.log(messageRes)

//     const stepready4saleRes = await airtable.read({
//         sort: [{field: 'step', direction: 'asc'}]
//     },{tableName:"stepready4sale"});
    
//     console.log(stepready4saleRes)

//     const benefitRes = await airtable.read({
//         filterByFormula: `isActive = "1"`,
//         maxRecords: 1
//     },{tableName:"benefit"});

//     console.log(benefitRes)

//     const pricingRes = await airtable.read({
//         filterByFormula: `isActive = "1"`,
//         maxRecords: 1
//     },{tableName:"pricing"});

//     console.log(pricingRes)

    
//     const moreRes1 = await airtable.read({
//         filterByFormula: `type = "headline"`,
//         maxRecords: 1
//     },{tableName:"more"});
//     const moreRes2 = await airtable.read({
//         filterByFormula: `type = "list-item"`,
//     },{tableName:"more"});

//     var moreRes = {
//         headline: moreRes1[0].fields,
//         listitem: moreRes2
//     }    

//     console.log("more res: ", moreRes)

//     const solutionRes = await airtable.read({
//         filterByFormula: `isActive = "1"`,
//         maxRecords: 1
//     },{tableName:"solution"});

//     const call2actionRes = await airtable.read({
//         filterByFormula: `isActive = "1"`,
//         maxRecords: 1
//     },{tableName:"call2action"});


//     return { brand: brandRes, hero: heroRes[0], feature: featureRes[0], message: messageRes[0], stepready4sale: stepready4saleRes, benefit: benefitRes[0], pricing: pricingRes[0], more: moreRes, solution: solutionRes[0], call2action: call2actionRes[0]}
// }
  
// export default HomePage