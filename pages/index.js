import Head from 'next/head'
import Nav from '../components/nav'
import CasoureSlider from '../components/carousel-slider'
import ReactMarkdown from "react-markdown";

const AirtablePlus = require('airtable-plus');
const airtable = new AirtablePlus({
    baseID: 'appCZGNOFg53FFSE4',
    apiKey: 'keyLNupG6zOmmokND'
});

function HomePage({brand, hero, feature, message, benefit, pricing, more, solution, call2action}) {
    return <>
        <Head>
            <title>CabinEat - Trang chủ</title>
        </Head>

        <Nav 
            brand = {brand}
        />
            
        <main className="main-content theme-royal-blue" id="main-content" role="main">
            <div className="auto-layout-collapse">
                <section className="hero section-hero bg-invert">
                    <div className="content">
                        <div className="content-wrapper">
                            <div className="font-eyebrow-large">{hero.fields.pre_title}</div>
                            <h1 className="balance-text">{hero.fields.title}</h1>
                            <p className="font-size-large balance-text" >{hero.fields.sub_title}</p>
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
                
                <section className="section-screenshot bg-invert-to-white pad-bottom-small" data-entry-id="1yuPhizpTvVcjBBPavXdy4" data-frame-type="full-width">
                    <div className="sticky-banner-waypoint-on" style={{position: "absolute", top: "0px"}}></div>
                    <div>
                        <div className="apropos-entry position-relative" data-entry-id="62e3N9gF8S8mCKp8mSxkmX">
                            <div id="uid-62e3N9gF8S8mCKp8mSxkmX-fcb7d26426839521a2318280b727f9014851040abd5b7743a496f8e1daa3b7a8" className="picture">
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

                <section className="section-multi-column bg-white auto-layout flex-valign-middle">
                    <div className="content">
                        <div className="grid-3-at-medium multi-column-grid align-center grid-space-small grid-align-center grid-valign-top grid-row-equal-heights">                                
                            <div className="column">
                                <div data-entry-id="7HMLEyeoNGqgmZ33D2R1BF">
                                    <div className="grid grid-space-line">
                                        <div className="column">
                                            <div className="position-relative">
                                                <img className="display-inline-block" src={feature.fields.img1[0].url}/>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="headings-compact font-size-small">
                                                <h3 className="balance-text h6" data-title-for="7HMLEyeoNGqgmZ33D2R1BF" >{feature.fields.title1}</h3>
                                                <p>{feature.fields.desc1}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div data-entry-id="7e8qnUTyqWt19ik7VP5jkf">
                                    <div className="grid grid-space-line">
                                        <div className="column">
                                            <div className="position-relative">
                                                <img className="display-inline-block" src={feature.fields.img2[0].url}/>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="headings-compact font-size-small">
                                                <h3 className="balance-text h6" data-title-for="7e8qnUTyqWt19ik7VP5jkf" >{feature.fields.title2}</h3>
                                                <p>{feature.fields.desc2}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div data-entry-id="5E2a3qwOyxNiOOFGCCN5ZS">
                                    <div className="grid grid-space-line">
                                        <div className="column">
                                            <div className="position-relative">
                                                <img className="display-inline-block" src={feature.fields.img3[0].url}/>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="headings-compact font-size-small">
                                                <h3 className="balance-text h6">{feature.fields.title3}</h3>
                                                <p>{feature.fields.desc3}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <hr className="section-border content" data-entry-id="7e0qhknUVUEYcAgCAcaAgc"/>
                
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
                                    <div className="grid grid-space-base">
                                        <div className="column">
                                            <div className="display-inline-block">
                                                <a className="" href={message.fields.btn_href}>{message.fields.btn_title}<span className=" ml-2 arrow no-wrap"></span></a>
                                            </div>
                                        </div>
                                    </div>
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

                <CasoureSlider />

                <hr className="section-border content"/> 
                
                <section className="section-one-column bg-white auto-layout flex-valign-middle">
                    <div className="content pad-top-large">
                        <div className="intro intro font-size-base">
                            <h2 className="balance-text h2 markdown-custom">
                                <ReactMarkdown source={benefit.fields.headline} />
                            </h2>
                        </div>
                    </div>
                </section>


                <section className="section-multi-column bg-white auto-layout flex-valign-middle">
                    <div className="content">
                        <div className="row">
                            <div className="col-12 col-md-6 col-xl-6 mb-5 mb-md-0">
                                <div className="picture">
                                    <img src={benefit.fields.img1[0].url} />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-6">
                                <div className="headings-compact font-size-normal">
                                    <h4 id="delivery">{benefit.fields.title1}</h4>
                                    <p><ReactMarkdown source={benefit.fields.desc1} /></p>
                                </div>
                            </div>                                
                        </div>

                        <div className="row mt-5">
                            <div className="col-12 col-md-6 col-xl-6 mb-5 mb-md-0 d-block d-sm-none">
                                <div id="uid-6xr3DaitQccubioFlA4Oab-9dcbe964d494dd98ca16aaa2fc2d480e87a4cce18aa55c7f33c27e59190274dd" className="picture">
                                    <img src={benefit.fields.img2[0].url} />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-6 mt-auto">
                                <div className="headings-compact font-size-normal">
                                    <h6 id="in-house-delivery">{benefit.fields.title2}</h6>
                                    <p><ReactMarkdown source={benefit.fields.desc2} /></p>
                                </div>
                            </div>         
                            <div className="col-12 col-md-6 col-xl-6 mb-5 mb-md-0 d-none d-sm-block">
                                <div id="uid-6xr3DaitQccubioFlA4Oab-9dcbe964d494dd98ca16aaa2fc2d480e87a4cce18aa55c7f33c27e59190274dd" className="picture">
                                    <img src={benefit.fields.img2[0].url} />
                                </div>
                            </div>                       
                        </div>
                    </div>
                </section>
                                                    
                
                <section className="section-multi-column bg-white auto-layout flex-valign-middle">
                    <div className="content">
                        <div className="intro font-size-base">
                            <h2 className="balance-text h2 markdown-custom">
                                <ReactMarkdown source={pricing.fields.headline} />
                            </h2>
                        </div>
                        <div className="grid-2-at-medium multi-column-grid align-center grid-space-small grid-align-center grid-valign-top grid-row-equal-heights">
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
                                <a className="tile" data-entry-id="150lUUYLwaWQ675TRqPwlL">
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
                        </div>
                    </div>
                </section>
                
                <section className="section-one-column bg-white auto-layout flex-valign-middle">
                    <div className="content">
                        <div className="intro intro font-size-base">
                            <ReactMarkdown source={pricing.fields.hint} />
                            <div className="grid grid-space-base">
                                <div className="column">
                                    <div className="display-inline-block">
                                        <a className="" href={pricing.fields.btn_href} target="_blank">
                                        {pricing.fields.btn_title} <span className="arrow no-wrap"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
            </div>
        </main>
        <footer className="page-footer">
            <div className="content pad-vert-medium">
                <nav className="tertiary" role="navigation">
                    <div className="grid-flex-at-extra-small grid-space-line grid-align-justify">
                        <div className="column no-shrink">
                            <div className="grid-auto-at-extra-small grid-col-space-base grid-row-space-line align-center">
                                <div className="column">
                                    <div className="popup-menu popup-menu-align-center popup-menu-align-left-at-extra-small">
                                        <a href="#" role="button"><span className="icon-flag icon-flag-AU"></span></a>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="popup-menu popup-menu-align-center popup-menu-align-left-at-extra-small">
                                        <a href="#" role="button">Tiếng Việt</a>                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <nav className="grid-auto grid-space-base grid-align-center" role="navigation">
                                <div className="column">
                                    <a href="#" title="Twitter">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                                            <path fill="#2E3B4E" d="M16.4 6.6v.5c0 4.8-3.3 10.1-9.3 10.1-1.9 0-3.6-.4-5-1.4.3 0 .5.1.8.1 1.5 0 3-.6 4.1-1.6-1.4 0-2.6-1.1-3.1-2.5.2 0 .4.1.6.1.3 0 .7 0 1-.1C3.9 11.4 3 9.9 3 8.1c0 .3.7.4 1.2.5-.9-.7-1.4-1.8-1.4-3 0-.7.1-1.3.4-1.8C4.8 6 7.1 7.4 9.8 7.6v-.9c0-2 1.5-3.9 3.3-3.9.9 0 1.8.7 2.4 1.4.7-.2 1.4-.5 2.1-.9-.2.8-.8 1.6-1.4 2 .6-.1 1.2-.3 1.8-.6-.4.8-1 1.4-1.6 1.9z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="column">
                                    <a href="#" title="Facebook">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                                            <path fill="#2E3B4E" d="M14.2 11l.4-3H11V6.3c0-.9.9-1.3 2.1-1.3h.9V2.1S12.7 2 11.6 2C9.3 2 8 3.4 8 6v2H5v3h3v7h3v-7h3.2z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="column">
                                    <a href="#" title="Instagram">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                                            <path fill="#2F3C4E" d="M17.8 6.7c0-.9-.2-1.4-.4-1.9-.2-.6-.5-1-1-1.4-.5-.5-.9-.7-1.4-1-.5-.2-1.1-.3-1.9-.4H10c-2.1 0-2.5 0-3.3.1-.9 0-1.4.2-1.9.4-.6.2-1 .4-1.4.9-.5.4-.7.9-1 1.4-.2.6-.3 1.1-.3 2-.1.7-.1 1-.1 3.2s0 2.5.1 3.3c0 .9.2 1.4.4 1.9.2.6.5 1 1 1.4s.9.7 1.4 1c.4.2 1.1.3 1.9.4H10c2.1 0 2.4 0 3.2-.1.9 0 1.4-.2 1.9-.4.6-.2 1-.5 1.4-1 .5-.5.7-.9 1-1.4.2-.5.3-1.1.4-1.9 0-.9.1-1 .1-3.2-.1-2.1-.1-2.5-.2-3.3zm-1.4 6.5c0 .8-.2 1.2-.2 1.5-.2.4-.3.6-.6.9-.2.2-.6.5-.9.6-.3.1-.7.2-1.5.2-.9 0-1.1.1-3.2.1s-2.4 0-3.2-.1c-.8 0-1.2-.2-1.5-.2-.5-.1-.7-.2-1-.6-.2-.2-.5-.6-.6-.9-.2-.3-.3-.7-.3-1.5 0-.9-.1-1.1-.1-3.2 0-2.2 0-2.4.1-3.2 0-.8.2-1.2.2-1.5.2-.4.3-.6.6-.9.2-.2.6-.5.9-.6.5-.1.9-.3 1.7-.3.9 0 1.2-.1 3.2-.1s2.3 0 3.1.1c.8 0 1.2.2 1.5.2.4.2.6.3.9.6.3.3.5.7.6 1 .2.3.3.7.3 1.5 0 .9.1 1.1.1 3.2 0 2.2 0 2.4-.1 3.2zM10 5.9c-2.2 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1 4-1.9 4-4.1-1.8-4.1-4-4.1m0 6.7c-1.4 0-2.6-1.2-2.6-2.6S8.5 7.4 10 7.4s2.6 1.2 2.6 2.6-1.2 2.6-2.6 2.6m5.1-6.8c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1"></path>
                                        </svg>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </nav>
                <div className="grid-flex-at-medium">
                    <div className="column expand align-center align-left-at-medium">
                        <p className="copyright">© 2020 CabinEat Pte. Ltd.</p>
                    </div>
                    <div className="column align-center align-right-at-medium">
                        <nav>
                            <ul className="destination-links reset grid-space-base">
                                <li><a href="#">Privacy Notice</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Government</a></li>
                                <li><a href="#">Square Financial Services Guide</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
        <style jsx>{`
        .navbar > ul li { 
            list-style-type: none; 
        }
        `}</style>
    </>
}

