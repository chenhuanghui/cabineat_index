import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="https://xms-production-f.squarecdn.com/xms/assets/public-web-styles/favicon-770e0889aefd823056c7cdbb066a445be0f0754c1b4d4cba877e120fdbcb63e6.ico" />
        <meta name="sq:environment" content="{&quot;env&quot;:&quot;production&quot;,&quot;country_code&quot;:&quot;AU&quot;,&quot;lang_code&quot;:&quot;en&quot;,&quot;locale&quot;:&quot;en-AU&quot;,&quot;country_default_language&quot;:&quot;en&quot;,&quot;default_country&quot;:&quot;US&quot;,&quot;default_language&quot;:&quot;en&quot;,&quot;supported_countries&quot;:[&quot;AU&quot;,&quot;CA&quot;,&quot;GB&quot;,&quot;JP&quot;,&quot;US&quot;],&quot;detected_country_code&quot;:null,&quot;available_languages&quot;:[&quot;en&quot;,&quot;en-AU&quot;,&quot;en-CA&quot;,&quot;en-GB&quot;,&quot;en-US&quot;,&quot;fr&quot;,&quot;fr-CA&quot;,&quot;es&quot;,&quot;es-US&quot;,&quot;ja&quot;,&quot;ja-JP&quot;],&quot;user_has_ever_logged_in&quot;:false}" />
        <meta name="sq:tracking" content="{&quot;eventstream&quot;:&quot;xms&quot;,&quot;google_universal&quot;:[&quot;UA-9517040-59&quot;,&quot;UA-9517040-46&quot;],&quot;autotrack&quot;:{&quot;page_view&quot;:true,&quot;link_click&quot;:true,&quot;scroll_depth&quot;:true},&quot;pageview_rawdata&quot;:{&quot;entry_id&quot;:&quot;2c6xO64EeIL0JjfNWt22CA&quot;},&quot;cdp&quot;:&quot;41ec1b68-21b1-4687-853a-f968e54134db&quot;}" />
        <meta name="sq:gtm" content="{&quot;enabled&quot;:true,&quot;domain&quot;:&quot;tealium-f.squarecdn.com&quot;,&quot;delay&quot;:1000}" />
        <title>All the features you need for your Restaurant Website | Square</title>
        <meta name="description" content="Build your restaurant website for free and start taking orders today. Offer delivery and curbside pickup to you customers. Easily integrate with Square POS." />
        <link rel="canonical" href="restaurant-website.html" />
        <link rel="alternate" hreflang="en-AU" href="restaurant-website.html" />
        
        <meta property="og:title" content="All the features you need for your Restaurant Website | Square" />
        <meta property="og:url" content="https://squareup.com/au/en/online-store/restaurant-website" />
        <meta property="og:image" content="https://images.ctfassets.net/2d5q1td6cyxq/5buoMeTONmdKF9Mdf68Vr1/f59681a0b6c7ad15c350c158b9627b46/RST_OpenGraph_Image.jpg?w=1200&amp;h=630&amp;fm=jpg&amp;q=90&amp;fit=thumb" />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Square" />
        <meta property="og:description" content="Build your restaurant website for free and start taking orders today. Offer delivery and curbside pickup to you customers. Easily integrate with Square POS." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Square" />
        <meta name="twitter:creator" content="Square" />
        <meta name="twitter:domain" content="squareup.com" />
        <meta name="p:domain_verify" content="cb526aa3706990fc2d2969e5ac7ad060" />
        <meta name="msvalidate.01" content="35D69B458439DE93C5CAF25B15B09E6C" />
        <meta content="true" name="munchkin_enabled" />
        <meta content="{&quot;id&quot;:&quot;5fTQde5ksBUfpoFr3xQXMy&quot;}" name="sq:route" />
        <meta name="csrf-param" content="authenticity_token" />
        <meta name="csrf-token" content="j97KXvV20y6BQct1-uUl8Z1ULk778dlfJtCBwCe2FeM" />
        <link type="application/opensearchdescription+xml" href="https://supportcenter-production-f.squarecdn.com/help/opensearch.xml" rel="search" title="Search Square Support" />
        <meta content="[]" name="sq:nav_optimizely_experiments" />
            <link rel="stylesheet" href="../assets/css/style.css"></link>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument