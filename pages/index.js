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

function HomePage({menu, hero}) {
    // return "homepaghe";
    // const menuLitsing = getMenu()
    return <>
    <div className="PublicWebNav svelte-1hvfxdz">
        <div className="theme-royal-blue">
            <header role="banner" className="Header svelte-8z8xuo">
                <nav role="navigation" className="Nav desktop align-center svelte-i0996t">                    
                    <div className="middle-slot svelte-i0996t">
                        <ul className="NavList align-center svelte-x5qcbk"> 
                        {
                            // menu.length > 0 && menu.map((item, index) => (
                            //     <li className="category-item svelte-x5qcbk" key={index}>
                            //         <div id="7sZvs5CQAUEm5Zb20tXiPf" className="Category svelte-56sb18">
                            //             <button className="toggle svelte-56sb18">
                            //                 <span className="title svelte-56sb18">{item.fields.title}</span>
                            //             </button>
                            //         </div>
                            //     </li>
                            // ))
                        }
                        </ul>
                    </div>
                    <div className="right-slot svelte-i0996t">
                        {/* <ul className="NavList align-right svelte-x5qcbk">
                            <li className="link-item svelte-x5qcbk"><a id="735gGmzBRZBLLrnQxBIs8O" href="/login" className="Link svelte-14997ds"><span className="title svelte-14997ds">Sign In</span></a> 
                            </li>
                            <li className="link-item svelte-x5qcbk"><a id="4FDsfEQF9Ll6m044D2d3sA" href="/shop/hardware/au/en" className="Link svelte-14997ds"><span className="title svelte-14997ds">Shop</span></a> 
                            </li>
                        </ul> */}

                        {/* <div id="qBa5DkWABZuwiFxSDtBlE" className="Cart svelte-j4l4t">
                            <button type="button" className="Toggle svelte-1w51rza" aria-haspopup="true" aria-expanded="false">
                                <svg className="Icon svelte-7v6t8b" width="24" height="24" viewBox="0 0 24 24" fill="black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1c-.6 0-1 .4-1 1s.4 1 1 1h1.7c.1 0 .3 0 .5.5.1.2.2.5.2.8l.1.3c0
                .2.1.4.1.6.1.5.8 2.9 1.5 5.2l.9 3.1.2.7-.2.2c-.5.5-.8 1.3-.8 2.4 0 1.8 1.7
                3.2 3.3 3.2H20c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2h3c.6 0 1-.4
                1-1s-.4-1-1-1H8.5c-.7 0-1.3-.6-1.3-1.2 0-.7.2-1 .3-1.1l.1-.1 15.4-.8c.6 0
                1-.5.9-1.1 0-.5-.5-.9-1-.9h-.3L24
                5.2c.1-.5-.3-1.1-.8-1.2H5.4v-.1c-.1-.4-.2-.8-.4-1.2C4.7 2 4.1 1 2.7
                1H1zm5.6 7.2L5.9 6h15.9l-1.2 6.9-12.5.6-.2-.6c-.4-1.5-.9-3.1-1.3-4.7zM8
                24c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" fillRule="evenodd" clipRule="evenodd"></path>
                                </svg> <span className="title svelte-1w51rza">Your cart</span>
                            </button>
                            <div className="Flyout align-right svelte-1odnmjg isCart">
                                <div className="Status svelte-1qzvt6b">
                                    <div className="title svelte-1qzvt6b">Your cart</div>
                                    <div className="message svelte-1qzvt6b">No items in your cart</div>
                                </div>
                                <ul className="CategoryList svelte-3x0fk8">
                                    <li className="button-item svelte-3x0fk8"><a id="4RJj0fF7Zi2LfPKmITl5ad" href="/shop/hardware/au/en" className="ButtonLink primary svelte-1xxigqd" style={{width: "100%"}}><span className="title svelte-1xxigqd">Shop hardware</span></a> 
                                    </li>
                                </ul>
                                <ul className="CategoryList svelte-3x0fk8">
                                    <li className="link-item svelte-3x0fk8"><a id="77auS5kIXPZ1pdgmR90EeP" className="CategoryLink svelte-359eaa" href="/shop/hardware/au/en/cart"><span className="title svelte-359eaa">View cart</span> </a> 
                                    </li>
                                    <li className="link-item svelte-3x0fk8"><a id="5kvWjJkupKM48SYVFF6one" className="CategoryLink svelte-359eaa" href="/shop/hardware/au/en/my-orders"><span className="title svelte-359eaa">Order history</span> </a> 
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </nav>
            </header>

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

                    <section className="section-multi-column bg-white auto-layout flex-valign-middle" data-entry-id="3Axus6aEzkCgiY9Hiy2qo7">
                        <div className="content">
                            <div className="grid-3-at-medium multi-column-grid align-center grid-space-small grid-align-center grid-valign-top grid-row-equal-heights">
                                <div className="column">
                                    <div data-entry-id="7HMLEyeoNGqgmZ33D2R1BF">
                                        <div className="grid grid-space-line">
                                            <div className="column">
                                                <div className="position-relative">
                                                    <img className="display-inline-block" src="https://images.ctfassets.net/2d5q1td6cyxq/4xaHw4J2LwtfoJbPuhstFJ/9827c7952b77dcd53a8b80959cc1239f/illos_A.svg"/>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <div className="headings-compact font-size-small">
                                                    <h3 className="balance-text h6" data-title-for="7HMLEyeoNGqgmZ33D2R1BF" >Fast and easy</h3>
                                                    <p>Start taking food orders online right away. Easily import items from your Square POS directly into Square Online to quickly create a mobile-ready ordering page.</p>
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
                                                    <img id="uid-7xlOjM9oPdGov64l4l2TUL-a376ca10db37c610c635eae5090a0bfcd78eb2d66b2ddf5eb79fa31c8bf4483d" className="display-inline-block" src="https://images.ctfassets.net/2d5q1td6cyxq/7xlOjM9oPdGov64l4l2TUL/a60ff157d4c31738ada01b5fc5a13e9d/illos_B.svg"/>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <div className="headings-compact font-size-small">
                                                    <h3 className="balance-text h6" data-title-for="7e8qnUTyqWt19ik7VP5jkf" >Streamline ordering</h3>
                                                    <p>Online orders instantly display in your restaurant point of sale system and relay to your kitchen printers so there’s no disruption to your standard order process.</p>
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
                                                    <img id="uid-6YnZwyWnc0TAlT5Y0v3LJh-ad990354f41339110ab4202d83e3735c40837335e367af60d9fe47b86f1ec797" className="display-inline-block" src="https://images.ctfassets.net/2d5q1td6cyxq/6YnZwyWnc0TAlT5Y0v3LJh/e32b10aebd92fe44f382985c26d3f76c/illos_C.svg"/>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <div className="headings-compact font-size-small">
                                                    <h3 className="balance-text h6" data-title-for="5E2a3qwOyxNiOOFGCCN5ZS" >Pickup and delivery</h3>
                                                    <p>It’s easy to give customers a variety of pickup and delivery options. Offer in-person and curbside pickup or delivery by your own on-staff courier.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <hr className="section-border content" data-entry-id="7e0qhknUVUEYcAgCAcaAgc"/>
                    {/* 
                    <section className="section-multi-column bg-white auto-layout flex-valign-middle">
                        <div className="content">
                            <div className="grid-2-at-medium multi-column-grid align-left grid-space-large grid-align-center grid-valign-middle grid-row-equal-heights">
                                <div className="column">
                                    <div data-entry-id="5UBUD3apICCiRuSF2e7CAk">
                                        <div className="grid grid-space-line">
                                            <div className="column">
                                                <div className="headings-compact font-size-large">
                                                    <h3 className="balance-text h2" data-title-for="5UBUD3apICCiRuSF2e7CAk" >Go contact free with
                                                        <br data-owner="balance-text"/>
                                                        self-serve ordering</h3>
                                                    <p>Give customers and staff the space they deserve. Limit in-person contact, increase safety and improve order accuracy with self-serve ordering.</p>
                                                    <div className="grid grid-space-base">
                                                        <div className="column">
                                                            <div className="display-inline-block">
                                                                <a className="" href="../../../us/en/online-store/restaurant-website/self-serve-ordering.html">Learn<span className="arrow no-wrap">more</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div data-entry-id="1a5BVdEQLwPJDjiAlJxk1b">
                                        <div className="grid grid-space-line">
                                            <div className="column">
                                                <div className="position-relative">
                                                    <div id="uid-2AMupnetDch5e76zj9Wau7-f950d36e4b2ff51c61b9667412980e727858a9eac30c8d98cc50ebf2658e08a6" className="picture">
                                                        <picture className="apropos">
                                                            <source media="(min-width: 1292px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=468&amp;h=370&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=936&amp;h=740&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=468&amp;h=370&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=936&amp;h=740&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
                                                                <source media="(min-width: 1292px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=468&amp;h=370&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=936&amp;h=740&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=468&amp;h=370&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=936&amp;h=740&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x"/>
                                                                    <source media="(min-width: 1024px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=394&amp;h=312&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=788&amp;h=624&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=394&amp;h=312&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=788&amp;h=624&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
                                                                        <source media="(min-width: 1024px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=394&amp;h=312&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=788&amp;h=624&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=394&amp;h=312&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=788&amp;h=624&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x"/>
                                                                            <source media="(min-width: 718px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=300&amp;h=237&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=600&amp;h=474&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=300&amp;h=237&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=600&amp;h=474&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
                                                                                <source media="(min-width: 718px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=300&amp;h=237&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=600&amp;h=474&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=300&amp;h=237&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=600&amp;h=474&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x"/>
                                                                                    <source media="(min-width: 480px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=424&amp;h=335&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=848&amp;h=670&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=424&amp;h=335&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=848&amp;h=670&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
                                                                                        <source media="(min-width: 480px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=424&amp;h=335&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=848&amp;h=670&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=424&amp;h=335&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=848&amp;h=670&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x"/>
                                                                                            <source media="(min-width: 374px)" type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=324&amp;h=256&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=648&amp;h=512&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=324&amp;h=256&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=648&amp;h=512&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
                                                                                                <source media="(min-width: 374px)" type="image/jpeg" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=324&amp;h=256&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=648&amp;h=512&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=324&amp;h=256&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=648&amp;h=512&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x"/>
                                                                                                    <source type="image/webp" data-srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=276&amp;h=218&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=552&amp;h=436&amp;fm=webp&amp;q=85&amp;fit=scale 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=276&amp;h=218&amp;fm=webp&amp;q=85&amp;fit=scale, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=552&amp;h=436&amp;fm=webp&amp;q=85&amp;fit=scale 2x"/>
                                                                                                        <img data-srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=276&amp;h=218&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=552&amp;h=436&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x" srcset="//images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=276&amp;h=218&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive, //images.ctfassets.net/2d5q1td6cyxq/2AMupnetDch5e76zj9Wau7/4a2a37cf2626248e2bfcea5894f8f370/sso-grid.png?w=552&amp;h=436&amp;fm=jpg&amp;q=85&amp;bg=rgb%3Affffff&amp;fit=scale&amp;fl=progressive 2x" className="error" data-ll-status="error"/>
                                                        </picture>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    {/* <hr className="section-border content" data-entry-id="7e0qhknUVUEYcAgCAcaAgc"/>
                    <section className="section-one-column bg-white auto-layout flex-valign-middle" data-entry-id="7gWUGaLIFPLH7OYEdFZWDt">
                        <div className="content pad-top-large">
                            <div className="intro intro font-size-base">
                                <h2 className="balance-text h2" data-title-for="7gWUGaLIFPLH7OYEdFZWDt" >Provide the convenience
                                <br data-owner="balance-text"/>of delivery and pickup</h2>
                            </div>
                        </div>
                    </section>
                    <section className="section-two-column bg-white auto-layout flex-valign-middle" data-entry-id="3B3cGkR43s2Bwrr0uEfEgE">
                        <div className="content">
                            <div className="two-column-outer-grid grid-space-medium grid-space-large-at-medium">
                                <div className="column">
                                    <div data-entry-id="23uq0Fg7zaQv0w9QJ6uDAM">
                                        <div className="two-column-inner-grid grid-valign-middle grid-2-at-medium">
                                            <div className="column -at-">
                                                <div className="position-relative">
                                                    <div id="uid-HcPs1w8njNRBwN9rxmg98-c8d85c6baed6ea988e232871ff0c8a434e9c5852c8d2027b08d78f09b0f621c1" className="picture">
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column align-left content-cell-padding-left">
                                                <div className="headings-compact font-size-normal">
                                                    <h4 id="in-house-delivery-beta">In-house delivery (beta)</h4>
                                                    <p>Use your own in-house team to deliver orders. To better manage deliveries you can set estimated food delivery time, delivery fee and minimum delivery order value. Send text alerts to keep customers up to date on their order status. Even create a custom delivery radius for more control over your service area. The In-house delivery option is available for just 50¢ per order.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div data-entry-id="3rU7R29Fc8SO6G5IvBxAHE">
                                        <div className="two-column-inner-grid grid-valign-middle grid-2-at-medium">
                                            <div className="column -at-">
                                                <div className="position-relative">
                                                    <div id="uid-6SCGA6AootjAaJqqIKdcan-178d34b972325bcdbbb0428503009acc13676d36694a286833747e6878378de6" className="picture">
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column align-left content-cell-padding-left">
                                                <div className="headings-compact font-size-normal">
                                                    <h5 id="pickup">Pickup</h5>
                                                    <p>Give your customers the ability to order and pay online, and pick up their items in person at your restaurant location. Or offer the added convenience of curbside pickup so customers never have to leave their car.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-multi-column bg-white auto-layout flex-valign-middle" data-entry-id="2oX6AalbFrldetfC49oQot">
                        <div className="content">
                            <div className="intro font-size-base">
                                <h2 className="balance-text h2" data-title-for="2oX6AalbFrldetfC49oQot" >Offer any fulfilment option you like</h2>
                            </div>
                            <div className="grid-2-at-medium multi-column-grid align-center grid-space-small grid-align-center grid-valign-top grid-row-equal-heights">
                                <div className="column">
                                    <a className="tile" data-entry-id="6g1XQSDow5NiwVJHJco1qY">
                                        <div className="tile-content">
                                            <div className="grid-space-line">
                                                <div className="column">
                                                    <div className="grid-space-base">
                                                        <div className="column">
                                                            <h3 className="balance-text h6" data-title-for="6g1XQSDow5NiwVJHJco1qY" >Pickup</h3>
                                                        </div>
                                                        <div className="column tile-body font-size-normal">
                                                            <h2 className="color-royal-blue" id="0">$0</h2>
                                                            <p>Per order</p>
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
                                                            <h3 className="balance-text h6" data-title-for="150lUUYLwaWQ675TRqPwlL" >In-house delivery</h3>
                                                        </div>
                                                        <div className="column tile-body font-size-normal">
                                                            <h2 className="color-royal-blue" id="50">50¢</h2>
                                                            <p>per order</p>
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
                    <section className="section-one-column bg-white auto-layout flex-valign-middle" data-entry-id="3sqnKmZl7dQct7d0Uu61JO">
                        <div className="content">
                            <div className="intro intro font-size-base">
                                <p>*In-house delivery fees will be waived until November 1st, 2020.</p>
                                <p>Enjoy eCommerce processing fees of 2.2% per transaction or lower.</p>
                                <div className="grid grid-space-base">
                                    <div className="column">
                                        <div className="display-inline-block" data-entry-id="6HxUNJiQ62taoZdrYAW6VJ"><a className="" href="plans.html" target="_blank">Learn more about Square Online <span className="arrow no-wrap">plans</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-screenshot bg-white" data-entry-id="6hUFHr7fbOyp7QcOXAf54n" data-frame-type="full-width">
                        <div>
                            <div className="apropos-entry position-relative">
                                <div data-count="1" data-fade-duration="0.5" data-hero-slideshow="" data-scale-duration="0.5" data-scale-end="1.0" data-scale-start="1.0">
                                    <div className="hero-slide" style={{transform: "scale3d(1, 1, 1)", opacity: "1", zIndex: "3", transition: "opacity 0.5s ease 0s, transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s"}}>
                                        <div id="uid-5tApeIcaRXYaL85aOkER9f-ec8b4b6f0a96cf2471f11518ae9c604877c7adb805c79e7afeba9513d498421a" className="picture">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                    </section> */}
                    {/* <section className="section-multi-column bg-white auto-layout flex-valign-middle" data-entry-id="5VnvOH7LO3xl6FWslyXFqy">
                        <div className="content">
                            <div className="intro font-size-base">
                                <h2 className="balance-text h2" data-title-for="5VnvOH7LO3xl6FWslyXFqy" >Connect with other Square solutions</h2>
                            </div>
                            <div className="grid-3-at-medium multi-column-grid align-left grid-space-small grid-align-center grid-valign-top grid-row-equal-heights">
                                <div className="column">
                                    <div data-entry-id="1lWSghgQYgTOfNIuk3RF3p">
                                        <div className="grid grid-space-line">
                                            <div className="column">
                                                <div className="grid grid-space-line">
                                                    <div className="column no-shrink icon-theme">
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div data-entry-id="210bEUB5u8LnJNmfV3BXN5">
                                        <div className="grid grid-space-line">
                                            <div className="column">
                                                <div className="grid grid-space-line">
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div data-entry-id="4QuVYNULNtpDHjvs41qKFj">
                                        <div className="grid grid-space-line">
                                            <div className="column">
                                                <div className="grid grid-space-line">
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
                    </section> */}
                </div>
            </main>

            {/* <footer className="page-footer">
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
            </footer> */}
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

    return { menu: menuRes, hero: heroRes[0] }
}
  
export default HomePage