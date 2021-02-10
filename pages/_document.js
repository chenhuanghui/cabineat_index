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
          <link rel="stylesheet" href="../assets/css/theme.min.css"></link>
          <link rel="stylesheet" href="../assets/fonts/feather/feather.css"></link>
          {/* <link rel="icon" href="../assets/img/favicon.ico"></link> */}
          <link rel="icon" href="../assets/img/favicon-96x96.png"></link>
          <link rel="stylesheet" href="../assets/css/custom.css"></link>
          
          {/* <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link> */}

          {/* <script src="/static/fb.js" /> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-176827516-1"></script>
          <script src="/static/ga.js" />
          
          {/* <script src="/static/segment.js" /> */}
          {/* <script src="/static/pixel.js" /> */}
          
          
          {/* hubspot chat */}
          {/* <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/8878637.js"></script> */}
          
          {/* chat  */}
          <script src="/static/freshchat.js" />
          {/* <script src="/static/fb-chat.js" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <div className="modal-backdrop fade"></div> */}
          
          {/* <div id="fb-root"></div>
          <div className="fb-customerchat"
            attribution="setup_tool"
            page_id="104712234753529"
            logged_in_greeting="Xin chào, CabinEat có thể giúp gì cho Bạn ?"
            logged_out_greeting="Xin chào, CabinEat có thể giúp gì cho Bạn ?">            
          </div> */}

          
        </body>
      </Html>
    )
  }
}

export default MyDocument