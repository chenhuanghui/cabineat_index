import ReactMarkdown from "react-markdown";
const AirtablePlus = require('airtable-plus');
const airtable = new AirtablePlus({
    baseID: 'appCZGNOFg53FFSE4',
    apiKey: 'keyLNupG6zOmmokND',
    tableName: 'menu',
});

async function getMenu(){
    try {
        // allows for api params to be passed in from Airtable api
        const readRes = await airtable.read({});
        console.log(readRes)
        return readRes
    }
    catch(e) {
        console.error(e);
    }
}

function HomePage({menu, hero, feature, message, benefit, pricing}) {
    
    return <>
    <div className="PublicWebNav svelte-1hvfxdz">
        <div className="theme-royal-blue">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand mr-auto" href="./index.html">
                        {/* <img src="./assets/img/logo.svg" alt="..." className="navbar-brand-img"/> */}
                        <span className="logo svelte-atgojb">
                        <svg className="LogoJewel svelte-1ur14si" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44"><path fill="black" d="M36.65 0H7.354A7.354 7.354 0 0 0 0 7.354V36.65a7.354 7.354 0 0 0 7.354
                        7.354H36.65a7.353 7.353 0 0 0 7.354-7.354V7.354A7.352 7.352 0 0 0 36.65
                        0zm-.646 33.685a2.32 2.32 0 0 1-2.32 2.32H10.325a2.32 2.32 0 0
                        1-2.321-2.32v-23.36a2.32 2.32 0 0 1 2.321-2.321h23.359a2.32 2.32 0 0 1 2.32
                        2.321v23.36z" className="svelte-1ur14si"></path><path fill="black" d="M17.333 28.003c-.736 0-1.332-.6-1.332-1.339V17.34c0-.739.596-1.339
                        1.332-1.339h9.338c.738 0 1.332.6 1.332 1.339v9.324c0 .739-.594 1.339-1.332
                        1.339h-9.338z" className="svelte-1ur14si"></path></svg> <svg className="LogoWordmark svelte-j9c4sa" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 22" width="66" height="22"><path d="M11.2 10c-.7-.2-1.3-.4-1.8-.6C8.4 9 8 8.4 8 7.6c0-1.5 1.5-2.2 3-2.2 1.4 0
                        2.6.6 3.5 1.6l.1.1 1.2-.9-.1-.1c-1.1-1.4-2.7-2.2-4.6-2.2-1.2 0-2.4.3-3.2.9-1
                        .8-1.5 1.7-1.5 2.9 0 2.7 2.6 3.4 4.6 3.9 2.1.6 3.4 1 3.4 2.6s-1.3 2.6-3.2
                        2.6c-1 0-2.8-.3-3.9-2l-.1-.1-1.2.9v.1c1.1 1.6 2.9 2.5 5.1 2.5 2.9 0 4.9-1.6
                        4.9-4.1 0-2.8-2.7-3.5-4.8-4.1z" fill="black" className="svelte-j9c4sa"></path><path d="M25.5 9.5V8h1.4v14h-1.4v-5.5c-.8 1.1-2 1.7-3.4 1.7-2.7
                        0-4.5-2.1-4.5-5.2s1.9-5.2 4.5-5.2c1.4-.1 2.6.6 3.4 1.7zM19.1 13c0 2.9 1.6
                        3.9 3.2 3.9 2 0 3.3-1.5 3.3-3.9s-1.3-3.9-3.3-3.9c-2.4 0-3.2 2-3.2 3.9z" fill-rule="evenodd" clip-rule="evenodd" fill="black" className="svelte-j9c4sa"></path><path d="M36.2 8v5.5c0 1.9-1.3 3.3-3.2 3.3-1.5 0-2.3-.9-2.3-2.8V8h-1.4v6.4c0 2.4
                        1.3 3.8 3.5 3.8 1.4 0 2.5-.6 3.3-1.6V18h1.4V8h-1.3z" fill="black" className="svelte-j9c4sa"></path><path d="M40.3 9c1-.8 2.4-1.3 3.9-1.3 2.2 0 3.6 1.1 3.6 3V18h-1.4v-1.1c-.7.9-1.7
                        1.3-3.1 1.3-2.2 0-3.5-1.2-3.5-3.1 0-2.5 2.3-2.8 3.3-3 .2 0 .3-.1.5-.1 1.4-.2
                        2.7-.4 2.7-1.6 0-1.3-1.7-1.4-2.2-1.4-.9 0-2.2.3-3.1 1v.2L40.3 9zm.9 6.1c0
                        1.6 1.5 1.8 2.2 1.8 1.4 0 2.9-.8
                        2.9-2.9v-1.4c-.7.4-1.7.6-2.5.8l-.4.1c-1.5.1-2.2.5-2.2 1.6z" fill-rule="evenodd" clip-rule="evenodd" fill="black" className="svelte-j9c4sa"></path><path d="M55.9 8.2c-.3-.2-.9-.4-1.4-.4-1.1 0-2.2.6-2.8
                        1.5V8h-1.4v10h1.4v-5.4c0-2.4 1.3-3.4 2.7-3.4.4 0 .8.1 1.1.2l.1.1.3-1.3z" fill="black" className="svelte-j9c4sa"></path><path d="M56.3 13c0-3.1 1.9-5.3 4.7-5.3 2.7 0 4.5 1.9 4.5 4.7V13.2h-7.7c0 2.2 1.4
                        3.6 3.4 3.6 1.2 0 2.2-.5 2.8-1.3l.1-.1 1 .9-.1.1c-.7.8-1.9 1.8-3.9 1.8-2.9
                        0-4.8-2.1-4.8-5.2zm4.6-3.9c-1.7 0-2.9 1.1-3.1 2.9H64c-.1-1.4-1-2.9-3.1-2.9z" fill-rule="evenodd" clip-rule="evenodd" fill="black" className="svelte-j9c4sa"></path></svg> 
                        <span className="text svelte-j9c4sa">Square</span>
                        </span>
                    </a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-lg-auto">
                            <li className="nav-item" style={{color: "black"}}>Payments</li>
                            <li className="nav-item">Payments</li>
                            <li className="nav-item">Payments</li>
                            <li className="nav-item">Payments</li>
                        </ul>
                    </div>
                    <button className="navbar-toggler ml-auto btn btn-white" type="button"><span className="navbar-toggler-icon"></span></button>
                </div>
            </nav>
            
            <main className="main-content" id="main-content" role="main">
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
                                <div className="col-12 col-md-6 col-xl-6">
                                    <div className="headings-compact font-size-large">
                                        <h3 className="balance-text h2" >{message.fields.title}</h3>
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
                                <div className="col-12 col-md-6 col-xl-6">
                                    <div className="position-relative mt-5 mt-md-0">
                                        <div id="uid-2AMupnetDch5e76zj9Wau7-f950d36e4b2ff51c61b9667412980e727858a9eac30c8d98cc50ebf2658e08a6" className="picture">
                                            <img src={message.fields.img[0].url}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

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

                            <div className="row mt-5 mt-md-0">
                                <div className="col-12 col-md-6 col-xl-6 mb-5 mb-md-0">
                                    <div id="uid-6xr3DaitQccubioFlA4Oab-9dcbe964d494dd98ca16aaa2fc2d480e87a4cce18aa55c7f33c27e59190274dd" className="picture">
                                        <img src={benefit.fields.img2[0].url} />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-6 mt-auto">
                                    <div className="headings-compact font-size-normal">
                                        <h6 id="in-house-delivery">{benefit.fields.title2}</h6>
                                        <p>{benefit.fields.desc2}</p>
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

                    <section className="section-screenshot bg-white" data-entry-id="2oX6AalbFrldetfC49oQot">
                        <div id="uid-5tApeIcaRXYaL85aOkER9f-f295cb75640eef734527320403f2e571668bf036f55adc7516c2ab9e92c21c54" className="picture">
                            <picture className="apropos">
                                <source media="(min-width: 1292px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=1680&amp;h=772&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=3360&amp;h=1544&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=1680&amp;h=772&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=3360&amp;h=1544&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
                                    <source media="(min-width: 1292px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=1680&amp;h=772&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=3360&amp;h=1544&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=1680&amp;h=772&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=3360&amp;h=1544&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x"/>
                                        <source media="(min-width: 1024px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=1291&amp;h=593&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=2582&amp;h=1186&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=1291&amp;h=593&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=2582&amp;h=1186&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
                                            <source media="(min-width: 1024px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=1291&amp;h=593&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=2582&amp;h=1186&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=1291&amp;h=593&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=2582&amp;h=1186&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x"/>
                                                <source media="(min-width: 718px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=1023&amp;h=470&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=2046&amp;h=940&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=1023&amp;h=470&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=2046&amp;h=940&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
                                                    <source media="(min-width: 718px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=1023&amp;h=470&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=2046&amp;h=940&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=1023&amp;h=470&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=2046&amp;h=940&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x"/>
                                                        <source media="(min-width: 480px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=717&amp;h=329&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=1434&amp;h=658&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=717&amp;h=329&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=1434&amp;h=658&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
                                                            <source media="(min-width: 480px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=717&amp;h=329&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=1434&amp;h=658&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=717&amp;h=329&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=1434&amp;h=658&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x"/>
                                                                <source media="(min-width: 374px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=479&amp;h=220&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=958&amp;h=440&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=479&amp;h=220&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=958&amp;h=440&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
                                                                    <source media="(min-width: 374px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=479&amp;h=220&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=958&amp;h=440&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=479&amp;h=220&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=958&amp;h=440&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x"/>
                                                                        <source type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=373&amp;h=171&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=746&amp;h=342&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=373&amp;h=171&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=746&amp;h=342&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
                                                                            <img data-srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=373&amp;h=171&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=746&amp;h=342&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=373&amp;h=171&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/5tApeIcaRXYaL85aOkER9f/9f3ea35b101dc167d6e43cdcd80af926/Image_Break_B.png?w=746&amp;h=342&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x" className="loaded" data-ll-status="loaded"/>
                            </picture>
                        </div>
                    </section>
                    
                    
                    <section className="section-one-column bg-white auto-layout flex-valign-middle" data-entry-id="3y04vkLshWhCKOIKaEyHyr">
                        <div className="content">
                            <div className="intro intro font-size-base">
                                <h2 className="balance-text h2" data-title-for="3y04vkLshWhCKOIKaEyHyr" >More online ordering page features</h2>
                            </div>
                        </div>
                    </section>
                    
                    <section className="section-multi-column bg-white auto-layout flex-valign-middle" data-entry-id="pZEBLfWLJ0JlTYnDmgjWj">
                        <div className="content">
                            <div className="grid-2-at-medium multi-column-grid align-left grid-space-small grid-align-center grid-valign-top grid-row-equal-heights">
                                <div className="column">
                                    <div data-entry-id="6heGVf1aMGzBkcq0v2EfoB">
                                        <div className="grid grid-space-line">
                                            <div className="column">
                                                <div className="headings-compact font-size-normal">
                                                    <ul className="check-list grid-space-base">
                                                        <li><strong>Order scheduling:</strong> Let customers place pickup orders for a future date and time</li>
                                                        <li><strong>Order staggering:</strong> Limit the number of orders you can accept in a set time period</li>
                                                        <li><strong>Order tipping:</strong> Automatically add a tipping line item to all orders</li>
                                                        <li><strong>Orders page:</strong> Customizable page layout designed specially for food ordering</li>
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
                                                        <li><strong>Multi-location support:</strong> Take orders from all your locations on a single website</li>
                                                        <li><strong>Square Pay:</strong> Let customers save payment info for future orders</li>
                                                        <li><strong>Instagram:</strong> Import your Instagram feed to your site and connect with followers</li>
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
                                <h2 className="balance-text h2" data-title-for="5VnvOH7LO3xl6FWslyXFqy" >Connect with other Square solutions</h2>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-4 col-xl-4">
                                    <div className="column no-shrink icon-theme mb-3">
                                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M63 57a1 1 0 1 0-2 0h2zm-44 0a1 1 0 1 0-2 0h2zM54 5a1 1 0 1 0-2 0h2zm-2 48a1 1 0 1 0 2 0h-2zm7-41a1 1 0 1 0 0 2v-2zm10 2a1 1 0 1 0 0-2v2zm-10 4a1 1 0 1 0 0 2v-2zm10 2a1 1 0 1 0 0-2v2zm-10 4a1 1 0 1 0 0 2v-2zm10 2a1 1 0 1 0 0-2v2zM59 42a1 1 0 1 0 0 2v-2zm10 2a1 1 0 1 0 0-2v2zM21 21v1a1 1 0 0 0 1-1h-1zm-8 0h-1a1 1 0 0 0 1 1v-1zm0-8v-1a1 1 0 0 0-1 1h1zm8 0h1a1 1 0 0 0-1-1v1zm12 8v1a1 1 0 0 0 1-1h-1zm-8 0h-1a1 1 0 0 0 1 1v-1zm0-8v-1a1 1 0 0 0-1 1h1zm8 0h1a1 1 0 0 0-1-1v1zm12 8v1a1 1 0 0 0 1-1h-1zm-8 0h-1a1 1 0 0 0 1 1v-1zm0-8v-1a1 1 0 0 0-1 1h1zm8 0h1a1 1 0 0 0-1-1v1zM21 33v1a1 1 0 0 0 1-1h-1zm-8 0h-1a1 1 0 0 0 1 1v-1zm0-8v-1a1 1 0 0 0-1 1h1zm8 0h1a1 1 0 0 0-1-1v1zm0 20v1a1 1 0 0 0 1-1h-1zm-8 0h-1a1 1 0 0 0 1 1v-1zm0-8v-1a1 1 0 0 0-1 1h1zm8 0h1a1 1 0 0 0-1-1v1zm12 8v1a1 1 0 0 0 1-1h-1zm-8 0h-1a1 1 0 0 0 1 1v-1zm0-8v-1a1 1 0 0 0-1 1h1zm8 0h1a1 1 0 0 0-1-1v1zm0-4v1a1 1 0 0 0 1-1h-1zm-8 0h-1a1 1 0 0 0 1 1v-1zm0-8v-1a1 1 0 0 0-1 1h1zm8 0h1a1 1 0 0 0-1-1v1zm12 8v1a1 1 0 0 0 1-1h-1zm-8 0h-1a1 1 0 0 0 1 1v-1zm0-8v-1a1 1 0 0 0-1 1h1zm8 0h1a1 1 0 0 0-1-1v1zM6 56c-2.248 0-4-1.752-4-4H0c0 3.352 2.648 6 6 6v-2zm-4-4V6H0v46h2zM2 6c0-2.248 1.752-4 4-4V0C2.648 0 0 2.648 0 6h2zm4-4h68V0H6v2zm68 0c2.248 0 4 1.752 4 4h2c0-3.352-2.648-6-6-6v2zm4 4v46h2V6h-2zm0 46c0 2.248-1.752 4-4 4v2c3.352 0 6-2.648 6-6h-2zm-4 4H6v2h68v-2zM63 73V57h-2v16h2zM17 57v16h2V57h-2zm-3 19c0 2.374 1.77 4 4 4v-2c-1.17 0-2-.774-2-2h-2zm4 4h44v-2H18v2zm44 0c2.23 0 4-1.626 4-4h-2c0 1.226-.83 2-2 2v2zm4-4c0-2.374-1.77-4-4-4v2c1.17 0 2 .774 2 2h2zm-4-4H18v2h44v-2zm-44 0c-2.23 0-4 1.626-4 4h2c0-1.226.83-2 2-2v-2zM74 6a.197.197 0 0 1-.045-.005l-.01-.003.013.008a.176.176 0 0 1 .05.056l-.003-.01A.199.199 0 0 1 74 6h2c0-.575-.278-1.067-.605-1.395C75.067 4.278 74.575 4 74 4v2zm0 0v46h2V6h-2zm0 46c0-.02.003-.036.005-.045l.003-.01a.176.176 0 0 1-.064.064c-.001 0 .002-.002.01-.004A.199.199 0 0 1 74 52v2c.575 0 1.067-.278 1.395-.605.328-.328.605-.82.605-1.395h-2zm0 0H6v2h68v-2zM6 52c.02 0 .036.003.045.005l.01.003a.179.179 0 0 1-.064-.064c0-.001.002.002.004.01A.197.197 0 0 1 6 52H4c0 .575.278 1.067.605 1.395.328.327.82.605 1.395.605v-2zm0 0V6H4v46h2zM6 6c0 .02-.003.036-.005.045l-.003.01L6 6.043a.179.179 0 0 1 .056-.05l-.01.003A.197.197 0 0 1 6 6V4c-.575 0-1.067.278-1.395.605C4.278 4.933 4 5.425 4 6h2zm0 0h68V4H6v2zm46-1v48h2V5h-2zm7 9h10v-2H59v2zm0 6h10v-2H59v2zm0 6h10v-2H59v2zm0 18h10v-2H59v2zM21 20h-8v2h8v-2zm-7 1v-8h-2v8h2zm-1-7h8v-2h-8v2zm7-1v8h2v-8h-2zm13 7h-8v2h8v-2zm-7 1v-8h-2v8h2zm-1-7h8v-2h-8v2zm7-1v8h2v-8h-2zm13 7h-8v2h8v-2zm-7 1v-8h-2v8h2zm-1-7h8v-2h-8v2zm7-1v8h2v-8h-2zM21 32h-8v2h8v-2zm-7 1v-8h-2v8h2zm-1-7h8v-2h-8v2zm7-1v8h2v-8h-2zm1 19h-8v2h8v-2zm-7 1v-8h-2v8h2zm-1-7h8v-2h-8v2zm7-1v8h2v-8h-2zm13 7h-8v2h8v-2zm-7 1v-8h-2v8h2zm-1-7h8v-2h-8v2zm7-1v8h2v-8h-2zm1-5h-8v2h8v-2zm-7 1v-8h-2v8h2zm-1-7h8v-2h-8v2zm7-1v8h2v-8h-2zm13 7h-8v2h8v-2zm-7 1v-8h-2v8h2zm-1-7h8v-2h-8v2zm7-1v8h2v-8h-2z" fill="#1a1a1a"></path>
                                        </svg>
                                    </div>
                                    <div className="column">
                                        <div className="headings-compact font-size-small">
                                            <h3 className="balance-text h6" data-title-for="1lWSghgQYgTOfNIuk3RF3p" >Square POS</h3>
                                            <p>Square Online Store works seamlessly with <a href="../point-of-sale.html">Square POS</a> and <a href="../point-of-sale/restaurants.html">Square for Restaurants</a> to streamline your orders and even keep your items and inventory
                                                <br/>in sync.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-xl-4  mt-5 mt-md-0">
                                    <div className="column no-shrink icon-theme">
                                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.6 37.6l-.872.49a1 1 0 0 0 .687.493l.185-.983zm5.3 1l.734.68a1 1 0 0 0-.549-1.663l-.185.983zm-3.7 4l-.734-.679a1 1 0 0 0-.26.79l.994-.111zm.6 5.4l-.425.905a1 1 0 0 0 1.419-1.015L22.8 48zm-4.9-2.3l.425-.905a1 1 0 0 0-.85 0l.425.905zM13 48l-.992-.129a1 1 0 0 0 1.417 1.034L13 48zm.7-5.4l.992.129a1 1 0 0 0-.258-.808l-.734.679zm-3.7-4l-.185-.983a1 1 0 0 0-.55 1.662L10 38.6zm5.3-1l.185.983a1 1 0 0 0 .694-.507L15.3 37.6zm2.6-4.8l.872-.49a1 1 0 0 0-1.751.014l.879.476zm24.4 4.8l-.88.476a1 1 0 0 0 .695.507l.185-.983zm5.3 1l.734.68a1 1 0 0 0-.548-1.663l-.186.983zm-3.7 4l-.734-.679a1 1 0 0 0-.258.808l.992-.129zm.7 5.4l-.425.905a1 1 0 0 0 1.417-1.034L44.6 48zm-4.9-2.3l.425-.905a1 1 0 0 0-.85 0l.425.905zM34.8 48l-.994-.11a1 1 0 0 0 1.42 1.015L34.8 48zm.6-5.4l.994.11a1 1 0 0 0-.26-.789l-.734.679zm-3.7-4l-.182-.983a1 1 0 0 0-.552 1.662l.734-.679zm5.4-1l.182.983a1 1 0 0 0 .698-.507l-.88-.476zm2.6-4.8l.88-.476a1 1 0 0 0-1.76 0l.88.476zm25 4.8l-.88.476a1 1 0 0 0 .694.507l.186-.983zm5.3 1l.734.68a1 1 0 0 0-.549-1.663L70 38.6zm-3.7 4l-.734-.679a1 1 0 0 0-.258.808l.992-.129zM67 48l-.425.905a1 1 0 0 0 1.416-1.034L67 48zm-4.9-2.3l.425-.905a1 1 0 0 0-.85 0l.425.905zM57.2 48l-.994-.11a1 1 0 0 0 1.418 1.015L57.2 48zm.6-5.4l.994.11a1 1 0 0 0-.26-.789l-.734.679zm-3.7-4l-.186-.983a1 1 0 0 0-.549 1.662l.735-.679zm5.3-1l.185.983a1 1 0 0 0 .686-.493l-.871-.49zm2.7-4.8l.879-.476a1 1 0 0 0-1.751-.014l.872.49zM2 16c0-1.07.874-2 2-2v-2c-2.274 0-4 1.87-4 4h2zm2-2h72v-2H4v2zm72 0c1.148 0 2 .852 2 2h2c0-2.252-1.748-4-4-4v2zm2 2v48h2V16h-2zm0 48c0 1.148-.852 2-2 2v2c2.252 0 4-1.748 4-4h-2zm-2 2H4v2h72v-2zM4 66c-1.148 0-2-.852-2-2H0c0 2.252 1.748 4 4 4v-2zm-2-2V16H0v48h2zm18.415-25.417l5.3 1 .37-1.966-5.3-1-.37 1.966zm4.75-.662l-3.7 4 1.47 1.358 3.7-4-1.47-1.358zm-3.959 4.79l.6 5.4 1.988-.221-.6-5.4-1.988.22zm2.019 4.384l-4.9-2.3-.85 1.81 4.9 2.3.85-1.81zm-5.75-2.3l-4.9 2.3.85 1.81 4.9-2.3-.85-1.81zm-3.483 3.334l.7-5.4-1.984-.258-.7 5.4 1.984.258zm.442-6.208l-3.7-4-1.468 1.358 3.7 4 1.468-1.358zm-4.249-2.338l5.3-1-.37-1.966-5.3 1 .37 1.966zm5.994-1.507l2.6-4.8-1.758-.952-2.6 4.8 1.758.952zm.85-4.786l2.7 4.8 1.743-.98-2.7-4.8-1.744.98zm25.086 5.293l5.3 1 .37-1.966-5.3-1-.37 1.966zm4.751-.662l-3.7 4 1.468 1.358 3.7-4-1.468-1.358zm-3.958 4.808l.7 5.4 1.984-.258-.7-5.4-1.984.258zm2.117 4.366l-4.9-2.3-.85 1.81 4.9 2.3.85-1.81zm-5.75-2.3l-4.9 2.3.85 1.81 4.9-2.3-.85-1.81zm-3.48 3.316l.6-5.4-1.989-.221-.6 5.4 1.988.22zm.34-6.19l-3.7-4-1.469 1.358 3.7 4 1.468-1.358zm-4.253-2.338l5.4-1-.364-1.966-5.4 1 .364 1.966zm6.098-1.507l2.6-4.8-1.76-.952-2.6 4.8 1.76.952zm.84-4.8l2.6 4.8 1.76-.952-2.6-4.8-1.76.952zm25.694 5.307l5.3 1 .371-1.966-5.3-1-.37 1.966zm4.752-.662l-3.7 4 1.468 1.358 3.7-4-1.468-1.358zm-3.958 4.808l.7 5.4 1.983-.258-.7-5.4-1.983.258zm2.116 4.366l-4.9-2.3-.85 1.81 4.9 2.3.85-1.81zm-5.75-2.3l-4.9 2.3.85 1.81 4.9-2.3-.85-1.81zm-3.48 3.316l.6-5.4-1.988-.221-.6 5.4 1.987.22zm.34-6.19l-3.7-4-1.469 1.358 3.7 4 1.469-1.358zm-4.249-2.338l5.3-1-.37-1.966-5.3 1 .37 1.966zm5.986-1.493l2.7-4.8-1.743-.98-2.7 4.8 1.743.98zm.95-4.814l2.6 4.8 1.758-.952-2.6-4.8-1.759.952z" fill="#1a1a1a"></path>
                                        </svg>
                                    </div>
                                    <div className="column">
                                        <div className="headings-compact font-size-small">
                                            <h3 className="balance-text h6" data-title-for="210bEUB5u8LnJNmfV3BXN5" >Square Loyalty</h3>
                                            <p>Allow customers to redeem and collect loyalty points for online purchases when you use <a href="../software/loyalty.html">Square Loyalty</a> with your online store.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-xl-4 mt-5 mt-md-0">
                                    <div className="column no-shrink icon-theme">
                                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 39a1 1 0 1 0 0 2v-2zm78 2a1 1 0 1 0 0-2v2zM41 13a1 1 0 1 0-2 0h2zm-2 54a1 1 0 1 0 2 0h-2zm13.9-32.5l-.707-.707-.007.007-.007.007.721.693zM40 40.1l-.286.958a1 1 0 0 0 .563.003L40 40.1zm13.6-13.8l-.707.707.008.009.01.008.689-.724zm-27.2 0l.69.724.009-.008.008-.009-.707-.707zM40 40l.964-.265a1 1 0 0 0-1.928 0L40 40zm-15 7a1 1 0 0 0 0 2v-2zm30 2a1 1 0 1 0 0-2v2zM1 41h78v-2H1v2zm38-28v54h2V13h-2zm13.18 20.807c-.494.513-1.473 1.124-2.789 1.766-1.284.626-2.784 1.232-4.225 1.764a88.687 88.687 0 0 1-5.416 1.794l-.02.006-.006.002h-.001l.277.96.277.962h.001l.002-.001a.255.255 0 0 0 .006-.002l.024-.007a22.57 22.57 0 0 0 .43-.128 90.695 90.695 0 0 0 5.119-1.71c1.472-.543 3.04-1.175 4.409-1.842 1.337-.652 2.596-1.391 3.353-2.178l-1.442-1.386zM40 40.1l.963.269v-.002l.002-.005.006-.02a18.467 18.467 0 0 1 .119-.414 91.436 91.436 0 0 1 1.615-5.005c.513-1.441 1.098-2.942 1.702-4.227.619-1.318 1.208-2.297 1.7-2.789l-1.414-1.414c-.758.758-1.469 2.016-2.096 3.352-.643 1.367-1.252 2.935-1.776 4.407a93.4 93.4 0 0 0-1.782 5.57l-.002.007v.002L40 40.1zm6.107-12.193c2.262-2.262 5.313-2.372 6.786-.9l1.414-1.414c-2.527-2.528-6.876-1.838-9.614.9l1.414 1.414zm6.803-.883c1.567 1.492 1.521 4.53-.717 6.769l1.414 1.414c2.762-2.762 3.316-7.123.683-9.631l-1.38 1.448zm-26.517 8.183c.754.754 2.007 1.477 3.342 2.123 1.366.66 2.932 1.295 4.403 1.844a97.555 97.555 0 0 0 5.454 1.847l.09.028.024.007.006.002h.002L40 40.1l.286-.958h-.002a2.94 2.94 0 0 0-.111-.033 93.532 93.532 0 0 1-1.528-.482 95.563 95.563 0 0 1-3.808-1.326c-1.441-.539-2.944-1.148-4.23-1.771-1.32-.639-2.303-1.24-2.8-1.737l-1.414 1.414zM40 40.1l.963-.269v-.002l-.002-.006a6.837 6.837 0 0 0-.032-.114 90.039 90.039 0 0 0-.465-1.566 93.43 93.43 0 0 0-1.284-3.891c-.524-1.471-1.134-3.04-1.776-4.407-.628-1.335-1.339-2.594-2.097-3.352l-1.414 1.414c.492.492 1.081 1.47 1.7 2.789.605 1.285 1.19 2.786 1.703 4.227a91.436 91.436 0 0 1 1.733 5.418l.006.021a.14.14 0 0 0 .002.007l.963-.27zm-4.693-13.607c-2.738-2.738-7.086-3.428-9.614-.9l1.414 1.414c1.473-1.473 4.524-1.362 6.786.9l1.414-1.414zm-9.596-.917c-2.634 2.508-2.08 6.87.682 9.631l1.414-1.414c-2.238-2.238-2.284-5.277-.717-6.769l-1.38-1.448zM40 40a73.219 73.219 0 0 1-.964-.267l.001-.002v-.002l-.001.006a4.07 4.07 0 0 1-.087.246c-.072.184-.19.458-.372.793a9.832 9.832 0 0 1-1.958 2.494C34.67 45.08 31.172 47 25 47v2c6.628 0 10.629-2.08 12.981-4.268a11.823 11.823 0 0 0 2.355-3.006c.224-.415.378-.766.476-1.02a5.996 5.996 0 0 0 .147-.424l.003-.01.001-.004v-.001c.001-.001.001-.002-.963-.267zm0 0c-.964.265-.964.266-.964.267v.001l.002.004.003.01a1.51 1.51 0 0 0 .037.12c.024.075.06.178.11.304.098.254.252.605.476 1.02.45.83 1.189 1.921 2.355 3.006C44.37 46.92 48.372 49 55 49v-2c-6.172 0-9.671-1.92-11.619-3.732a9.832 9.832 0 0 1-1.958-2.494c-.181-.335-.3-.61-.372-.793a4.07 4.07 0 0 1-.087-.246l-.001-.006v.005L40 40zm38 22c0 2.248-1.752 4-4 4v2c3.352 0 6-2.648 6-6h-2zm-4 4H6v2h68v-2zM6 66c-2.248 0-4-1.752-4-4H0c0 3.352 2.648 6 6 6v-2zm-4-4V18H0v44h2zm0-44c0-2.248 1.752-4 4-4v-2c-3.352 0-6 2.648-6 6h2zm4-4h68v-2H6v2zm68 0c2.248 0 4 1.752 4 4h2c0-3.352-2.648-6-6-6v2zm4 4v44h2V18h-2z" fill="#1a1a1a"></path>
                                        </svg>
                                    </div>
                                    <div className="column">
                                        <div className="headings-compact font-size-small">
                                            <h3 className="balance-text h6" data-title-for="4QuVYNULNtpDHjvs41qKFj" >Square Gift Cards</h3>
                                            <p>Accept online and plastic <a href="../gift-cards.html">Square Gift Cards</a>. Plus, sell eGift cards for your business right on your site.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </section>

                    
                    <section className="section-one-column bg-accent auto-layout flex-valign-middle" data-entry-id="1GrqRQm33oGIbj1NyRyatI">
                        <div className="content pad-top-large">
                            <div className="intro intro font-size-base">
                                <h2 className="balance-text h2" data-title-for="1GrqRQm33oGIbj1NyRyatI" >Start taking online orders today.</h2>
                                <p>Discover how Square Online can help your restaurant.</p>
                                <div className="grid grid-space-base">
                                    <div className="column">
                                        <div className="display-inline-block" data-entry-id="W4BG9aFTOZ4vtMnDfhrU0"><a className="button gap-none" href="../../../signup/au-lang_code=en-AU&amp;v=online-store.html" target="_blank">Launch a free ordering page</a>
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
                                        <div className="popup-menu popup-menu-align-center popup-menu-align-left-at-extra-small"><a aria-haspopup="true" data-popup-menu="country-options" href="restaurant-website.html#" role="button"><span className="icon-flag icon-flag-AU"></span></a>
                                            <div id="country-options" role="menu">
                                                <ul className="reset">
                                                    <li role="menuitem"><a href="restaurant-website-country_redirection=true.html" role="link"><span className="icon-flag gap-right-base icon-flag-AU"></span>Australia</a>
                                                    </li>
                                                    <li role="menuitem"><a href="../../../ca/en/online-store/restaurant-website-country_redirection=true.html" role="link"><span className="icon-flag gap-right-base icon-flag-CA"></span>Canada</a>
                                                    </li>
                                                    <li role="menuitem"><a href="../../../jp/ja.html" role="link"><span className="icon-flag gap-right-base icon-flag-JP"></span>Japan</a>
                                                    </li>
                                                    <li role="menuitem"><a href="../../../gb/en/online-store/restaurant-website-country_redirection=true.html" role="link"><span className="icon-flag gap-right-base icon-flag-GB"></span>United Kingdom</a>
                                                    </li>
                                                    <li role="menuitem"><a href="../../../us/en/online-store/restaurant-website-country_redirection=true.html" role="link"><span className="icon-flag gap-right-base icon-flag-US"></span>United States</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="popup-menu popup-menu-align-center popup-menu-align-left-at-extra-small"><a aria-haspopup="true" data-popup-menu="language-options" href="restaurant-website.html#" role="button">English</a>
                                            <div id="language-options" role="menu">
                                                <ul className="reset">
                                                    <li role="menuitem"><a href="restaurant-website-country_redirection=true.html" role="link">English</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <nav className="grid-auto grid-space-base grid-align-center" role="navigation">
                                    <div className="column">
                                        <a href="https://twitter.com/SquareAU" title="Twitter">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                                                <path fill="#2E3B4E" d="M16.4 6.6v.5c0 4.8-3.3 10.1-9.3 10.1-1.9 0-3.6-.4-5-1.4.3 0 .5.1.8.1 1.5 0 3-.6 4.1-1.6-1.4 0-2.6-1.1-3.1-2.5.2 0 .4.1.6.1.3 0 .7 0 1-.1C3.9 11.4 3 9.9 3 8.1c0 .3.7.4 1.2.5-.9-.7-1.4-1.8-1.4-3 0-.7.1-1.3.4-1.8C4.8 6 7.1 7.4 9.8 7.6v-.9c0-2 1.5-3.9 3.3-3.9.9 0 1.8.7 2.4 1.4.7-.2 1.4-.5 2.1-.9-.2.8-.8 1.6-1.4 2 .6-.1 1.2-.3 1.8-.6-.4.8-1 1.4-1.6 1.9z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="column">
                                        <a href="https://www.facebook.com/squareaustralia" title="Facebook">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                                                <path fill="#2E3B4E" d="M14.2 11l.4-3H11V6.3c0-.9.9-1.3 2.1-1.3h.9V2.1S12.7 2 11.6 2C9.3 2 8 3.4 8 6v2H5v3h3v7h3v-7h3.2z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="column">
                                        <a href="https://instagram.com/squareau" title="Instagram">
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
                            <p className="copyright">© 2020 Squareup Pte. Ltd.</p>
                        </div>
                        <div className="column align-center align-right-at-medium">
                            <nav>
                                <ul className="destination-links reset grid-space-base">
                                    <li><a href="../legal/general/privacy.html">Privacy Notice</a>
                                    </li>
                                    <li><a href="../legal/general/ua.html">Terms of Service</a>
                                    </li>
                                    <li><a href="../legal/general/gov.html">Government</a>
                                    </li>
                                    <li><a href="../legal/general/au-fsg.html">Square Financial Services Guide</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        </div>
        <style jsx>{`
        // html {
        //     -webkit-text-size-adjust: 100%;
        //     -moz-text-size-adjust: 100%;
        //     text-size-adjust: 100%;
        // }
        `}</style>
    </>
}

HomePage.getInitialProps = async ({query}) => {        
    const menuRes = await airtable.read({
        sort: [{field: 'sort', direction: 'asc'}]
    },{tableName:"menu"});
    
    console.log("menu: ", menuRes)

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

    return { menu: menuRes, hero: heroRes[0], feature: featureRes[0], message: messageRes[0], benefit: benefitRes[0], pricing: pricingRes[0]}
}
  
export default HomePage