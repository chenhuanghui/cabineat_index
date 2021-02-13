import Head from 'next/head'
import FooterNew from '../components/footer-new'
import Nav from '../components/nav-new'
import NavVer02 from '../components/ver02/nav'

export default function Index() {
    return (
        <div className="app">
            <Head>
                <meta charSet="utf-8" />
                <title>CabinEat - Trang chủ</title>
                <meta name="description" content="CabinEat - Trang chủ" />
                <meta name="keywords" content="cabineat,nha hang so, online restaurant, delivery" />
                <meta property="og:title" content="CabinEat"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:locale" content="vi_VN"></meta>
                <meta property="og:url" content="https://cabineat.vn"></meta>
                {/* <meta property="og:image" content={`${post.cover ? post.cover[0].url : ""}`}></meta> */}
                <meta property="og:description" content="Giải pháp delivery trực tiếp dành cho nhà hàng"></meta>

                <script async src="https://cdn.splitbee.io/sb.js"></script>
            </Head>
            <NavVer02 />
            <div className="container-cabin">
                
            </div>
            <FooterNew />
        </div>
    )
}