HomePage.getInitialProps = async ({query}) => {        
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

    const heroRes = await airtable.read({
        filterByFormula: `isActive = "1"`,
        maxRecords: 1
    },{tableName:"hero"});

    console.log(heroRes)

    const featureRes = await airtable.read({
        filterByFormula: `isActive = "1"`,
        maxRecords: 1
    },{tableName:"feature"});

    const messageRes = await airtable.read({
        filterByFormula: `isActive = "1"`,
        maxRecords: 1
    },{tableName:"message"});

    console.log(messageRes)

    const benefitRes = await airtable.read({
        filterByFormula: `isActive = "1"`,
        maxRecords: 1
    },{tableName:"benefit"});

    console.log(benefitRes)

    const pricingRes = await airtable.read({
        filterByFormula: `isActive = "1"`,
        maxRecords: 1
    },{tableName:"pricing"});

    console.log(pricingRes)

    
    const moreRes1 = await airtable.read({
        filterByFormula: `type = "headline"`,
        maxRecords: 1
    },{tableName:"more"});
    const moreRes2 = await airtable.read({
        filterByFormula: `type = "list-item"`,
    },{tableName:"more"});

    var moreRes = {
        headline: moreRes1[0].fields,
        listitem: moreRes2
    }    

    console.log("more res: ", moreRes)

    const solutionRes = await airtable.read({
        filterByFormula: `isActive = "1"`,
        maxRecords: 1
    },{tableName:"solution"});

    const call2actionRes = await airtable.read({
        filterByFormula: `isActive = "1"`,
        maxRecords: 1
    },{tableName:"call2action"});


    return { brand: brandRes, hero: heroRes[0], feature: featureRes[0], message: messageRes[0], benefit: benefitRes[0], pricing: pricingRes[0], more: moreRes, solution: solutionRes[0], call2action: call2actionRes[0]}
}
  
export default HomePage