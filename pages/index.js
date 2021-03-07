import Head from 'next/head'
import FooterNew from '../components/footer-new'
import Delivery from '../components/ver02/home/delivery'
import Pos from '../components/ver02/home/pos'
import Hero from '../components/ver02/home/hero'
import HubOrder from '../components/ver02/home/hub-order'
import Setup from '../components/ver02/home/setup'
import NavVer02 from '../components/ver02/nav'

export default function Index() {
    return (
        <div className="app home-page">
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
            <div className="main-container grid grid-gap-24-16">
                <Hero />
                <Setup />
                <HubOrder />
                <Pos />
                <Delivery />
                

                {/* <div className="container-cabin margin-top">
                    <div className="grid border rounded">
                        <img src="https://ucarecdn.com/d822eaf0-1a91-4786-85f2-429902a55fd9/41842833_1374809102654983_861106054828654592_o.jpg" width="100%" className="rounded-top"/>
                        <div className="padding-24 text-justify">
                            <p> Urban Chocolatier is fast growing dessert shop franchise with 6 stores in the UK. With ambitious growth plans, they chose StoreKit to power their direct delivery and click & collect ordering channels.</p>
                        </div>
                    </div>
                </div> */}

            </div>
            <FooterNew />

            <style jsx>{`
            .home-page {
                background-image: linear-gradient(-169deg, rgb(248, 246, 243) 14%, rgb(255, 255, 255) 59%);
            }            

            .main-container {
                padding-top: 24px;
            }

            @media (min-width: 768px) {                

            }

            @media (min-width: 992px) {
                
            }
            `}</style>
        </div>
    )
}