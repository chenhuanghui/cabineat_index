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
                <meta name="description" content="Giải pháp giúp nhà hàng kinh doanh delivery trực tiếp đến khách hàng quen, không tốn phí hoa hồng" />
                <meta name="keywords" content="cabineat,nha hang so, online restaurant, delivery" />
                <meta property="og:title" content="CabinEat"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:locale" content="vi_VN"></meta>
                <meta property="og:url" content="https://cabineat.vn"></meta>
                {/* <meta property="og:image" content={`${post.cover ? post.cover[0].url : ""}`}></meta> */}
                <meta property="og:description" content="Giải pháp giúp nhà hàng kinh doanh delivery trực tiếp đến khách hàng quen, không tốn phí hoa hồng"></meta>

                <script async src="https://cdn.splitbee.io/sb.js"></script>
            </Head>
            
            <NavVer02 />
            <div className="container-cabin padding-y-24">
                <div className="hero">
                    <div className="hero-wrapper grid justify-content-center grid-gap-12-12">
                        <div className="message">
                            <p className="caption-extra font-weight-bold text-center" style={{lineHeight: "45px"}}>Selling online should be easy. </p>
                            <p className="caption-extra font-weight-bold text-center text-primary" style={{lineHeight: "45px"}}>So we've made it easy</p>
                        </div>
                        <div className="action_create grid justify-content-center">
                            <div className="justify-self-center" style={{width: "70%"}}>
                                <p className="text-center font-weight-lighter">The average time it takes to create your takeaway store is 13 minutes. No signup costs, no monthly fees.</p>
                            </div>                            
                        </div>
                        
                        <div className="action_create grid justify-content-center">
                            <div className="call-to-action grid grid-gap-8-8">
                                <a href="#" className="btn btn-primary d-block">Tạo tài khoản miễn phí</a>
                                <p className="small text-gray text-center">Không tốn phí hoa hồng.</p>
                            </div>                            
                        </div>    

                        <div className="hero-image cover-fit" style={{minHeight: "500px", backgroundImage:`url("${"https://ucarecdn.com/34e6691a-acb3-40ed-9d72-b36922835b86/-/format/auto/"}")`}}></div>
                        
                    </div>
                </div>
            </div>
            <FooterNew />
            <style jsx>{`
            .app {
                background-image: linear-gradient(
                    -169deg
                    , rgb(248, 246, 243) 14%, rgb(255, 255, 255) 59%);
            }
            `}</style>
        </div>
    )
}