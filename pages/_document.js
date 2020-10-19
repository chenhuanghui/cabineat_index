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
          <link rel="icon" href="../assets/img/favicon.ico"></link>
          {/* <link rel="stylesheet" href="../assets/css/style.css"></link> */}
          <link rel="stylesheet" href="../assets/css/custom.css"></link>
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div className="modal-backdrop fade"></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument